<template>
  <StyledTitle>
    MI
  </StyledTitle>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledTitle = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: ${rgba("white", 0.75)};
`;

export default {
  components: {
    StyledTitle
  }
};
</script>
