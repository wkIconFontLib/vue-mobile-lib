<template>
  <div :class="swipeSlideClass">
    <swiper :options="swipeOption">
      <swiper-slide class="swiper-item" v-for="item in swipeSliders":key="item.id">
        <a :href="item.url">
          <img v-if="swipeOption.lazyLoading ? true : false" :data-src="item.imgUrl" class="swiper-lazy">
          <img v-else :src="item.imgUrl">
        </a>
      </swiper-slide>
      <div v-if="swipeOption.pagination ? true : false" :class="paginationClass" slot="pagination"></div>
    </swiper>
    <div v-if="swipeOption.prevButton ? true : false" :class="prevButtonClass"></div>
    <div v-if="swipeOption.nextButton ? true : false" :class="nextButtonClass"></div>
  </div>
</template>
<script type="text/babel">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props: {
      /**
       * paginationClass  定义分页器默认class
       * type String
       * default 'swiper-pagination'
       * example 'swipe-page'
       */
      paginationClass: {
        type: String,
        default () {
          return 'swiper-pagination'
        }
      },
      /**
       * prevButtonClass  定义前进按钮默认class
       * type String
       * default 'swiper-button-prev'
       * example 'swipe-btn-prev'
       */
      prevButtonClass: {
        type: String,
        default () {
          return 'swiper-button-prev'
        }
      },
      /**
       * nextButtonClass  定义后退按钮默认class
       * type String
       * default 'swiper-button-next'
       * example 'swipe-btn-next'
       */
      nextButtonClass: {
        type: String,
        default () {
          return 'swiper-button-next'
        }
      },
      /**
       * swipeSlideClass  选择轮播图样式class
       * type String
       * default 'swipe-slide'
       * example 'swipe-slide-two'
       */
      swipeSlideClass: {
        type: String,
        default () {
          return 'swipe-slide'
        }
      },
      /**
       * swipeSliders  轮播图数据及其格式
       * type Array
       */
      swipeSliders: {
        type: Array,
        default () {
          return [
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
          ]
        }
      },
      /**
       * swipeSliders  轮播图参数配置
       * type Array
       * 参数详细配置可参考http://www.swiper.com.cn/api/pagination/2014/1217/68.html
       */
      swipeOption: {
        type: Object,
        default () {
          return {
            // 设定初始化时slide的索引
            initialSlide: 0,
            lazyLoading: true
          }
        }
      }
    },
    name: 'swipeSlide',
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  .swipe-slide {
    background-color: $bgPrimaryColor;
    img {
      width: 7.5rem;
      height: 4.2rem
    }
    &-two {
      img {
        width: 7.5rem;
        height: 7.5rem;
      }
    }
  }
</style>
<style lang="scss" rel="stylesheet/scss">
  @import "~mobile-ui-lib/src/stylesheets/themes/themes.scss";
  .swipe-slide, .swipe-slide-two {
    position: relative;
    .swiper-pagination-bullet {
      opacity: 1;
      background-color: $bgSecColor;
      &-active {
        background-color: $bgFourColor;
      }
    }
  }
</style>
