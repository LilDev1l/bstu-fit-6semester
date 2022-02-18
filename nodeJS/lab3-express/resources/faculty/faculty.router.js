const {Router} = require('express');
const FacultyController = require('./faculty.controller');

const router = Router();

router.get('/', FacultyController.getAll);
router.post('/', FacultyController.addOne);
router.delete('/:faculty', FacultyController.deleteOne);
router.put('/', FacultyController.update);

module.exports = router;