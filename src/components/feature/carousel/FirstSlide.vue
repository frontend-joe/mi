<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#41009a">
        <StyledBackground
          v-if="false"
          :src="require('@/assets/images/wave-first-slide.png')"
        />
        <StyledBackgroundText>Shadow</StyledBackgroundText>
        <StyledBubble
          :style="{ display: 'none' }"
          :src="require('@/assets/images/bubble.png')"
        />
        <Top topRightText="#13" />
        <Middle verticalAlign="flex-start" horizontalAlign="flex-start">
          <StyledContentLeft>
            <StyledNumber>#13</StyledNumber>
            <StyledTitle>
              The
              <StyledTitleLongText>Shadow</StyledTitleLongText>
              Button
            </StyledTitle>
            <div :style="{ marginBottom: '4px' }">
              <StyledImage :src="require('@/assets/images/joe-grey.png')" />
              <StyledImage
                :src="require('@/assets/images/mauricio.png')"
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
            <FocalInteraction
              backgroundColor="#001429"
              outlineColor="white"
              textboxColor="white"
              placeholderColor="rgba(255, 255, 255, 0.5)"
            />
          </StyledFocalFrame>
        </Middle>
        <Bottom />
        <StyledBranding1
          v-if="false"
          :src="require('@/assets/images/first-slide-branding1.png')"
        />
        <StyledBranding2
          v-if="true"
          :src="require('@/assets/images/first-slide-branding2.png')"
        />
        <StyledBrandingBottom
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
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalInteraction from "@/components/interactions/ShadowButton";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";

const StyledWrapper = styled.div`
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
  color: ${rgba("white", 0.05)};
  white-space: nowrap;
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
  height: 270px;
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
  color: ${rgba("#fff", 0.5)};
  font-size: 50px;
  line-height: 52px;
  letter-spacing: -1px;
  font-weight: 600;
  margin-bottom: 14px;
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
  color: ${rgba("#fff", 0.96)};
`;

const StyledTitleLongText = styled.div`
  white-space: nowrap;
`;

const imageProps = { isLast: Boolean };
const StyledImage = styled("img", imageProps)`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 5px solid rgba(255, 255, 255, 0.15);
  transform: translateX(${props => (props.isLast ? "-39px" : "0")});
`;

const StyledBranding1 = styled.img`
  position: absolute;
  z-index: 0;
  right: 120px;
  bottom: 50px;
  width: 100px;
`;

const StyledBranding2 = styled.img`
  position: absolute;
  z-index: 0;
  right: -136px;
  top: 90px;
  width: 200px;
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
  }
};
</script>
