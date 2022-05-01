export default defineNuxtRouteMiddleware((to, from) => {

  if (to.query.code) {
    useState("access_token", () => to.query.code)
  } else {
    const access_token = useState("access_token")
    if (access_token.value == null || access_token.value == "") {
      return navigateTo("/")
    }
  }
})