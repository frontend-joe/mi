<template>
  <StyledTitle>
    Micro Interactions
  </StyledTitle>
</template>

<script>
import styled from "vue-styled-components";

const StyledTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: 700;
  text-align: center;
`;

export default {
  components: {
    StyledTitle
  }
};
</script>
