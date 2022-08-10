<template>
<div v-for="(item) in $store.getters.item_list_value" :key="item.id">
    <div class="item_container" v-if="item.deleted == true" >
        <p >{{item.message}}</p>
        <img  @click="item.deleted = false" class="delete" src="../assets/recovery.png">
        <img @click="item.deleted = true" class="edit" src="../assets/edit.png">
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props: {

    }
}
</script>
<style>
.item_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
    border-top-style: solid ;
    border-bottom-style: solid ;
    border-width: 1px;
    margin-top: 14px;
    padding: 5px;
}
.delete{
    width: 20px;
    height: 20px; 
}
.edit{
    width: 20px;
    height: 20px; 
}
</style>
