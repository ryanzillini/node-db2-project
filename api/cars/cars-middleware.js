const Car = require("./cars-model");

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const carId = req.params.id;
  if (!carId.trim()) {
    res.status(404).json({ message: `car with id ${carId} i is not found` });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    res.status(400).json({ message: `vin number is missing` });
  } else if (!make) {
    res.status(400).json({ message: `make is missing` });
  } else if (!model) {
    res.status(400).json({ message: `model is missing` });
  } else if (!mileage) {
    res.status(400).json({ message: `mileage is missing` });
  } else next();
};

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  const vinNum = req.body;
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
