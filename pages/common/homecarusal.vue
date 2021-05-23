<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      class="carusalSlider"
      :no-hover-pause='false'
      indicators
 
      img-width="1024"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image1 -->
      <b-carousel-slide
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/HB-award.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >SLT ZERO ONE AWARDS 2017</h3>
                    <p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 0px 10px;text-align: left;"> Xiteb Pvt Ltd was recently awarded the 'Best Website/Microsite' Award in the Information Technology Sector at the prestigious 'SLT Zero One Awards 2017' The W3C web standards, state of the art advanced web designing techniques & unique/genuine coding used by Xiteb have been evaluated by an eminent judging panel comprised of local and international experts while emphasizing the distinctiveness of the one of a kind effects used along with "Brand Cylinder" and "Moving Map" concepts. </p>
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->
            <!-- Text slides with image2 -->
      <b-carousel-slide
        img-height=""
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/HB-award_block1.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >SLT ZERO ONE AWARDS 2018</h3>
                    <a class="" style="color: white;" href="http://hodabass.lk/"><p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 5px 15px;text-align: left;">www.hodabass.lk was awarded Gold for the ‘Best Community Empowerment Programme’ in Professional Services sector at SLT ZERO ONE Awards for Digital Excellence 2018.
                        Solution by Xiteb (Pvt) Ltd.</p></a> 
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->
            <!-- Text slides with image3 -->
      <b-carousel-slide
        img-height=""
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/slim-nasco.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >SLIM NASCO 2012</h3>
                    <p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 0px 10px;text-align: left;">Xitebl was the official Web & Digital Media Partner for SLIM NASCO (National Sales Congress) 2012 which is the only national level awards to recognize the achievements of the sales professionals in Sri Lanka. SLIM NASCO managed to have many young marketers to the event via online promotions during this time was a remarkable achievement.</p>
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->
            <!-- Text slides with image4 -->
      <b-carousel-slide
        img-height=""
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/brand-line.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >SLIM BRAND EXCELLENCE 2012</h3>
                    <p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 0px 10px;text-align: left;"> Xiteb was the official Web & Digital Media Partner' for SLIM Brand Excellence 2012 which is a celebration of brand excellence at national level and rewards the efforts of Brand Marketers. Team Xiteb® managed to provide a mind-blowing design to match the cowboy theme of the event.</p>
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->
            <!-- Text slides with image5 -->
      <b-carousel-slide
        img-height=""
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/brand-line.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >SLIM BRAND EXCELLENCE 2014</h3>
                    <p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 0px 10px;text-align: left;"> Xiteb was the official Web & Digital Media Partner for SLIM Brand Excellence 2014 which is a celebration of brand excellence at national level and rewards the efforts of Brand Marketers. Team Xiteb managed to provide a mind-blowing design to match theme of the event. </p>
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->
            <!-- Text slides with image6 -->
      <b-carousel-slide
        img-height=""
        class="slider_image_size_adjust"
        img-src=""
      >
          <b-row>
                <b-col sm="6" md="4" lg="6">
                    <img class="" style="height:300px" src="~/assets/front/images/people-awards.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        
                    </div>
                </b-col>
                <b-col sm="6" md="8" lg="6" style="margin: auto;margin-left:-8%">
                    <h3 class="text-left coloue_select" >PEOPLE'S AWARDS 2012</h3>
                    <p style="background: white;background: #00000045;border-radius: 10px;color:white;padding: 0px 10px;text-align: left;">Xiteb was the official Web & Digital Media Partner' for SLIM Nielson People's Awards 2012. The SLIM - Nielsen People's Award is an initiative of the Sri Lanka Institute of Marketing and the Nielsen Company Lanka ( Pvt) Ltd. In 2006.</p>
                </b-col>
            </b-row>
      </b-carousel-slide>
      <!-- Text slides with image -->

     
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.coloue_select{
    color: white;
}
.slider_image_size_adjust{
    height: 400px;
}
.slider_image_size_adjust > img{
    /* height: ; */
}
.carusalSlider{
  background-image: url('https://xiteb.net/projects/xiteb-blog-test/public/blog/assets/images/NEWBG.jpg');
  background-repeat: round;
  background-size: auto;
}
@media screen and (max-width: 574px) {
  .coloue_select{
    color: yellow;
  }
  .slider_image_size_adjust{
      height: 750px;
  }
  .slider_image_size_adjust > img {
      /* height: 100%; */
  }
}
</style>