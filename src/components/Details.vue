<template>
    <div class="c-details">
        <p
            v-if="seating === 'SELECT_SEATING'"
            class="c-seating"
        >
            {{ seating }}
        </p>
        <p class="c-distance">{{ distance }} mi</p>
        <p class="c-name">{{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "Details",
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
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) "~@/assets/style/variables/global";

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

.c-name,
.c-distance {
    margin: 0;
    color: #2e3233;
    display: inline-table;
    background-color: #fbfbfb;
    padding: @base-unit (@base-unit * 2);
    box-shadow: 0 0 (@base-unit * 4) 0 rgba(0, 0, 0, 0.25);
}

.c-distance {
    font-weight: 400;
    font-feature-settings: "tnum";
    font-size: 36px;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.25);
    margin-bottom: (@base-unit * 2);
}

.c-name {
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.25);
}
</style>
