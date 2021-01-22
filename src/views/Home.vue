<template>
  <div class="home">
    <TopComp v-bind:headerText="headerText" />
    <CardComp v-bind:currentCard="activeCard" />
    <CardStack />
    <router-link to="/addcard">
      <button class="create-card-btn">ADD A NEW CARD</button>
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
      activeCard: this.$root.$data.activeCard
    }
  }
};
</script>

<style scoped lang="scss">

  .create-card-btn {
    width: 360px;
    margin: 20px;
    background-color:white;
    color:black;
    border: 2px solid black;
    outline: 0;
    border-radius: 4px;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
</style>
