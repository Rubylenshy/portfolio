import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../pages/home.vue';
import ProjectPage from '../pages/project-page.vue';
import AboutPage from '../pages/about.vue';
import ContactPage from '../pages/contact.vue';

const routes = [
	{ path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/projects', name: 'Projects', component: ProjectPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
