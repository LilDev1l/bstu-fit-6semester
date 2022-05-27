const getRepository = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
        authorId: {type: 'integer'}
    },
    additionalProperties: false
};

const updateRepository = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {type: 'string'}
    },
    additionalProperties: false
};

const addRepository = {
    type: 'object',
    required: ['name', 'authorId'],
    properties: {
        name: {type: 'string'},
        authorId: {type: 'integer'}
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

const getAllRepositoriesOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: getRepository
            }
        }
    }
};

const getOneRepositoryOpts = {
    schema: {
        params: repositoryId,
        response: {
            200: getRepository
        }
    }
};

const postRepositoryOpts = {
    schema: {
        body: addRepository,
        response: {
            201: getRepository
        }
    }
};

const putRepositoryOpts = {
    schema: {
        params: repositoryId,
        body: updateRepository,
        response: {
            200: getRepository
        }
    }
};

const deleteRepositoryOpts = {
    schema: {
        params: repositoryId,
        response: {
            204: {}
        }
    }
};

module.exports = {
    getAllRepositoriesOpts,
    getOneRepositoryOpts,
    postRepositoryOpts,
    putRepositoryOpts,
    deleteRepositoryOpts
}
