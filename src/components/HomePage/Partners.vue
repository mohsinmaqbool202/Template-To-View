<template>
<div>
    <section class="ptb40" id="partners">
        <div class="container">
            <!-- Start of Owl Slider -->
            <div class="owl-carousel partners-slider">
                <PartnerItem 
                    v-for="(image, index) in images" :key="index"
                    :image="image"
                >
                </PartnerItem>
            </div>
            <!-- End of Owl Slider -->
        </div>
    </section>
</div>
</template>

<script>
import PartnerItem from './PartnerItem.vue'
export default {
    components: { PartnerItem },
    data() {
        return {
            images: [
                'themeforest.png',
                'codecanyon.png',
                'graphicriver.png',
                'photodune.png',
                'audiojungle.png'
            ]
        }
    }
}
</script>