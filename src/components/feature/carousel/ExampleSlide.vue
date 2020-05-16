<template>
  <StyledWrapper>
    <FrameWrapper>
      <Frame background="#fbfbff">
        <StyledBackground
          :src="require('@/assets/images/wave-background3.png')"
        />
        <Top topRightText="#01" />
        <Middle>
          <FocalInteraction />
        </Middle>
        <Bottom />
      </Frame>
      <ImagePrev
        v-if="false"
        :image="require('@/assets/images/custom – 14.png')"
      />
      <ImageNext
        v-if="false"
        :image="require('@/assets/images/custom – 8.png')"
      />
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalInteraction from "@/components/interactions/hamburgerCross/Example";
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
  top: -130px;
  right: -35px;
  width: 200%;
  height: 400px;
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
