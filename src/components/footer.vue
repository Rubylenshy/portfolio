<template>
    <footer class="footer mt-5">
        <div class="max-screen-size">
            <div class="main-container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <div class="scroll-to-top d-flex d-md-none "><img src="../assets/svg/up-arrow.svg" alt="" @click="() => scrollToTop()"></div>
                
                <div class="text-center text-md-left">
                    &copy; 2023-2024
                </div>
                <ul class="footer-links d-flex gap-4 justify-content-center">
                    <li v-for="link in socialLinks" :key="link">
                        <a :href="link.href"><i class="fs-5" :class="[link.icon]"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                socialLinks: [
                    { name: 'Twitter', icon: 'fa-brands fa-x-twitter', href: 'https://twitter.com/tomoloj_' },
                    { name: 'Instagram', icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/reuben.ig_' },
                    { name: 'GitHub', icon: 'fa-brands fa-github', href: 'https://github.com/Rubylenshy' },
                    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/reuben-tomoloju/' },
                    { name: 'Email', icon: 'fa-solid fa-envelope', href: 'mailto:reztomoloju@gmail.com' }
                ],
            }
        },
        methods: {
            scrollToTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },
    }
</script>
