const express = require('express');
const CurdController = require('../controller/curdcontroller');
const TeacherController = require('../controller/TeacherController');
const route = express.Router()

//curd route
route.post('/creatCurd',CurdController.creatCurd)
route.get('/curdDisplay',CurdController.DisplayCurd)
route.get('/curdView/:id',CurdController.ViewCurd)
route.post('/curdUpdate/:id',CurdController.UpdateCurd)
route.delete('/curdDelete/:id',CurdController.DeleteCurd)


//Teacher route
route.post('/creatTeacher',TeacherController.creatTeacher)




module.exports = route;