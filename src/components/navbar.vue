<template>
    <header>
        <nav class="nav-bar">
            <div class="navbar-desktop d-flex justify-content-between align-items-center shadow-sm" :class="{'animate-navbar': hasScrolled}">
                <div class="header-image">
                    <img src="../assets/images/logo1.png" width="30" alt="Ree.dev">
                </div>
                <div class="nav-links">
                    <ul class="d-flex nav-links-lists fw-semibold gap-5">
                        <li v-for="link in navLinks" :key="link.value">
                            <a href="#" rel="noopener noreferrer">{{ link.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="navbar-mobile">
                
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            
        },
        data() {
            return {
                navLinks: [
                    {label: 'HOME', value: 'home'},
                    {label: 'ABOUT ME', value: 'about-me'},
                    {label: 'PROJECTS', value: 'projects'},
                    {label: 'CONTACT', value: 'contact'},
                    {label: 'ARTICLES', value: 'articles'},
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

