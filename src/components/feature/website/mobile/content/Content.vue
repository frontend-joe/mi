<template>
  <StyledWrapper>
    <slot> </slot>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
