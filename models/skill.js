const skills = [
    {id: 125223, skill: 'JavaScript', done: true},
    {id: 127904, skill: 'CSS', done: false},
    {id: 139608, skill: 'HTML', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create
  };
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
    return skill
    }


function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}


  function getAll() {
    return skills;
  }