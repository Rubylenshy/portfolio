<template>
    <header>
        <nav class="nav-bar">
            <div class="navbar-desktop d-flex justify-content-between align-items-center bg-white p-3 shadow-sm">
                <div class="header d-flex">
                    <div class="header-image">
                        <img src="" alt="Ree.dev">
                    </div>
                    <span class="header-name">Reuben Oluwafemi</span>
                </div>
                <div class="nav-links">
                    <ul class="d-flex nav-links-lists gap-3">
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
                    {label: 'Home', value: 'home'},
                    {label: 'About', value: 'about-me'},
                    {label: 'Projects', value: 'projects'},
                    {label: 'Contact', value: 'contact'},
                    {label: 'Blogs', value: 'blog'},
                ]
            }
        },
    }
</script>

