<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @onSubmit="submitData" />
    </section>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {

    asyncData(context) {

      return context.app.$axios.get(process.env.baseUrl + "/api/blog/post/" + context.params.postId).then((res => {
        return {
          loadedPost: res.data
        }
      })).catch(e => context.error(e));
    },


    // data() {
    //     return {
    //         loadedPost: {
    //             author: 'Nam',
    //             title: 'HaHaHa',
    //             thumbnailLink: 'https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg',
    //             content: 'TESTESTSETSET',
    //         }
    //     }
    // },

    methods: {
      submitData(postData) {

          this.$store.dispatch('editPost', postData).then(() => {
              this.$router.push('/admin');
          })

        // axios.put('http://localhost:8888/api/blog/post/' + postData.id, {
        //     ...postData,
        //     "updateDate": new Date()
        //   }).then((result) => {
        //     console.log(result);
        //     this.$router.push('/admin');
        //   })
        //   .catch(e => console.log(e));
      },
    },

    layout: 'admin',

  }

</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }

</style>
