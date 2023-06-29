var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');


// All actual paths start with "/skills"
// GET request to /skills
router.get('/', skillsCtrl.index);

// submit the request
router.post('/', skillsCtrl.create)


// Get request for creating
router.get('/new', skillsCtrl.new);

// GET request to /skills/:id

router.get('/:id', skillsCtrl.show);



module.exports = router;