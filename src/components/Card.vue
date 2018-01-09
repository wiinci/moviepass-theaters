<template>
    <li class="c-card">
        <a
            href="#0"
            aria-describedby="name distance"
            class="c-card_link"
            :ref="'card' + index"
        >
            <Map
                :lon="theater.lon"
                :lat="theater.lat"
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
import Map from '@/components/Map';
import Details from '@/components/Details';

export default {
    name: 'Card',

    components: {
        Map,
        Details
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


