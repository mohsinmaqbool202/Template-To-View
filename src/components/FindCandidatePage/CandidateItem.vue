<template>
<div>
    <div class="single-candidate row shadow-hover">

        <!-- Candidate Image -->
        <div class="col-md-2 col-xs-3">
            <div class="candidate-img">
                <a href="candidate-profile-1.html">
                    <img :src="candidate.image" class="img-responsive" alt="">
                </a>
            </div>
        </div>

        <!-- Start of Candidate Name & Info -->
        <div class="col-md-8 col-xs-6 ptb20">

            <!-- Candidate Name -->
            <div class="candidate-name">
                <a href="candidate-profile-1.html"><h5>{{candidate.name}}</h5></a>
            </div>

            <!-- Candidate Info -->
            <div class="candidate-info mt5">
                <ul class="list-inline">
                    <li>
                        <span><i class="fa fa-money"></i>{{ candidate.salary }}</span>
                    </li>

                    <li>
                        <span><i class="fa fa-map-marker"></i>{{candidate.location}}</span>
                    </li>

                    <li>
                        <span><i class="fa fa-briefcase"></i>{{ candidate.designation }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End of Candidate Name & Info -->

        <!-- CTA -->
        <div class="col-md-2 col-xs-3">
            <div class="candidate-cta ptb30">
                <a href="candidate-profile-1.html" class="btn btn-blue btn-small btn-effect">hire me</a>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    props: {
        candidate: {
            type: Object,
            default: null
        }
    }
}
</script>