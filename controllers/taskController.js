const Task = require('../models/taskModel');

function postTask(req, res) {
  const task = new Task(req.body);

  task.save((err, newTask) => {
    if (err) return res.status(400).send({ message: 'Error al guardar la Task', error: err });
    return res.status(200).send(newTask);
  });
}

function deleteTask(req, res) {
  Task.findByIdAndDelete(req.params.taskId, (err) => {
    if (err) { return res.status(500).send({ msg: 'Error deleting' }); }
    return res.status(200).send({ message: 'Task erased' });
  });
}
function getEveryTask(req, res) {
  Task.find({}, (err, tasks) => {
    if (err) { return res.status(500).send({ msg: 'Error getting the tasks' }); }
    return res.status(200).send(tasks);
  });
}

module.exports = {
  deleteTask,
  getEveryTask,
  postTask,
};
