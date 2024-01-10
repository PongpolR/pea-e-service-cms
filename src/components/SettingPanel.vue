<template>
  <div v-if="menu === 'menu1'">
    <PersonalInformation />
  </div>
  <div v-if="menu === 'menu2'">
    <GroupService />
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import PersonalInformation from '@/components/SettingUser/PersonalInformation.vue'
import GroupService from '@/components/SettingUser/GroupService.vue'
import { defineProps, reactive, computed } from "vue";



const props = defineProps({
  menu: String
})





</script>
