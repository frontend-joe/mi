<template>
  <StyledWrapper>
    <CrossButton
      v-on:crossbutton-clicked="handleCrossButtonClicked"
      :open="open"
      iconColor="white"
      size="80px"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import CrossButton from "./CrossButton";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    CrossButton
  },
  methods: {
    handleCrossButtonClicked() {
      this.open = !this.open;
    }
  },
  data: function() {
    return {
      open: undefined
    };
  }
};
</script>
