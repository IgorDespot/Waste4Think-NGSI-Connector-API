const { entity }    = require('lib/orion-module-new');

exports = module.exports = function (req, res, next) {

  let service = req.headers['fiware-service'];
  let service_path = req.headers['fiware-servicepath'];
  let type = req.params.id;

   /**
   * Calling entityTypePromise function then we are passig service and servicePath and type
   * then if all went fine we should get JSON object consisting of entities array based on type
   * in case of error we will get error info
   */
  entity.entityTypePromise(service, service_path, type).then(function (entities) {
    res.json(entities)
  }).catch((error) => {
    res.json(error)
  });
}