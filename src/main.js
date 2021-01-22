import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {

      // instead of server-side auto-increment 
      //starts on 4 ( 4 cards from beginning )
      autoId: 4,
      
      activeCard: {
        id: "",
        holder: "",
        vendor: "default-card",
        number: "",
        validMonth: "",
        validYear: ""
      },

      defaultCard: {
        id: "",
        holder: "",
        vendor: "default-card",
        number: "",
        validMonth: "",
        validYear: ""
      },

      cards: [
        {
          id: "1",
          holder: "BILL GATES",
          vendor: "bitcoin",
          number: "1470 2580 3690 1470",
          validMonth: "12",
          validYear: "24"
        },
        {
          id: "2",
          holder: "ELON MUSK",
          vendor: "evil-corp",
          number: "9630 8520 7410 9630",
          validMonth: "02",
          validYear: "22"
        },
        {
          id: "3",
          holder: "STEVE JOBS",
          vendor: "ninja-bank",
          number: "7410 8520 9630 7410",
          validMonth: "06",
          validYear: "21"
        },
        {
          id: "4",
          holder: "STEFAN SJÖMAN",
          vendor: "block-chain",
          number: "3690 2580 1470 3690",
          validMonth: "10",
          validYear: "26"
        }
      ]
    }
  },

  render: h => h(App)
}).$mount("#app");
