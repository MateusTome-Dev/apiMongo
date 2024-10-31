const { Router } = require("express");
const UserController= require("../controllers/UserController");

const router = Router();

router.get('/user',UserController.getAll);
router.get('/user/:id',UserController.getOne);
router.get('/user/:id',UserController.delete);
router.get('/user',UserController.create);
router.get('/user/:id',UserController.update);

module.exports=router;