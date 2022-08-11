<template>
<div v-for="(item) in $store.getters.item_list_value" :key="item.id">
    <div class="item_container" v-if="item.deleted == true" >
        <p >{{item.message}}</p>
        <div class="actions">
            <img @click="item.deleted = true" class="edit" src="../assets/edit.png">
            <img  @click="item.deleted = false" class="delete" src="../assets/recovery.png">
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

</style>
