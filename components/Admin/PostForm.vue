<template>

  <form @submit.prevent="onSave">

    <UiAppControlInput v-model="editedPost.author">Author Name</UiAppControlInput>

    <UiAppControlInput v-model="editedPost.title">Title</UiAppControlInput>

    <UiAppControlInput v-model="editedPost.thumbnail">Thumbnail Link</UiAppControlInput>

    <UiAppControlInput v-model="editedPost.previewText">Preview Text</UiAppControlInput>

    <UiAppControlInput control-type="textarea" v-model="editedPost.content">Content</UiAppControlInput>

    <UiAppButton type="submit">Save</UiAppButton>

    <UiAppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</UiAppButton>

  </form>

</template>

<script>
  export default {


    props: {
      post: {
        type: Object,
        required: false
      }
    },

    data() {
      return {
        editedPost: this.post ? {
          ...this.post
        } : {
          author: '',
          title: '',
          thumbnail: '',
          previewText: '',
          content: '',
        }
      }
    },

    methods: {
      onSave() {
        this.$emit('onSubmit', this.editedPost);
      },

      onCancel() {
        this.$router.push('/admin')
      }
    }

  }

</script>
