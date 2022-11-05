<script setup>
import RandomColorTag from '../utils/RandomColorTag.vue'
import {ref, onMounted} from "vue";

const dynamicAvatarSize = ref(null);
const cardHeader = ref(null);
defineProps({
  colors: Array,
  tagArticles: Array,
  introduce: Array,
})

onMounted(() => {
  console.log(cardHeader.value.clientWidth)
  dynamicAvatarSize.value = cardHeader.value.clientWidth;
})

</script>
<template>
  <div class="aside">
    <div class="introduce">
      <el-card>
        <template #header>
          <div class="card-header" ref="cardHeader">
            <el-avatar :size="dynamicAvatarSize" :fit="'fill'" src="/src/assets/images/avatar.jpeg"
                       style="margin-left: 10px"/>
          </div>
        </template>
        <div>
          <div>
            <span><svg t="1667548834532" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="4578" width="14" height="12"><path
                d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l64 54.250667V746.666667h597.333334V429.44l64-54.250667zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z m-9.6 64h-578.133334L512 523.882667 801.066667 277.333333z"
                p-id="4579"></path></svg></span>
            <span class="baseInfo">hujing960825@gmail.com</span>
          </div>
          <div>
            <span><svg t="1667549445067" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="5479" width="14" height="12"><path
                d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z"
                fill="#000000" opacity=".65" p-id="5480"></path></svg></span>
            <el-link class="baseInfo" href="https://github.com/zzhujing">https://github.com/zzhujing</el-link>
          </div>
          <div>
            <span><svg t="1667549492885" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="6392" width="14" height="12"><path
                d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z"
                p-id="6393"></path><path
                d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z"
                p-id="6394"></path></svg></span>
            <span class="baseInfo">hujing18270886294</span>
          </div>
        </div>
        <div class="randomColorTag">
          <RandomColorTag :colors="colors"
                          :introduce-tags="introduce"/>
        </div>
      </el-card>
    </div>
    <div class="tagArticles">
      <el-card>
        <el-collapse accordion>
          <el-collapse-item v-for="tagArticle in tagArticles" :key="tagArticle.id">
            <template #title>
              <el-button type="warning">{{ tagArticle.tagName }}</el-button>
            </template>
            <el-link
                v-for="{title,id} in tagArticle.titles" :key="id"
                class="tagArticleTitle"
                type="primary">
              {{ title }}
            </el-link>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>
<style scoped lang="scss">

.aside {
  .introduce {
    .baseInfo {
      font-size: 12px;
      margin-left: 4px;
    }
    .randomColorTag{
      margin-top: 10px;
    }
  }

  .tagArticles {
    margin-top: 20px;

    .tagArticleTitle {
      display: block;
    }
  }

  .el-card {
    padding: 10px;
    border-radius: 15px 15px;
    width: 40%;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }
  }
}
</style>
