<template>
  <div class="card-form-container">
    <form class="card-form">
      <label for="card-number" class="both-columns">CARD NUMBER</label>
      <input name="card-number" class="both-columns" type="text" placeholder="XXXX XXXX XXXX XXXX"
        v-model="$root.$data.defaultCard.number"
        v-on:input="divideNumber"
        v-bind:class="formError">
      <label for="cardholder-name" class="both-columns">CARDHOLDER NAME</label>
      <input name="cardholder-name" type="text" class="both-columns" placeholder="FIRSTNAME LASTNAME"
        v-model="$root.$data.defaultCard.holder"
        v-on:input="setCapital">
      <div class="valid-thru">
        <div class="month">
          <label for="month" class="first-column">MONTH</label>
          <select name="month" id="month" class="first-column"
            v-model="$root.$data.defaultCard.validMonth">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="year">
          <label for="year" class="second-column">YEAR</label>
          <select name="year" id="year" class="second-column"
            v-model="$root.$data.defaultCard.validYear">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>
      </div>
      <label for="vendor" class="both-columns">VENDOR</label>
      <select name="vendor" id="vendor" class="both-columns"
        v-model="$root.$data.defaultCard.vendor">
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja-bank">NINJA BANK</option>
        <option value="block-chain">BLOCK CHAIN INC</option>
        <option value="evil-corp">EVIL CORP</option>
      </select>
      <router-link to="/" class="both-columns">
        <button class="add-card-btn" v-on:click="addCard">ADD CARD</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      formError: "" 
    }
  },

  methods: {
    addCard: function() {

      this.$root.$data.autoId++;
      this.$root.$data.defaultCard.id = this.$root.$data.autoId;
  
      this.$root.$data.cards.push(this.$root.$data.defaultCard);

      let defaultCard = {
        id: "",
        holder: "",
        vendor: "default-card",
        number: "",
        validMonth: "",
        validYear: ""
      }

      this.$root.$data.defaultCard = defaultCard;
    },
    divideNumber() {

      let number = this.$root.$data.defaultCard.number

      if (number.length < 20) {
        if (number.length === 4 || number.length === 9 || number.length === 14) {
          this.$root.$data.defaultCard.number += " ";
        } 
        return this.formError = ""
      }
      else {
        return this.formError = "form-error"
      }
    },
    setCapital() {
      let holder = this.$root.$data.defaultCard.holder

      this.$root.$data.defaultCard.holder = holder.toUpperCase();
    }
  }
}
</script>

<style scoped lang="scss">

  .card-form-container {
    padding: 20px;
  }

  .card-form {
    display: flex;
    flex-direction: column;
  }

  .first-column {
    grid-column: 1;
  }

  .second-column {
    grid-column: 2;
  }
  
  .both-columns {
    grid-column: 1/3;
  }

  .valid-thru {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    width: 100%;
    justify-content: space-between;
    .month, .year {
      display: flex;
      flex-direction: column;
      width: 48%;
    }
  }

  input, select {
    border: 1px solid black;
    border-radius: 4px;
    padding: 16px;
    font-size: 16px;
    outline: none;
    justify-self: center;
  }
  
  label {
    font-size: 12px;
    text-align: left;
    margin: 12px 0 0 0;
  }


  select { 
    border-radius: 4px;
    outline: none;
  }

  .add-card-btn {
    background-color: black;
    color: white;
    width: 100%;
    border: 2px solid black;
    outline: 0;
    border-radius: 4px;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 16px;
  }

  .form-error {
    background: rgb(255, 93, 93);
  }

</style>