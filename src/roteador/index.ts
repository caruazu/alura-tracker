import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefa from "../views/Tarefas.vue";

const rotas: RouteRecordRaw[] = [{
    path: "/",
    name: "Tarefas",
    component: Tarefa,
}];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;