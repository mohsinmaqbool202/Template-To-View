<template>
<div>
    <div class="col-md-8 col-xs-12 job-post-main">
        <h4>We found 234 matches.</h4>

        <!-- Start of Job Post Wrapper -->
        <div class="job-post-wrapper mt20">
            <SearchResultItem v-for="(job, index) in jobs" :key="index" :job="job"></SearchResultItem>
        </div>
        <!-- End of Job Post Wrapper -->

        <!-- Start of Pagination -->
        <ul class="pagination list-inline text-center">
            <li class="active"><a href="javascript:void(0)">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">Next</a></li>
        </ul>
        <!-- End of Pagination -->

    </div>
</div>
</template>

<script>
import SearchResultItem from './SearchResultItem.vue'
export default {
    components: { SearchResultItem },
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