<template>
  <section>
    <div class="center">
        <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <div class="container">
      <main>
        <keep-alive>
          <component :is="selected">
            <svg class="winebottle" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 155 140 300">
              <defs>
                <filter id="inverse">
                  <feComponentTransfer>
                    <feFuncR type="table" tableValues="1 0" />
                    <feFuncG type="table" tableValues="1 0" />
                    <feFuncB type="table" tableValues="1 0" />
                  </feComponentTransfer>
                </filter>
              </defs>
              <title id="title">Wine Bottle</title>
              <g>
                <path class="bottle" d="M80.8,465.7c40.6,0,56.8-4.5,56.8-4.5,12-3.2,12-17.2,12-17.2v-148c0-57.4-18.5-90.6-18.5-90.6-24-45.1-27.9-95.4-27.9-95.4l-2.3-64.6c0-4.2,2.9-5.5,2.9-5.5V25.2l-2.9-1.9V18.7c-4.2-5.5-20.1-4.9-20.1-4.9s-15.9-.6-20.1,4.9v4.5l-2.9,1.9V39.8s2.9,1.3,2.9,5.5l-2.3,64.6s-3.9,50.3-27.9,95.4c0,0-18.5,33.1-18.5,90.6v148s0,14,12,17.2C24,461.1,40.2,465.7,80.8,465.7Z"
                  transform="translate(-12 -13.8)" />
                <path class="label" d="M12,295.9s56.5,5,137.6,0V409S78.1,423.6,12,409Z" transform="translate(-12 -13.8)" :style="{ fill: labelColor }"
                />
                <image class="bkimg" x="0" y="293" width="138" height="100" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/' + wineImg + '.png'"
                  :style="{opacity: imgOpacity }"></image>
              </g>
              <g :style="{transform: 'translateY(' + labelPlacement + 'px)'}">
                <text class="wine-text" transform="translate(68 308.2)" text-anchor="middle" font-size="14" :style="{fontFamily: wineFont}">
                  {{ label }}
                </text>
                <g class="flor" id="bottomflor1" v-if="flourish === 'A'">
                  <app-flor1></app-flor1>
                </g>
                <g class="flor" id="bottomflor2" v-if="flourish === 'B'">
                  <app-flor2></app-flor2>
                </g>
                <g class="flor" id="bottomflor3" v-if="flourish === 'C'">
                  <app-flor3></app-flor3>
                </g>
                <g v-else></g>
              </g>
            </svg>
          </component>
        </keep-alive>
      </main>
      <aside>
        <h4>Name your Wine</h4>
        <input v-model="label" maxlength="18">
        <div class="button-row">
          <button @click="selected='appBlack',labelColor='#000000'">Black Label</button>
          <button @click="selected='appWhite',labelColor='#ffffff'">White Label</button>
          <input type="color" v-model="labelColor" defaultValue="#ff0000">
        </div>
        <div class="button-row">
          <h4>Font</h4>
          <button @click="wineFont ='Alegreya SC'">Alegreya SC</button>
          <button @click="wineFont ='Anton'">Anton</button>
          <button @click="wineFont ='Bigelow Rules'">Bigelow Rules</button>
          <button @click="wineFont ='Cormorant Garamond'">Cormorant Garamond</button>
          <button @click="wineFont ='IM Fell English'">IM Fell English</button>
          <button @click="wineFont ='Londrina Shadow'">Londrina Shadow</button>
          <button @click="wineFont ='Megrim'">Megrim</button>
        </div>
        <div class="button-row">
          <h4>Flourish</h4>
          <button @click="flourish ='A'">Flourish A</button>
          <button @click="flourish ='B'">Flourish B</button>
          <button @click="flourish ='C'">Flourish C</button>
          <button @click="flourish ='none'">None</button>
        </div>
        <div class="button-row">
          <h4>Background Image</h4>
          <button @click="wineImg ='geo'">Geo</button>
          <button @click="wineImg ='phone'">Phone</button>
          <button @click="wineImg ='burst'">Burst</button>
          <button @click="wineImg ='abstract'">Abstract</button>
          <button @click="wineImg ='cards'">Cards</button>
          <button @click="wineImg ='circuit'">Circuit</button>
          <button @click="wineImg ='woodgrain'">Woodgrain</button>
          <button @click="wineImg ='none'">None</button>
        </div>
        <div class="button-row">
          <h4>Image Opacity</h4>
          <div class="v-range-slider">
            <input type="range" min="0" v-model="imgOpacity" max="1" step="0.01" name="opacity">
          </div>
        </div>
        <div class="button-row">
          <h4>Label Placement</h4>
          <div class="v-range-slider">
            <input type="range" min="0" v-model="labelPlacement" max="75" step="1" name="label placement">
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import appFlor1 from "@/components/sdrasner/SlotsTwoOne";
import appFlor2 from "@/components/sdrasner/SlotsTwoTwo";
import appFlor3 from "@/components/sdrasner/SlotsTwoThree";
import appBlack from "@/components/sdrasner/SlotsTwoFour";
import appWhite from "@/components/sdrasner/SlotsTwoFive";

