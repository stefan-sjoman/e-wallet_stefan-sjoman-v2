<template>
  <div>
    <ul class="card-stack">
      <li 
      v-for="(card, index) in cards" :key="index"
      v-on:click="activateCard(card)"
      class="stacking">
        <CardComp v-bind:currentCard="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardComp from './CardComp.vue';

export default {
  name: "CardStack",

  components: {
    CardComp
  },

  computed: {
    cards: function() {
      return this.$root.$data.cards
    }
  },

  methods: {
    activateCard(card) {
      this.$root.$data.activeCard.id = card.id;
      this.$root.$data.activeCard.holder = card.holder;
      this.$root.$data.activeCard.vendor = card.vendor;
      this.$root.$data.activeCard.number = card.number;
      this.$root.$data.activeCard.spacedNumber = card.spacedNumber;
      this.$root.$data.activeCard.validMonth= card.validMonth;
      this.$root.$data.activeCard.validYear = card.validYear;
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../scss-variables';

  .card-stack {
    display: grid;
    grid-auto-rows: 56px;
    margin: 0 0 200px 0;
    list-style: none;
    padding: 0;
    cursor: pointer;
  }

  .stacking {
    z-index: 1;
  }

</style>