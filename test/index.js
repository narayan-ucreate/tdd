require('dotenv').config();
const assert = require('assert');
const sequelize_fixtures = require('sequelize-fixtures');
const models = require('./../models/index');
const { createUser, updateUser } = require('./../services/users');


describe('User Services', () => {
    before(async () => {
        await sequelize_fixtures.loadFile('fixtures/State.json', models)
    })
    let response;
    const updateInfo = {
        userName: 'Narayan',
        phone: '1234567895',
        email: 'narayan1@gmail.com',
        stateId: 1
    };
    it('Create User', async () => {
        response = await createUser(updateInfo);
        assert.ok(response);
    });
    it('Update User', async () => {
        const updateinfo = updateUser(updateInfo, response.id);
        assert.ok(updateinfo);
    });

});