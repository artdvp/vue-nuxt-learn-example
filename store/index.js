import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'

const createStore = () => {
    return new Vuex.Store({
        state: {
            showWeather: false,
            template: 0
        },
        mutations
    })
}

export default createStore