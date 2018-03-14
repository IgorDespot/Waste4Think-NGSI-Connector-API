const config = require('config');

const orionPath = config["orion-path"];

const { entity }    = require('lib/orion-module-new');

console.log(typeof entity)

describe('toBeDefined checks', () => {

  it('config should be defined or error will throw', () => {
    expect(config).toBeDefined();
  });

  it('path should be defined or error will throw', () => {
    expect(orionPath).toBeDefined();
  });

});

describe('Get all entities function checks', () => {

  it('should be function',  () => {
      expect(entity.listEntitiesPromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return array of objects representing entities
  `, () => {
    entity.listEntitiesPromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});

describe('Get single entities function checks', () => {

  it('should be function',  () => {
      expect(entity.singleEntityPromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return array of objects representing entities
  `, () => {
    entity.singleEntityPromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});

describe('Get single entities function checks', () => {

  it('should be function',  () => {
      expect(entity.singleEntityPromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return json object representing single entity
  `, () => {
    entity.singleEntityPromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});

describe('Get entiies by type function checks', () => {

  it('should be function',  () => {
      expect(entity.entityTypePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return arra of objects showing all entities by type
  `, () => {
    entity.entityTypePromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});

describe('Update entiies function checks', () => {

  it('should be function',  () => {
      expect(entity.entityUpdatePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return payload showing status and informations
    about update
  `, () => {
    entity.entityUpdatePromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});

describe('Create entiies function checks', () => {

  it('should be function',  () => {
      expect(entity.entityTypePromise).toEqual(jasmine.any(Function));
  });

  it(`
    should make call to orion contex broker using api
    and return payload showing status and informations
    about update
  `, () => {
    entity.entityUpdatePromise()
    .then( (data) => {
      expect(data).toEqual(jasmine.any(Object));
      done();
    })
    .catch( () => {
      done.fail('Should not come here');
    });
  });  
  
});