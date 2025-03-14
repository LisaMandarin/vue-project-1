import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AttributeBinding from "./components/AttributeBinding.vue";
import ConditionalLoops from "./components/ConditionalsLoops.vue";
import FormBinding from "./components/FormBinding.vue";
import SimpleComponent from "./components/SimpleComponent.vue";
import MarkdownEditor from "./components/MarkdownEditor.vue";
import FetchData from "./components/FetchData.vue";
import GridSortFilter from "./components/GridSortFilter.vue";

const routes = [
    {path: "/", component: HomeView},
    {path: "/helloworld", component: HelloWorld},
    {path: "/attributebinding", component: AttributeBinding},
    {path: "/conditionalsLoops", component: ConditionalLoops},
    {path: "/formbinding", component: FormBinding},
    {path: "/simplecomponent", component: SimpleComponent},
    {path: "/markdowneditor", component: MarkdownEditor},
    {path: "/fetchdata", component: FetchData},
    {path: "/gridsortfilter", component: GridSortFilter}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router
