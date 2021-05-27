<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',

  components: {},

  computed: {
    ...mapState('auth', ['admin']),
  },
}
</script>

<template>
  <div class="home">
    <div>Hello {{ admin.name }}</div>
  </div>
</template>
