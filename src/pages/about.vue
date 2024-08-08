<template>
    <NavBar />

    <div class="about-section"></div>

    <FooterComp />
</template>

<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";

    export default {
        name: 'AboutPage',
        components: {
            NavBar,
            FooterComp
        },
    }
</script>