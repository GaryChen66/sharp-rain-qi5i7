<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <template v-for="(petcard, index) in imageDetails">
          <div :key="index + '-card'" class="col-12 col-sm-4 col-md-4 col-lg-2">
            <ImageCard :petcard="petcard"></ImageCard>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ImageCard from "./components/ImageCard";

export default {
  name: "App",
  components: {
    ImageCard
  },
  data() {
    return {
      imageDetails: []
    };
  },
  created() {
    this.imageDetails.push({
      id: "11111",
      ad: false,
      mileage: "Forest",
      pricing: {
        our_sale_price: 40000
      },
      attributes: {
        body_style: "Towel"
      },
      price_markup: "$40,000",
      trim_or_body_type_formatted_long: "Towel",
      front_photo: {
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
      },
      heading: "Cute Dog Thing"
    });

    this.imageDetails.push({
      id: "22222",
      ad: false,
      mileage: "fun fun",
      pricing: {
        our_sale_price: 40000
      },
      attributes: {
        body_style: "Many"
      },
      price_markup: "$40,000",
      trim_or_body_type_formatted_long: "Many",
      front_photo: {
        url: "https://i.picsum.photos/id/169/2500/1662.jpg"
      },
      heading: "Dogs Grazing"
    });

    for (let i = 0; i < 300; i++) {
      let wieghtedIndex = Math.floor(Math.random() * 8);
      if (wieghtedIndex < 4) {
        this.imageDetails.push(Object.create(this.imageDetails[0]));
      } else if (wieghtedIndex < 8) {
        this.imageDetails.push(Object.create(this.imageDetails[1]));
      }
    }
  }
};
</script>

<style>
.card {
  margin-top: 1rem;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
