<template>
    <ul class="c-cards">
        <Card
            v-for="(theater, index) in theaters"
            :theater="theater"
            :index="index"
            :key="theater.id"
        />
    </ul>
</template>

<script>
import Card from '@/components/Card';

export default {
    name: 'Cards',

    props: {
        theaters: {
            type: Array,
            required: true
        }
    },

    components: {
        Card
    }
};
</script>

<<style lang="less" scoped>
@import (reference) '~@/assets/style/variables/global';

.c-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax((@base-unit * 70), 1fr));
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: (@base-unit * 6vmin);
    margin: 0;
    padding: (@base-unit * 6vmin);
    list-style-type: none;
    list-style: none outside;
}
</style>


