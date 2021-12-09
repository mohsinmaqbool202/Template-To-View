<template>
<div>
    <div class="col-md-4 col-xs-12 mt80">
        <div class="pricing-table shadow-hover" :id="item.popular">

            <!-- Pricing Header -->
            <div class="pricing-header">
                <h2>{{item.team}}</h2>
            </div>

            <!-- Pricing -->
            <div class="pricing">
                <span class="currency">$</span>
                <span class="amount">{{item.price}}</span>
                <span class="month">month</span>
            </div>

            <!-- Pricing Body -->
            <div class="pricing-body">
                <ul class="list">
                    <li>Post {{ item.postJob }} Job per Day</li>
                    <li>Edit Your Job Listing</li>
                    <li>See Job Stats</li>
                    <li>{{item.emailSupport}} Email Support</li>
                </ul>
            </div>
            
            <!-- Pricing Footer -->
            <div class="pricing-footer">
                <a href="#" class="btn btn-blue btn-effect">get started</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: null
        }
    }
}
</script>