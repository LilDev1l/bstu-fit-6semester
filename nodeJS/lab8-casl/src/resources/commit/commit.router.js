const {Router} = require('express');
const { Validator } = require('express-json-validator-middleware');
const CommitController = require('./commit.controller');
const CommitOptions = require('./commit.options');

const router = Router();
const {validate} = new Validator({ coerceTypes: true });

router.get('/:repositoryId/commits', validate(CommitOptions.getAllCommitsOpts.schema), CommitController.getAll);
router.get('/:repositoryId/commits/:commitId', validate(CommitOptions.getOneCommitOpts.schema), CommitController.getOne);
router.post('/:repositoryId/commits', validate(CommitOptions.postCommitOpts.schema), CommitController.add);
router.put('/:repositoryId/commits/:commitId', validate(CommitOptions.putCommitOpts.schema), CommitController.update);
router.delete('/:repositoryId/commits/:commitId', validate(CommitOptions.deleteCommitOpts.schema), CommitController.delete);

module.exports = router;