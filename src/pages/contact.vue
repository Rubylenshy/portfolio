<template>
    <NavBar></NavBar>

    <section class="contact max-screen-size">
        <div class="d-flex flex-column flex-md-row-reverse mb-4">
            <div class="contact-img d-flex justify-content-center p-3">
                <img
                    src="../assets/images/side-image.jpg"
                    alt="Reuben Oluwafemi"
                />
            </div>
            <div class="contact-container d-flex flex-column justify-content-center text-stsrt py-5 px-3 px-md-4">
                <h2 class="home-header text-dark">Get in touch</h2>
                <strong class="fs-5 lh-sm mt-3">Currently seeking new opportunities</strong>
            </div>
        </div>

        <form class="contact-form px-3">
            <div class="d-flex flex-column flex-md-row">
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="first_name">First Name</label>
                    <input
                        name="first-name"
                        id="first_name"
                        class="form-control"
                        type="text"
                        placeholder="e.g John"
                        aria-required="false"
                        aria-invalid="false"
                        maxlength="100"
                        value=""
                    />
                </div>
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="last_name">Last Name</label>
                    <input
                        name="last-name"
                        id="last_name"
                        class="form-control"
                        type="text"
                        placeholder="e.g Doe"
                        aria-required="false"
                        aria-invalid="false"
                        maxlength="100"
                        value=""
                    />
                </div>
            </div>

            <div class="d-flex flex-column flex-md-row">
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        class="form-control"
                        type="email"
                        placeholder="johndoe@example.com"
                        required=""
                        aria-required="true"
                        aria-invalid="true"
                        pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                        maxlength="250"
                        autocomplete="off"
                        value=""
                    />
                </div>
                <div class="form-input d-flex flex-column mb-3 flex-fill">
                    <label class="mb-2" for="telephone">Phone</label>
                    <input
                        name="phone"
                        id="telephone"
                        class="form-control"
                        type="tel"
                        placeholder="+2341234567890 "
                        aria-required="false"
                        aria-invalid="false"
                        maxlength="50"
                        autocomplete="off"
                        value=""
                    />
                </div>
            </div>

            <div class="form-input d-flex flex-column mb-3">
                <label class="mb-2" for="subject">Subject</label>
                <input
                    name="subject"
                    id="subject"
                    class="form-control"
                    type="text"
                    placeholder=""
                    aria-required="false"
                    aria-invalid="false"
                    autocomplete="off"
                    value=""
                />
            </div>
            <div class="form-input d-flex flex-column mb-3">
                <label class="mb-2" for="textarea">Leave a message...</label>
                <textarea
                    id="textarea"
                    class="form-control"
                    placeholder=""
                ></textarea>
            </div>
            <button class="btn a-btn fill rounded-0 mt-3"><i></i> Submit</button>
        </form>
    </section>

    <FooterComp />
</template>

<script>
import NavBar from "../components/navbar.vue";
import FooterComp from "../components/footer.vue";

export default {
    name: "ContactPage",
    components: {
        NavBar,
        FooterComp,
    },
};
</script>
