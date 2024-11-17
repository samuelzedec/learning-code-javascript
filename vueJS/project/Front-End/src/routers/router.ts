import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Level",
        component: () => import("../components/Level.vue")
    },
    {
        path: "/create-user",
        name: "CreateUser",
        component: () => import("../components/CreateUser.vue")
    },
    {
        path: "/update-user",
        name: "UpdateUser",
        component: () => import("../components/UpdateUser.vue")
    },
    {
        path: "/delete-user",
        name: "DeleteUser",
        component: () => import("../components/DeleteUser.vue")
    },
    {
        path: "/get-user",
        name: "GetUser",
        component: () => import("../components/GetUser.vue")
    },
    {
        path: "/get-all-users",
        name: "GetAllUsers",
        component: () => import("../components/GetAllUsers.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;