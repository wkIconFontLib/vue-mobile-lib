<template>
  <example :hdTitle="hdTitle">
    <div slot="main">
      <swipe-slide swipeSlideClass="swipe-slide" :swipe-option="swiperOption" :swipe-sliders="swipeSliders"></swipe-slide>
      <swipe-slide swipeSlideClass="swipe-slide-two" :swipe-option="swiperOption2" :swipe-sliders="swipeSliders2"></swipe-slide><!--
      <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item" v-for="item in swipeSliders":key="item.id">
        <a :href="item.url">
          <img :src="item.imgUrl" :alt="item.title">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-pagination"></div>-->
    </div>
  </example>
</template>
<script type="text/babel">
  import Example from '../example.vue'
  // import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import swipeSlide from '../../components/swipeSlide'
  export default {
    data () {
      return {
        hdTitle: 'slider',
        swipeSliders: [
          {
            'id': 1,
            'title': 'hello',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/5E/wKgCD1kH-f-Ad4T2AAFJZLQ4xBQ894.jpg'
          },
          {
            'id': 2,
            'title': 'hello2',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'https://image.dengyiwang.com/32e4b1adef0f0d18985ef70891864bb4'
          },
          {
            'id': 3,
            'title': 'hello3',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/5E/wKgCD1kH-f-Ad4T2AAFJZLQ4xBQ894.jpg'
          },
          {
            'id': 1,
            'title': 'hello',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/5E/wKgCD1kH-f-Ad4T2AAFJZLQ4xBQ894.jpg'
          },
          {
            'id': 2,
            'title': 'hello2',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'https://image.dengyiwang.com/32e4b1adef0f0d18985ef70891864bb4'
          },
          {
            'id': 3,
            'title': 'hello3',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/5E/wKgCD1kH-f-Ad4T2AAFJZLQ4xBQ894.jpg'
          }
        ],
        swiperOption: {
          initialSlide: 0, // 设定初始化时slide的索引
          lazyLoading: true,
          prevButton: '.swipe-slide .swiper-button-prev',
          nextButton: '.swipe-slide .swiper-button-next',
          pagination: '.swipe-slide .swiper-pagination'
        },
        swipeSliders2: [
          {
            'id': 1,
            'title': 'hello',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/62/wKgCD1kS4mmAREvmAAlVhRCHKs8345.png'
          },
          {
            'id': 2,
            'title': 'hello2',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/62/wKgCD1kS3leAESB8AAGMOFzCPmE904.jpg'
          },
          {
            'id': 3,
            'title': 'hello3',
            'url': 'http://www.dengyiwang.com',
            'imgUrl': 'http://app.irddtest.com:8001/group1/M00/00/61/wKgCD1kRN0WAOIAEAAEDzLaj570563.jpg'
          }
        ],
        swiperOption2: {
          initialSlide: 0, // 设定初始化时slide的索引
          prevButton: '.swipe-slide-two .swiper-button-prev',
          nextButton: '.swipe-slide-two .swiper-button-next',
          pagination: '.swipe-slide-two .swiper-pagination'
        }
      }
    },
    created () {
    },
    components: {
      Example,
      swipeSlide
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
