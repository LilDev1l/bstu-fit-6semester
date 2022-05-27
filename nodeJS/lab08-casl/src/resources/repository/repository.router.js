const {Router} = require('express');
const { Validator } = require('express-json-validator-middleware');
const RepositoryController = require('./repository.controller');
const RepositoryOptions = require('./repository.options');
const commitsRoutes = require('../commit/commit.router');

const router = Router();
const {validate} = new Validator({ coerceTypes: true });

router.get('/', RepositoryController.getAll);
router.get('/:repositoryId', validate(RepositoryOptions.getOneRepositoryOpts.schema), RepositoryController.getOne);
router.post('/', validate(RepositoryOptions.postRepositoryOpts.schema), RepositoryController.add);
router.put('/:repositoryId', validate(RepositoryOptions.putRepositoryOpts.schema), RepositoryController.update);
router.delete('/:repositoryId', validate(RepositoryOptions.deleteRepositoryOpts.schema), RepositoryController.delete);

router.use('/', commitsRoutes)

module.exports = router;