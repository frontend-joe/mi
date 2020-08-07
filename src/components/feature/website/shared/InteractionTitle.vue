<template>
  <Wrapper> The {{ interactionTitle }} </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  width: 15rem;
  line-height: 1.15;
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  margin-right: 2rem;
`;

export default {
  props: {
    interactionName: String
  },
  components: {
    Wrapper
  },
  computed: {
    interactionTitle() {
      console.log("interactionTitle", this.interactionName);
      return this.interactionName && this.interactionName.replace(/-/g, " ");
    }
  }
};
</script>
