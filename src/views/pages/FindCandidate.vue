<template>
<div>
    <!-- =============== Start of Page Header 1 Section =============== -->
    <section class="page-header" id="find-candidate">
        <div class="container">

            <!-- Start of Page Title -->
            <div class="row">
                <div class="col-md-12">
                    <h2>find candidate ver. 2</h2>
                </div>
            </div>
            <!-- End of Page Title -->
        </div>
    </section>
    <!-- =============== End of Page Header 1 Section =============== -->





    <!-- ===== Start of Main Wrapper Section ===== -->
    <section class="find-candidate ptb80" id="version2">
        <div class="container">

            <!-- Start of Form -->
            <form class="row" action="#" method="get">

                <!-- Start of keywords input -->
                <div class="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2 col-xs-8">
                    <label for="search-keywords">Keywords</label>
                    <input type="text" name="search-keywords" id="search-keywords" class="form-control" placeholder="Keywords">
                </div>

                <!-- Start of submit input -->
                <div class="col-md-2 col-sm-2 col-xs-4">
                    <button type="submit" class="btn btn-blue btn-effect"><i class="fa fa-search"></i>search</button>
                </div>

            </form>
            <!-- End of Form -->

            
            <!-- Start of Row -->
            <div class="row mt60">

                <!-- Start of Candidate Main -->
                <div class="col-md-12 candidate-main">

                    <!-- Start of Candidates Wrapper -->
                    <div class="candidate-wrapper">

                        <!-- ===== Start of Single Candidate 1 ===== -->
                        <CandidateItem v-for="(candidate, index) in candidates" :key="index" :candidate="candidate"></CandidateItem>
                        <!-- ===== End of Single Candidate 1 ===== -->

                    </div>
                    <!-- End of Candidates Wrapper -->

                    <!-- Start of Pagination -->
                    <div class="col-md-12 mt10">
                        <ul class="pagination list-inline text-center">
                            <li class="active"><a href="javascript:void(0)">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                    <!-- End of Pagination -->

                </div>
                <!-- End of Candidate Main -->

            </div>
            <!-- End of Row -->

        </div>
    </section>
    <!-- ===== End of Main Wrapper Section ===== -->
</div>
</template>

<script>
import CandidateItem from '../../components/FindCandidatePage/CandidateItem.vue'

export default {
    name: 'FindCandidate',
    components: {CandidateItem},
    data() {
        return {
            candidates: [
                {
                    image:'/frontend/images/candidates/candidate1.jpg',
                    name:'jon doe',
                    salary:'$3000',
                    location:'Melbourn, Australia',
                    designation:'Web Developer',
                },
                {
                    image:'/frontend/images/candidates/candidate2.jpg',
                    name:'Janie roy',
                    salary:'$2000',
                    location:'Berlin, Germany',
                    designation:'Graphic Designer',
                },
                {
                    image:'/frontend/images/candidates/candidate3.jpg',
                    name:'peter',
                    salary:'$2000',
                    location:'London, England',
                    designation:'Photographer',
                }
            ]
        }
    }
}
</script>