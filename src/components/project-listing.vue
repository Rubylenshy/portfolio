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
        };
    },
    computed: {
    },
    methods: {
        
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

        <div class="project-links d-flex justify-content-end gap-3">
            <a class="d-flex align-items-center justify-content-center btn a-btn round fs-4" :href="project.github_link">
                <i class="bi bi-github"></i>
            </a>
            <a class="d-flex align-items-center justify-content-center btn a-btn round fs-4" :href="project.live_link">
                <i class="bi bi-link"></i>
            </a>
        </div>
    </div>
</template>