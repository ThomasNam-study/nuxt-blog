import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {

      setPosts(state, posts) {
        state.loadedPosts = posts;
      },

      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);

        state.loadedPosts[postIndex] = editedPost;
      }

    },
    actions: {

      nuxtServerInit(vuexContext, context) {
        // console.log(context);
        return context.app.$axios.get("http://localhost:8888/api/blog/posts").then((res => {
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
      },

      addPost(vuexContext, post) {

        const createdPost = {...post, "updateDate": new Date()};

        return context.app.$axios.post(process.env.baseUrl + '/api/blog/post', createdPost).then((result) => {
          vuexContext.commit("addPost", result.data);
        })
        .catch(e => console.log(e));

      },

      editPost(vuexContext, editedPost) {

        return context.app.$axios.put(process.env.baseUrl + '/api/blog/post/' + editedPost.id, {
            ...editedPost,
            "updateDate": new Date()
          }).then((result) => {
            vuexContext.commit("editPost", result.data);
          })
          .catch(e => console.log(e));

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
