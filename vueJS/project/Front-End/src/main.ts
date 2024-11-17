import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./config/apolloClient";
import router from "./routers/router";

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
});
app.use(createVuetify())
    .use(createPinia())
    .use(router)
    .mount("#app");
