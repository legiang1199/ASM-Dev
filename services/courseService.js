const database = require('../database/models/index');
const { Course, CourseCategory } = database.db;

const create = async (data) => {
  const course = await Course.create(data);
  return course;
}

const findAllCourses = async () => {
  const categories = await Course.findAll({include: CourseCategory});
  return categories;
}

const findById = async (id) => {
  const trainee = await Trainee.findOne({
    where: {
      id
    }
  })

  return trainee;
}

const update = async (id, data) => {
  const updatedTrainee = await Trainee.update(data, {
    where: {
      id
    }
  });

  return updatedTrainee;
}

const deleteById = async (id) => {
  await Course.destroy({
    where: {
      id
    }
  });
}

module.exports = {
  create,
  findAllCourses,
  findById,
  update,
  deleteById
}