<template>
    <footer class="footer mt-5">
        <div class="max-screen-size">
            <div class="main-container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <div class="scroll-to-top d-flex d-md-none "><img src="../assets/svg/up-arrow.svg" alt="" @click="() => scrollToTop()"></div>
                
                <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) -->
                <div class="text-center text-md-left">
                    &copy; 2023-2024
                    <!-- <cite><br> Inspired by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a></cite> -->
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
                    { name: 'Daily dev', icon: 'fa-brands fa-dev', href: 'https://dev.to/rubylenshy' },
                    { name: 'GitHub', icon: 'fa-brands fa-github', href: 'https://github.com/Rubylenshy' },
                    { name: 'Slack', icon: 'fa-brands fa-slack', href: 'https://slack.com' },
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
