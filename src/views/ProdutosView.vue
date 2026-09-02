<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const produtos = ref([[]]);
const produtosFiltrados = ref([[]]);
const termoBusca = ref('');

const carregarProdutos = async ( ) => {
    try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        produtos.value = dados;
        produtosFiltrados.value = dados;
    } catch (error) {
        console.log('Erro ao carregar produtos:', error);
    }
};

const buscarProduto = () => {
    if (termoBusca.value.trim() === '') {
        produtosFiltrados.value = produtos.value;
    } else {
        produtosFiltrados.value = produtos.value.filter(produto => produto.title.toLowerCase().includes(termoBusca.value.toLowerCase()));
    }
};

watch(termoBusca, () => {
    buscarProduto();
});

onMounted(() => {
    carregarProdutos();
});

</script>

<template>
  <div class="produtos-container">
    <h2>Catálogo de Produtos</h2>

    <input type="text" v-model="termoBusca" placeholder="Buscar o produto por nome..." />
    <button @click="buscarProduto">Pesquisar</button>

    <ul v-if="produtosFiltrados.length>0">
      <li v-for="produto in produtosFiltrados" :key="produto.id">
        <strong>{{ produto.title }}</strong> - {{ produto.price }}
      </li>
    </ul>

    <p v-else>Nenhum produto encontrado.</p>

  </div>
</template>

<style scoped>
.produtos-container {
  margin: 20px;
  font-family: sans-serif;
}
input {
  margin-right: 10px;
  padding: 8px;
  width: 250px;
}
li{
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>