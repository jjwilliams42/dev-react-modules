import React from 'react';

const Users = () => (
    <div>Users Module</div>
);

export default {
    routeProps: {
        path: '/users',
        component: Users,
    },
    name: 'Users',
};
