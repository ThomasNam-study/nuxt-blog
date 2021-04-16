<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"></AdminPostForm>
        </section>
    </div>
</template>

<script>
export default {

    data() {
        return {
            loadedPost: {
                author: 'Nam',
                title: 'HaHaHa',
                thumbnailLink: 'https://as2.ftcdn.net/jpg/02/41/67/95/500_F_241679501_hS4TmhOSoVymbnZ3HdWpjb8qMWVBLyPs.jpg',
                content: 'TESTESTSETSET',
            }
        }
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