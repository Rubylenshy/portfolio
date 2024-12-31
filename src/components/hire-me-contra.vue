<template>
    <div>
        <div
            class="contra-hire-me-button"
            :data-analyticsUserId="analyticsUserId"
            :data-theme="theme"
            :data-username="username"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'ContraButton',
    data() {
        return {
            analyticsUserId: "7749c5cc-acd6-4156-98e4-2138b1af7cbe",
            theme: "dark",
            username: "reuben_tomoloju",
        };
    },
    mounted() {
        // Dynamically load the Contra SDK script when the component is mounted
        const script = document.createElement("script");
        script.src = "https://contra.com/static/embed/sdk.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
    },
};
</script>
