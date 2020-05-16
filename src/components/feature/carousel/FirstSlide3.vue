<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#fbfbff">
        <StyledBackground
          :src="require('@/assets/images/wave-background2.png')"
        />
        <StyledBackgroundText>Hamburger</StyledBackgroundText>
        <StyledBubble
          :style="{ display: 'none' }"
          :src="require('@/assets/images/bubble.png')"
        />
        <Top topRightText="#01" />
        <Middle horizontalAlign="flex-start">
          <StyledMiddleText>
            <StyledTitle>The Hamburger Close</StyledTitle>
            <div :style="{ marginBottom: '1rem' }">
              <StyledImage :src="require('@/assets/images/joe.png')" />
              <StyledImage :src="require('@/assets/images/leeo.png')" isLast />
            </div>
            <StyledNumber>Collab Series #01</StyledNumber>
          </StyledMiddleText>
          <StyledMiddleWrapper>
            <FocalInteraction size="200px" />
          </StyledMiddleWrapper>
        </Middle>
        <Bottom />
      </Frame>
      <ImageNext
        v-if="false"
        :image="require('@/assets/images/custom – 2.png')"
      />
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalInteraction from "@/components/interactions/hamburgerCross/Wrapper2";
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
  top: -140px;
  left: 0;
  width: 200%;
  height: 400px;
`;

const StyledBackgroundText = styled.div`
  position: absolute;
  z-index: 0;
  top: 170px;
  left: -25px;
  font-size: 180px;
  font-weight: 600;
  color: #f3f4fb;
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
  height: 318px;
`;

const StyledMiddleText = styled.div`
  position: relative;
  z-index: 1;
  width: 45%;
  padding-left: 28px;
`;

const StyledNumber = styled.div`
  color: ${rgba("#10132F", 0.38)};
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledTitle = styled.div`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1rem;
`;

const imageProps = { isLast: Boolean };
const StyledImage = styled("img", imageProps)`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 3px solid #f7f7ff;

  transform: translateX(${props => (props.isLast ? "-25px" : "0")});
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
    StyledImage,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  }
};
</script>
