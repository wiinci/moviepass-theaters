<template>
    <li class="c-card">
        <a
            href="#0"
            class="c-card_link"
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
        const oberverOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };

        this.observer = new IntersectionObserver(this.loadMap, oberverOptions);

        this.observer.observe(this.$refs["card" + this.index]);
    },

    methods: {
        loadMap(changes, observer) {
            changes.forEach((change) => {
                if (change.intersectionRatio > 0) {
                    this.lon = this.theater.lon;
                    this.lat = this.theater.lat;
                    this.observer.unobserve(this.$refs["card" + this.index]);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.c-card_link {
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
}
</style>
