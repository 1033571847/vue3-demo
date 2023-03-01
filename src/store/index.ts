import { createStore } from "vuex";
import axios from "../request"; // 导入http中创建的axios实例

export default createStore({
  state: {
    role: "",
  },
  getters: {},
  mutations: {
    SET_ROLE(state, payload) {
      state.role = payload.role;
    },
  },
  actions: {
    getRole({ state, commit }, filter) {
      return axios
        .post("https://your-api.com/user/role")
        .then((data: any) => {
          if (data.code === 200) {
            commit("SET_ROLE", {
              role: data.data.role,
            });
            localStorage.setItem("role", data.data.role);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
