<template>
  <StyledTitle>
    Micro Interactions
  </StyledTitle>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledTitle = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;
  color: ${rgba("white", 0.75)};
`;

export default {
  components: {
    StyledTitle
  }
};
</script>
