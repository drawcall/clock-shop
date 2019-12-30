<template>
<div id="banner" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="jumbotron">
          <h1 class="small">Welcome To <span class="bold">Clock Shop</span></h1>
          <p class="big">There are a variety of beautiful and unusual clock codes.</p>
          <a href="https://github.com/drawcall/clock-shop" target="_blank" class="btn btn-banner">Star Me<i class="fa fa-send"></i></a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner
{
    background: url('/banner.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 500px;
}
</style>
