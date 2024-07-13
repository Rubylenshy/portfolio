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
                        image: require('../assets/svg/github.svg'),
                        alt: 'An image representing Project One',
                        github_link: 'https://github.com/user/project-one',
                        live_link: 'https://live-link-to-project-one.com',
                        skills: ['JavaScript', 'HTML', 'CSS']
                    },
                    {
                        title: 'Project Two',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Two is about. A detailed description of what Project Two is about.',
                        image: require('../assets/svg/github.svg'),
                        alt: 'An image representing Project Two',
                        github_link: 'https://github.com/user/project-two',
                        live_link: 'https://live-link-to-project-two.com',
                        skills: ['Python', 'Django', 'PostgreSQL']
                    },
                    {
                        title: 'Project Three',
                        sub_title: 'A brief subtitle',
                        desc: 'A detailed description of what Project Three is about. A detailed description of what Project Three is about.',
                        image: require('../assets/svg/github.svg'),
                        alt: 'An image representing Project Three',
                        github_link: 'https://github.com/user/project-three',
                        live_link: 'https://live-link-to-project-three.com',
                        skills: ['React', 'Node.js', 'MongoDB']
                    }
                ]
            }
        },
        methods: {
            typeText(text) {
                let speed = 50;
                let i = 0;

                if (i < text.length) {
                    document.getElementById("hero-header").innerHTML += text.charAt(i);
                    i++;
                    setTimeout(this.typeText, speed);
                }
            }
        },
        mounted() {
            const heroHeader = document.getElementById("hero-header");
            setTimeout(() => {
                this.headerName = `REUBEN <br> OLUWAFEMI`
    
                if (heroHeader) {
                    heroHeader.classList.add("animate");
                }
            }, 2000);
        },
    }
</script>

<template>
    <div class="position-relative">
        <nav-bar />

        <div class="home-page">
            <section class="home-hero mh-100vh">
                <div class="d-flex d-md-none justify-content-between py-2 px-3 pt-4">
                    <a href="#"><img src="../assets/images/logo1.png" alt="Reuben Oluwafemi" style="width: 35px; height: 35px;"/></a>
                    <button class="btn btn-transparent"><i class="bi bi-circle-half text-light"></i></button>
                </div>
                <div class="home-hero-content position-relative mh-100vh">
                    <div id="hero-header" class="home-hero-header text-center fw-black" v-html="headerName"></div>

                    <div class="hero-descriptions d-flex flex-column flex-md-row text-light gap-4">
                        <p>I'm a frontend developer, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with projects and lines of code</p>
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

    <section class="projects">
        <div v-for="project in projects" :key="project.title" class="project-items mx-3 my-4">
            <project-listing :project="project" />
        </div>
    </section>
    <footer-comp />
</template>
