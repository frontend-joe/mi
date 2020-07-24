<template>
  <StyledWrapper>
    <Topbar />
    <Content>
      <Carousel
        :speed="450"
        :loop="true"
        :navigateTo="navigateTo"
        v-on:page-change="handlePageChanged"
        :per-page="1"
        :mouseDrag="false"
        :paginationEnabled="false"
      >
        <Slide v-for="(c, index) in slides" :key="index">
          <StyledSlide :background="c.background">
            <component :is="c.component"></component>
          </StyledSlide>
        </Slide>
      </Carousel>
    </Content>
    <Detail
      v-on:close-dialog="detailOpen = false"
      :isOpen="detailOpen"
      :interaction="slides && slides[navigateTo]"
    />
    <Bottombar
      v-on:viewcode-clicked="handleCodeButtonClicked"
      :dots="dots"
      :collabs="slides && [slides[navigateTo]]"
      :activeIndex="navigateTo"
      v-on:dot-clicked="handleDotClicked"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Carousel, Slide } from "vue-carousel";

import Topbar from "./topbar/Topbar";
import Content from "./content/Content";
import Detail from "./detail/Detail";
import Bottombar from "./bottombar/Bottombar";

const StyledWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  ${"" /* @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 2rem;
    display: none;
  } */}
`;

const styleProps = { background: String };

const StyledSlide = styled("div", styleProps)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.background || "transparent"};
`;

export default {
  props: {
    slides: Array
  },
  components: {
    StyledWrapper,
    Topbar,
    Content,
    Detail,
    Bottombar,
    Carousel,
    Slide,
    StyledSlide
  },
  computed: {
    dots() {
      return this.slides.map((obj, index) => index);
    }
  },
  data: function() {
    return {
      detailOpen: false,
      navigateTo: 0
    };
  },
  methods: {
    handleCodeButtonClicked(interationTitle) {
      this.detailOpen = true;
      console.log("handleCodeButtonClicked", interationTitle);
    },
    handleDotClicked(dot) {
      this.navigateTo = dot;
    },
    handlePageChanged(page) {
      this.navigateTo = page;
    }
  }
};
</script>

<style>
.VueCarousel {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.VueCarousel-wrapper {
  height: 100%;
}

.VueCarousel-inner {
  height: 100% !important;
}
</style>
