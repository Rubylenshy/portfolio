<template>
    <div class="about-navbar">
        <NavBar />
    </div>

    <section class="about-page">
        <div class="about-intro-hero d-flex align-items-center flex-column-reverse flex-md-row w-100">
            <div class="intro-hero-texts flex-fill py-5 px-3">
                <p class="m-0">
                    <strong><cite>Looking</cite></strong> <em>for</em> my next
                    <strong>opportunity</strong>
                    to make <em>a</em> <strong>change</strong>. <br>
                    <strong><cite>The</cite></strong> <strong>digital</strong> way.</p>
            </div>
            <img src="../assets/images/side-image.jpg" alt="Reuben Oluwafemi">
        </div>

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