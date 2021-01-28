<template>
  <div class="card-container" v-bind:class="currentCard.vendor">
    <div class="card-grid">
      <span class="scan-chip"></span>
      <span class="logo"></span>
    </div>
    <div class="card-details card-grid">
      <span class="card-number">{{ setSpaces }}</span>
      <span class="card-holder">
        <span class="holder-label">CARD HOLDER</span>
        <span class="name">{{ currentCard.holder }}</span>
      </span>
      <span class="valid-thru">
        <span class="valid-label">VALID THRU</span>
        <span class="valid-date">{{ currentCard.validMonth }}/{{ currentCard.validYear }} </span>  
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",

  computed: {
    setSpaces() {
      // FYI: put FUNCTION-NAME in mustach variable!
      let spacedNumbers = "";

      for (let i = 0; i < this.currentCard.number.length; i++) {
        if (i === 4 || i === 8 || i === 12) {
          spacedNumbers += " ";
        }
        spacedNumbers += this.currentCard.number[i]
      }
      return spacedNumbers;
    }
  },

  props: {
    currentCard: Object
  }, 
}

</script>

<style scoped lang="scss">
  @import '../scss-variables';

  .card-container {
    margin: 16px auto;
    width: 360px;
    height: 225px;

    border-radius: 8px;
    box-shadow: 0 0 8px black;

    font-family: Courier, monospace;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }

  .card-grid {
    grid-column: 1;
    grid-row: 1;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    color: white;
  }

  .default-card {
    background-color: $gray;
    .card-details {
      color: black;
    }
  }

  .bitcoin {
    background-color: rgb(255, 187, 0);
    .card-details {
      color: black;
    }
    .logo {
        background: url('../assets/vendor-bitcoin.svg') no-repeat;
    }
    .scan-chip {
    background: url('../assets/chip-dark.svg') no-repeat;
    }
  }

  .evil-corp {
    background-color: rgb(207, 59, 59);
    .card-details {
      color: white;
    }
    .logo {
        background: url('../assets/vendor-evil.svg') no-repeat;
    }
    .scan-chip {
      background: url('../assets/chip-light.svg') no-repeat;
    }
  }

  .ninja-bank {
    background-color: rgb(31, 31, 31);
    .card-details {
      color: white;
    }
    .logo {
      background: url('../assets/vendor-ninja.svg') no-repeat;
    }
    .scan-chip {
      background: url('../assets/chip-light.svg') no-repeat;
    }
  }

  .block-chain {
    background-color: rgb(158, 55, 255);
    .card-details {
      color: white;
    }
    .logo {
        background: url('../assets/vendor-blockchain.svg') no-repeat;
    }
    .scan-chip {
      background: url('../assets/chip-light.svg') no-repeat;
    }
  }

  .scan-chip {
    grid-column: 1;
    grid-row: 1/3;
    margin: 16px 0 0 16px;
  }

  .logo {
    grid-column: 4;
    grid-row: 1/3;
    margin: 24px 0 0 32px;
  }

  .card-number {
    grid-column: 1/5;
    grid-row: 3;
    font-family: Courier, monospace;
    text-align: center;
    font-size: 28px;
    text-shadow: 1px 1px 1px black;
  }

  .card-holder {
    grid-column: 1/4;
    grid-row: 4;
    margin: 8px 0 0 16px;
    span {
      display: block;
      text-align: left;
      margin-bottom: 4px;
    }
  }

  .valid-thru {
    grid-column: 4;
    grid-row: 4;
    margin: 8px 16px 0 0;
    span {
      display: block;
      text-align: right;
      margin-bottom: 4px;
    }
  }

  .valid-label, .holder-label {
    font-size: 12px;
  }
    
</style>