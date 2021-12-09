<template>
<div>
    <div class="item">
        <a href="#"><img :src="`/frontend/images/companies/${image}`" alt="" /></a>
    </div>
</div>
</template>

<script>
export default {
    props: {
        image: {
            type: String
        }
    },
}
</script>