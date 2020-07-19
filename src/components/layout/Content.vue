<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

const StyledWrapper = styled(VuePerfectScrollbar)`
  flex: 1 1 auto;
  min-height: 0;
  ${"" /* overflow: auto; */}
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
