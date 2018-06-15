<template>
<div class="main-navigation navbar-fixed-top">
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#myNavbar"
                >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a
                        class="navbar-brand"
                        href="index.html"
                    >Clock Shop</a>
            </div>
            <div
                class="collapse navbar-collapse"
                id="myNavbar"
            >
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#portfolio">Visit</a></li>
                    <li><a href="https://github.com/a-jie/clock-shop" target="_blank">Star Me</a></li>
                    <li><a href="https://github.com/a-jie/clock-shop/pulls" target="_blank">Submit Code</a></li>
                </ul>
        </div>
</div>
</nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    props: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
