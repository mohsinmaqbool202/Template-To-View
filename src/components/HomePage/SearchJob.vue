<template>
<div>
    <section class="job-search ptb40">
        <div class="container">
        <!-- Start of Form -->
        <form class="job-search-form row" action="#" method="get">
            <!-- Start of keywords input -->
            <div class="col-md-3 col-sm-12 search-keywords">
                <BaseInput
                    label="Keywords"
                    type="text"
                    placeholder="keyword"
                    value=""
                    name="search-keywords"
                    id="search-keywords"
                    v-model="keyword_value"
                ></BaseInput>
            </div>

            <!-- Start of category input -->
            <div class="col-md-3 col-sm-12 search-categories">
                <ejs-dropdownlist v-model="category_id" id='dropdownlist' :dataSource='categories' placeholder='Select a Category'></ejs-dropdownlist>
            </div>

            <!-- Start of location input -->
            <div class="col-md-4 col-sm-12 search-location">
                <BaseInput
                    label="Location"
                    type="text"
                    placeholder="location"
                    value=""
                    name="search-location"
                    id="search-location"
                    v-model="location_value"
                ></BaseInput>
            </div>

            <!-- Start of submit input -->
            <div class="col-md-2 col-sm-12 search-submit">
            <button type="submit" class="btn btn-blue btn-effect btn-large">
                <i class="fa fa-search"></i>search
            </button>
            </div>
        </form>
        <!-- End of Form -->
        </div>
    </section>
</div>
</template>

<script>
import Vue from 'vue';
import BaseInput from '../Common/BaseInput.vue'
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);

export default {
    name:'SearchJob',
    components: { BaseInput },
    data() {
        return {
            keyword_value: '',
            location_value: '',  
            category_id: '',
            categories: ['Accountance', 'Banking', 'Design& Art', 'Development', 'Insurance']
        }
    }
}
</script>

<style>
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>