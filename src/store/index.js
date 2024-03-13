import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "../service/UserAuthentication";
// const db = "https://archub-49wy.onrender.com/";
const db = "http://localhost:4500/";
/* eslint-disable */
// this allows us to send cookies on our headers to the backend using axios
axios.defaults.withCredentials = true;
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: [],
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setCart(state, value) {
      state.cart = value;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let msg = (await axios.post(`${db}users/register`, payload)).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Sign Up",
          text: msg,
          icon: "success",
          timer: 4000,
        });
        location.reload();
        router.push({ name: "login" });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${db}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving Users",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let result = (await axios.get(`${db}users/${payload.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this user was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async editUser(context, payload) {
      try {
        let msg = await axios.patch(`${db}users/${payload.userID}`, payload);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Updated this user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload();
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while updating this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${db}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set(
            "VerifiedUser",
            // msg,
            token,
            // result,
            {}
          );
          cookies.set("userRole", result.userRole)
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome, 
            ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${db}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving Products",
          icon: "error",
          timer: 3000,
        });
      }
    },
    async fetchCart(context) {
      try {
        let {result} = (await axios.get(`${db}cart`)).data;
        if (result) {
          context.commit("setCart", result);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving your Cart",
          icon: "error",
          timer: 3000,
        });
      }
    },
    async addToCart(context, payload) {
      try {
        let {msg} = (await axios.post(`${db}cart/add`, payload)).data;
        context.dispatch("fetchCart");
        sweet({
          title: "Add to cart",
          text: msg,
          icon: "success",
          timer: 4000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try to add this product at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async delFromCart(context, payload) {
      try {
        let {msg} = await axios.delete(`${db}cart/delete/${payload}`);
        if (msg) {
          context.dispatch("fetchCart");
          sweet({
            title: "removed Product",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while trying to delete this product",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async clearCart(context) {
      try {
        let {data} = await axios.delete(`${db}cart/delete`);
        console.log(data);
          context.dispatch("fetchCart");
          sweet({
            title: "Cart Cleared",
            text: data.msg,
            icon: "success",
            timer: 4000,
          });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while trying to clear the cart",
          icon: "error",
          timer: 4000,
        });
      }
    },
  },
  modules: {},
});
