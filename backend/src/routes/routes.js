const express = require("express");
const Router = express.Router();

const createNewData = require('../controllers/testes-create')
const updateNewData = require('../controllers/testes-update')
const readAll = require('../controllers/testes-readAll')
const readOneData = require('../controllers/testes-read-one');
const deleteData = require("../controllers/testes-delete");

Router.post('/createNewPost', createNewData)
Router.put('/updatePost', updateNewData)
Router.get('/readAll', readAll)
Router.get('/readOneAll', readOneData)
Router.delete('/deleteData', deleteData)

module.exports = Router;