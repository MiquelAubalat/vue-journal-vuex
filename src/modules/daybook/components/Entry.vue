<template>
   <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params:{id:10}})"
   >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="fs-5 mx-1">Julio</span>
            <span class="fw-light mx-2">2021</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias corporis harum officiis officia distinctio ea possimus, reiciendis similique dolore at minus architecto atque dicta!
        </div>
   </div>
</template>
<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2 all ease-in;

    &:hover{
        background: lighten($color: grey, $amount: 45);
        transition: 0.2 all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>