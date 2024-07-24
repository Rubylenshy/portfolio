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
            
        }
    },
}
</script>

<template>
    <div class="project-listing d-flex flex-column flex-md-row gap-md-4">
        <div class="project-info d-flex flex-column p-3">
            <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                <div class="section-header">
                    <h2 class="title fw-bold m-0">{{project.title}}</h2>
                    <span class="sub-title">{{project.sub_title}}</span>
                </div>
                <div class="project-links d-flex justify-content-end gap-3">
                    <a class="d-flex align-items-center justify-content-center btn a-btn round" :href="project.github_link"><i class="bi bi-github"></i></a>
                    <a class="d-flex btn a-btn" :href="project.live_link">
                        <span>
                            <i class="bi bi-link"></i>
                            Visit Project
                            <i class="bi bi-link"></i>
                        </span>
                    </a>
                </div>
            </div>
            <div class="mt-4">
                <p class="description">{{ project.desc }}</p>
                <div class="skills d-flex flex-wrap gap-2">
                    <span class="skill-item" v-for="skill in project.skills" :key="skill">{{ skill }}</span>
                </div>
            </div>
        </div>

        <img :src="project.image" :alt="project.alt">
    </div>
</template>