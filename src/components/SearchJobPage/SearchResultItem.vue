<template>
<div>
    <!-- ===== Start of Single Job Post 1 ===== -->
    <div class="single-job-post row nomargin">
            <!-- Job Company -->
            <div class="col-md-2 col-xs-3 nopadding">
                <div class="job-company">
                    <a href="company-page-1.html">
                        <img :src="job.image" alt="">
                    </a>
                </div>
            </div>

            <!-- Job Title & Info -->
            <div class="col-md-8 col-xs-6 ptb20">
                <div class="job-title">
                    <a href="#">{{job.job_title}}</a>
                </div>

                <div class="job-info">
                    <span class="company"><i class="fa fa-building-o"></i>{{job.company}}</span>
                    <span class="location"><i class="fa fa-map-marker"></i>{{job.location}}</span>
                </div>
            </div>

            <!-- Job Category -->
            <div class="col-md-2 col-xs-3 ptb30">
                <div class="job-category">
                    <a href="javascript:void(0)" class="btn btn-green btn-small btn-effect">{{job.job_category}}</a>
                </div>
            </div>
    </div>
    <!-- ===== End of Single Job Post 1 ===== -->
</div>
</template>

<script>
export default {
    props: {
        job: {
            type: Object,
            default: null
        }
    }
}
</script>