<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "scss-variables";

  body {
    background-color: $backgr-color;
  }

  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: white;
    width: 400px;
    margin: auto;
    text-align: center;
  }

  .default-btn {
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

  .default-btn:hover {
      background-color: black;
      color: white;
  }

  .add-card-btn {
    background-color:white;
    color:black;
  }
  
</style>
