const config = require('config');
const orionPath = config["orion-path"];
const request = require("request");
const frisby = require('frisby');
const { entity } = require('lib/orion-module-new');
const header = require('../../lib/orion-module-new/entity/headerCheck');

var payload = require('../../lib/orion-module-new/entity/payload');

entityock = {
  "id": "mockme",
  "type": "typeme"
}

mock_service = "mock",
mock_servicePath = "mock"

base_url = "http://localhost:3000/v1/entities";
mock_type = "http://localhost:3000/v1/entities/type/DepositPointType"
mock_id = "/DepositPointType:4";

describe('Orion module tests', () => {

  it('config should be defined or error will throw', () => {
    expect(config).toBeDefined();
  });

  it('path should be defined or error will throw', () => {
    expect(orionPath).toBeDefined();
  });

  it('should be function', () => {
    expect(entity.listEntitiesPromise).toEqual(jasmine.any(Function));
  });

  it(`
  should make call to orion contex broker using api
  and return array of objects representing entities
  `, () => {
    entity.listEntitiesPromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be function', () => {
    expect(entity.singleEntityPromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return single object representing entity
  `, () => {
    entity.singleEntityPromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be function', () => {
    expect(entity.singleEntityPromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return json object representing single entity
  `, () => {
    entity.singleEntityPromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be function', () => {
    expect(entity.entityTypePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return arra of objects showing all entities by type
  `, () => {
    entity.entityTypePromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be function', () => {
    expect(entity.entityUpdatePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return payload showing status and informations
    about update
  `, () => {
    entity.entityUpdatePromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be function', () => {
    expect(entity.entityTypePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return payload showing status and informations
    about update
  `, () => {
    entity.entityUpdatePromise()
      .then((data) => {
        expect(data).toEqual(jasmine.any(Object));
        done();
      })
      .catch(() => {
        done.fail('Should not come here');
      });
  });

  it('should be object', () => {
    expect(payload).toEqual(jasmine.any(Object));
  });

  it('should be a function', () => {
    expect(payload.success).toEqual(jasmine.any(Function));
  });

  it('should be a function', () => {
    expect(payload.fail).toEqual(jasmine.any(Function));
  });

  it('success should return JSON object', () => {
    expect(payload.success(entityock)).toEqual(jasmine.any(Object))
  });

  it('should return a status of 200', function (done) {
    frisby
      .get(base_url)
      .expect('status', 200)
      .done(done);
  });

  it('should return a status of 200', function (done) {
    frisby
      .get(base_url + mock_id)
      .expect('status', 200)
      .done(done);
  });


  it('should return a status of 200', function (done) {
    frisby
      .get(mock_type)
      .expect('status', 200)
      .done(done);
  });

  it("returns object", function (done) {
    request.get(base_url, function (error, response, body) {
      expect(JSON.parse(body)).toEqual(jasmine.any(Object))
      done();
    });
  });

  it("returns single entity object", function (done) {
    request.get(base_url + mock_id, function (error, response, body) {
      expect(JSON.parse(body)).toEqual(jasmine.any(Object))
      done();
    });
  });

  it("returns single entity object", function (done) {
    request.get(mock_type, function (error, response, body) {
      expect(JSON.parse(body)).toEqual(jasmine.any(Object))
      done();
    });
  });

  it("should return object", () => {
    expect(header(mock_service, mock_servicePath)).toEqual(jasmine.any(Object));
  });

});