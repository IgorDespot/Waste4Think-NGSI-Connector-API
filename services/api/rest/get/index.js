const entities = require('./entityAll');
const entity   = require('./entityOne');
const types    = require('./typeAll');
const type     = require('./typeOne');
const entityType = require('./entityByType');

/**
 * Export to be used in other parts of program
 */
exports = module.exports = {
    entities,
    entity,
    types, 
    type,
    entityType
}