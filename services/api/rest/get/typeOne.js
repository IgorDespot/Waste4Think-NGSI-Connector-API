const { type }    = require('lib/orion-module-new');

exports = module.exports = function (req, res, next) {

  let service = req.headers['fiware-service'];
  let service_path = req.headers['fiware-servicepath'];
  let type_id = req.params.id;

   /**
   * Calling listTypesPromise function then we are passig service and servicePath
   * then if all went fine we should get JSON object consisting single type
   * in case of error we will get error info
   */
  type.listSingleTypePromise(service, service_path, type_id).then(function (type) {
    res.json(type)
  }).catch((error) => {
    res.json(error)
  });
}