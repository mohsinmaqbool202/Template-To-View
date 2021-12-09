export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        value: {
            type: String
        },
        rows: {
            type: String
        },
        childClass: {
            type: String,
            default: ''
        }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
};