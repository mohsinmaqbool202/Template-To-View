<template>
<div>
    <section class="main2">
            <!-- ===== Start of Swiper Slider ===== -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- Start of Slide 1 -->
                <div
                class="swiper-slide overlay-black"
                style="
                    background: url('/frontend/images/img/slider-img-1.jpg');
                    background-size: cover;
                    background-position: 50% 50%;
                "
                >
                <!-- Start of Slider Content -->
                <div class="slider-content container">
                    <div class="col-md-6 col-md-offset-6 col-xs-12 text-center">
                    <div class="section-title">
                        <h2 class="text-white">your career start now!</h2>
                    </div>

                    <p class="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy t
                        ext ever since the 1500s..
                    </p>
                    </div>
                </div>
                <!-- End of Slider Content -->
                </div>
                <!-- End of Slide 1 -->

                <!-- Start of Slide 2 -->
                <div
                class="swiper-slide overlay-black"
                style="
                    background: url('/frontend/images/img/image2.jpg');
                    background-size: cover;
                    background-position: 50% 50%;
                "
                >
                <!-- Start of Slider Content -->
                <div class="slider-content container">
                    <div class="col-md-6 col-xs-12 text-center">
                    <div class="section-title">
                        <h2 class="text-white">your career start now!</h2>
                    </div>

                    <p class="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy t
                        ext ever since the 1500s..
                    </p>
                    </div>
                </div>
                <!-- End of Slider Content -->
                </div>
                <!-- End of Slide 2 -->
            </div>
            <!-- End of Swiper Wrapper -->

            <!-- Navigation Buttons -->
            <div class="swiper-button-prev"><i class="fa fa-angle-left"></i></div>
            <div class="swiper-button-next"><i class="fa fa-angle-right"></i></div>
        </div>
            <!-- ===== End of Swiper Slider ===== -->
    </section>
</div> 
</template>

<script>
export default {
   name: 'Slider' 
}
</script>