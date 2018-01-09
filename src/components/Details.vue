<template>
    <div
        class="c-details"
        :class="{
            'c-details--here': distance <= 6,
            'c-details--near': distance > 6 && distance <= 16,
            'c-details--far': distance > 16
        }"
    >
        <p v-if="seating === 'SELECT_SEATING'" class="c-seating">{{ seating }}</p>
        <p class="c-distance">{{ distance }} mi</p>
        <p class="c-name">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: 'Details',
    props: {
        distance: {
            type: Number,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        seating: {
            type: String
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/style/variables/global';

.c-details {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    padding: (@base-unit * 2);
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
}

// .c-details--here {
//     background: rgba(151, 81, 221, 0.15);
// }

// .c-details--near {
//     background: rgba(209, 179, 237, 0.15);
// }

// .c-details--far {
//     background: rgba(39, 51, 77, 0.15);
// }

.c-name,
.c-distance {
    margin: 0;
    color: #2e3233;
    display: inline-table;
    background-color: #fbfbfb;
    padding: 0 @base-unit;
}

.c-distance {
    font-weight: 400;
    font-feature-settings: 'tnum';
    font-size: 36px;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
    margin-bottom: (@base-unit * 2);
}

.c-name {
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
}
</style>
