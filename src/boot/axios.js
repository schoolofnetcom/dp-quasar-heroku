import axios from 'axios'

export default async ({ Vue }) => {
  axios.defaults.baseURL = process.env.HOST;
  Vue.prototype.$axios = axios
}
