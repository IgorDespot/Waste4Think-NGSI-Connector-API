exports = module.exports =function headerCheck(service, service_path) {
    return {
        "Fiware-Service": service,
        "Fiware-ServicePath": service_path
    }
}

