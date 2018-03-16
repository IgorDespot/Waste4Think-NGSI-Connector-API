const { entity }    = require('lib/orion-module-new');

exports = module.exports = function (req, res, next) {

  let service = req.headers['fiware-service'];
  let service_path = req.headers['fiware-servicepath'];
  let entity_id = req.params.id;

  /**
   * Calling singleEntityPromise function then we are passig service and servicePath and entity_id
   * then if all went fine we should get JSON object consisting of single entity based on its id
   * in case of error we will get error info
   */
  entity.singleEntityPromise(service, service_path, entity_id).then(function (entity) {
    res.json(entity)
  }).catch((error) => {
    res.json(error)
  });
}