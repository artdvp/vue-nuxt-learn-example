const mutations = {
    toggle: state => state.showWeather = !state.showWeather,
    updateTemplate: (state) => {
        state.template = (state.template + 1) %4;
        state.showWeather = !state.showWeather;
    }
}

export default mutations