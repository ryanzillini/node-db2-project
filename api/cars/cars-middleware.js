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
  const { vin, make, model, mileage } = req.body
  if(!vin || !make || !model || !mileage) {
    res.status(400).json({message: `${} is missing`})
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  
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
