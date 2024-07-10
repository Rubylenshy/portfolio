<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";

    export default {
        name: 'HomeView',
        components: {
            NavBar,
            FooterComp
        },
        props: {
            
        }
    }
</script>

<template>
    <div class="">
        <nav-bar />

        <div class="home-page page-content">
            <section class="home-hero">
            </section>
        </div>

        <footer-comp />
    </div>
</template>
