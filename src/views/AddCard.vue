<template>
  <div>
    <TopComp v-bind:headerText="headerText" />
    <CardComp v-bind:currentCard="addCard" />
    <CardForm />
  </div>
</template>

<script>
import TopComp from '../components/TopComp.vue';
import CardComp from '../components/CardComp.vue';
import CardForm from '../components/CardForm.vue';

export default {
  name: "AddCard",
  components: {
    TopComp,
    CardComp,
    CardForm
  },
  data() {
    return {
      headerText: {
        header: "ADD A NEW BANK CARD",
        subheader: "NEW CARD"
      }
    }
  },

  computed: {
      addCard() {
        return this.$root.$data.defaultCard
      }
        
  }
  
}
</script>

<style lang="scss" scoped>
  div {
    background-color: rgb(255, 228, 177);
  }

</style>