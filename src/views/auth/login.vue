<template>
  <div
    class="
      login-component
      columns
      is-multiline is-centered is-vcentered is-gapless
    "
    :style="{ height: '100vh' }"
  >
    <div class="column is-3-desktop is-2-widescreen">
      <h2>Login</h2>
      <x-form ref="form" :model="form" :rules="rules">
        <x-form-item prop="email" label="Email" :error="emailError">
          <x-input v-model="form.email"></x-input>
        </x-form-item>
        <x-form-item prop="password" label="Password" :error="passwordError">
          <x-input v-model="form.password" type="password"></x-input>
        </x-form-item>

        <div class="login-component__submit">
          <x-button type="primary" @click="onSubmit">Login</x-button>
        </div>
      </x-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/auth'
import { setToken } from '@/helpers/auth'

export default {
  data() {
    return {
      loading: false,
      emailError: '',
      passwordError: '',
      form: {
        email: 'nghia@gmail.com',
        password: 'awd',
      },
      rules: {
        email: [
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
          {
            required: true,
            message: 'Please input email',
            trigger: ['blur', 'change'],
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$refs.form.validate()
      } catch (error) {
        return
      }

      try {
        this.loading = true
        const { code, result } = await login(this.form)

        if (code === 'A300') {
          this.emailError = 'Email or password is incorrect'
          return
        }

        setToken(result)

        this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scope>
@import './login.scss';
</style>
