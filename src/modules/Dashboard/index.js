import React from 'react';

const Dashboard = () => (
    <div>Dashboard Module</div>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Dashboard,
    },
    name: 'Dashboard',
};

