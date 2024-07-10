<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";
    import SectionHeader from "../components/section-header.vue";

    export default {
        name: 'HomeView',
        components: {
            NavBar,
            FooterComp,
            SectionHeader
        },
        props: {
            
        },
        data() {
            return {
                socialLinks: [
                    { src: require('../assets/svg/twitter.svg'), alt: 'Twitter' },
                    { src: require('../assets/svg/frontendmentor.svg'), alt: 'Frontend Mentor' },
                    { src: require('../assets/svg/github-white.svg'), alt: 'GitHub' },
                    { src: require('../assets/svg/slack.svg'), alt: 'Slack' },
                    { src: require('../assets/svg/linkedin.svg'), alt: 'LinkedIn' }
                ]
            }
        },
    }
</script>

<template>
    <div class="">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero mh-100vh">
                <div class="home-hero-content position-relative mh-100vh">
                    <div class="home-hero-header text-center fw-black">REUBEN <br> OLUWAFEMI</div>


                    <div class="hero-bottom-links">
                        <ul class="d-flex gap-5">
                            <li v-for="link in socialLinks" :key="link">
                                <img :src="link.src" :alt="link.alt">
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section-header title="articles" sub-title="quick tips & tricks" />
        </div>

        <footer-comp />
    </div>
</template>
