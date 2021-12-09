<template>
    <div>
        <label v-if="label" :for="name ">{{label}}</label>
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :id="id"
            :class="childClass"
            :value="value"
            v-on:input="updateValue($event.target.value)"
        />
    </div>
</template>

<script>
import BaseInputMixin from '../../mixins/BaseInputMixin'
export default {
    name: 'BaseInput',
    mixins: [BaseInputMixin],
}
</script>