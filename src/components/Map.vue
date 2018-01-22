<template>
    <div class="c-mapContainer">
        <div class="c-map">
            <v-map
                :zoom="zoom"
                :center="[lat, lon]"
                :options="options"
            >
                <!-- Toner labels overlay -->
                <v-tilelayer
                    :url="labelUrl"
                    :opacity=".6"
                    :z-index="13"
                />
                <!-- Watercolor base map -->
                <v-tilelayer
                    :url="url"
                    :z-index="12"
                />
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

    props: {
        lat: {
            type: Number,
            required: true
        },

        lon: {
            type: Number,
            required: true
        }
    },

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
            url: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
            labelUrl: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png",
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
}

.c-mapContainer,
.c-map {
    min-width: 27vw;
    height: 40vw;
    overflow: hidden;
}
</style>
