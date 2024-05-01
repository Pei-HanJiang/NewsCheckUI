// DEFINE THE ROUTING RULES//
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/Views/HomeView.vue";
import InputView from "@/Views/InputView.vue";
import ResultView from "@/Views/ResultView.vue";
import MoreInfoView from "@/Views/MoreInfoView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/input",
            name: "Input",
            component: InputView
        },
        {
            path: "/result",
            name: "Result",
            component: ResultView
        },
        {
            path: "/moreinfo",
            name: "MoreInfo",
            component: MoreInfoView
        }
    ]
})


export default router;

//GO TO MAIN.JS FILE