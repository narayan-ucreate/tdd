const { User } = require('./../models/index');

const createUser = (info) => User.create(info);
const updateUser = (info, id) => User.update(info, { where: { id } });

module.exports = { createUser, updateUser };