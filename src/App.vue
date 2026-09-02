<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link>
      <router-link to="/produtos">Produtos</router-link>
      <router-link to="/cadastro">Cadastrar Produtos</router-link>
    </nav>
    <!-- Onde as views/telas são mostradas quando chamadas na URL -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  padding: 10px;
  background-color: #f0f0f0;
  font-family: sans-serif;
}
a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
