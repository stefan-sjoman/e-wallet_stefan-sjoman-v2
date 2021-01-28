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
  @import '../scss-variables';

  h1 {
    color: black;
    padding: 32px 64px;
    margin: 0;  
  }

  h2 {
    color: $gray;
    font-size: 12px;
    margin: 0;
  }

</style>
