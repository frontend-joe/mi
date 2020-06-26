<template>
  <StyledWrapper>
    <Topbar />
    <Content>
      <Carousel
        :speed="1000"
        :loop="true"
        :navigateTo="navigateTo"
        v-on:page-change="handlePageChanged"
        :per-page="1"
        :mouseDrag="false"
        :paginationEnabled="false"
      >
        <Slide>
          <StyledSlide>
            <HamburgerCross />
          </StyledSlide>
        </Slide>
        <!--
        <Slide>
          <StyledSlide>
            <PartyConfirm />
          </StyledSlide>
        </Slide> -->
        <Slide>
          <StyledSlide>
            <TrashShredderDelete />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <NavbarSlider />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <RippleButton />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <AeroplaneSend />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <UnderlineButton />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <FillUpTextbox />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <UnderlineTabs />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <CopyButton />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <MaterialCheckbox isDark hideLabel />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <FillUpButton />
          </StyledSlide>
        </Slide>
      </Carousel>
    </Content>
    <Bottombar
      :dots="dots"
      :collabs="slides && slides[navigateTo].collabs"
      :activeIndex="navigateTo"
      v-on:dot-clicked="handleDotClicked"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Carousel, Slide } from "vue-carousel";

import Topbar from "./layout/topbar/Topbar";
import Content from "./layout/content/Content";
import Bottombar from "./layout/bottombar/Bottombar";

import TrashShredderDelete from "@/components/interactions/trashShredderDelete/Wrapper";
import HamburgerCross from "@/components/interactions/hamburgerCross/Wrapper2";
import NavbarSlider from "@/components/interactions/navbarSlider/Wrapper";
import RippleButton from "@/components/interactions/rippleButton/WrapperCss";
import AeroplaneSend from "@/components/interactions/aeroplaneSend/Wrapper";
import UnderlineButton from "@/components/interactions/underlineButton/Wrapper";
import FillUpTextbox from "@/components/interactions/fillUpTextbox/Wrapper";
import UnderlineTabs from "@/components/interactions/underlineTabs/Wrapper";
import CopyButton from "@/components/interactions/CopyButton";
import MaterialCheckbox from "@/components/interactions/MaterialCheckbox";
import FillUpButton from "@/components/interactions/fillUpButton/Wrapper";
// import PartyConfirm from "@/components/interactions/partyConfirm/Wrapper";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const StyledSlide = styled(Slide)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default {
  name: "App",
  components: {
    StyledWrapper,
    Topbar,
    Content,
    Bottombar,
    Carousel,
    Slide,
    StyledSlide,
    TrashShredderDelete,
    HamburgerCross,
    NavbarSlider,
    RippleButton,
    AeroplaneSend,
    UnderlineButton,
    FillUpTextbox,
    UnderlineTabs,
    CopyButton,
    MaterialCheckbox,
    FillUpButton
    // PartyConfirm
  },
  computed: {
    dots() {
      return this.slides.map((obj, index) => index);
    }
  },
  data: function() {
    return {
      slides: [
        {
          collabs: [
            {
              name: "leeohgonzalez",
              image: require("@/assets/images/leeo.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "bydanromero",
              image: require("@/assets/images/dan.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "ux.ale",
              image: require("@/assets/images/ale.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "andrew.eugene",
              image: require("@/assets/images/eugene.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "mikevdijssel",
              image: require("@/assets/images/mike.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "janm_ux",
              image: require("@/assets/images/jan.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "misaac85",
              image: require("@/assets/images/miriam.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "lianascimentto",
              image: require("@/assets/images/lia.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "alex.arutuynov",
              image: require("@/assets/images/alex.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "abdulldsgnr",
              image: require("@/assets/images/abdul.png")
            }
          ]
        },
        {
          collabs: [
            {
              name: "janm_ux",
              image: require("@/assets/images/jan.png")
            }
          ]
        }
      ],
      navigateTo: 0
    };
  },
  methods: {
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
  width: 100%;
  height: 100%;
}

.VueCarousel-wrapper {
  height: 100%;
}

.VueCarousel-inner {
  height: 100% !important;
}
</style>
