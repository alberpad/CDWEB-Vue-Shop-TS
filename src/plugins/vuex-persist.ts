// Importar este plugin en la store, no en el main
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';

export default new VuexPersistence({
  // Para persistir en localStorage
  // storage: window.localStorage,
  // Para persistir en indexedDB o en WEBSQL
  storage: localForage,
  modules: ['cartModule'],
});
