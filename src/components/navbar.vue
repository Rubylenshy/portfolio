<template>
    <nav class="nav-bar">
        <div class="navbar-desktop d-none d-md-flex justify-content-between align-items-center shadow-sm" :class="{'animate-navbar': hasScrolled}">
            <div class="header-image">
                <img src="../assets/images/logo1.png" width="30" alt="Ree.dev">
            </div>
            <div class="nav-links">
                <ul class="d-flex nav-links-lists fw-semibold gap-4 gap-xl-5">
                    <li v-for="link in navLinks" :key="link.value">
                        <router-link :to="link.value">{{ (link.label).toUpperCase() }}</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="navbar-mobile d-flex d-md-none">
            <ul class="d-flex nav-links-lists gap-3">
                <i class="bi bi-filetype-pdf"></i>
                <li v-for="link in navLinks" :key="link.value">
                    <router-link :to="link.value" class="text-nowrap">{{ link.label }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            
        },
        data() {
            return {
                navLinks: [
                    {label: 'Home', value: '/'},
                    {label: 'About', value: '/about'},
                    {label: 'Projects', value: '/projects'},
                    {label: 'Contact', value: '/contact'},
                    // {label: 'Articles', value: 'articles'}
                ],
                hasScrolled: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.hasScrolled = window.scrollY > 80;
            }
        }
    }
</script>

