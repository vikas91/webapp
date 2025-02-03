import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/main'));
const Projects = lazy(() => import('../pages/projects/main'));
const Blogs = lazy(() => import('../pages/blogs/main'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes = [
    {
        label: 'Projects',
        path: '/projects',
        routeIndex: 'route-2',
        className: 'fa fa-fw fa-envelope-o',
        component: Projects
    },
    {
        label: 'Blogs',
        path: '/blogs',
        routeIndex: 'route-3',
        className: 'fa fa-fw fa-file-text',
        component: Blogs
    },
    {
        label: 'Sketches',
        path: '/sketches',
        routeIndex: 'route-4',
        className: 'fa fa-fw fa-paint-brush',
        component: NotFound
    },
    {
        label: 'Photography',
        path: '/photography',
        routeIndex: 'route-5',
        className: 'fa fa-camera',
        component: NotFound
    },
    {
        label: 'Contact',
        routeIndex: 'route-6',
        path: '/contact',
        className: 'fa fa-fw fa-phone',
        component: NotFound
    },
];
  
export default Routes;