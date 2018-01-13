<template>
    <div class="search">
        <label for="zip">Enter zip code</label>
        <input
            type="search"
            name="zip"
            id="zip"
            :value="zip"
            @keyup.enter="updateZip($event.target.value)"
        >
    </div>
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

