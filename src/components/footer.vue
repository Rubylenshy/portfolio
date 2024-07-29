<template>
    <footer class="footer">
        <div class="main-container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        
            <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) -->
            <div class="text-center text-md-left">
                &copy; 2023-2024. Reuben Oluwafemi.
                <cite><br> Inspired by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a></cite>
            </div>
            <ul class="footer-links d-flex gap-4 justify-content-center">
                <li v-for="link in socialLinks" :key="link">
                    <a :href="link.href"><i class="fs-5" :class="[link.icon]"></i></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComp',
        props: {
            socialLinks: Object
        }
    }
</script>
