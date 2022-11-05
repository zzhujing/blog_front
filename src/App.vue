<script setup>
import {ref} from "vue";
import AsideComp from './components/blog/AsideComp.vue'
import ArticleCard from './components/blog/ArticleCard.vue'

const initCategoryId = ref(0);
const tagArticles = ref([
  {
    id: 1,
    tagName: "Spring",
    titles: [
      {
        id: 1,
        title: "深入理解Spring"
      },
      {
        id: 2,
        title: "Java Concurrency深入"
      },
      {
        id: 3,
        title: "Reactive Stream"
      },
      {
        id: 4,
        title: "Vert.x实战"
      }, {
        id: 5,
        title: "R2dbc实战"
      }
    ]
  },
  {
    id: 2,
    tagName: "Java",
    titles: [
      {
        id: 1,
        title: "深入理解Spring"
      },
      {
        id: 2,
        title: "Java Concurrency深入"
      },
      {
        id: 3,
        title: "Reactive Stream"
      },
      {
        id: 4,
        title: "Vert.x实战"
      }, {
        id: 5,
        title: "R2dbc实战"
      }
    ]
  }
])
const introduce = ref(["90后码农", "躺平", "后端开发", "二次元宅男", "Good Boy", "懒神"]);
const categorys = ref([
  {
    id: 0,
    categoryName: "最新"
  },
  {
    id: 1,
    categoryName: "Spring"
  },
  {
    id: 2,
    categoryName: "Java"
  }
])
// const router = useRouter();
// await router.replace('/category/0');
</script>


<template>
  <div class="coreContainer">
    <el-container>
      <!--头部-->
      <el-header>
        <el-row>
          <el-col :offset="3">
            <div>
              <span class="blogName" @click="$router.replace('/')">Lazylittle个人博客</span>
              <span class="introduce"> Keep Coding ! Keep Learning! </span>
            </div>
          </el-col>
        </el-row>
        <!--首页分类-->
        <el-row>
          <el-col :span="11" :offset="5">
            <el-row>
              <span v-for="{categoryName,id} in categorys" :key="id" :class="{selected: initCategoryId===id}">
                <el-link type="primary" @click="initCategoryId=id">{{ categoryName }}</el-link>
              </span>
            </el-row>
          </el-col>
        </el-row>
      </el-header>


      <div class="behindContainer">
        <el-container>
          <!--主文章框-->
          <el-main>
            <ArticleCard :category-id="initCategoryId"/>
          </el-main>
          <!--侧边框-->
          <el-aside>
            <AsideComp :tag-articles="tagArticles" :colors="['lightblue','#F56C6C','lightyellow','lightgray']"
                       :introduce="introduce"/>
          </el-aside>
        </el-container>
      </div>
    </el-container>
  </div>

</template>

<style scoped lang="scss">
.coreContainer {

  .el-header {
    height: 80px;
    background-color: #262525;
    position: sticky;
    top: 0;
  }

  .el-row{
    width: 100%;
  }

  .el-row:last-child {
    margin: 0;
    background-color: white;
    border-radius: 4px;
    line-height: 60px;

    .selected {
      margin: 0;
      background-color: #e7e7e7;
    }

    span {
      margin-left: 15px;
      font-size: 25px;

      .el-link {
        margin: auto 20px;
      }
    }
  }

  .blogName {
    line-height: 80px;
    font-size: 25px;
    font-weight: bold;
    color: lightblue;
  }

  .introduce {
    margin-left: 50px;
    color: gray;
  }

  .behindContainer {
    margin-top: 60px;
    background-color: #E1E1E1;
    height: 100%;

    .el-main {
      width: 60%;
    }

    .el-aside {
      width: 40%;
      margin-top: 20px;
    }
  }
}


</style>
