const getUser = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        username: { type: 'string' },
        email: { type: 'string' },
        role: { type: 'string'}
    },
    additionalProperties: false
};

const addUser = {
    type: 'object',
    required: ['username', 'password', 'email', 'role'],
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        role: { type: 'string'}
    },
    additionalProperties: false
};

const loginUser = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    },
    additionalProperties: false
};

const userId = {
    type: 'object',
    required: ['userId'],
    properties: {
        userId: { type: 'integer' }
    },
    additionalProperties: false
}

const getAllUsersOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: getUser
            }
        }
    }
};

const getOneUserOpts = {
    schema: {
        params: userId,
        response: {
            200: getUser
        }
    }
};

const postUserOpts = {
    schema: {
        body: addUser,
        response: {
            201: getUser
        }
    }
};

const loginUserOpts = {
    schema: {
        body: loginUser
    }
}

module.exports = {
    getAllUsersOpts,
    getOneUserOpts,
    postUserOpts,
    loginUserOpts
}
