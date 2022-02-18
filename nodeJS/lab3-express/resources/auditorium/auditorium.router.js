const {Router} = require('express');
const AuditoriumController = require('./auditorium.controller');

const router = Router();

router.get('/', AuditoriumController.getAll);
router.post('/', AuditoriumController.addOne);
router.delete('/:auditorium', AuditoriumController.deleteOne);
router.put('/', AuditoriumController.update);

module.exports = router;