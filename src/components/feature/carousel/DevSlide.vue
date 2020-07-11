<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#1D1E2C">
        <StyledBackground
          :src="require('@/assets/images/wave-first-slide.png')"
        />
        <Top topRightText="#05" />
        <Middle>
          <FocalInteraction slowMo />
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
import FocalInteraction from "@/components/interactions/ProgressButton";
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

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
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
