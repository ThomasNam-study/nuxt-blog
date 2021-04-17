<template>

  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @onSubmit="submitData" />
    </section>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {

    methods: {
      submitData(postData) { 
        axios.post('http://localhost:8888/api/blog/post', {...postData, "updateDate": new Date()}).then((result) => {
          console.log(result);
        })
        .catch(e => console.log(e));
      }
    },

    layout: 'admin',
  }

</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }

</style>
