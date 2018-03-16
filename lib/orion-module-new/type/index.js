const config = require('../../../config.json');
const orionPath = config["orion-path"];
const request = require('request');

/**
 * Return list of types
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function listTypesPromise(service, service_path) {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: orionPath + 'types/',
            headers: {
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            }
        }, (error, response, body) => {
            if (response.statusCode !== 200)
                reject("Error: " + response.body);
            else
                resolve(JSON.parse(response.body));
        });
    });
}

/**
 * Return single type
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function listSingleTypePromise(service, service_path, type_id) {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: orionPath + 'types/' + type_id,
            headers: {
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            }
        }, (error, response, body) => {
            if (response.statusCode !== 200)
                reject("Error: " + response.body);
            else
                resolve(JSON.parse(response.body));
        });
    });
}

/** Exports to be used in other parts of system */
exports = module.exports = {
    listTypesPromise,
    listSingleTypePromise
}