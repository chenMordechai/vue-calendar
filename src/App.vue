<template>
  <v-app>
    <v-content class="container">
      <calendar/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',

  components: {
    Calendar,
  },

  data: () => ({
    
  }),
};
</script>
<style scoped>

</style>
