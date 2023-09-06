// STRETCH
const cars = [
  {
    vin: "1111111111",
    make: "ford",
    model: "F150",
    mileage: 122000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "2222222222",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "33333333333",
    make: "acura",
    model: "TLX",
    mileage: 20000,
    title: "salvage",
    transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
