import {createRouter, createWebHistory} from "vue-router";
import Article from "../components/blog/BlogArticle.vue"
import ArticleCard from "../components/blog/ArticleCard.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:"/",redirect:"/index.html"},
        {path: "/article/:id", component: Article},
        {path: "/category/:id", component: ArticleCard, props: true}
    ],
});

export default router;
