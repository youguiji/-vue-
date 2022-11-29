/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2022-10-21 21:26:09
 * @LastEditors: Austral
 * @LastEditTime: 2022-11-19 09:33:28
 */
import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
  },
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    // 清除token
    delToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  getters: {
    // 获取token方法
    getToken(state) {
      if (!state.token) {
        state.token = localStorage.getItem("token");
      }
      return state.token;
    },
  },
  actions: {},
  modules: {},
});
