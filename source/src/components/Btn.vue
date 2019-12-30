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
import EventBus from '../utils/eventbus';

export default {
    name: 'Btn',
    props: ['active', 'index'],
    created: function () {
        EventBus.$on('BTN_CLICK', index => {
            if (index !== this.index) {
                this.isActive = false;
            }else{
                this.isActive = true;
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
            //EventBus.$emit('BTN_CLICK', this.index);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
