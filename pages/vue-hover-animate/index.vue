<template>
    <section class="contain-sec">
        <div class="center">
            <nuxt-link to="/">Home</nuxt-link>
        </div>
        <br>
        <div class="card-row">
                <div class="card" v-for="(card,index) in cards" :key="index" :ref="`card_${index}`" 
                    @mouseover="hoverCard(index)"
                    @mouseout="hoverCard(-1)">
                <img :src="card.image" alt="" class="card-image" :class="{'selected' : isSelected(index)}">
            
                <div class="card-footer">
                    <p class="card-text">
                    RECIPE
                    </p>
                    <h3 class="card-title">{{ card.title }}</h3>
                    <p class="card-text">
                    by
                    <span class="card-author" :class="{'selected': isSelected(index)}">{{ card.author }}</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TweenMax from "gsap";

export default {
  asyncData() {
    return {
      cards: [
        {
          title: "Gooey PBJ Brownies",
          author: "John Walibur",
          image: "https://placeimg.com/640/480/nature"
        },
        {
          title: "Crisp Spanish Tortilla Matzo Brei",
          author: "Colman Andrews",
          image: "https://placeimg.com/640/480/animals"
        },
        {
          title: "Grilled Shrimp with Lemon and Garlic",
          author: "Celeste Mills",
          image: "https://placeimg.com/640/480/arch"
        }
      ],
      selectedCard: -1
    };
  },
  methods: {
    hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex;
      this.animateCards();
    },
    isSelected(cardIndex) {
      return this.selectedCard === cardIndex;
    },
    animateCards() {
      this.cards.forEach((card, index) => {
        const direction = this.calculateCardDirection(index, this.selectedCard);
        TweenMax.to(this.$refs[`card_${index}`], 0.3, { x: direction * 50 });
      });
    },
    calculateCardDirection(cardIndex, selectedIndex) {
      if (selectedIndex === -1) {
        return 0;
      }

      const diff = cardIndex - selectedIndex;
      return diff === 0 ? 0 : diff / Math.abs(diff);
    }
  }
};
</script>

<style scoped>
.contain-sec {
  background-color: #e1e7e7;
  height: 100vh;
}

.card-row {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 780px;
  width: 100%;
  height: 500px;
}

.card {
  position: relative;
  background-color: #ffffff;
  height: 370px;
  width: 240px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  /*----*/
  transition: height 0.3s, box-shadow 0.3s;
}

.card:hover {
  height: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}
.card-image {
  /* center horizontally overflown image */
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;
  height: 220px;
  min-width: 100%;
  /* ---- */
  transition: height 0.3s, opacity 0.3s;
}

.card-image.selected {
  height: 410px;
  opacity: 0.3;
}

.card-footer {
  position: absolute;
  bottom: 0;
  height: 130px;
  padding: 10px 15px;
  font-family: Helvetica;
}

.card-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}

.card-title {
  font-family: Serif;
}

.card-author {
  font-size: 14px;
  color: #bab096;
  /* ----- */
  transition: color 0.3s;
}

.card-author.selected {
  color: #6a6456;
}
</style>
