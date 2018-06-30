<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>21 : Components - 3</h1>
        <div class="app">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-post-photo.jpg" class="main-photo">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-main-profile.jpg" class="main-profile">
          <div class="main-info">
            <span class="name">
              Julianne Delfina
            </span>
            <h3>"It's lovely after it rains"</h3>
          </div>
          <hr>
          <ul>
            <li is="individual-comment" 
              v-for="(comment,index) in comments"
              v-bind:commentpost="comment"
              v-bind:key="index"
            ></li>
          </ul>
          <input v-model="newComment" v-on:keyup.enter="addComment" placholder="Add a comment">
        </div>
    </section>
</template>

<script>
import IndividualComment from "@/components/sdrasner/CommentTemplate";

export default {
  components: {
    IndividualComment
  },
  asyncData() {
    return {
      newComment: "",
      comments: [
        {
          text: "Looks great Julianne!",
          author: "Robin Rendle",
          authorImg:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg"
        },
        {
          text: "I love the Sea",
          author: "Miriam Suzanne",
          authorImg:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg"
        },
        {
          text: "Where are you?",
          author: "Geoff Graham",
          authorImg:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg"
        }
      ]
    };
  },
  methods: {
    addComment() {
      const newCommentObj = {
        text: this.newComment,
        author: "Magoo",
        authorImg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg"
      };

      this.comments.push(newCommentObj);
      this.newComment = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.fflex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: black;
  color: white;
}
.none-style {
  list-style-type: none;
}
.paContent {
  width: 40%;
}

.app {
  background: #212222;
  color: #fff;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 60px;
  width: 370px;
  margin: 0 auto;
  display: table;
  padding: 20px;
  line-height: 1.4em;
}

.name {
  color: #ccc;
}

small {
  color: #bbb;
  font-size: 10px;
}

h3 {
  margin: 5px 0 4px;
}

.main-photo {
  width: 300px;
}

.main-profile {
  float: left;
  border: 3px solid white;
  margin: -25px 0 0 20px;
  position: relative;
  width: 80px;
}

.main-info {
  float: left;
  padding: 10px 20px;
  text-align: left;
  margin-bottom: 15px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

ul {
  margin: 0;
  padding: 0 35px;
}

hr {
  margin: 25px 0 0 32px;
  width: 300px;
  border-top: 0;
  border-bottom: 1px solid #555;
}

input {
  font-family: "Playfair Display", serif;
  width: 280px;
  margin: 30px 0;
  padding: 8px 10px;
  outline: 0;
}
</style>

