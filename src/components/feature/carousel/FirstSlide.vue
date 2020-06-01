<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#fbfbff">
        <StyledBackground
          :src="require('@/assets/images/wave-first-slide.png')"
        />
        <StyledBackgroundText>r Plane</StyledBackgroundText>
        <!-- <StyledBackgroundText>Underline</StyledBackgroundText> -->
        <StyledBubble
          :style="{ display: 'none' }"
          :src="require('@/assets/images/bubble.png')"
        />
        <Top topRightText="#05" />
        <Middle horizontalAlign="flex-start">
          <StyledMiddleText>
            <StyledTitle>
              The
              <StyledTitleLongText>Paper Plane</StyledTitleLongText>
              Send
            </StyledTitle>
            <!-- <StyledTitle>The Underline Button</StyledTitle> -->
            <div :style="{ marginBottom: '1.5rem' }">
              <StyledImage :src="require('@/assets/images/joe.png')" />
              <StyledImage :src="require('@/assets/images/mike.png')" isLast />
            </div>
            <StyledNumber>Collab Series #05</StyledNumber>
          </StyledMiddleText>
          <StyledMiddleWrapper>
            <FocalInteraction />
          </StyledMiddleWrapper>
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
import FocalInteraction from "@/components/interactions/aeroplaneSend/Wrapper";
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
  top: 163px;
  left: -25px;
  font-size: 180px;
  font-weight: 600;
  color: #f3f4fb;
  white-space: nowrap;
`;

const StyledBubble = styled.img`
  position: absolute;
  z-index: 0;
  right: 100px;
  bottom: 60px;
  height: 120px;
`;

const StyledMiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 288px;
`;

const StyledMiddleText = styled.div`
  position: relative;
  z-index: 1;
  width: 45%;
  padding-left: 28px;
`;

const StyledNumber = styled.div`
  color: ${rgba("#090C22", 0.38)};
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledTitle = styled.div`
  font-size: 5.25rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;
  color: ${rgba("#090C22", 0.85)};
`;

const StyledTitleLongText = styled.div`
  white-space: nowrap;
`;

const imageProps = { isLast: Boolean };
const StyledImage = styled("img", imageProps)`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 3px solid #f7f7ff;

  transform: translateX(${props => (props.isLast ? "-25px" : "0")});
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

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
    StyledBackgroundText,
    StyledBubble,
    StyledMiddleWrapper,
    StyledMiddleText,
    StyledNumber,
    StyledTitle,
    StyledTitleLongText,
    StyledImage,
    StyledBranding1,
    StyledBranding2,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  }
};
</script>
