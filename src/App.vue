<template>
    <div id="app-portfolio">
        <HomeView />
    </div>
</template>

<script>
import HomeView from "./pages/home.vue";
// Github token for profile access: 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

export default {
    name: "App",
    components: {
        HomeView,
    },
};
</script>
