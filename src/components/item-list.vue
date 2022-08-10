<template>
<div v-for="(item) in $store.getters.item_list_value" :key="item.id">
    <div class="item_container" v-if="item.deleted == false">
        <p>{{item.message}}</p>
        <div class="actions">
            <img @click="item.deleted = true" class="delete" src="../assets/deleted_icon.png">
            <img class="edit" src="../assets/edit.png">
        </div>
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
    justify-content: space-between;
}
.delete{
    width: 20px;
    height: 20px; 
}
.edit{
    width: 20px;
    height: 20px; 
}
.actions {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;

flex: none;
order: 1;
flex-grow: 0;
}
</style>
