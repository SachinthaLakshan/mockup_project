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

//delete employees
router.delete('/emp/:id', async (req, res) => {
  const employee = await employeeSchema.findById(req.params.id);
  if (employee) {
    const deleteEmployee = await employee.remove();
    res.send({ message: 'Employee Deleted', product: deleteEmployee });
  } else {
    res.status(404).send({ message: 'Employee Not Found' });
  }
});

//Update employees
router.put('/emp/update/:id', async (req, res) => {
  try {
    const { department, name, position, salary } = req.body;

    if (!name || !department || !position || !salary) {
      return res.status(400).json({ msg: 'Please fill all feilds' });
    }
    const Employee = await employeeSchema.findById(req.params.id);
    if (Employee) {
      Employee.name = req.body.name || Employee.name;
      Employee.department = req.body.department || Employee.department;
      Employee.salary = req.body.salary || Employee.salary;
      Employee.position = req.body.position || Employee.position;
      const updatedEmployee = await Employee.save();
      res.send({ message: 'User Updated', user: updatedEmployee });
    } else {
      es.status(400).send({ message: 'Employee Not Found' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
