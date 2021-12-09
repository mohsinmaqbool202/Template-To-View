<template>
<div>
     <!-- =============== Start of Page Header 1 Section =============== -->
    <section class="page-header">
        <div class="container">

            <!-- Start of Page Title -->
            <div class="row">
                <div class="col-md-12">
                    <h2>contact us</h2>
                </div>
            </div>
            <!-- End of Page Title -->
        </div>
    </section>
    <!-- =============== End of Page Header 1 Section =============== -->

    <!-- ===== Start of Main Wrapper Section ===== -->
    <section class="ptb80" id="contact">
        <div class="container">
            <div class="row">

                <div class="col-md-8 col-md-offset-2 col-xs-12">
                    <!-- Start of Contact Form -->
                    <form id="contact-form" class="mt30" @submit.prevent="submitForm">
                        <!-- Form Group -->
                        <div class="form-group">
                            <BaseInput
                                label=""
                                type="text"
                                placeholder="Your Name"
                                value=""
                                name="name"
                                childClass="form-control input-box"
                                v-model="name_value"
                            ></BaseInput>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group">
                            <BaseInput
                                label=""
                                type="email"
                                placeholder="your-email@cariera.com"
                                value=""
                                name="email"
                                childClass="form-control input-box"
                                v-model="email_value"
                            ></BaseInput>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group">
                            <BaseInput
                                label=""
                                type="tel"
                                placeholder="Phone Number"
                                value=""
                                name="phone"
                                childClass="form-control input-box"
                                v-model="phone_value"
                            ></BaseInput>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group">
                            <BaseInput
                                label=""
                                type="tel"
                                placeholder="Subject"
                                value=""
                                name="subject"
                                childClass="form-control input-box"
                                v-model="phone_value"
                            ></BaseInput>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group mb20">
                            <BaseTextArea
                                label= ""
                                rows="8"
                                name="message"
                                placeholder="Type your message..."
                                childClass="form-control textarea-box"
                                value=""
                                v-model="message_value"
                            >
                                {{message_value}}
                            </BaseTextArea>
                        </div>

                        <!-- Form Group -->
                        <div class="form-group text-center">
                            <button class="btn btn-blue btn-effect" type="submit">Send message</button>
                        </div>
                    </form>
                    <!-- End of Contact Form -->
                </div>

            </div>
        </div>
    </section>
    <!-- ===== End of Main Wrapper Section ===== -->
</div>
</template>

<script>
import BaseInput from '../../components/Common/BaseInput.vue'
import BaseTextArea from '../../components/Common/BaseTextArea.vue'

export default {
    components: { BaseInput, BaseTextArea  },
    data() {
        return {
           name_value: '',
           email_value: '',
           message_value: 'bdasmnbdm' 
        }
    }
}
</script>

<style scoped>
.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.invalid p {
    color: blue;
}
</style>