var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');


// All actual paths start with "/skills"
// GET request to /skills
router.get('/', skillsCtrl.index);

// GET request to /skills/:id

router.get('/:id', skillsCtrl.show);

module.exports = router;