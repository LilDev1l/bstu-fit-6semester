const getCommit = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        message: {type: 'string'},
        repositoryId: {type: 'integer'}
    },
    additionalProperties: false
};

const addOrUpdateCommit = {
    type: 'object',
    required: ['message'],
    properties: {
        message: {type: 'string'}
    },
    additionalProperties: false
};

const repositoryId = {
    type: 'object',
    required: ['repositoryId'],
    properties: {
        repositoryId: {type: 'integer'}
    },
    additionalProperties: false
}

const ids = {
    type: 'object',
    required: ['repositoryId', 'commitId'],
    properties: {
        repositoryId: {type: 'integer'},
        commitId: {type: 'integer'}
    },
    additionalProperties: false
}

const getAllCommitsOpts = {
    schema: {
        params: repositoryId,
        response: {
            200: {
                type: 'array',
                items: getCommit
            }
        }
    }
};

const getOneCommitOpts = {
    schema: {
        params: ids,
        response: {
            200: getCommit
        }
    }
};

const postCommitOpts = {
    schema: {
        params: repositoryId,
        body: addOrUpdateCommit,
        response: {
            201: getCommit
        }
    }
};

const putCommitOpts = {
    schema: {
        params: ids,
        body: addOrUpdateCommit,
        response: {
            200: getCommit
        }
    }
};

const deleteCommitOpts = {
    schema: {
        params: ids,
        response: {
            204: {}
        }
    }
};

module.exports = {
    getAllCommitsOpts,
    getOneCommitOpts,
    postCommitOpts,
    putCommitOpts,
    deleteCommitOpts
}
