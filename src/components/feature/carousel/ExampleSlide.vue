<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#FBFBFF">
        <StyledSlowMoMessage v-if="false">
          Part I Complete
        </StyledSlowMoMessage>
        <StyledSlowMoImage
          v-if="false"
          :src="require('@/assets/images/slow-motion.png')"
        />
        <StyledBackground
          v-if="true"
          :src="require('@/assets/images/wave-example-slide.png')"
        />
        <Top textColor="#10132F" topRightText="#22" />
        <Middle>
          <FocalInteraction :style="{ transform: 'scale(1)' }" />
        </Middle>
        <Bottom handleColor="purple" textColor="#10132F" />
      </Frame>
      <ImagePrev
        v-if="false"
        :image="require('@/assets/images/slide-before-example.png')"
      />
      <ImageNext
        v-if="false"
        :image="require('@/assets/images/slide-after-example.png')"
      />
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";
import FocalInteraction from "@/components/interactions/KebabButton";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import ImagePrev from "./shared/ImagePrev";
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
`;

const StyledBackground = styled.img`
  position: absolute;
  z-index: 0;
  top: -91px;
  right: 0px;
  width: 200%;
`;

const StyledSlowMoMessage = styled.div`
  position: absolute;
  z-index: 1;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  white-space: nowrap;
  color: ${rgba("#090C22", 0.38)};
`;

const slowMoAnimation = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledSlowMoImage = styled.img`
  height: 24px;
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  animation: ${slowMoAnimation} 1.5s infinite;
`;

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
    StyledSlowMoMessage,
    StyledSlowMoImage,
    Frame,
    FrameWrapper,
    ImageNext,
    ImagePrev,
    Top,
    Middle,
    Bottom
  }
};
</script>
