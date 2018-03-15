function success(entity) {
    return {
        "status":[{
            "type": entity.type,
             "description":{
                 "id": entity.id
             },
             "actions":[{
                 "error": '',
                 "status": "SUCCESS",
                 "type": "CREATE"
             }]
        }]
     }
}

function fail(response, entity) {
    return {
        "status":[{
            "type": entity.type,
             "description":{
                 "id": entity.id
             },
             "actions":[{
                 "error": JSON.parse(response.body),
                 "status": "FAIL",
                 "type": "CREATE"
             }]
        }]
     }
}

exports = module.exports = {
    success,
    fail
}