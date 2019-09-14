<template>
  <section class="c-searchContainer">
    <label for="zip" class="c-inputLabel">
      <span class="v-visuallyHidden">Type and press Enter to find</span>
      MoviePass theaters
      <span class="v-visuallyHidden">by zip code</span>
      near
      <span class="v-visuallyHidden">you.</span>
    </label>
    <input
      type="search"
      name="zip"
      class="c-inputField c-zipSearch"
      id="zip"
      autocomplete="off"
      placeholder="Zip code"
      aria-describedby="theatersFound"
      autofocus
      :value="zip"
      @keyup.enter="updateZip($event.target.value)"
    />
    <p v-show="theaters.length" class="c-foundMsg" id="theatersFound">
      {{ theaters.length }} results
    </p>
  </section>
</template>

<script>
export default {
  name: 'MapFilter',

  props: {
    zip: {
      type: Number,
      default: 0,
    },
    theaters: {
      type: Array,
      required: true,
    },
    updateZip: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="less">
@import (reference) '~@/assets/style/variables/global';
@import (once) '~@/assets/style/fragments/typography';

.c-searchContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2000;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &::before {
    content: '';
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
  -webkit-appearance: none;

  &::-webkit-search-cancel-button {
    display: none;
  }
}

.c-inputLabel {
  padding: 0 0 @base-unit 0;
  font-size: @small-text;
  font-weight: 500;
}

.c-foundMsg {
  font-size: @small-text;
  font-weight: 500;
  margin: @base-unit 0 0 0;
}

.c-zipSearch {
  font-size: @h4;
  font-weight: 400;
  padding: @base-unit;
  overflow: hidden;
  letter-spacing: 1px;
  border-radius: (@base-unit * 100);
  border: 3px solid #17181a;
  text-align: center;
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
