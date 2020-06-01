<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#ffffff">
        <StyledSlowMoMessage>
          Now let's see it slow
        </StyledSlowMoMessage>
        <StyledBackground
          :src="require('@/assets/images/wave-example-slide.png')"
        />
        <Top topRightText="#05" />
        <Middle>
          <FocalInteraction
            slowMo
            :style="{ transform: 'scale(1.25, 1.25)' }"
          />
        </Middle>
        <Bottom />
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
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalInteraction from "@/components/interactions/aeroplaneSend/Wrapper";
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
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  white-space: nowrap;
  color: ${rgba("#090C22", 0.85)};
`;

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
    StyledSlowMoMessage,
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
