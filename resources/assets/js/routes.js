const Home = resolve => require(['./components/Home.vue'], resolve);


export default [
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
]

  