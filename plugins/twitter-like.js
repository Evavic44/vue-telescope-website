export default function ({ app, store }) {
  const guardOnce = app.router.afterEach((to, from) => {
    if (from.name) {
      store.commit('SET_TWITTER_LIKE')
      guardOnce()
    }
  })
}
