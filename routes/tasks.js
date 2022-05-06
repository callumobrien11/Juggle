var express = require('express');
var router = express.Router();
const tasksCtrl = require('../controllers/tasks')

// POST /tasks 
router.get("/new", tasksCtrl.new)
router.post("/", tasksCtrl.create)
router.get("/:id", tasksCtrl.show)
router.post('/send/:id', tasksCtrl.sendEmail)
router.delete("/:id", tasksCtrl.delete)


router.get('/:id/edit', tasksCtrl.edit)
router.put('/:id', tasksCtrl.update)



module.exports = router;