<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
