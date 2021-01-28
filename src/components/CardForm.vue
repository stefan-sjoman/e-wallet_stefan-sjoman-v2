<template>
  <div class="card-form-container">
    <form class="card-form">
      <label for="card-number" class="both-columns">CARD NUMBER</label>
      <input name="card-number" class="both-columns" type="text" placeholder="XXXXXXXXXXXXXXXX"
        v-model="$root.$data.defaultCard.number"
        v-on:input="numberError"
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
            <option v-for="month in months" v-bind:key="month">{{month}}</option>   
          </select>
        </div>
        <div class="year">
          <label for="year" class="second-column">YEAR</label>
          <select name="year" id="year" class="second-column"
            v-model="$root.$data.defaultCard.validYear">
            <option v-for="year in years" v-bind:key="year">{{year}}</option>
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
      <span class="valid-message" v-show="validMessage">PLEASE CHECK YOUR INPUTS</span>
      <router-link to="/" v-if="validation" class="both-columns">
        <button class="default-btn add-card-btn" v-on:click="addCard">ADD CARD</button>
      </router-link>
      <router-link to="/addcard" v-else class="both-columns">
        <button class="default-btn add-card-btn" v-on:click="addCard">ADD CARD</button>
      </router-link>
      <router-link to="/" class="both-columns">
        <button class="default-btn cancel-card-btn" v-on:click="cancelCard">CANCEL</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tempNumber: "",
      formError: "",
      validation: false,
      validMessage: false,
      months: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      years: this.importYears(),
    }
  },

  methods: {
    addCard() {
      if (this.validateInput()) {
        this.validation = true;

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
      }
      else {
        this.validMessage = true;
      }

    },

    cancelCard() {
      let defaultCard = {
        id: "",
        holder: "",
        vendor: "default-card",
        number: "",
        validMonth: "MM",
        validYear: "YY"
      }

      this.$root.$data.defaultCard = defaultCard;
    },

    numberError() {
      let number = this.$root.$data.defaultCard.number

      if (number.length > 16) {
        return this.formError = "form-error";
      }
      else {
        return this.formError = "";
      }
    },

    setCapital() {
      let holder = this.$root.$data.defaultCard.holder

      this.$root.$data.defaultCard.holder = holder.toUpperCase();
    },

    validateInput() {
      let defaultCard = this.$root.$data.defaultCard

      if (
        defaultCard.holder === "" ||
        defaultCard.vendor === "default-card" ||
        defaultCard.number === "" ||
        defaultCard.number.length !== 16 ||
        defaultCard.validMonth === "MM" ||
        defaultCard.validYear === "YY"
      ) {
        return false;
      }
      else {
        return true;
      }
    },

    importYears() {
      let currentYear = new Date().getFullYear();
      let years = [];
      
      for (let i = 0; i < 10; i++) {
        years.push((currentYear + i).toString().substr(2, 2));
      }
      return years
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss-variables';

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

  .cancel-card-btn {
    background-color: $gray;
    color: black;
  }

  .cancel-card-btn:hover {
    background-color: black;
    color: white;
  }

  .form-error {
    background: $warning;
  }

  .valid-message {
    color: $warning;
    border-radius: 4px;
    margin-top: 16px;
    padding: 16px;  
    font-weight: 700;
  }

</style>