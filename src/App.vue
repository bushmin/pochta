<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

@font-face {
    font-family: 'Firs';
    src: url('../content/font/GERBERA-BLACK.woff');
}
@font-face {
    font-family: 'FirsBold';
    src: url('../content/font/GERBERA-BOLD.woff');
}
@font-face {
    font-family: 'FirsLight';
    src: url('../content/font/GERBERA-LIGHT.woff');
}

@font-face {
    font-family: 'PRIBAMBAS';
    src: url('../content/font/PRIBAMBAS-REGULAR.ttf');
}

html{
  background-color: rgb(44, 20, 18);
  min-height: 100vh;
}
body{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#app {
  font-family: 'PRIBAMBAS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:inline-block;
  width: 100vw;
}

</style>
