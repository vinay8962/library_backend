const { User, Role, libraryUser, library, libraryPlan } = require("../dto");

const bcrypt = require("bcrypt");

const addUser = async ({
  name,
  email,
  password,
  mobile,
  roleId,
  address,
  libraryId,
  libraryPlanId,
}) => {
  const sequelize = User.sequelize;
  const saltRounds = 10;

  const transaction = await sequelize.transaction();
  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const newUserObject = {
      name,
      email,
      password: encryptedPassword,
      mobile,
      address,
      roleId,
    };

    const newUser = await User.create(newUserObject, { transaction });

    if (roleId === 103) {
      if (!libraryId || !libraryPlanId) {
        throw new Error("Library ID and Library Plan ID are required.");
      }

      await libraryUser.create(
        {
          user_id: newUser.id,
          library_id: libraryId,
          library_plan_id: libraryPlanId,
          start_date: new Date(),
          end_date: new Date(
            Date.now() // Convert days to milliseconds
          ),
        },
        { transaction }
      );
    }

    await transaction.commit();

    return newUser;
  } catch (err) {
    await transaction.rollback();
    throw new Error(`Failed to add User: ${err.message}`);
  }
};

const getAllUsers = async () => {
  try {
    return await User.findAll({
      include: [
        {
          model: Role,
          as: "role", // Alias defined in User model
        },
        {
          model: libraryUser,
          as: "libraryUsers", // Alias defined in User model
          include: [
            {
              model: library,
              as: "library", // Alias defined in LibraryUser model
            },
            {
              model: libraryPlan,
              as: "libraryPlan", // Alias defined in LibraryUser model
            },
          ],
        },
      ],
      logging: console.log, // Logs SQL queries for debugging
    });
  } catch (err) {
    throw new Error(err.message || "Error fetching users");
  }
};

const getUser = async (id) => {
  try {
    return await User.findByPk(id, {
      include: [
        {
          model: Role,
          as: "role", // Alias defined in User model
        },
        {
          model: libraryUser,
          as: "libraryUsers", // Alias defined in User model
          include: [
            {
              model: library,
              as: "library", // Alias defined in LibraryUser model
            },
            {
              model: libraryPlan,
              as: "libraryPlan", // Alias defined in LibraryUser model
            },
          ],
        },
      ],
    });
  } catch (err) {
    throw new Error(err.message || "Error fetching User");
  }
};

const updateUser = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err);
  }
};

const findUser = async (data) => {
  try {
    return await User.findOne(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  findUser,
};
