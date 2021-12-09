<template>
<div>
    <!-- =============== Start of Page Header 1 Section =============== -->
    <section class="page-header">
        <div class="container">

            <!-- Start of Page Title -->
            <div class="row">
                <div class="col-md-12">
                    <h2>search jobs ver. 2</h2>
                </div>
            </div>
            <!-- End of Page Title -->

        </div>
    </section>
    <!-- =============== End of Page Header 1 Section =============== -->





    <!-- ===== Start of Main Wrapper Section ===== -->
    <section class="search-jobs ptb80" id="version2">
        <div class="container">

            <!-- Start of Row -->
            <div class="row">

                <!-- ===== Start of Job Sidebar ===== -->
                <SearchJob></SearchJob>
                <!-- ===== End of Job Sidebar ===== -->

                
                <!-- ===== Start of Job Post Main ===== -->
                <SearchResult></SearchResult>
                <!-- ===== End of Job Post Main ===== -->

            </div>
            <!-- End of Row -->

        </div>
    </section>
    <!-- ===== End of Main Wrapper Section ===== -->

</div>
</template>

<script>
import SearchJob from '../../components/SearchJobPage/Search.vue'
import SearchResult from '../../components/SearchJobPage/SearchResult.vue'

export default {
    name: 'SearchJon',
    components: {
        SearchJob,
        SearchResult
    }
}
</script>
