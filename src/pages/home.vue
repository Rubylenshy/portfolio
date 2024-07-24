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
                socialLinks: [
                    { src: require('../assets/svg/twitter.svg'), alt: 'Twitter' },
                    { src: require('../assets/svg/frontendmentor.svg'), alt: 'Frontend Mentor' },
                    { src: require('../assets/svg/github-white.svg'), alt: 'GitHub' },
                    { src: require('../assets/svg/slack.svg'), alt: 'Slack' },
                    { src: require('../assets/svg/linkedin.svg'), alt: 'LinkedIn' }
                ], 
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
            handleScale() {
                const contact = this.$refs.contact;
                if (this.isInViewport(contact)) {
                    setTimeout(() => {
                        contact.classList.add('scale-phone')
                    }, 1000);
                }

                contact.classList.remove('scale-phone')
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScale);

            const heroHeader = document.getElementById("hero-header");
            setTimeout(() => {
                this.headerName = `REUBEN <br> OLUWAFEMI`
    
                if (heroHeader) {
                    heroHeader.classList.add('animate')
                }
            }, 3000);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScale);
        }
    }
</script>

<template>
    <div ref="homePage" class="position-relative">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero h-100vh">
                <div class="d-flex d-md-none justify-content-between py-2 px-3 pt-4">
                    <a href="#"><img src="../assets/images/logo1.png" alt="Reuben Oluwafemi" style="width: 35px; height: 35px;"/></a>
                    <button class="btn btn-transparent"><i class="bi bi-circle-half text-light"></i></button>
                </div>
                <div ref="heroContent" class="home-hero-content position-relative mh-100vh">
                    <div id="hero-header" class="home-hero-header text-center fw-black" v-html="headerName"></div>

                    <div class="p-3">
                        <div class="home-headshot d-flex flex-column flex-md-row align-items-end text-light p-4">
                            <div class="order-1 order-md-0">
                                <p>I'm a frontend developer, and JavaScript engineer.</p>
                            </div>
                            <img class="mx-auto order-0 order-md-1" src="../assets/images/headshot.jpg" alt="Reuben Oluwafemi" />
                            <div class="order-2">
                                <p>I spend my days (and often nights) painting the Internet canvas with projects and lines of code</p>
                            </div>
                        </div>
    
                    </div>

                    <div class="hero-bottom-links">
                        <ul class="d-flex flex-column flex-md-row gap-3 gap-lg-5">
                            <li v-for="link in socialLinks" :key="link">
                                <img :src="link.src" :alt="link.alt">
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <section class="projects py-5">
        <div v-for="project in projects" :key="project.title" class="project-items mx-3 my-4">
            <project-listing :project="project" />
        </div>
    </section>

    <section ref="contact" class="contact">
        <div class="phone-edge">
            <div class="phone-screen position-relative">
                <div class="chat-head">
                    <div class="camera-box"></div>
                    <div class="head"><span id="back">⟨</span>
                        <img  id="avatar" src="" alt="Samuel Green" height="20" width="20">
                        <div class="chat-name">
                            <header>Reuben Oluwafemi</header>
                            <span>Available</span>
                        </div>
                        <img id="dots" src="" alt="">
                    </div>
                </div>
                <div class="chat-body">
                </div>
                <div class="chat-input position-absolute bottom-0">
                    <input class="border-0" type="text" placeholder="Type a message…" /><span><i class="bi bi-arrow-right fs-6"></i></span>
                </div>
            </div>
        </div>
    </section>

    <footer-comp :social-links="socialLinks"/>
</template>
