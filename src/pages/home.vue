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
                ],
                
            }
        },
        computed: {
        },
        methods: {
            isInViewport(el) {
                const { top, left, bottom, right } = el.getBoundingClientRect();
                const { innerHeight, innerWidth } = window;

                return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
            }
        },
        mounted() {
            this.headerName = `REUBEN <br> OLUWAFEMI`;

            this.loaded = false;

            const maskedSection = this.$refs.maskedSection;
            // Add class to start the hiding effect
            setTimeout(() => {
                maskedSection.classList.add('curtain-hide');
                this.loaded = true;
            }, 500);

            const scrollContent = document.querySelector('.scroll-content');
            const clone = scrollContent.cloneNode(true);
            scrollContent.parentElement.appendChild(clone);
        },
    }
</script>

<template>
    <div v-show="loaded" ref="homePage" class="position-relative">
        <nav-bar />

        <section class="home-hero h-100vh">
            <div ref="heroContent" class="home-hero-content position-relative">
                <div class="max-screen-size">
                    <div id="hero-header" class="home-hero-header home-header size-md text-center fw-black" v-html="headerName"></div>

                    <div class="home-headshot d-flex d-md-none flex-column align-items-center p-3 pb-0">
                        <img class="mx-auto" src="/images/headshot.jpg" alt="Reuben Oluwafemi" />
                        <p class="small-screen-header text-center">Designer, React developer & Frontend engineer.</p>
                    </div>
                    <div class="scroll-container d-block d-md-none pt-3">
                        <div class="d-flex gap-5">
                            <ul class="scroll-content skillsets d-flex gap-3 mb-3 text-muted">
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

        <div class="home-title-divider d-none d-md-flex mx-auto rounded-3 shadow-sm">
            <!-- <p>I'm a React developer, and Frontend engineer.</p>
            <p>Contributing to communities by developing problem-solving products</p> -->
            <div class="column">
                <span><i class="fa-solid fa-layer-group"></i></span>
                <h1 class="title">Designer</h1>
                <p>With eye for visual appealing design, I value simple content structure and thoughtful user experiences.</p>
                <div>
                    <p class="list-title">Things I enjoy designing:</p>
                    <p>Web, Apps, Logos, </p>
                </div>
                <div>
                    <p class="list-title">Tools:</p>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                        <li>Pen &amp; Paper</li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <span><i class="fa-solid fa-terminal"></i></span>
                <h1 class="title is-size-4 is-spaced">Frontend Engineer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <div>
                    <p class="list-title">I speak:</p>
                    <p>Javascript, PHP, Sass, Git, SCSS</p>
                </div>
                <div>
                    <p class="list-title">Dev Tools:</p>
                    <ul>
                        <li>Bitbucket</li>
                        <li>Bootstrap</li>
                        <li>GSAP</li>
                        <li>Github</li>
                        <li>Netlify</li>
                        <li>XAMPP</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </div>

        <section class="home-projects pb-5">
            <div class="max-screen-size">
                <div class="text-center py-4">
                    <h2 class="home-header size-sm text-dark">projects.</h2>
                </div>
                <div class="projects-container p-3 p-md-5">
                    <div
                        v-for="project in projects"
                        :key="project.title"
                        class="project-item position-relative"
                    >
                        <img :src="project.images[0]" :alt="project.title" class="project-image" />
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

        <section class="stacks-and-tools bg-black py-5">
            <div class="max-screen-size p-3 p-md-5">
                <h2 class="home-header size-sx">"I create intuitive, visually stunning user interfaces that enhance user experience and design."</h2>
            </div>
        </section>

        <section ref="contact" class="home-contact">
            <div class="contact-container text-center py-5 px-3 px-md-4">
                <h2 class="home-header size-md">GET IN TOUCH</h2>
                <h2>Interested in collaborating with me?</h2>
                <p class="mx-auto">I’m always open to discussing web design and development work or partnership opportunities.</p>
                <router-link to="/contact">
                    <button class="btn a-btn"><i class="fa-brands fa-rocketchat"></i> Start a conversation</button>
                </router-link>
            </div>
        </section>

        <footer-comp />
    </div>

    <div ref="maskedSection" class="masked-section">
        <div class="masked-background">
            <div class="content">
                <img class="loader-icon" src="/images/logo1.png" alt="Reuben Oluwafemi" style="width: 60px; height: 60px;"/>
            </div>
        </div>
    </div>

</template>
