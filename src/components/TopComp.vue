<template>
  <div>
    <h1> {{ headerText.header }} </h1>
    <h2> {{ headerText.subheader }} </h2>
  </div>
</template>

<script>
export default {
  name: "TopComp",

  props: {
    headerText: Object
  }
  
};
</script>

<style lang="scss" scoped>

  h1 {
    color: black;
    padding: 32px 64px;
    margin: 0;  
  }

  h2 {
    color: rgb(121, 121, 121);
    font-size: 12px;
    margin: 0;
  }

</style>
