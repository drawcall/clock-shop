<template>
<div id="portfolio">
    <div class="container">
        <div class="page-title text-center">
            <h1>Clock Exhibition Counter</h1>
            <p>All the code comes from the <a href="https://codepen.io/" target="_blank">codepen</a> site. They are really great. 
                <br>I want to pay tribute to the original author. </p>
            <hr class="pg-titl-bdr-btm" />
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ul id="portfolio-flters">
                    <Btn v-for="btn in btns" :key="btn.index" :index="btn.index"
                    @click.native="tabClick(btn.index)">
                        {{ btn.text }}
                    </Btn>
                </ul>
            </div>
        </div>

        <div class="row" id="portfolio-wrapper">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app" :key="item" v-for="item in items">
                <iframe height='265' scrolling='no' :src="getHash(item)" frameborder='no' allowtransparency='true' allowfullscreen='true'
                    style='width: 100%;'></iframe>
            </div>
        </div>
    </div>

    <footer class="container">
        <div class="float-left nbtn" @click="prevPage()" v-bind:class="{ 'nbtn-disabled':!isEnabled('prev') }">
            Prev Page
        </div>
        
        <div class="float-right nbtn" @click="nextPage()" v-bind:class="{ 'nbtn-disabled':!isEnabled('next') }">
            Next Page
        </div>
    </footer>
</div>
</template>

<script>
import axios from 'axios';
import yaml from 'js-yaml';
import Btn from './Btn.vue';
import EventBus from '../utils/eventbus';
import { arrShuffle } from '../utils/util';

const PAGES = 6;

let BTNS = [
    { index: 0, text: "Beautiful Style" },
    { index: 1, text: "Creative Design" },
    { index: 2, text: "Electronic Clock" }];

BTNS = arrShuffle(BTNS);

export default {
    name: 'Content',
    components: {
        Btn
    },
    data: function () {
        return {
            currentTab: BTNS[0].index,
            pageNum: 0,
            data: [],
            btns: BTNS,
            get items() {
                const frist = this.pageNum * PAGES;
                const num = frist + PAGES;

                return this.allItems ? this.allItems.slice(frist, num) : null;
            },
            get allItems() {
                EventBus.$emit('BTN_CLICK', this.currentTab);
                return this.data[this.currentTab] || []
            }
        }
    },
    created: function () {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get("/data.yaml").then(res => {
                const doc = yaml.safeLoad(res['data'] || res['_body']);
                doc.forEach(arr => {
                    arr.forEach((val, index, orArr) => orArr[index] = val.replace('https://codepen.io/', '').replace(/^.{1,30}\/pen\//ig, ''));
                    arr.sort(() => 0.5 - Math.random());
                });

                this.data = doc;
            });
        },
        tabClick(index) {
            this.pageNum = 0;
            this.currentTab = parseInt(index);
        },
        getHash(item) {
            return `//codepen.io/scorch/embed/${item}/?rerun-position=hidden&class=scale&height=265&theme-id=dark&default-tab=result&embed-version=2`;
        },
        isEnabled(type){
            if(type === 'prev') {
                if (this.pageNum <= 0) return false;
                return true;
            } else {
                if ((this.pageNum + 1) * PAGES >= this.allItems.length) return;
                return true;
            }
        },
        prevPage() {
            if (this.pageNum <= 0) return;
            this.pageNum--;
        },
        nextPage() {
            if ((this.pageNum + 1) * PAGES >= this.allItems.length) return;
            this.pageNum++;
        }
    }
}
</script>
