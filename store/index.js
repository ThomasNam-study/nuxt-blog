import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {

      setPosts(state, posts) {
        state.loadedPosts = posts;
      }

    },
    actions: {

      nuxtServerInit(vuexContext, context) {
        return axios.get("http://localhost:8888/api/blog/posts").then((res => {
          vuexContext.commit("setPosts", res.data);
        })).catch(e => context.error(e));

        // console.log(context.req.headers.host);

        // return new Promise((resolve, reject) => {

        //   console.log("nuxtServerInit");

        //   if (!process.client) {

        //   }

        //   setTimeout(() => {
        //     vuexContext.commit('setPosts', [{
        //         id: '1',
        //         title: "First Post",
        //         previewText: "previewText",
        //         thumbnail: "https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg"
        //       },
        //       {
        //         id: '2',
        //         title: "Second Post",
        //         previewText: "previewText",
        //         thumbnail: "https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg"
        //       }
        //     ]);


        //     resolve();
        //   }, 1000);


        // }).then(data => {

        // }).catch(e => {
        //   context.error(e);
        // });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
  });
}

export default createStore;
