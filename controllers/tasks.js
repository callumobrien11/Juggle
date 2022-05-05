const User = require('../models/user')
const Task = require('../models/task')
const nodemailer = require('nodemailer')

module.exports = {
    create,
    new: newEntry,
    show,
    sendEmail
}


function create(req, res) {
    const task = new Task(req.body);
    task.createdBy = req.user
    console.log(req.user.name)
    console.log("hello from create function")
    task.save(function(err) {
    if (err) return res.redirect('/new');
    res.redirect('/users');
  });
}

function newEntry(req,res, next) {
  console.log(" hello from new entry function")
  res.render("tasks/new", {
    user: req.user
  })
}

function show(req, res) {
  console.log('hello from show function')
  Task.findById(req.params.id)
  .populate('createdBy').exec(function(err, task){
    res.render('tasks/show', {user: req.user, task})
  })
}


function sendEmail(req, res) {
  // console.log(req.params.id)
  console.log("hello from send email function")
  console.log("This is req.body: ", req.body)
  Task.findById(req.params.id)
  .populate('createdBy').exec(function(err, task){
    task.completedBy = req.user

    const transporter = nodemailer.createTransport({
      service: 'hotmail', 
      auth: {
          user: "juggle24327898@hotmail.com",
          pass: "Juggle123#4"
        }
    });
    const options = {
    from: "juggle24327898@hotmail.com",
    to: task.createdBy.email,
    subject: "Juggle task accepted!",
    text: `This email: ${req.user.email} Sent you this message: ${req.body.message}` 
  } 
  transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    } 
    console.log( "sent: " + info.response)
    })
  })
  res.redirect('/users')
}