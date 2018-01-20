<template>
    <section class="c-searchContainer">
        <label
            for="zip"
            class="v-visuallyHidden"
        >Enter zip code
        </label>
        <input
            type="search"
            name="zip"
            class="c-inputField c-zipSearch"
            id="zip"
            autocomplete="off"
            :value="zip"
            @keyup.enter="updateZip($event.target.value)"
        >
    </section>
</template>

<script>
export default {
    name: "MapFilter",

    props: {
        zip: {
            type: Number,
            default: 0
        },
        updateZip: {
            type: Function,
            required: true
        }
    }
};
</script>

<style lang="less">
@import (reference) "~@/assets/style/variables/global";
@import (once) "~@/assets/style/fragments/typography";

.c-searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2000;

    &::before {
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: contrast(0.4) brightness(1.4);
        opacity: 0.9;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        z-index: -1;
        box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
    }
}

.c-inputField {
    font-family: inherit;
    border: 0;
    outline: 0;
}

.c-zipSearch {
    font-size: @h4;
    font-weight: 400;
    padding: @base-unit;
    border-radius: (@base-unit * 100);
    border: 3px solid #17181a;
    text-align: center;
    background: #f7f7f7;
    transition: border-color ease-in-out 0.2s;
}

.v-visuallyHidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}
</style>
