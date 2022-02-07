/* For the sake of this challenge, I built this component only for number inputs */
<template>
    <input
        v-model.number="number"
        :class="['b-apps-input p-0 m-0 text-center', {
            'is-disabled': isDisabled,
        }]"
        :disabled="isDisabled"
        type="number"
        :placeholder="0"
    />
</template>

<script>
export default {
    name: 'AppsInput',
    props: {
        isDisabled: { 
            type: Boolean, 
            default: false
        },
        type: { 
            type: String, 
            default: null,
        },
        index: { 
            tyape: Number, 
            default: 0,
        },
        value: { 
            tyape: Number, 
            default: 0,
        },
        min: { 
            tyape: Number, 
            default: 0,
        },
        max: { 
            tyape: Number, 
            default: 0,
        },
        setValue: { 
            tyape: Function, 
            default() {
                return nul;
            },
        },
    },
    computed: {
        number: {
            get() {
                return this.value;
            },
            set(newValue) {
                let value = newValue || 0;

                 console.log('value => this.min && value <= this.max', value, this.min, this.max, value >= this.min && value <= this.max);
                if (value >= this.min && value <= this.max) {
                    this.setValue(this.index, value);
                }
            },
        },
    },
}
</script>

<style lang="scss">
    .b-apps-input {
        width: 1.5rem;
        border: 0;
        outline: 0;
        font-weight: 200;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
        }

        /* Firefox */
        &[type=number] {
            appearance: textfield;
        }
    }     
</style>
