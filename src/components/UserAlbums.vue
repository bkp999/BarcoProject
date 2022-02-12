<template>
  <div class="hello">
    <div id="navitem">
      <router-link :to="{ name: 'Users'}">
      Return to Users
      </router-link>
    </div>
    <h1>{{user.name}}'s Albums</h1>
    <ul v-for="album in albums" v-bind:key="album.id">
      <li>
        <router-link :to="{ name: 'AlbumPhotos', params: { id: album.id}}">
          {{album.title}}
          (Album {{album.id}})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      albums: [],
      user: {}
    }
  },

  methods: {
    async getAlbums () {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id + '/albums')
        this.albums = await response.json()
      } catch (error) {
        console.log(error)
      }
    },
    async getUser () {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
        this.user = await response.json()
      } catch (error) {
        console.log(error)
      }
    }
  },

  created () {
    this.getAlbums()
    this.getUser()
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#navitem {
    text-align: left;
    font-weight: bold;
    padding-left: 5%;
    padding-top: 3%;
    position: sticky;
    top: 0px;
}
</style>
