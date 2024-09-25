<script>

export default {
    name: 'ProjectListing',
    components: {
        
    },
    props: {
        project: Object
    },
    data() {
        return {
            currentImageIndex: 0,
            imageTimer: null
        };
    },
    computed: {
        backgroundImageStyle() {
            return {
                backgroundImage: `url(${this.project.images[this.currentImageIndex]})`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            };
        }
    },
    methods: {
        handleMouseOver() {
            this.currentImageIndex = 1
            this.startImageAnimation()
        },
        handleMouseLeave() {
            this.stopImageAnimation();
            this.currentImageIndex = 0
        },
        startImageAnimation() {
            this.imageTimer = setInterval(() => {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
            }, 1000);
        },
        stopImageAnimation() {
            clearInterval(this.imageTimer);
        }
    }
}
</script>

<template>
    <div class="project-listing position-relative">
        <div class="project-info d-flex flex-column p-3">
            <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                <div class="section-header">
                    <h2 class="title fw-bold m-0">{{project.title}}</h2>
                    <span class="sub-title">{{project.sub_title}}</span>
                </div>
            </div>
            <ul class="skillsets d-flex gap-3 mt-3">
                <li class="skill-item" v-for="skill in project.skills" :key="skill.name">
                    <i class="fa-brands fs-5" :class="[skill.icon]"></i>
                </li>
            </ul>
        </div>
        <div class="p-3 pt-0">
            <div
                :style="backgroundImageStyle" 
                class="project-image"
                @mouseover="handleMouseOver" 
                @mouseleave="handleMouseLeave"
            ></div>
        </div>

        <!-- <div class="project-links position-absolute d-flex justify-content-end gap-3">
            <a class="d-flex align-items-center justify-content-center btn a-btn round" :href="project.github_link"><i class="bi bi-github"></i></a>
            <a class="d-flex btn a-btn" :href="project.live_link">
                <span class="d-flex text-nowrap">
                    <i class="bi bi-link me-2"></i>
                    Visit Project
                    <i class="bi bi-link ms-2"></i>
                </span>
            </a>
        </div> -->

    </div>
</template>