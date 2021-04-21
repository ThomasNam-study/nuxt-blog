<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmitData">
        <UiAppControlInput type="email" v-model="email">E-Mail Address</UiAppControlInput>
        <UiAppControlInput type="text" v-if="!isLogin" v-model="name">Name</UiAppControlInput>
        <UiAppControlInput type="password" v-model="passwd">Password</UiAppControlInput>
        <UiAppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</UiAppButton>
        <UiAppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</UiAppButton>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      name: '',
      email: '',
      passwd: '',
    }
  },

  methods: {
    async onSubmitData() {
      try {
        let result = await this.$axios.$post("http://localhost:8888/api/member/", {
          memberID: this.email,
          email: this.email,
          name: this.name,
          passwd: this.passwd,
        });

        console.log(result);
      }
      catch (e) {
        console.error(e);
      }
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

