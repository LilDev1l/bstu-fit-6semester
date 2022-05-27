const {Router} = require('express');
const PulpitController = require('./pulpit.controller');

const router = Router();

router.get('/', PulpitController.getAll);
router.post('/', PulpitController.addOne);
router.delete('/:pulpit', PulpitController.deleteOne);
router.put('/', PulpitController.update);

module.exports = router;