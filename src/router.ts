import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {path: "/", component: HomeView},
    {path: "/helloworld", component: HelloWorld}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
