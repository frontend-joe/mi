<template>
  <StyledWrapper>
    <slot> </slot>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
