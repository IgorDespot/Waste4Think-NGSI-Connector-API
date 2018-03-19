exports = module.exports = function check (service, service_path) {
    if (service === undefined)
        return res.json({
            "status":[{
                "Error": 'Failed to proivde service'
            }]
         })
    else if (service_path === undefined)
        return res.json({
            "status":[{
                "Error": 'Failed to proivde service_path'
            }]
        })
}