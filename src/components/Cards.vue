<template>
  <section>
    <ul v-if="theaters.length" class="c-cards">
      <Card
        v-for="(theater, index) in theaters"
        :theater="theater"
        :index="index"
        :key="theater.id"
      />
    </ul>
    <div v-else class="c-loading">
      <h1>🗺 Loading …</h1>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Cards',

  components: {
    Card,
  },

  props: {
    theaters: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/style/variables/global';

.c-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(@base-unit * 65, 1fr));
  grid-gap: (@base-unit * 5vmin);
  margin: 0;
  padding: (@base-unit * 5vmin);
  list-style-type: none;
  list-style: none outside;
}

.c-loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
