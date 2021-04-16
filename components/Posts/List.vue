<template>
    
    <section class="post-list">

      <PostsPreview id="1" :is-admin = "isAdmin" thumbnail="https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg" title="Hello there!" previewText="This my first post!"/>
      <PostsPreview id="2" :is-admin = "isAdmin" thumbnail="https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg" title="Hello there!" previewText="This my first post!"/>
    </section>

</template>

<script>
export default {
    
    props: {
        isAdmin: {
            type: Boolean,
            default: false,
        }
    }

}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>