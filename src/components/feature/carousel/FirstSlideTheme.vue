<template>
  <StyledWrapper :theme="getTheme">
    <FrameWrapper>
      <Frame>
        <StyledBackground
          v-if="false"
          :src="require('@/assets/images/wave-first-slide.png')"
        />
        <StyledBackgroundText :style="{ opacity: darkModeOn ? 1 : 0 }"
          >Switch</StyledBackgroundText
        >
        <StyledBubble
          :style="{ display: 'none' }"
          :src="require('@/assets/images/bubble.png')"
        />
        <Top
          topRightText="#16"
          :style="{ opacity: darkModeOn ? 1 : 0, transition: '0.4s' }"
        />
        <Middle verticalAlign="flex-start" horizontalAlign="flex-start">
          <StyledContentLeft>
            <StyledNumber>#16</StyledNumber>
            <StyledTitle>
              The
              <StyledTitleLongText>Switch</StyledTitleLongText>
              Input
            </StyledTitle>
            <div :style="{ marginBottom: '4px' }">
              <StyledImage :src="require('@/assets/images/joe-grey.png')" />
              <StyledImage
                :src="require('@/assets/images/thalion.png')"
                isLast
              />
            </div>
            <!-- <StyledNumber>
              <StyledNumberIcon class="material-icons-outlined">
                play_circle_outline
              </StyledNumberIcon>
              Animation
            </StyledNumber> -->
          </StyledContentLeft>
          <StyledFocalFrame>
            <FocalInteraction v-on:toggle-dark-mode="toggleDarkMode" />
          </StyledFocalFrame>
        </Middle>
        <Bottom :style="{ opacity: darkModeOn ? 1 : 0, transition: '0.4s' }" />
        <StyledBranding1
          v-if="false"
          :src="require('@/assets/images/first-slide-branding1.png')"
        />
        <StyledBranding2
          :style="{ opacity: darkModeOn ? 1 : 0 }"
          v-if="true"
          :src="require('@/assets/images/first-slide-branding2.png')"
        />
        <StyledBrandingBottom
          :style="{ opacity: darkModeOn ? 1 : 0 }"
          v-if="true"
          :src="require('@/assets/images/first-slide-branding-bottom.png')"
        />
        <StyledPlayButton
          v-if="false"
          :src="require('@/assets/images/play-button.png')"
        />
      </Frame>
      <ImageNext
        v-if="false"
        :image="require('@/assets/images/slide-after-first.png')"
      />
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled, { ThemeProvider } from "vue-styled-components";
import { rgba } from "polished";
import FocalInteraction from "@/components/interactions/DarkModeSwitch";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";

const StyledWrapper = styled(ThemeProvider)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "DM Sans";
  position: relative;
`;

const StyledBackground = styled.img`
  position: absolute;
  z-index: 0;
  top: -80px;
  left: 0;
  width: 200%;
  height: 400px;
`;

const StyledBackgroundText = styled.div`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  font-size: 180px;
  font-weight: 600;
  color: ${props => rgba(props.theme.colorText, 0.05)};
  white-space: nowrap;
  transition: 0.1s;
`;

const StyledBubble = styled.img`
  position: absolute;
  z-index: 0;
  right: 100px;
  bottom: 60px;
  height: 120px;
`;

const StyledFocalFrame = styled.div`
  ${"" /* display: flex;
  justify-content: center; */}
  position: absolute;
  z-index: 10;
  right: 15%;
  bottom: 0;
  height: 263px;
  width: 55%;
  display: flex;
  justify-content: center;
`;

const StyledContentLeft = styled.div`
  position: relative;
  z-index: 1;
  width: 45%;
  padding: 19px 28px 0;
`;

const StyledNumber = styled.div`
  color: ${props => rgba(props.theme.colorText, 0.5)};
  font-size: 50px;
  line-height: 52px;
  letter-spacing: -1px;
  font-weight: 600;
  margin-bottom: 14px;
  transition: 0.4s;
`;

// const StyledNumberIcon = styled.span`
//   font-size: 30px;
//   margin-right: 0.325rem;
// `;

const StyledTitle = styled.div`
  font-size: 5.25rem;
  font-weight: 800;
  line-height: 92px;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
  color: ${props => rgba(props.theme.colorText, 0.96)};

  transition: 0.4s;
`;

const StyledTitleLongText = styled.div`
  white-space: nowrap;
`;

const imageProps = { isLast: Boolean };
const StyledImage = styled("img", imageProps)`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 5px solid ${props => props.theme.colorBorder};
  transform: translateX(${props => (props.isLast ? "-39px" : "0")});
  transition: border-color 0.4s;
`;

const StyledBranding1 = styled.img`
  position: absolute;
  z-index: 0;
  right: 120px;
  bottom: 50px;
  width: 100px;
  transition: 0.4s;
`;

const StyledBranding2 = styled.img`
  position: absolute;
  z-index: 0;
  right: -176px;
  top: 70px;
  width: 260px;
  transition: 0.4s;
`;

const StyledPlayButton = styled.img`
  width: 80px;
  position: absolute;
  left: 30px;
  bottom: 74px;
`;

const StyledBrandingBottom = styled.img`
  position: absolute;
  left: -108px;
  bottom: 82px;
  width: 800px;
  transition: 0.4s;
`;

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
    StyledBackgroundText,
    StyledBubble,
    StyledFocalFrame,
    StyledContentLeft,
    StyledNumber,
    // StyledNumberIcon,
    StyledTitle,
    StyledTitleLongText,
    StyledImage,
    StyledBranding1,
    StyledBranding2,
    StyledBrandingBottom,
    StyledPlayButton,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  },
  methods: {
    toggleDarkMode() {
      this.darkModeOn = !this.darkModeOn;
    }
  },
  data() {
    return {
      darkModeOn: true
    };
  },
  computed: {
    getTheme() {
      if (this.darkModeOn) {
        return {
          colorBackground: "#040404",
          colorText: "white",
          colorBorder: rgba("#fff", 0.15)
        };
      } else {
        return {
          colorBackground: "#f7f7fd",
          colorText: "#10132F",
          colorBorder: rgba("#10132F", 0.25)
        };
      }
    }
  }
};
</script>
