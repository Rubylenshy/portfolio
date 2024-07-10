<template>
    <div class="section-header">
        <h1 class="title fw-bold m-0">{{title}}</h1>
        <span class="sub-title">{{subTitle}}</span>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        }
    }
}
</script>