export default {
  components: {
    appFlor1,
    appFlor2,
    appFlor3,
    appBlack,
    appWhite
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Alegreya+SC|Anton|Bigelow+Rules|Cormorant+Garamond:400i|IM+Fell+English|Londrina+Shadow|Megrim|Montserrat"
        }
      ]
    };
  },
  data() {
    return {
      selected: "appBlack",
      label: "Label Name",
      wineFont: "Montserrat",
      flourish: "none",
      wineImg: "none",
      imgOpacity: 0.8,
      labelPlacement: 0,
      labelColor: "#000000"
    };
  }
};
</script>

<style lang="scss" scoped>
.winebottle {
  height: 600px;
  margin-left: 15px;
}

.container {
  max-width: 1000px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-row {
  margin: 0 0 20px;
}

h4 {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 10px 0 5px 5px;
}

button {
  background: white;
  border: 2px solid black;
  font-family: "Montserrat", sans-serif;
  padding: 5px 12px;
  border-radius: 1000px;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 5px 5px 0;
  transition: 0.2s all ease-in;
  outline: none;
}

button:hover {
  background: #eee;
  transition: 0.2s all ease-out;
}

main {
  width: calc(38% - 40px);
  float: left;
  padding: 20px;
  background: #e8e5e5;
  display: flex;
  align-items: center;
}

aside {
  background: #aba8a8;
  width: calc(60% - 40px);
  float: left;
  padding: 20px;
}

input {
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  padding: 5px 12px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 5px;
  font-size: 13px;
  outline: none;
  color: #aaa;
}

input[type="color"] {
  width: 15%;
  padding: 1px 3px;
}

.wine-text {
  text-align: center;
}

.flourish {
  transform: translateY(2px);
}

.label {
  background: url("");
}

/* -- slider --*/

.v-range-slider {
  display: flex;
  align-items: center;
  padding: 2px 11px;
}

.v-range-slider input[type="range"] {
  -webkit-appearance: none;
  flex: 1;
  display: block;
  overflow: hidden;
  margin: 5px 0 10px -5px;
  padding: 8px 1px 8px;
  box-sizing: border-box;
  outline: none;
  background: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}

.v-range-slider input::-webkit-slider-runnable-track {
  position: relative;
  height: 2px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

.v-range-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative;
  margin-top: -7px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}

.v-range-slider input::-webkit-slider-thumb:before {
  position: absolute;
  display: inline-block;
  content: "";
  top: 7px;
  left: -2001px;
  width: 2000px;
  height: 2px;
}

/* these are styles that would exist in style scoped in the actual application */

/*---*/

/* end scoped */

@media only screen and (max-width: 800px) {
  main {
    width: 90% !important;
    display: flex;
    justify-content: center;
  }
  aside {
    width: 90% !important;
    border-top: 2px solid black;
  }
}

@media only screen and (min-width: 800px) {
  .container {
    display: flex;
  }
  aside {
    border-left: 2px solid black;
  }
}
</style>
