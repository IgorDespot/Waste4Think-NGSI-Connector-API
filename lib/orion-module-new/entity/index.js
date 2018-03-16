const config = require('../../../config.json');
const orionPath = config["orion-path"];
const request = require('request');
const payload = require('./payload');

/**
 * Connecto to OCB and return entity list
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function listEntitiesPromise(service, service_path) {
    return new Promise(function (resolve, reject) {
        request({
            method: 'GET',
            url: orionPath + 'entities/',
            headers: {
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            }
        }, function (error, response, body) {
            if (response.statusCode !== 200)
                reject("Error: " + response.body)
            else
                resolve(JSON.parse(response.body))
        });
    });
}

/**
 * Connecto to OCB and return single entity
 * @param {String} entity_id - Id of entity we expect for return
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function singleEntityPromise(service, service_path, entitiy_id) {
    return new Promise(function (resolve, reject) {
        request({
            method: 'GET',
            url: orionPath + 'entities/' + entitiy_id,
            headers: {
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            }
        }, function (error, response, body) {
            if (response.statusCode !== 200)
                reject("Error: " + response.body)
            else
                resolve(JSON.parse(response.body))
        });
    });
}

/**
 * Connecto to OCB and return entites list by type
 * @param {tpe} type - Type used to search for enities
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function entityTypePromise(service, service_path, type) {
    return new Promise(function (resolve, reject) {
        request({
            method: 'GET',
            url: orionPath + 'entities/?type=' + type,
            headers: {
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            }
        }, function (error, response, body) {
            if (response.statusCode !== 200)
                reject("Error: " + response.body)
            else
                resolve(JSON.parse(response.body))
        });
    });
}

/**
 * Connecto to OCB and create entities from file (csv, json ..)
 * @param {Object} entity - File consists of objects representing entities
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function entityCreatePromise(service, service_path, entity) {
    return new Promise(function (resolve, reject) {
        request({
            method: 'POST',
            url: orionPath + 'entities?options=keyValues',
            headers: {
                "Content-Type": 'application/json',
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            },
            body: JSON.stringify(entity)
        }, function (error, response, body) {
            if (response.statusCode !== 201)
                reject(payload.fail(response, entity));
            else
                resolve(payload.success(entity));
        });
    })
}

/**
 * Connecto to OCB and update entities from file (csv, json ..)
 * @param {Object} entity - File consists of objects representing entities
 * @param {String} service - Fiware-Service we get from headers
 * @param {String} service_path - Fiware-ServicePath we get from headers
 */
function entityUpdatePromise(service, service_path, entity) {
    return new Promise((resolve, reject) => {
        request({
            method: 'PATCH',
            url: orionPath + 'entities/' + entity.id + '/attrs?options=keyValues',
            headers: {
                "Content-Type": 'application/json',
                "Fiware-Service": service,
                "Fiware-ServicePath": service_path
            },
            body: JSON.stringify(Object.assign({},  entity, {
                id: undefined,
                type: undefined
            }))
        }, function (error, response, body) {
            if (response.statusCode !== 204)
                reject(payload.fail(response, entity));
            else
                resolve(payload.success(entity));
        });
    })
}

/** Exports for use in other part of program */
exports = module.exports = {
    listEntitiesPromise,
    singleEntityPromise,
    entityTypePromise,
    entityCreatePromise,
    entityUpdatePromise
}