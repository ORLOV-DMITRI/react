const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @route GET api/employees/
 * @desc ПОлучение всех сотрудников
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: "Не удалось получить" + error });
  }
};

/**
 * @route GET api/employees/add
 * @desc Создание сотрудника
 * @access Private
 */

const add = async (req, res) => {
  try {
    const { firstName, lastName, age, address } = req.body;

    if (!firstName || !lastName || !age || !address) {
      return res.status(400).json({ messge: "Не все поля заполенены" });
    }

    const employee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        age,
        address,
        userId: req.user.id, // берем из мидлваре auth
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    return res.status(500).json({ message: "Ошибка" + error });
  }
};

/**
 * @route POST api/employees/remove/:id
 * @desc Удаление сотрудника по id
 * @access Private
 */

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res.status(204).json("OK");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

/**
 * @route PUT api/employees/edit/:id
 * @desc Редактирование сотрудника по id
 * @access Private
 */
const edit = async (req, res) => {
  const data = req.body;
  const id = data.id;

  try {
    const user = await prisma.employee.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    return res.status(204).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

/**
 * @route GET api/employees/:id
 * @desc Получение сотрудника по id
 * @access Private
 */

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
module.exports = {
  all,
  add,
  remove,
  edit,
  getById,
};
