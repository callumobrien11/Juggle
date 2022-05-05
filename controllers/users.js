const User = require('../models/user')
const Task = require('../models/task')

module.exports = {
    index
}

function index (req, res) {
    console.log("hello from index function")
    Task.find({})
    .populate('createdBy').exec(function(err, task){
      console.log(req.user)
      res.render('users', {user: req.user, task})
    })
};

  