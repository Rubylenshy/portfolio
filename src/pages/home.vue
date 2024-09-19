<script>
    import NavBar from "../components/navbar.vue";
    import FooterComp from "../components/footer.vue";
    import ProjectListing from "../components/project-listing.vue";

    export default {
        name: 'HomeView',
        components: {
            NavBar,
            FooterComp,
            ProjectListing
        },
        props: {
            
        },
        data() {
            return {
                headerName: '',
                projects: [
                    {
                        title: 'Project One',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project One is about. A detailed description of what Project One is about.',
                        image: require('../assets/images/project-temp.jpg'),
                        alt: 'An image representing Project One',
                        github_link: 'https://github.com/user/project-one',
                        live_link: 'https://live-link-to-project-one.com',
                        skills: ['JavaScript', 'HTML', 'CSS']
                    },
                    {
                        title: 'Project Two',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Two is about. A detailed description of what Project Two is about.',
                        image: require('../assets/images/project-temp.jpg'),
                        alt: 'An image representing Project Two',
                        github_link: 'https://github.com/user/project-two',
                        live_link: 'https://live-link-to-project-two.com',
                        skills: ['Python', 'Django', 'PostgreSQL']
                    },
                    {
                        title: 'Project Three',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Three is about. A detailed description of what Project Three is about.',
                        image: require('../assets/images/project-temp.jpg'),
                        alt: 'An image representing Project Three',
                        github_link: 'https://github.com/user/project-three',
                        live_link: 'https://live-link-to-project-three.com',
                        skills: ['React', 'Node.js', 'MongoDB']
                    }
                ],
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
            handleHorizontalScroll() {
                const container = this.$refs.projectContainer;
                container.addEventListener('mouseenter', () => {
                    container.style.animationPlayState = 'paused';
                });

                container.addEventListener('mouseleave', () => {
                    container.style.animationPlayState = 'running';
                });
            }
        },
        mounted() {
            this.headerName = `REUBEN <br> OLUWAFEMI`;
        },
    }
</script>

<template>
    <div ref="homePage" class="position-relative">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero h-100vh">
                <div ref="heroContent" class="home-hero-content position-relative">
                    <div class="max-screen-size">
                        <div id="hero-header" class="home-hero-header home-header text-center fw-black" v-html="headerName"></div>
    
                        <div class="home-headshot p-3">
                            <img class="d-flex d-md-none mx-auto" src="../assets/images/headshot.jpg" alt="Reuben Oluwafemi" />
                            <div class="d-none d-md-flex flex-column flex-md-row justify-content-between p-4">
                                <p>I'm a frontend developer, and JavaScript engineer.</p>
                                <p>Contributing to communities by developing problem-solving products</p>
                            </div>
                            <div class="d-block d-md-none pt-3">
                                <p class="small-screen-header text-center">I'm a frontend developer, and JavaScript engineer.</p>
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

            <section class="intro-text-section py-5 px-3">
                <div class="text-center">
                    <h2 class="my-3">Hi! Nice to meet you.</h2>
                    <p class="">My insatiable curiosity and open-mindedness fuels my drive to explore new horizons. I value clean design, patterns and bringing ideas to life in the browser.
                        Collaborated with talented people to create digital products for both individuals and corperate bodies. </p>
                </div>
            </section>
        </div>

        <section class="projects py-5">
            <div class="header m-auto">
                <span class="d-none d-md-flex before"></span><h2 class="text-nowrap my-0 mx-4">SOME OF MY LATEST WORK</h2><span class="d-none d-md-flex after"></span>
            </div>
            <p class="text-center my-2">Here are a few projects I've worked on.</p>
            <div ref="projectContainer" class="projects-container d-flex flex-column flex-md-row overflow-scroll no-scrollbar">
                <div v-for="project in projects" :key="project.title" class="project-item mx-3 my-4">
                    <project-listing :project="project" />
                </div>
            </div>
        </section>

        <section ref="contact" class="home-contact">
            <div class="contact-container text-center py-5 px-3 px-md-4">
                <h2 class="home-header">GET IN TOUCH</h2>
                <h2>Interested in collaborating with me?</h2>
                <p class="mx-auto">I’m always open to discussing web design and development work or partnership opportunities.</p>
                <router-link to="/contact">
                    <button class="btn a-btn"><i></i> Start a conversation</button>
                </router-link>
            </div>
        </section>

        <footer-comp />
    </div>

</template>
