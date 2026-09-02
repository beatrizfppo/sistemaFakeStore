import { createRouter, createWebHistory } from 'vue-router'
//imports das views que ainda vamos construir
import LoginView from '../views/LoginView.vue';
import ProdutosView from '../views/ProdutosView.vue';
import CadastroProdutoView from '../views/CadastroProdutoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Login',
      component:LoginView
    },
    {
      path:'/produtos',
      name: 'Produtos',
      component:ProdutosView
    },
    {
      path:'/cadastro',
      name: 'Cadastro de Produtos',
      component:CadastroProdutoView
    },
  ],
})

export default router
