<script setup>
import {computed} from "vue";

const props = defineProps({
  colors: {
    type: Array,
    default: () => []
  },
  introduceTags: Array
});

const calTagColor = computed(() => {
  return i => props.colors[i % props.colors.length]
})
</script>
<template>
  <el-button v-for="(tag,i) in introduceTags" :key="tag" :color="calTagColor(i)" circle>
    {{ tag }}
  </el-button>
</template>
<style scoped lang="scss">

.el-button {
  margin-top: 5px;
}

</style>
