<template>
    <nav class="nav-bar">
        <div class="navbar-desktop d-none d-md-flex justify-content-between align-items-center shadow-sm" :class="{'animate-navbar': hasScrolled}">
            <div class="header-image">
                <router-link to="/">
                    <img src="/images/logo1.png" width="50" alt="Ree.dev">
                </router-link>
            </div>
            <div class="nav-links">
                <ul class="d-flex align-items-center nav-links-lists fw-semibold gap-4 gap-xl-5">
                    <li v-for="link in navLinks" :key="link.value">
                        <router-link :to="link.value" active-class="active-nav-desktop-link">{{ (link.label).toUpperCase() }}</router-link>
                    </li>
                    <a class="fs-6 text-white a-btn" href="https://drive.google.com/file/d/1ZPy351Ss6irkWBbvqAfr9_aESvD50Uvh/view?usp=sharing" aria-label="View Resume" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-filetype-pdf"></i> View Resume 
                    </a>
                </ul>
            </div>
        </div>

        <div class="navbar-mobile d-flex d-md-none">
            <ul class="d-flex nav-links-lists align-items-center gap-2">
                <a class="fs-6" href="https://drive.google.com/file/d/1ZPy351Ss6irkWBbvqAfr9_aESvD50Uvh/view?usp=sharing" title="View Resume" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-filetype-pdf"></i>
                </a>
                <li v-for="link in navLinks" :key="link.value">
                    <router-link :to="link.value" active-class="active-nav-mobile-link" class="text-nowrap">{{ link.label }}</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <div class="nav-top-bar d-flex d-md-none justify-content-between px-3 py-4 bg-black z-3">
        <router-link to="/">
            <img src="/images/logo1.png" alt="Reuben Oluwafemi" style="width: 35px; height: 35px;"/>
        </router-link>
        <div class="d-flex align-items-center gap-3">
            <contra-button />
            <a href="https://github.com/Rubylenshy" target="_blank"><i class="fa-brands fa-github fs-5 text-light"></i></a>
        </div>
    </div>
</template>

<script>
    import ContraButton from "./hire-me-contra.vue";

    export default {
        name: 'NavBar',
        props: {
            
        },
        components: {
            ContraButton
        },
        data() {
            return {
                navLinks: [
                    {label: 'Home', value: '/'},
                    // {label: 'About', value: '/about'},
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

