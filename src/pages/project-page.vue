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
        }
    },
    methods: {
    }
}
</script>

<template>
    <nav-bar />

    <div class="project-page">

    </div>

    <footer-comp />
</template>