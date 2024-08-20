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
                        image: require('../assets/images/project-temp.jpeg'),
                        alt: 'An image representing Project One',
                        github_link: 'https://github.com/user/project-one',
                        live_link: 'https://live-link-to-project-one.com',
                        skills: ['JavaScript', 'HTML', 'CSS']
                    },
                    {
                        title: 'Project Two',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Two is about. A detailed description of what Project Two is about.',
                        image: require('../assets/images/project-temp.jpeg'),
                        alt: 'An image representing Project Two',
                        github_link: 'https://github.com/user/project-two',
                        live_link: 'https://live-link-to-project-two.com',
                        skills: ['Python', 'Django', 'PostgreSQL']
                    },
                    {
                        title: 'Project Three',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Three is about. A detailed description of what Project Three is about.',
                        image: require('../assets/images/project-temp.jpeg'),
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
        },
        mounted() {
            this.headerName = `REUBEN <br> OLUWAFEMI`
            
            // const heroHeader = document.getElementById("hero-header");
            // setTimeout(() => {
            //     this.headerName = `REUBEN <br> OLUWAFEMI`
    
            //     if (heroHeader) {
            //         heroHeader.classList.add('animate')
            //     }
            // }, 3000);
        },
    }
</script>

<template>
    <div ref="homePage" class="position-relative">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero h-100vh">
                <div class="d-flex d-md-none justify-content-between py-2 px-3 pt-4">
                    <a href="#"><img src="../assets/images/logo1.png" alt="Reuben Oluwafemi" style="width: 35px; height: 35px;"/></a>
                    <div class="d-flex align-items-center gap-3">
                        <a href="#"><i class="fa-regular fa-lightbulb fs-5 text-light"></i></a>
                        <a href="https://github.com/Rubylenshy"><i class="fa-brands fa-github fs-5 text-light"></i></a>
                    </div>
                </div>
                <div ref="heroContent" class="home-hero-content position-relative">
                    <div class="max-screen-size">
                        <div id="hero-header" class="home-hero-header home-header text-center fw-black" v-html="headerName"></div>
    
                        <div class="home-headshot p-3">
                            <img class="d-flex mx-auto" src="../assets/images/headshot.jpg" alt="Reuben Oluwafemi" />
                            <div class="d-none d-md-flex flex-column flex-md-row justify-content-between p-4">
                                <p>I'm a frontend developer, and JavaScript engineer.</p>
                                <p>Making contributions to communities in building problem-solving products</p>
                            </div>
                            <div class="d-block d-md-none pt-3">
                                <p class="small-screen-header">I'm a frontend developer, and JavaScript engineer.</p>
                                <ul class="skillsets d-flex gap-3 mb-3 text-muted overflow-scroll">
                                    <li v-for="skill in skillsets" :key="skill.name" class="d-flex align-items-center gap-2">
                                        <i class="fa-brands fs-5" :class="[skill.icon]"></i>
                                        <span>{{ skill.name }}</span>
                                    </li>
                                </ul>
                                <p>My insatiable curiosity and open-mindedness drive me to continually explore new horizons.
                                Currently, I'm eager to apply my diverse skill set to the field of Finance Analysis and Statistics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <section class="about-me p-3 my-4">
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

    <section class="projects py-5">
        <div v-for="project in projects" :key="project.title" class="project-items mx-3 my-4">
            <project-listing :project="project" />
        </div>
    </section>

    <section ref="contact" class="contact">
        <div class="contact-container text-center py-5 px-3 px-md-4">
            <h2 class="home-header">GET IN TOUCH</h2>
            <h2>Interested in collaborating with me?</h2>
            <p>I’m always open to discussing web design and development work or partnership opportunities.</p>
            <button class="btn a-btn"><i></i> Start a conversation</button>
        </div>
    </section>

    <footer-comp />
</template>
