<template>
    <div>
        <span
            class="🎟"
            role="none presentation"
        >
            🎟
        </span>
        <router-link
            :to="{ path: '/' }"
            exact
        >
            Home
        </router-link>
    </div>
</template>

<script>
export default {
    name: "FourOhFour",
    data() {
        return {
            quotes: [
                {
                    quote: "Some beautiful paths can’t be discovered without getting lost.",
                    author: "Erol Ozan"
                },
                {
                    quote: "Not all those who wander are lost.",
                    author: "J. R. R. Tolkien",
                    title: "The Fellowship of the Ring"
                },
                {
                    quote: "Some things were better lost than found.",
                    author: "Stephen King",
                    title: "The Dead Zone"
                },
                {
                    quote: "Lost is a lovely place to find yourself.",
                    author: "Michael Faudet",
                    title: "Dirty Pretty Things"
                },
                {
                    quote: "I guess I can go anywhere I want. If only I knew where to go.",
                    author: "Layne Staley"
                },
                {
                    quote: "Maybe you are already lost and just do not know it.",
                    author: "Christine Feehan",
                    title: "Dark Demon"
                },
                {
                    quote: "Getting lost is the only place worth going to.",
                    author: "Tiziano Scarpa"
                },
                {
                    quote: "People move around so much in the world, things get lost.",
                    author: "Emma Donoghue",
                    title: "Room"
                },
                {
                    quote: "But which way do I go from here?",
                    author: "J. M. Sullivan",
                    title: "Alice: The wanderland Chronicles"
                }
            ]
        };
    }
};
</script>


<style lang="less" scoped>
.🎟 {
    margin: 0;
    padding: 0;
    font-size: 200px;
    will-change: transform;
    padding-top: 11px;
    transform: rotate(-12deg);
    text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.4);
    position: relative;
    display: inline-flex;
    filter: contrast(126%) grayscale(10%);
}
</style>

