<template>
  <div class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">15</span>
          <span class=" fs-3 mx-1">Octubre</span>
          <span class=" fs-3 mx-2 fw-light">2021</span>
      </div>
      <div>
          <button class="btn btn-danger mx-2">
              Borrar 
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary ">
              Subir Foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="Que paso Hoy?"></textarea>
  </div>

  <Fab
    icon="fa-save"
  />
  <img src="https://www.elagoradiario.com/wp-content/uploads/2019/07/delfines-respiraci%C3%B3n-valencia-1140x600.jpg" alt="delfines" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border:none;
    height: 100%;

    &:focus{
       outline: none; 
    }
}
img{
    width: 250px;
    position: fixed ;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    
}
 .entry-title{

 }
</style>