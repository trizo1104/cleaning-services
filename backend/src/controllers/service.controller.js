const Service = require("../models/service");

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Can not get services" });
  }
};

const createService = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const service = await Service.create({
      name,
      description,
      price,
      duration,
    });
    res.status(201).json(service);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Create services fails", error: error.message });
  }
};

module.exports = { getAllServices, createService };
