<template>
  <div>
    <div id="navbar">
      <div id="navitem">
        <router-link :to="{ name: 'Users'}">
        Return to Users
        </router-link>
      </div>
      <div id="navitem2">
        <a @click="$router.go(-1)">
        Return to Albums
        </a>
      </div>
    </div>
    <h1>Album {{this.$route.params.id}}'s Photos</h1>
    <table>
      <tr v-for="i in parseInt(photos.length / 4 + 1)" v-bind:key="i">
        <td v-for="photo in photos.slice((i-1)*4,(i-1)*4+4)" v-bind:key="photo.id">
          <img :src=photo.thumbnailUrl>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      photos: []
    }
  },

  methods: {
    async getAlbums () {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums/' + this.$route.params.id + '/photos')
        this.photos = await response.json()
      } catch (error) {
        console.log(error)
      }
    }
  },

  created () {
    this.getAlbums()
  }
}
</script>

<style scoped>
h1 {
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
table {
  margin-left: auto;
  margin-right: auto;
}
#navitem {
    text-align: left;
    font-weight: bold;
    padding-left: 5%;
    padding-top: 3%;
}
#navitem2 {
    text-align: right;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    padding-right: 5%;
}
#navbar {
  position: sticky;
  top: 0px;
}
</style>
