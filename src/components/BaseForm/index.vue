<template>
  <t-form ref="formRef" v-bind="$attrs">
    <!-- 插槽穿透 -->
    <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
      <slot :name="key"></slot>
    </template>
  </t-form>
</template>
<script setup>
import { ref, defineExpose, useSlots } from "vue";
const formRef = ref(null);
defineExpose({
  formRef,
});

const slots = useSlots();
console.log(slots);
console.log(slots.default());
</script>

<style>
</style>