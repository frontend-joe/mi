<template>
  <StyledWrapper>
    <HamburgerCross
      v-on:crossbutton-clicked="$emit('crossbutton-clicked')"
      :iconColor="open ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0,0,0,0.75)'"
      :open="open"
      background="transparent"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import HamburgerCross from "@/components/interactions/hamburgerClose/CrossButton";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
`;

export default {
  props: {
    open: Boolean
  },
  components: {
    StyledWrapper,
    HamburgerCross
  }
};
</script>
