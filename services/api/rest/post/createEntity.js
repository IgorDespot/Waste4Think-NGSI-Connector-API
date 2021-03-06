let uploadModule = require('lib/upload-module');
let upload = uploadModule(uploadModule.multer.memoryStorage());
const check = require('./serviceCheck');

var ngsiConverter = require('lib/ngsi-converter');
const {
    entity
} = require('lib/orion-module-new');

/**
 *  Function that handle file upload, check extentions and update entities from it
 */
exports = module.exports = function (req, res, next) {

    let service = req.headers['fiware-service'];
    let service_path = req.headers['fiware-servicepath'];

    if (service === undefined)
        res.json({
            "status": [{
                "Error": 'Failed to proivde service'
            }]
        })
    else if (service_path === undefined)
        res.json({
            "status": [{
                "Error": 'Failed to proivde service_path'
            }]
        })
    else
        upload(req, res, (err) => {
            if (err) {
                res.json(err)
            } else if (req.file == undefined) {
                res.json('U try to send empty file fail')
            } else {
                // Parse data then it send it to orion contex broker
                var data = req.file.buffer.toString();
                var extension = uploadModule.getFileExtension(req.file);
                ngsiConverter(data, extension)
                    .then(
                        (data) => {
                            var promises = [];
                            var responses = [];
                            data.forEach((curr, index) => {
                                promises[index] = Promise.resolve(curr)
                                    .then((obj) => {
                                        responses[index] = entityFailWrapper(entity
                                            .entityCreatePromise(service, service_path, obj));
                                        return responses[index];
                                    });
                            });
                            return Promise.all(promises);
                        }
                    )
                    .then((msg) => {
                        res.json(msg);
                    })
                    .catch((err) =>
                        res.json(err)
                    );
            }
        });
}

/**
 * Make Promise.all non fail-fast
 * @param {Promise} promise 
 */
function entityFailWrapper(promise) {
    return promise
        .catch((err) => {
            return Promise.resolve(err);
        });
}