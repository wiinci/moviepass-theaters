<template>
    <div class="c-mapContainer">
        <div
            v-if="lat"
            class="c-map"
        >
            <v-map
                :zoom="zoom"
                :center="[lat, lon]"
                :options="options"
            >
                <!-- Stamen terrain base map -->
                <v-tilelayer :url="url" />
            </v-map>
        </div>
    </div>
</template>

<script>
import Vue2Leaflet from "vue2-leaflet";

export default {
    name: "Map",

    components: {
        "v-map": Vue2Leaflet.Map,
        "v-tilelayer": Vue2Leaflet.TileLayer,
        "v-marker": Vue2Leaflet.Marker
    },

    props: ["lat", "lon"],

    data() {
        return {
            zoom: 14,
            options: {
                zoomControl: false,
                attributionControl: false,
                scrollWheelZoom: false,
                dragging: false,
                keyboard: false
            },
            url: "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        };
    }
};
</script>

<style lang="less" scoped>
@import "~leaflet/dist/leaflet.css";

.leaflet-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: transparent;
}

.c-mapContainer,
.c-map {
    min-width: 27vw;
    height: 40vw;
    overflow: hidden;
}
</style>
