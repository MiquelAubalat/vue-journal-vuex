<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary ">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary ms-3">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success ms-3">Success</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>


