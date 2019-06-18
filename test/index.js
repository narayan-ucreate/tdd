
const sequelize_fixtures = require('sequelize-fixtures');
const models = require('./../models/index');
process.env.NODE_ENV='test'
console.log('env')
console.log(process.env.NODE_ENV);

const { createUser, updateUser} = require('./../services/users');
const assert = require('assert');
describe('User Services', () => {
    before(() => {
        sequelize_fixtures.loadFile('fixtures/State.json', models)
    })
    const updateInfo = {
        userName: 'Narayan',
        phone: '1234567895',
        email : 'narayan1@gmail.com',
        stateId : 1
       };
    it('Create User', async () => {
       const response = await createUser(updateInfo);
       console.log('create user response');
       console.log(response);
       assert.ok(response);
    });
    it('Update User', async () => {
        const userInfo = await createUser(updateInfo);
          const updateinfo = updateUser(updateInfo, userInfo.id);
          assert.ok(updateinfo);
    });
});