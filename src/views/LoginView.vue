<script setup lang="ts">
import {ref, reactive} from 'vue';
const credenciais = reactive({
    nomeusuario: '',
    senha: '',
});
const erroLogin = ref ('');
const token = ref ('');
const carregando = ref (false);

const realizarLogin = async () => {
    carregando.value = true;
    erroLogin.value = '';
    token.value = '';

    try {
        const resposta = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({
                "username": credenciais.nomeusuario,
                "password": credenciais.senha
            })
        });
        if (!resposta.ok){
            throw new Error('Falha na autenticação. Verifique suas credenciais.');
        }
        const dados = await resposta.json();
        token.value = dados.token;
        localStorage.setItem('token', dados.token);
    } catch (erro){
        if (erro instanceof Error){
            erroLogin.value = erro.message;
        } else {
            erroLogin.value = 'Ocorreu um erro desconhecido.';
        }
    } finally {
        carregando.value = false;
    }
}
</script>

<template>
<div class="login-container">
    <h2>Acesso ao Sistema</h2>

    <form @submit.prevent="realizarLogin">
        <div>
            <label for="nomeusuario">Usuário</label>
            <input type="text" id="nomeusuario" v-model="credenciais.nomeusuario" required>
        </div>
        <div>
            <label for="senha">Senha</label>
            <input type="password" id="senha" v-model="credenciais.senha" required>
        </div>

        <button type="submit" :disabled="carregando">Entrar</button>
        <p v-if="erroLogin" style="color: red;">{{ erroLogin }}</p>
        <p v-if="token" style="color: green;">Token recebido: {{ token }} </p>
    </form>
</div>
</template>

<style>

</style>