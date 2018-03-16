const { type } = require('lib/orion-module-new');

exports = module.exports = function (req, res, next) {

  let service = req.headers['fiware-service'];
  let service_path = req.headers['fiware-servicepath'];
  
  
   /**
   * Calling listTypesPromise function then we are passig service and servicePath
   * then if all went fine we should get JSON object consisting of types array
   * in case of error we will get error info
   */
  type.listTypesPromise(service, service_path).then(function (types) {
    res.json(types);
  }).catch((error) => {
    res.json(error);
  });
}