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
            <HamburgerClose />
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
            <TrashcanShredder />
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
            <PaperPlaneSend />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <UnderlineButton />
          </StyledSlide>
        </Slide>
        <Slide>
          <StyledSlide>
            <PasswordValidator />
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
        <Slide>
          <StyledSlide>
            <OutlinedInput
              placeholderColor="rgba(0,0,0,0.38)"
              outlineColor="#0169DF"
              backgroundColor="#fff"
              textboxColor="rgba(0,0,0,0.75)"
            />
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

import TrashcanShredder from "@/components/interactions/trashcanShredder/Wrapper";
import HamburgerClose from "@/components/interactions/hamburgerClose/Wrapper2";
import NavbarSlider from "@/components/interactions/NavbarSlider";
import RippleButton from "@/components/interactions/rippleButton/WrapperCss";
import PaperPlaneSend from "@/components/interactions/PaperPlaneSend";
import UnderlineButton from "@/components/interactions/UnderlineButton";
import PasswordValidator from "@/components/interactions/PasswordValidator";
import UnderlineTabs from "@/components/interactions/UnderlineTabs";
import CopyButton from "@/components/interactions/CopyButton";
import MaterialCheckbox from "@/components/interactions/MaterialCheckbox";
import FillUpButton from "@/components/interactions/FillUpButton";
import OutlinedInput from "@/components/interactions/OutlinedInput";
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
    TrashcanShredder,
    HamburgerClose,
    NavbarSlider,
    RippleButton,
    PaperPlaneSend,
    UnderlineButton,
    PasswordValidator,
    UnderlineTabs,
    CopyButton,
    MaterialCheckbox,
    FillUpButton,
    OutlinedInput
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
        },
        {
          collabs: [
            {
              name: "gabrielemalaspina",
              image: require("@/assets/images/gabriele.png")
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
