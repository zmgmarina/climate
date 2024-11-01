import { createStore } from "vuex";
import servicesStore from "./modules/servicesStore";
import catalogStore1 from "./modules/catalogStore1";
import catalogStore2 from "./modules/catalogStore2";

export default createStore({
  modules: {
    servicesStore,
    catalogStore1,
    catalogStore2,
  },
});
