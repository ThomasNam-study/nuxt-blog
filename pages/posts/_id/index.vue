<template>

  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-details">Last Updated on {{loadedPost.updateDate}}</div>
        <div class="post-details">Written By {{loadedPost.author}}</div>
      </div>

      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section calss="post-feedback">
      <p>Let me know waht you think about the post, send a mail to <a
          href="mailto:purred@naver.com">purred@naver.com</a></p>
    </section>
  </div>

</template>

<script>

  export default {

    asyncData(context) {

      return context.app.$axios.get("http://localhost:8888/api/blog/post/" + context.params.id).then((res => {
          return {
            loadedPost: res.data
          }
        })).catch(e => context.error(e));

      // console.log("Async Data Execute!!");

      // return new Promise((resolve, reject) => {

      //   setTimeout(() => {
      //     resolve({
      //       'loadedPost': {
      //         id: '1',
      //         title: "First Post (ID : " + context.params.id + ")",
      //         previewText: "previewText",
      //         author: 'RED',
      //         updatedDate: new Date(),
      //         content: 'Content~~~~~~~',
      //         thumbnail: "https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg"
      //       }
      //     });
      //   }, 1000);


      // }).then(data => {
      //   return data
      // }).catch(e => {
      //   context.error(e);
      // });



    },

    head: {
      title: 'A Blog Post'
    }

  }

</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }

</style>
