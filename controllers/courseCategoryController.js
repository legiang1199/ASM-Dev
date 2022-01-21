const database = require('../database/models/index');
const sequelize = database.db.sequelize;
const CourseCategoryService = require('../services/courseCategoryService');

const renderCreateView = async (req, res) => {
  res.render('templates/master', { 
    title: 'Create course category page',
    content: '../courseCategory_view/create',
  });
}

const create = async (req, res) => {
  try {
    const { name, description } = req.body;
      
    // Create course category
    const data = {
      name,
      description
    }
    const courseCategory = await CourseCategoryService.create(data);
        
    // If Everything work fine
    res.redirect('/staff');
   
  } catch (error) {
    res.redirect('/staff/createCourseCategory');
  }
}

const destroy = async(req, res) => {
  const {id, userId} = req.params;

  const deletedStaff = await TrainingStaffService.deleteById(userId);

  const deletedStaffAccount = await AccountService.deleteById(id);

  res.redirect('/admin'); 
}

module.exports = {
  renderCreateView,
  create,
}