<template>
    
    <div class = "admin-page">
        <section class="new-post">
            <UiAppButton @click="$router.push('/admin/new-post')">Create Post</UiAppButton>
        </section>

        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <PostsList :posts="loadedPosts" :isAdmin="true"/>
        </section>
    </div>

</template>

<script>
export default {

  computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    },

    layout: 'admin',
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>