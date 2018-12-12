import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { ProductState, Product } from '@/store/products/types';
import { RootState } from '@/store/types';
// import { AxiosResponse, AxiosPromise } from 'axios';

type ProductActionContext = ActionContext<ProductState, RootState>;
type ProductActionTree = ActionTree<ProductState, RootState>;

export const actions: ProductActionTree = {
  async fetchProducts(context: ProductActionContext): Promise<any> {
    try {
      const data: Response = await fetch('/fixtures/products.json');
      const products: Product[] = await data.json();
      context.commit('setProducts', products);
    } catch (e) {
      context.commit('productsError', e.message);
    }
  },
  // async fetchData(context: ProductActionContext): Promise<any> {
  //   try {
  //     const response: AxiosResponse = await Vue.axios({
  //       url: '/todos',
  //     });
  //     const payload: Todo[] = response && response.data;
  //     context.commit('todosLoaded', payload);
  //   } catch (e) {
  //     context.commit('todosError', e.message);
  //   } finally {
  //     console.log('petición para obtener todos finalizada');
  //   }
  // },
  // async addTodo(context: TodoActionContext, todo: string): Promise<any> {
  //   try {
  //     const response: AxiosResponse = await Vue.axios({
  //       method: 'POST',
  //       url: '/todos',
  //       data: {
  //         id: Date.now(),
  //         text: todo,
  //         done: false,
  //       },
  //     });
  //     if (response && response.data) {
  //       context.dispatch('fetchData');
  //     }
  //   } catch (e) {
  //     context.commit('todosError', e.message);
  //   } finally {
  //     console.log('petición para insertar todos finalizada');
  //   }
  // },
  // async updateTodoStatus(context: TodoActionContext, todo: Todo): Promise<any> {
  //   try {
  //     const response: AxiosResponse = await Vue.axios({
  //       method: 'PUT',
  //       url: `/todos/${todo.id}`,
  //       data: {
  //         id: todo.id,
  //         text: todo.text,
  //         done: !todo.done,
  //       },
  //     });
  //     if (response && response.data) {
  //       context.dispatch('fetchData');
  //     }
  //   } catch (e) {
  //     context.commit('todosError', e.message);
  //   } finally {
  //     console.log('petición para actualizar todo finalizada');
  //   }
  // },
  // async deleteTodo(context: TodoActionContext, todo: Todo): Promise<any> {
  //   try {
  //     const { data } = await Vue.axios({
  //       method: 'DELETE',
  //       url: `/todos/${todo.id}`,
  //     });
  //     if (data) {
  //       context.dispatch('fetchData');
  //     }
  //   } catch (e) {
  //     context.commit('todosError', e.message);
  //   } finally {
  //     console.log('petición para elimiar todo finalizada');
  //   }
  // },
};
