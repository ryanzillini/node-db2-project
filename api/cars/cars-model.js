const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where({ id }).first();
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = (account) => {
  // DO YOUR MAGIC
  return db("cars")
    .insert(account)
    .then((id) => {
      console.log(account);
      return getById(id);
    });
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
