const router = require('express').Router();
const employeeSchema = require('../models/employeeModel');

router.post('/emp/register', async (req, res) => {
  try {
    const { department, name, position, salary } = req.body;

    if (!name || !department || !position || !salary) {
      return res.status(400).json({ msg: 'Please fill all feilds' });
    }
    const newEmployee = await new employeeSchema({
      department,
      name,
      position,
      salary,
    });
    newEmployee.save();
    res.json(newEmployee);
    res.json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
  }
});

//get employees
router.get('/emp/get', async (req, res) => {
  const employees = await employeeSchema.find().populate('_id');
  res.send(employees);
});

module.exports = router;
