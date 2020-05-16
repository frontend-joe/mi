<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
