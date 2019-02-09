var express = require('express');
var router = express.Router();
const db = require ('../db/users')

router.get ('/',db.getAllUsers);
router.get ('/:id',db.getSingleUser)
router.post('/',db.postUser)
router.patch('/:id',db.patchUser)

module.exports = router;
