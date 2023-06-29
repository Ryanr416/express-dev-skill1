// controllers/skills.js
const Skill = require('../models/skill');


module.exports = {
    index,
    show, 
    new: newSkills,
    create
};


//create always redirects to either the show page or index page
function create(req, res) {

  
console.log(req.body, " < _ contents of our form");

// we need to get the information from the form
// then we need to tell the model, take the info from the form
// and add it to the database

Skill.create(req.body)

    res.redirect('/Skills') // tells the client to make a git request to /skills
}



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

