<template>
    <NavBar />

    <section class="about-intro-hero h-100vh">
        <div class="intro-hero-texts">

        </div>
        <img src="../assets/images/side-image.jpg" alt="Reuben Oluwafemi">
    </section>

    <section class="about-me p-3 my-4 mx-auto">
        <div class="info-grid d-grid">
            <div class="grid-item">
                <h2>23</h2>
                <span>Years Old</span>
            </div>
            <div class="grid-item">
                <h2>23</h2>
                <span>Years Old</span>
            </div>
            <div class="grid-item">
                <h2>23</h2>
                <span>Years Old</span>
            </div>
            <div class="grid-item">
                <h2>23</h2>
                <span>Years Old</span>
            </div>
        </div>
    </section>

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