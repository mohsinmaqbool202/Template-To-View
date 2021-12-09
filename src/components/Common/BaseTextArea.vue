<template>
    <div>
        <label v-if="label" :for="name ">{{label}}</label>
        <textarea
            :placeholder="placeholder"
            :name="name"
            :rows="rows"
            :class="childClass"
            :value="value"
            v-on:input="updateValue($event.target.value)"
        ></textarea>
    </div>
</template>

<script>
import BaseInputMixin from '../../mixins/BaseInputMixin'
export default {
    name: 'BaseInput',
    mixins: [BaseInputMixin],
}
</script>