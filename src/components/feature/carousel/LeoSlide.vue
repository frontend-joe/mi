<template>
  <StyledWrapper>
    <Frame background="#2195f3">
      <Middle>
        <FocalInteraction background="transparent" />
      </Middle>
    </Frame>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalInteraction from "@/components/interactions/hamburgerCross/Wrapper2";
import Frame from "./shared/Frame";
import Middle from "./shared/Middle";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "DM Sans";
`;

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    Frame,
    Middle
  }
};
</script>
