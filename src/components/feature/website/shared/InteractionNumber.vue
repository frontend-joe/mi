<template>
  <Wrapper>#<slot /></Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  line-height: 1.5;
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  color: rgba(0, 0, 0, 0.28);
`;

export default {
  components: {
    Wrapper
  }
};
</script>
