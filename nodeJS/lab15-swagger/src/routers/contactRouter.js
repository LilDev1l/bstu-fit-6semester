const {Router} = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

router.get('/', contactController.getAll);
router.post('/', contactController.add)
router.put('/:idContact', contactController.update)
router.delete('/:idContact', contactController.deleteOne);

module.exports = router;
