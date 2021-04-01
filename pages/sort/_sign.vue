<template>
  <div class="w-full">
      {{sign}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      sign:''
    }
  },
  mounted(){
    let b = this.$route.params.sign
    console.log(b);
    this.sign = b;
  }
}
</script>

<style>

</style>