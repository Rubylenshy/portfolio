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
        data() {
            return {
                isCurtainDisabled: false,
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
                frontendTerms: ['JavaScript Frameworks', 'Debugging', 'Mobile-First Development', 'State Management', 'Responsiveness', 'Version Control', 'API Integrations'],
                homeDetails: [
                    // {
                    //     role: "Designer",
                    //     icon: "fa-solid fa-layer-group",
                    //     description: "With eye for visual appealing design, I value simple content structure and thoughtful user experiences.",
                    //     highlights: {
                    //     "Things I enjoy designing": ["Web", "Apps", "Logos"],
                    //     },
                    //     tools: ["Adobe Photoshop", "Figma", "Pen & Paper"],
                    // },
                    {
                        role: "Frontend Engineer",
                        icon: "fa-solid fa-terminal",
                        description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        highlights: {
                            "I speak": ["ReactJS", "VueJs", "JavaScript", "PHP", "Sass", "Git"],
                        },
                        tools: [
                            "Bitbucket",
                            "Bootstrap",
                            "Trello",
                            "GitHub",
                            "Netlify",
                            "Docker",
                            "VS Code",
                        ],
                    },
                    {
                        role: "WordPress Plugin Developer",
                        icon: "fa-brands fa-wordpress-simple",
                        description: "I specialize in creating robust, scalable plugins that deliver custom solutions for diverse needs.",
                        highlights: {
                            "Plugins I enjoy developing": [
                                "SEO Enhancements",
                                "E-commerce Add-ons",
                                "Custom Widgets",
                            ],
                        },
                        tools: ["PHP", "JavaScript", "WordPress Codex", "VS Code", "XAMPP"],
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
            loadCurtain() {
                const storedCurtainStatus = localStorage.getItem('isCurtainDisabled');
                
                if (storedCurtainStatus !== null) {
                    this.isCurtainDisabled = JSON.parse(storedCurtainStatus);
                }
                
                const maskedSection = this.$refs.maskedSection;

                if (this.isCurtainDisabled) {
                    maskedSection.classList.add('d-none');
                    return;
                }

                setTimeout(() => {
                    maskedSection.classList.add('curtain-hide');
                    this.isCurtainDisabled = true;
                    localStorage.setItem('isCurtainDisabled', JSON.stringify(this.isCurtainDisabled));
                }, 500);
            }
        },
        mounted() {
            this.headerName = `REUBEN <br> OLUWAFEMI`;

            const scrollContent = document.querySelector('.scroll-content');
            const clone = scrollContent.cloneNode(true);
            scrollContent.parentElement.appendChild(clone);

            this.loadCurtain()
        },
    }
</script>

<template>
    <div v-show="isCurtainDisabled" ref="homePage" class="position-relative">
        <nav-bar />

        <section class="home-hero h-100vh">
            <div ref="heroContent" class="home-hero-content position-relative">
                <div class="max-screen-size">
                    <div id="hero-header" class="home-hero-header home-header size-md text-center fw-black" v-html="headerName"></div>

                    <div class="home-headshot d-flex d-md-none flex-column align-items-center p-3 pb-0">
                        <img class="mx-auto" src="/images/headshot.jpg" alt="Reuben Oluwafemi" />
                        <p class="small-screen-header text-center">Wordpress Plugin Developer & Frontend Engineer.</p>
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

        <div class="max-screen-size">
            <div class="home-title-divider d-none d-md-flex mx-auto rounded-3 shadow-sm">
                <div v-for="(item, index) in homeDetails" :key="index" class="column">
                    <span><i :class="item.icon"></i></span>
                    <h1 class="title home-header fs-4">{{ item.role }}</h1>
                    <p>{{ item.description }}</p>
                    
                    <div v-for="(value, key) in item.highlights" :key="key" class="my-4">
                        <p class="list-title fw-bold">{{ key }}:</p>
                        <p>{{ value.join(', ') }}</p>
                    </div>
                    
                    <div class="my-4">
                        <p class="list-title fw-bold">Tools:</p>
                        <ul>
                            <li v-for="(tool, toolIndex) in item.tools" :key="toolIndex">{{ tool }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <section class="home-projects">
            <div class="max-screen-size">
                <div class="text-center pt-5 pt-md-4 pb-4">
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
                <div class="d-flex justify-content-center pb-4 pb-md-0">
                    <router-link to="/projects">
                        <button class="btn a-btn"><i class="fa-solid fa-briefcase"></i> See more on the projects page</button>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="stacks-and-tools bg-black py-5 mb-5">
            <div class="max-screen-size p-3 p-md-5">
                <h2 class="home-header size-sx">"I create intuitive, visually stunning user interfaces that enhance user experience and design."</h2>
                <div class="d-flex flex-column flex-md-row gap-3 gap-md-4 pt-5">
                    <div class="text-container">
                        <p class="fs-5 text-justify">I am a Front-end Developer with 4 years commercial experience, and graduate of Mathematics. I build user-interfaces for commercial websites, wordpress plugins and themes.</p>
                        <p class="fs-5 text-justify">I'm currently working on a number of amazing projects that I can't wait to share with you.</p>
                        <div class="text-tools d-flex flex-column flex-md-row gap-3">
                            <div class="frontend-tools">
                                <h2 class="home-header fs-4">Frontend Stack</h2>
                                <p class="fs-6">VueJS, ReactJS, Next.js, JavaScript (ES6+), PHP, DevTools, Bootstrap, SCSS, HTML5, MySQL, Git/GitHub.</p>
                            </div>
                            <div class="frontend-tools">
                                <h2 class="home-header fs-4">Tools</h2>
                                <p class="fs-6">VS Code, CodeSandbox, Wordpress, Vercel, Bitbucket, Figma, Notion, Trello, Canva, Adobe Photoshop.</p>
                            </div>
                        </div>

                    </div>
                    <div class="terms-container gap-2">
                        <h3 v-for="term in frontendTerms" :key="term" class="term-title m-0 fw-light">{{ term }}</h3>
                    </div>
                </div>
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
