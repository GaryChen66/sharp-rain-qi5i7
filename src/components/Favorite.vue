<template>
  <a
    href="#"
    @click.prevent="toggleFavorite"
    class="favorite"
    :class="isFavorited ? 'favorited' : 'not-favorited'"
  >
    <i class="fa" :class="isFavorited ? 'fa-heart' : 'fa-heart-o'"></i>
  </a>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    listing: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isFavorited: ""
    };
  },

  mounted() {
    this.isFavorited = this.isFavorite;
  },

  computed: {
    isFavorite() {
      return false; //window.Favorites.includes(this.listing);
    }
  },

  methods: {
    toggleFavorite() {
      axios
        .get(`/fav/${this.listing}`)
        .then(response => (this.isFavorited = !this.isFavorited))
        .catch(response => (window.location = "/login"));
    }
  }
};
</script>
