<template>
    <div>
        <router-link
            :to="{ path: '/about' }"
            exact
        >
            About
        </router-link>
        <MapFilter
            v-bind="{zip, updateZip}"
        />
        <Cards
            v-if="theaters.length"
            :theaters="theaters"
            :zip="zip"
        />
        <p v-else>Loading …</p>
    </div>
</template>

<script>
import axios from "axios";
import Cards from "@/components/Cards";
import MapFilter from "@/components/MapFilter";

export default {
    name: "Home",

    components: {
        Cards,
        MapFilter
    },

    data() {
        return {
            zip: 0,
            lat: null,
            lon: null,
            theaters: [],
            showZipField: false
        };
    },

    watch: {
        lat() {
            // Lookup zip code using OpenStreetMap’s Nominatim service
            const url = "https://nominatim.openstreetmap.org/reverse";
            axios
                .get(url, {
                    params: {
                        format: "json",
                        addressdetails: 1,
                        lat: this.lat,
                        lon: this.lon
                    }
                })
                .then(response => {
                    this.zip = +response.data.address.postcode;
                    console.log(response.data.address.postcode);
                })
                .catch(err => {
                    this.zip = 0;
                    console.error(err);
                });
        },

        zip() {
            // Get nearby MoviePass theaters using the API
            const url = `/theaters/zip/${this.zip}`;
            axios
                .get(url)
                .then(response => {
                    this.theaters = response.data.theaters;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },

    created() {
        if (!navigator.geolocation) {
            return;
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
        const geoOptions = {
            // Approximate position for reverse zip lookup
            enableHighAccuracy: false,
            // Cache position for 30 seconds
            maximumAge: 30000,
            // Take 9 seconds to return position
            timeout: 9000
        };

        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, geoOptions);
    },

    methods: {
        geoSuccess(position) {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;

            console.log(this.lat, this.lon);
        },

        geoError(error) {
            this.lat = null;
            this.lon = null;
            this.zip = 0;

            console.error(error);
        },

        updateZip(zip) {
            this.zip = +zip;
            console.log(+zip);
        }
    }
};
</script>
