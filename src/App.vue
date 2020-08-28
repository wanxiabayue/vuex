<template>
  <div id="app">
    <aside id="nav">
      <router-link to="/">Life</router-link>|
      <router-link to="/state">State |</router-link>
      <router-link to="/vuex/mapState">mapState</router-link>|
      <router-link to="/vuex/getters">Getters</router-link>|
      <router-link to="/vuex/mutations">Mutations</router-link>|
      <router-link to="/vuex/actions">Actions</router-link>|
      <router-link to="/eventBus">EventBus</router-link>|
      <router-link to="/css3/svg">SVG</router-link>
      <!-- <router-link :to="{name:'Svg'}">SVG</router-link> -->
    </aside>
    <header class="header">我是头部</header>
    <!-- <router-view /> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer class="footer">我是脚部</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.footer {
  position: sticky;
  bottom: 20px;
}
.header {
  position: sticky;
  top: 20px;
}
</style>
