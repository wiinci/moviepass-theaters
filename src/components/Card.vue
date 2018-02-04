<template>
    <li
        class="c-card"
        :class="{
            'c-card--here': theater.distance <= 6,
            'c-card--near': theater.distance > 6 && theater.distance <= 16,
            'c-card--far': theater.distance > 16
        }"
    >
        <a
            target="_blank"
            rel="noreferrer noopener"
            class="c-card_link"
            :href="'https://www.google.com/maps/search/?api=1&query=' + theater.name"
            :ref="'card' + index"
        >
            <Map
                :lon="lon"
                :lat="lat"
            />
            <Details
                :distance="theater.distance"
                :name="theater.name"
                :seating="theater.ticketType"
            />
        </a>
    </li>
</template>

<script>
import Map from "@/components/Map";
import Details from "@/components/Details";

export default {
    name: "Card",

    components: {
        Map,
        Details
    },

    data() {
        return {
            lat: null,
            lon: null
        };
    },

    props: {
        theater: {
            type: Object,
            required: true
        },

        index: {
            type: Number,
            required: true
        }
    },

    mounted() {
        if ("IntersectionObserver" in window) {
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.2
            };

            this.observer = new IntersectionObserver(this.onIntersection, observerOptions);

            this.observer.observe(this.$refs["card" + this.index]);
        } else {
            this.loadMap;
        }
    },

    methods: {
        onIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    this.lon = this.theater.lon;
                    this.lat = this.theater.lat;
                    this.observer.unobserve(this.$refs["card" + this.index]);
                }
            });
        },

        loadMap() {
            this.lon = this.theater.lon;
            this.lat = this.theater.lat;
        }
    }
};
</script>

<style lang="less" scoped>
@import (reference) "~@/assets/style/variables/global";

.c-card {
    padding: @base-unit;
}

.c-card--here {
    background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2) 0.1%,
            transparent 0.1%,
            transparent 1%
        ),
        linear-gradient(15deg, rgba(29, 151, 108, 0.9), rgba(147, 249, 185, 0.9));
}

.c-card--near {
    background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2) 0.1%,
            transparent 0.1%,
            transparent 1%
        ),
        linear-gradient(15deg, rgba(255, 128, 8, 0.9), rgba(216, 180, 89, 0.9));
}

.c-card--far {
    background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2) 0.1%,
            transparent 0.1%,
            transparent 1%
        ),
        linear-gradient(-15deg, rgba(238, 9, 121, 0.9), rgba(255, 106, 0, 0.9));
}

.c-card_link {
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
}
</style>
