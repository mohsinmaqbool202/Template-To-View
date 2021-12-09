<template>
<div>
    
    <!-- =============== Start of Page Header 1 Section =============== -->
    <section class="page-header">
        <div class="container">

            <!-- Start of Page Title -->
            <div class="row">
                <div class="col-md-12">
                    <h2>pricing table</h2>
                </div>
            </div>
            <!-- End of Page Title -->
        </div>
    </section>
    <!-- =============== End of Page Header 1 Section =============== -->


    <!-- ===== Start of Pricing Tables Section ===== -->
    <section class="pricing-tables pb80">
        <div class="container">

            <!-- Start Row -->
            <div class="row">
                <PriceTableItem v-for="(item, index) in itemData" :key="index" :item="item"></PriceTableItem>
            </div>
            <!-- End Row -->

        </div>
    </section>
    <!-- ===== End of Pricing Tables Section ===== -->
</div>
</template>

<script>
import PriceTableItem from '../../components/PricingPage/PriceTableItem.vue'

export default {
    components: {PriceTableItem},
    data() {
        return {
            itemData: [
                {
                    team: 'Small Team',
                    price: 19,
                    postJob: 1,
                    emailSupport: 1,
                    popular: ''
                },
                {
                    team: 'Corporate',
                    price: 49,
                    postJob: 10,
                    emailSupport: 10,
                    popular: 'popular'
                },
                {
                    team: 'Enterpries',
                    price: 99,
                    postJob: 1,
                    emailSupport: 'Unlimited',
                    popular: ''
                }
            ]
        }
    }
}
</script>