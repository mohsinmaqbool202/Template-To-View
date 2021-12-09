<template>
<div>
    <section class="search-jobs ptb80" id="version3">
        <div class="container">
        <div class="section-title">
            <h2>latest jobs</h2>
        </div>

        <!-- Start of Row -->
        <div class="row">
            <!-- Start of Job Post Main -->
            <div class="col-md-12 job-post-main">
            <!-- Start of Job Post Wrapper -->
            <div class="job-post-wrapper mt20">
                <!-- ===== Start of Single Job Post 1 ===== -->
                <JobCandidate
                    v-for="(job, index) in jobs" :key="index"
                    :job="job"
                >
                </JobCandidate>
                <!-- ===== End of Single Job Post 1 ===== -->
            </div>
            <!-- End of Job Post Wrapper -->

            <!-- Start of Pagination -->
            <div class="col-md-12 text-center mt40">
                <a href="search-jobs-3.html" class="btn btn-blue btn-effect"
                >show more</a
                >
            </div>
            <!-- End of Pagination -->
            </div>
            <!-- End of Job Post Main -->
        </div>
        <!-- End of Row -->
        </div>
    </section>
</div>
</template>

<script>
import JobCandidate from '../Common/JobCandidate.vue'

export default {
    components: { JobCandidate },
    data() {
        return {
            jobs: [
                {
                    image: '/frontend/images/companies/envato.svg',
                    job_title: 'php senior developer',
                    company: 'Envato',
                    location: 'Melbourn, Australia',
                    job_category: 'Full Time'
                },
                {
                    image: '/frontend/images/companies/google.svg',
                    job_title: 'department head',
                    company: 'Google',
                    location: 'Berlin, Germany',
                    job_category: 'Part Time'
                },
                {
                    image: '/frontend/images/companies/facebook.svg',
                    job_title: 'graphic designer',
                    company: 'Facebook',
                    location: 'london, uk',
                    job_category: 'Freelancer'

                },
                {
                    image: '/frontend/images/companies/envato.svg',
                    job_title: 'senior UI & UX designer',
                    company: 'Envato',
                    location: 'Melbourn, Australia',
                    job_category: 'Part Time'
                },
                {
                    image: '/frontend/images/companies/twitter.svg',
                    job_title: 'senior health advisor',
                    company: 'Twitter',
                    location: 'New York, USA',
                    job_category: 'Full Time'
                },
            ]
        }
    }
}
</script>