<template>
<div>
    <div class="col-md-4 col-xs-12 job-post-sidebar">

        <!-- Search Location -->
        <div class="search-location">
            <input type="text" name="search-location" class="form-control" placeholder="Location">
        </div>

        <!-- Job Types -->
        <div class="job-types mt30">
            <h4>Job Type</h4>

            <ul class="list-inline mt20">
                <li>
                    <input type="checkbox" id="full-time">
                    <label for="full-time">Full Time</label>
                </li>

                <li>
                    <input type="checkbox" id="part-time">
                    <label for="part-time">Part Time</label>
                </li>

                <li>
                    <input type="checkbox" id="freelance">
                    <label for="freelance">Freelance</label>
                </li>

                <li>
                    <input type="checkbox" id="intership">
                    <label for="intership">Intership</label>
                </li>

                <li>
                    <input type="checkbox" id="temporary">
                    <label for="temporary">Temporary</label>
                </li>
            </ul>
        </div>

        <!-- Job Types -->
        <div class="job-categories mt30">
            <h4 class="pb20">Categories</h4>
            
            <select name="search-categories" class="selectpicker" id="search-categories" data-live-search="true" title="Any Category" data-size="5" data-container="body">
                <option value="1">Accountance</option>
                <option value="2">Banking</option>
                <option value="3">Design & Art</option>
                <option value="4">Developement</option>
                <option value="5">Insurance</option>
                <option value="6">IT Engineer</option>
                <option value="7">Healthcare</option>
                <option value="8">Marketing</option>
                <option value="9">Management</option>
            </select>
        </div>
        
        <!-- Job Types -->
        <div class="job-types mt30">

            <ul class="list-inline">
                <li>
                    <input type="checkbox" id="salary">
                    <label for="salary">Filter by Salary</label>
                </li>

                <li>
                    <input type="checkbox" id="rate">
                    <label for="rate">filter by Rate</label>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>