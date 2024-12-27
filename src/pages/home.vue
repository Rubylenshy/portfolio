<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";
    import projectsData from "../assets/data/projects.json";

    export default {
        name: 'HomeView',
        components: {
            NavBar,
            FooterComp
        },
        props: {
            
        },
        data() {
            return {
                loaded: false,
                headerName: '',
                projects: projectsData,
                skillsets: [
                    { name: 'ReactJS', icon: 'fa-react' },
                    { name: 'VueJS', icon: 'fa-vuejs' },
                    { name: 'NodeJS', icon: 'fa-node-js' },
                    { name: 'JavaScript', icon: 'fa-js' },
                    { name: 'Git', icon: 'fa-git-alt' },
                    { name: 'Sass', icon: 'fa-sass' },
                    { name: 'Bootstrap', icon: 'fa-bootstrap' },
                    { name: 'PHP', icon: 'fa-php' }
                ]
            }
        },
        computed: {
        },
        methods: {
            isInViewport(el) {
                const { top, left, bottom, right } = el.getBoundingClientRect();
                const { innerHeight, innerWidth } = window;

                return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
            },
        },
        mounted() {
            this.headerName = `REUBEN <br> OLUWAFEMI`;

            this.loaded = false;

            const maskedSection = this.$refs.maskedSection;
            maskedSection.classList.add('reveal');
            // Add class to start the unveiling effect
            setTimeout(() => {
                this.loaded = true;
            }, 5000);
        },
    }
</script>

<template>
    <div v-if="loaded" ref="homePage" class="position-relative">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero h-100vh">
                <div ref="heroContent" class="home-hero-content position-relative">
                    <div class="max-screen-size">
                        <div id="hero-header" class="home-hero-header home-header text-center fw-black" v-html="headerName"></div>
    
                        <div class="home-headshot p-3">
                            <img class="d-flex d-md-none mx-auto" src="/images/headshot.jpg" alt="Reuben Oluwafemi" />
                            <div class="d-none d-md-flex flex-column flex-md-row justify-content-between p-4">
                                <p>I'm a frontend developer, and JavaScript engineer.</p>
                                <p>Contributing to communities by developing problem-solving products</p>
                            </div>
                            <div class="d-block d-md-none pt-3">
                                <p class="small-screen-header text-center">I'm a React developer, and Frontend engineer.</p>
                                <ul class="skillsets d-flex gap-3 mb-3 text-muted overflow-scroll">
                                    <li v-for="skill in skillsets" :key="skill.name" class="d-flex align-items-center gap-2">
                                        <i class="fa-brands fs-5" :class="[skill.icon]"></i>
                                        <span>{{ skill.name }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="home-projects py-5">
            <div class="max-screen-size">
                <div class="text-center py-4">
                    <h2 class="home-header text-dark">projects.</h2>
                </div>
                <div class="projects-container p-3 p-md-5">
                    <div
                        v-for="project in projects"
                        :key="project.title"
                        class="project-item position-relative"
                        :style="{ backgroundImage: 'url(' + project.images[0] + ')' }"
                    >
                        <div class="overlay d-flex flex-column align-items-center justify-content-center position-absolute text-center p-3">
                            <p class="text-white">{{ project.description }}</p>
                            <a :href="project.live_link" target="_blank" class="btn a-btn d-flex align-items-center text-white">Visit Website <i class="fa-solid fa-square-arrow-up-right ms-2 fs-5"></i></a>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center pb-4">
                    <router-link to="/projects">
                        <button class="btn a-btn"><i class="fa-solid fa-briefcase"></i> See more on the projects page</button>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="client-and-collaborators py-5">
            <div class="max-screen-size">
                <h2 class="home-header">GET IN TOUCH</h2>
            </div>
        </section>

        <section ref="contact" class="home-contact">
            <div class="contact-container text-center py-5 px-3 px-md-4">
                <h2 class="home-header">GET IN TOUCH</h2>
                <h2>Interested in collaborating with me?</h2>
                <p class="mx-auto">I’m always open to discussing web design and development work or partnership opportunities.</p>
                <router-link to="/contact">
                    <button class="btn a-btn"><i class="fa-brands fa-rocketchat"></i> Start a conversation</button>
                </router-link>
            </div>
        </section>

        <footer-comp />
    </div>

    <div v-else ref="maskedSection" class="masked-section">
        <div class="masked-background">
            <div class="content">
                <img class="loader-icon" src="/images/logo1.png" alt="Reuben Oluwafemi" style="width: 80px; height: 80px;"/>
            </div>
        </div>
    </div>

</template>
