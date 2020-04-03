<template>
  <div v-if="isCardLoaded" v-on:click="goToDetail()">
    <div class="card w-100 shadow bg-white rounded">
      <div class="image">
        <img class="w-100" :src="getImgUrl" />
      </div>
      <div class="row w-100 info">
        <div class="col-10 col-md-9 info-context">
          <label class="font-weight-bold header">{{getHeader}}</label>
          <label class="sub-header">{{getGeneres}}</label>
          <p class="font-weight-bold price">{{getPrice}}</p>
        </div>
        <div class="col-2 col-md-3 like-heart">
          <favorite :listing="getListing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import favorite from "./Favorite";
import $ from "jquery";

export default {
  props: ["petcard"],
  components: {
    favorite
  },

  data() {
    return {
      shouldShowCard: false,
      unavailable: false
    };
  },

  mounted() {
    if (this.unavailable) {
      $(`#${this.petcard.id} .petcard-unavailable`).tooltip();
    }
  },

  computed: {
    getImgUrl: function() {
      return this.petcard.front_photo.url;
    },

    getHeader: function() {
      return this.petcard.heading;
    },

    getGeneres: function() {
      const card = this.petcard;
      return `${card.attributes.body_style} | ${card.mileage}`;
    },

    getPrice: function() {
      return this.petcard.price_markup;
    },

    getListing: function() {
      return "";
    }
  },

  methods: {
    goToDetail: function() {
      this.unavailable = true;
      window.location.href = `/search/s/${this.petcard.id}`;
    },

    isCardLoaded: function() {
      return !_.isEmpty(this.petcard);
    }
  }
};
</script>

<style lang="scss" scoped>
.petcard-card {
  min-width: 20%;
  cursor: pointer;
  transition: opacity 0.4s;
  opacity: 0;

  &.showCard {
    opacity: 1;
    transition: opacity 0.4s;
  }
}

.info {
  padding-top: 1rem;
  line-height: 1rem;
}

.info-context {
  padding-left: 2rem;
}
</style>
