const config = require('../../../config.json');
const orionPath = config["orion-path"];
const request = require('request');
const payload = require('./payload');

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

exports = module.exports = {
    listEntitiesPromise,
    singleEntityPromise,
    entityTypePromise,
    entityCreatePromise,
    entityUpdatePromise
}