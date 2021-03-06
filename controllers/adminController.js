const AccountService = require('../services/accountService');

const index = async function(req, res, next) {
    const trainerAccounts = await AccountService.findAllAccountByRole('trainer');
    const staffAccounts = await AccountService.findAllAccountByRole('trainingStaff');

    res.render('templates/master', { 
      title: 'Admin page', 
      content: '../admin_view/index',
      trainerAccounts,
      staffAccounts,
    });
}

module.exports = {
    index
}