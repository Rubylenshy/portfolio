<template>
    <div v-if="show" class="status-toast position-fixed z-2">
        <div class="d-flex gap-3 p-3 bg-success text-white rounded-3">
            <i class="fa-solid fa-circle-check fs-4"></i>
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <strong class="mr-auto">Thank You for Reaching Out!</strong>
                    <i class="fa-solid fa-xmark fs-4" @click="hideToast"></i>
                </div>
                <div class="pt-2">
                    Your message has been sent successfully and I'll get back to you as soon as I can.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StatusToast',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showToast() {
                this.show = true;
                setTimeout(() => this.show = false, 5000);
            },
            hideToast() {
                this.show = false;
            }
        }
    }
</script>

