<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>12 : Exercise</h1>
    <br>
    <hr>
    <div class="app">
       <div class="contain">
        <h2>Blog Posts</h2>

        <div class="new">
        <h3>Add a New Post</h3>
        <form>
            <input v-model.trim="newTitle" placeholder="title" required/>
            <input v-model.trim="newAuthor" placeholder="author name" required/>
            <select v-model="newLabel" required>
            <option disabled value="">Add a New label</option>
            <option>Science</option>
            <option>Math</option>
            <option>Poetry</option>
            <option>History</option>
        </select>
            <button type="submit" @click.prevent="addPost">Add New Blog Post</button>
        </form>
        </div>

        <select v-model="selected">
        <option value="">Filter with a label</option>
        <option>Science</option>
        <option>Math</option>
        <option>Poetry</option>
        <option>History</option>
        </select>
        <br>
        <br>
        <div v-for="(post, i) in postsFilterLabel" :key="i" class="post">
        <span class="label">{{ post.label }}</span>
        <p>{{ post.title }}</p>
        <small>{{ post.author }}</small>
        </div>
    </div>
    </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      posts: [
        {
          author: "@vFitzgerald",
          title: "Quod Ducimus Omnis",
          label: "science"
        },
        {
          author: "@mPalmer",
          title: "Vero Eius Laboriosam Ex Repudiandae",
          label: "math"
        },
        {
          author: "@mDean",
          title: "Magnam Odit",
          label: "science"
        },
        {
          author: "@tCole",
          title: "Velit Mollitia Voluptates Assumenda",
          label: "science"
        },
        {
          author: "@jCooper",
          title: "Eum Commodi Cupiditate",
          label: "poetry"
        },
        {
          author: "@lLamb",
          title: "Amet",
          label: "history"
        },
        {
          author: "@fMartin",
          title: "Voluptatem Fuga Cum Asperiores Error",
          label: "science"
        },
        {
          author: "@eHayes",
          title: "Ipsa Consectetur Rerum Repellat Quia",
          label: "math"
        },
        {
          author: "@cCollier",
          title: "Dolor Nihil Delectus",
          label: "science"
        },
        {
          author: "@cBenson",
          title: "Labore Ipsum Ad Pariatur",
          label: "poetry"
        }
      ],
      newTitle: "",
      newAuthor: "",
      newLabel: ""
    };
  },
  methods: {
    addPost() {
      if (
        this.newTitle !== "" &&
        this.newAuthor !== "" &&
        this.newLabel !== ""
      ) {
        let new_posts = {
          title: this.newTitle,
          author: this.newAuthor,
          label: this.newLabel
        };
        //console.log(new_posts);
        this.posts.push(new_posts);
        this.newTitle = "";
        this.newAuthor = "";
        this.newLabel = "";
      }
    }
  },
  computed: {
    postsFilterLabel() {
      console.log(this.selected);
      return this.selected !== ""
        ? this.posts.filter(
            el => el.label.toLowerCase() === this.selected.toLowerCase()
          )
        : this.posts;
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #5968d7;

.app {
  display: flex;
  justify-content: center;
  font-family: "Work Sans", sans-serif;
}

h2 {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
}

li {
  list-style: none;
  span {
    display: inline-block;
    width: 100px;
  }
}

.contain {
  width: 400px;
  padding: 10px 40px;
}

input,
select {
  font-family: "Work Sans", sans-serif;
}

button {
  color: white;
  border: none;
  border-radius: 3px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 13px;
  width: 97.5%;
  text-align: center;
  padding: 10px 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: 0.25s all ease;
  background: #222;
  margin-bottom: 15px;
  &:hover {
    transform: translateY(1px);
  }
}

select {
  width: 100%;
}

.post,
.new {
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 5px 0 10px;
  p {
    font-weight: bold;
    margin: 10px 0 5px;
  }
}

.new {
  background: #666;
  border: #222;
  margin-bottom: 40px;
  input {
    margin: 0 0 10px;
  }
  select {
    width: 97.5%;
    margin-bottom: 10px;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin: 10px 0;
    color: white;
  }
}

.label {
  border: 1px solid black;
  background: white;
  color: black;
  float: right;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>

