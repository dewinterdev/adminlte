import AllCategory from './components/AllCategory';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCategory
    },
    {
        name: 'create',
        path: '/create',
        component: CreateCategory
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditCategory
    }
];
