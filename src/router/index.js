import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../pages/home.vue';
import ProjectPage from '../pages/project-page.vue';
import AboutPage from '../pages/about.vue';
import ContactPage from '../pages/contact.vue';

const routes = [
	{ path: '/', name: 'Home', component: HomeView, meta: { title: 'Reuben Oluwafemi | Home' }},
    { path: '/about', name: 'About', component: AboutPage, meta: { title: 'Reuben Oluwafemi | About' }},
    { path: '/projects', name: 'Projects', component: ProjectPage, meta: { title: 'Reuben Oluwafemi | Projects' }},
    { path: '/contact', name: 'Contact', component: ContactPage, meta: { title: 'Reuben Oluwafemi | Contact' }},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
    // Access the meta title property and set it as the document title
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
});

export default router;
