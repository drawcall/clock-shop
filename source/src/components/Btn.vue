<template>
<li class="nbtn"
    @click="click()"
    v-bind:class="{ 'btn-active' : isActive}"
>
    <slot></slot>
    </li>
</template>

<script>
import ppo from 'ppo';
import Vue from 'vue';
const bus = new Vue();

export default {
    name: 'Btn',
    props: ['active'],
    created: function () {
        bus.$on('BTN_CLICK', id => {
            if (id !== this.id) {
                this.isActive = false;
            }
        });

        if(this.active){
            this.isActive = true;
        }
    },
    data() {
        return {
            id: ppo.uuid(),
            isActive: false
        }
    },
    methods: {
        click() {
            this.isActive = true;
            bus.$emit('BTN_CLICK', this.id);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
