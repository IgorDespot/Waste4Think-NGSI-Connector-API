const { entity }    = require('lib/orion-module-new');

exports = module.exports = function (req, res, next) {

  /** Catch desired params from request */
  let service = req.headers['fiware-service'];
  let service_path = req.headers['fiware-servicepath'];
  let type_id = req.params.id;

  /**
   * Calling listEntitiesPromise function then we are passig service and servicePath
   * then if all went fine we should get JSON object consisting of entities array
   * in case of error we will get error info
   */
  entity.listEntitiesPromise(service, service_path).then(function (entities) {
    res.json(entities)
  }).catch((error) => {
    res.json(error)
  });
}