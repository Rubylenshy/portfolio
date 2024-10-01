<template>
    <div class="contact-navbar">
        <NavBar></NavBar>
    </div>

    <div class="position-relative">
        <status-toast ref="statusToast"></status-toast>
    </div>

    <section class="contact max-screen-size">
        <div class="d-flex flex-column flex-md-row-reverse mb-4 px-0 px-md-5">
            <div class="contact-img d-flex justify-content-center p-3">
                <img
                    src="../assets/images/side-image.jpg"
                    alt="Reuben Oluwafemi"
                />
            </div>
            <div class="contact-container d-flex flex-column justify-content-center text-stsrt py-5 px-3 px-md-4">
                <h2 class="home-header text-dark">Get in touch</h2>
                <strong class="fs-5 lh-sm my-3">Currently seeking new opportunities</strong>
                <p class="fs-6 mb-0">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>

        <form class="contact-form px-3" ref="contactForm" @submit.prevent="sendEmail">
            <div class="d-flex flex-column flex-md-row gap-0 gap-md-3">
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="first_name">First Name</label>
                    <input
                        name="first-name"
                        id="first_name"
                        class="form-control"
                        type="text"
                        placeholder="e.g John"
                        maxlength="100"
                        v-model="form.firstName"
                    />
                    <span v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</span>
                </div>
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="last_name">Last Name</label>
                    <input
                        name="last-name"
                        id="last_name"
                        class="form-control"
                        type="text"
                        placeholder="e.g Doe"
                        maxlength="100"
                        v-model="form.LastName"
                    />
                    <span v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</span>
                </div>
            </div>

            <div class="d-flex flex-column flex-md-row gap-0 gap-md-3">
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        v-model="form.email"
                        class="form-control"
                        type="email"
                        placeholder="johndoe@example.com"
                        pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                        maxlength="250"
                    />
                    <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                </div>
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="telephone">Phone</label>
                    <input
                        name="phone"
                        id="telephone"
                        v-model="form.phone"
                        class="form-control"
                        type="tel"
                        placeholder="+2341234567890"
                        maxlength="50"
                    />
                    <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
                </div>
            </div>

            <div class="form-input d-flex flex-column mb-3">
                <label class="mb-2" for="subject">Subject</label>
                <input
                    name="subject"
                    id="subject"
                    v-model="form.subject"
                    class="form-control"
                    type="text"
                    aria-required="false"
                    aria-invalid="false"
                    autocomplete="off"
                />
            </div>
            <div class="form-input d-flex flex-column mb-3">
                <label class="mb-2" for="textarea">Leave a message...</label>
                <textarea
                    id="textarea"
                    class="form-control"
                    v-model="form.message"
                ></textarea>
                <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
            </div>
            <button
                class="btn a-btn fill rounded-0 mt-3"
                type="submit"
            >
                <span v-if="!isSending"><i class="fa-solid fa-paper-plane"></i> Submit</span>
                <span v-else><i class="fa-solid fa-spinner fa-spin"></i> Sending</span>
            </button>
        </form>
    </section>

    <FooterComp />
</template>

<script>
import NavBar from "../components/navbar.vue";
import FooterComp from "../components/footer.vue";
import StatusToast from '../components/status-toast.vue';
import emailjs from 'emailjs-com';

export default {
    name: "ContactPage",
    components: {
        NavBar,
        FooterComp,
        StatusToast
    },
    data() {
        return {
            form: {
                firstName: '',
                LastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            isSending: false,
            errors: {}
        }
    },
    methods: {
        validateForm() {
            this.errors = {}; // Clear previous errors

            if (!this.form.firstName) {
                this.errors.firstName = "First name is required.";
            }
            if (!this.form.lastName) {
                this.errors.lastName = "Last name is required.";
            }
            if (!this.form.email) {
                this.errors.email = "Email is required.";
            } else if (!this.validateEmail(this.form.email)) {
                this.errors.email = "Email is not valid.";
            }
            if (this.form.phone && this.form.phone.length < 10) {
                this.errors.phone = "Phone number must be at least 10 digits.";
            }
            if (!this.form.message) {
                this.errors.message = "Message is required.";
            }

            if (Object.keys(this.errors).length > 0) {
                setTimeout(() => {
                    this.errors = {};
                }, 4000);
            }

            return Object.keys(this.errors).length === 0;
        },
        validateEmail(email) {
            const pattern = /^.+@.+\.[a-zA-Z]{2,63}$/;
            return pattern.test(email);
        },
        async sendEmail() {
            if (!this.validateForm()) {
                return
            }

            this.isSending = true

            const SERVICE_ID = 'service_3974qmx'
            const TEMPLATE_ID = 'template_5c6d6lf'
            const USER_ID = 'vP4PGCdVtIvBGtc8_'

            try {
                const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this.$refs.contactForm, USER_ID,
                {
                    from_name: this.form.firstName + ' ' + this.form.LastName,
                    subject: this.form.subject,
                    email: this.form.email,
                    tel: this.form.phone,
                    message: this.form.message
                })

                if (response.status === 200) {
                    this.$refs.statusToast.showToast();
                }

            } catch(error) {
                console.log({error})
            } finally {
                this.isSending = false
                this.resetForm()
            }
        },
        resetForm() {
            this.form = {
                firstName: '',
                LastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            }
        }
    }
};
</script>
