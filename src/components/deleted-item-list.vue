<template>
  <div v-for="item in $store.getters.item_list_value" :key="item.id">
    <div class="item_container" v-if="item.deleted == true">
      <div class="top_container">
        <p>{{ item.message }}</p>
        <div class="actions">
          <img
            @click="item.deleted = false"
            class="delete"
            src="../assets/recovery.png"
          />
          <img
            @click="$store.commit('deleteOneItemPermanently', item.id)"
            class="delete"
            src="../assets/deleted_icon.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
