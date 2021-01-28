<template>
  <div class="home">
    <TopComp v-bind:headerText="headerText" />
    <CardComp v-bind:currentCard="activeCard" />
    <button class="remove-card-btn" v-on:click="removeCard">REMOVE CARD</button>
    <CardStack />
    <router-link to="/addcard">
      <button class="default-btn add-card-btn">ADD NEW CARD</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TopComp from "@/components/TopComp.vue";
import CardComp from "@/components/CardComp.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: {
    TopComp,
    CardComp,
    CardStack
  }, 
    data() {
    return {
      headerText: {
        header: "E-WALLET",
        subheader: "ACTIVE CARD"
      },
      activeCard: this.$root.$data.activeCard,
      allCards: this.$root.$data.cards
    }
  },

  methods: {
    removeCard() {
      let spacedNumbers = "";

      for (let i = 0; i < this.activeCard.number.length; i++) {
        if (i === 4 || i === 8 || i === 12) {
          spacedNumbers += " ";
        }
        spacedNumbers += this.activeCard.number[i];
      }
    
      let message = `Are you sure you want to delete card: ${spacedNumbers}?`;

      if (confirm(message)) {
        for (let i = 0; i < this.allCards.length; i++) {
          if (this.allCards[i].id === this.activeCard.id) {
            this.allCards.splice(i , 1);
        }   
      }
      let resetActiveCard = {
        id: "",
        holder: "",
        vendor: "default-card",
        number: "",
        validMonth: "MM",
        validYear: "YY"
      }

      this.$root.$data.activeCard = resetActiveCard;
      this.activeCard = resetActiveCard;
      }
    }
  }
}
</script>

<style scoped lang="scss">
   @import "../scss-variables";

  .home {
    padding: 20px;
  }

  .remove-card-btn {
    background-color: white;
    color: $gray;
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    padding: 8px;
    border: none;
    outline: 0;
    border-radius: 4px;    
    cursor: pointer;
  }

  .remove-card-btn:hover {
    background-color: $warning;
    color: black;
  }

</style>
