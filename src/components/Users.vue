<template>
  <div>
    <h1>Users</h1>
    <ul v-for="user in users" v-bind:key="user.id">
      <li>
        <router-link :to="{ name: 'UserAlbums', params: { id: user.id}}">
          {{user.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      users: []
    }
  },

  methods: {
    async getUsers () {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        this.users = await response.json()
      } catch (error) {
        console.log(error)
      }
    }
  },

  created () {
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
