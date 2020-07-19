<template>
  <Wrapper> The {{ interactionTitle }} </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-weight: 700;
  text-transform: capitalize;
`;

export default {
  props: {
    detailName: String
  },
  components: {
    Wrapper
  },
  computed: {
    interactionTitle() {
      return this.detailName && this.detailName.replace(/-/g, " ");
    }
  }
};
</script>
