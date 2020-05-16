<template>
  <StyledWrapper :src="image" />
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.img`
  position: absolute;
  width: 600px;
  top: 0;
  left: 100%;
`;

export default {
  props: {
    image: String
  },
  components: {
    StyledWrapper
  }
};
</script>
