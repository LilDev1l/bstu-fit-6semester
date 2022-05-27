const {AbilityBuilder, Ability} = require('@casl/ability');
const RepositoryService = require('../resources/repository/repository.service');

module.exports = async (user) => {
    const {can, cannot, build} = new AbilityBuilder(Ability);

    switch (user.role) {
        case 'GUEST':
            can('read', ['Ability', 'Commit', 'Repository']);
            break;
        case 'USER':
            can('read', ['Ability', 'Commit', 'Repository']);
            can('read', 'User', {id: user.id});

            can('create', 'Repository', {authorId: user.id});
            can('update', 'Repository', {authorId: user.id});

            const ownRepositories = await RepositoryService.getAllByAuthorId(user.id);
            const ids = ownRepositories.map(r => r.id);
            can('create', 'Commit', {repositoryId: {$in: ids}});
            can('update', 'Commit', {repositoryId: {$in: ids}});
            break;
        case 'ADMIN':
            can('read', 'all');
            can('update', ['Repository', 'Commit']);
            can('delete', ['Repository', 'Commit']);
            break;
    }

    return build();
}