// controllers/skills.js
const Skill = require('../models/skill');


module.exports = {
    index,
    show, 
    new: newSkills
};
function newSkills(req, res){
    res.render('Skills/new')
}


function show(req, res) {
    res.render('Skills/show', {
skill: Skill.getOne(req.params.id)
    }
    
    )
}
function index(req, res) {
    res.render('Skills/index', {
      skills: Skill.getAll()
    });
  }

