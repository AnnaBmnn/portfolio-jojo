import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueAnalytics from "vue-analytics";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: {
        cardsArray: ["blue", "orange"]
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      props: {},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "project" */ "./views/Project.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

Vue.use(VueAnalytics, {
  // this one of course needs to me a real domain ID
  id: 'UA-136782028-1',
  // use the `router` instance here
  router,
  debug: {
    // enabled: true
  }
});

export default router;
