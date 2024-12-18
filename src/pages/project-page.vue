<script>
import NavBar from "../components/navbar.vue";
import FooterComp from "../components/footer.vue";

export default {
    name: 'ProjectPage',
    components: {
        NavBar,
        FooterComp
    },
    props: {
        project: Object
    },
    data() {
        return {
            collabLogos: [
                    {
                        title: 'Design Lab Inc.',
                        image: '/images/collab-logo-sample.png'
                    },
                    {
                        title: 'Design Lab Inc.',
                        image: '/images/collab-logo-sample.png'
                    },
                    {
                        title: 'Design Lab Inc.',
                        image: '/images/collab-logo-sample.png'
                    },
                    {
                        title: 'Design Lab Inc.',
                        image: '/images/collab-logo-sample.png'
                    }
                ],
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="project-navbar position-relative">
        <nav-bar />
    </div>

    <div class="project-page">
        <div class="projects-box">
            <h1 class="home-header text-dark fw-bold mb-0">Projects</h1>
            <p class="projects-sub-title">
                Here are a few past projects I've worked on.
            </p>
        </div>

        <div class="collaborations p-4 mx-auto">
            <h3 class="text-center fw-bolder">I'm proud to have collaborated with some awesome companies</h3>
            <div class="collab-logo-container d-flex flex-wrap justify-content-center">
                <img v-for="logo in collabLogos" :key="logo.title" :src="logo.image" :alt="logo.title" :title="logo.title">
            </div>
        </div>
    </div>

    <footer-comp />
</template>