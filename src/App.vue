<template>
    <div id="app">
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="less">
@import (reference) "~@/assets/style/variables/global";
@import (once) "~@/assets/style/fragments/typography";

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    min-height: 100vh;
    color: @black;
}
</style>
