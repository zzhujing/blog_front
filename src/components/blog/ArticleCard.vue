<script setup>
import {Calendar, Folder, PriceTag} from '@element-plus/icons-vue'

import {ref, watchEffect} from "vue";
import {allArticles} from "@/assets/js/data";
const props = defineProps(["categoryId"])
const matchArticles = ref([]);
watchEffect(()=>{
  matchArticles.value = allArticles.filter(article => article.categoryId === props.categoryId);
})

const load = ()=>{}
</script>
<template>
  <div class="articleMain" v-infinite-scroll="load">
    <el-row v-for="article in matchArticles" :key="article.id">
      <el-col
          :span="16"
          :offset="8"
      >
        <el-card shadow="hover">
          <!--文章card内容区域-->
          <el-image v-if="article.bgImg"
                    :src="article.bgImg"
                    class="articleImage"
                    fit="cover"
                    alt=""
          />
          <div style="padding: 14px">
            <div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.content }}</p>
            </div>
            <div class="bottom">
              <div>
                <el-icon :size="14">
                  <Calendar/>
                </el-icon>
                <span>{{ article.cTime }}</span>
                <el-icon :size="14">
                  <Folder/>
                </el-icon>
                <span>{{ article.categoryName }}</span>
                <el-icon :size="14" v-if="article.tag">
                  <PriceTag/>
                </el-icon>
                <el-button type="warning" v-for="tag in article.tag" :key="tag">
                  {{ tag }}
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
.articleMain {

  overflow: scroll;

  .el-row {
    margin-bottom: 20px;

    .el-card {
      padding: 10px;
      border-radius: 15px 15px;
    }
  }

  .articleImage {
    display: block;
  }

  .bottom {
    font-size: 16px;

    .el-icon {
      margin-left: 8px;
      margin-right: 3px;
      width: 1.5em;
      height: 1.5em;
    }
  }
}


</style>
