import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance({ app }) {
    // eslint-disable-next-line
    const SearchBox = defineAsyncComponent(() => import("./SearchBox.vue"));
    app.component("SearchBox", SearchBox);
  },
});
