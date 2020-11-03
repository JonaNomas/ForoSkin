import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        usuario: null,
        idPerfil: 0,
        esNuevo: false,
        acciones: []
    },
})