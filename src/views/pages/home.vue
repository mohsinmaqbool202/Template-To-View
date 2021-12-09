<template>
    <div>
        <!-- ========== Start of Main Slider Section ========== -->
        <Slider></Slider>
        <!-- ========== End of Main Slider Section ========== -->

        <!-- ===== Start of Job Search Section ===== -->
        <SearchJob></SearchJob>
        <!-- ===== End of Job Search Section ===== -->

        <!-- ===== Start of Popular Categories Section ===== -->
        <PopularCategories></PopularCategories>
        <!-- ===== End of Popular Categories Section ===== -->

        <!-- ===== Start of Get Started Section ===== -->
        <section class="get-started ptb40">
            <div class="container">
            <div class="row">
                <!-- Column -->
                <div class="col-md-10 col-sm-9 col-xs-12">
                <h3 class="text-white">
                    20,000+ People trust Cariera! Be one of them today.
                </h3>
                </div>

                <!-- Column -->
                <div class="col-md-2 col-sm-3 col-xs-12">
                <a href="#" class="btn btn-blue btn-effect">get start now</a>
                </div>
            </div>
            </div>
        </section>
        <!-- ===== End of Get Started Section ===== -->

        <!-- ===== Start of Latest Job Section ===== -->
        <LatestJobs></LatestJobs>
        <!-- ===== End of Latest Job Section ===== -->

        <!-- ===== Start of Download APP Section ===== -->
        <DownloadApp></DownloadApp>
        <!-- ===== End of Download APP Section ===== -->

        <!-- ===== Start of CountUp Section ===== -->
        <CountUp></CountUp>
        <!-- ===== End of CountUp Section ===== -->

        <!-- ===== Start of Testimonial Section ===== -->
        <Testimonials></Testimonials>
        <!-- ===== End of Testimonial Section ===== -->

        <!-- ===== Start of Latest News Section ===== -->
        <LatestNews></LatestNews>
        <!-- ===== End of Latest News Section ===== -->

        <!-- ===== Start of Partners ===== -->
        <Partners></Partners>
        <!-- ===== End of Partners ===== -->

    </div>
</template>

<script>
import Slider from '../../components/HomePage/Slider.vue'
import SearchJob from '../../components/HomePage/SearchJob.vue'
import PopularCategories from '../../components/HomePage/PopularCategories.vue'
import LatestJobs from '../../components/HomePage/LatestJobs.vue'
import DownloadApp from '../../components/HomePage/DownloadApp.vue'
import CountUp from '../../components/HomePage/CountUp.vue'
import Testimonials from '../../components/HomePage/Testimonials.vue'
import LatestNews from '../../components/HomePage/LatestNews.vue'
import Partners from '../../components/HomePage/Partners.vue'

export default {
    name: 'Home',
    components: {
        Slider,
        SearchJob,
        PopularCategories,
        LatestJobs,
        DownloadApp,
        CountUp,
        Testimonials,
        LatestNews,
        Partners
    }
}
</script>