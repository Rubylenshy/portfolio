<template>
    <NavBar></NavBar>

    <div class="contact-form"></div>

    <FooterComp />
</template>

<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";

    export default {
        name: 'ContactPage',
        components: {
            NavBar,
            FooterComp
        },
    }
</script>