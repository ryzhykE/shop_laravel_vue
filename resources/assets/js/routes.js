const Home = resolve => require(['./components/Blog/index.vue'], resolve);

export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
]

  