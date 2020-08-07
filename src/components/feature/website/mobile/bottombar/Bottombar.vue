<template>
  <StyledWrapper>
    <SwipeIndicator v-if="false" />
    <ViewCodeButton
      v-if="true"
      v-on:viewcode-clicked="$emit('viewcode-clicked')"
    />
    <!-- <BottombarLogo />
    <BottombarDots
      :activeIndex="activeIndex"
      v-on:dot-clicked="onDotClicked"
      :dots="dots"
    />
    <BottombarCollabs :collabs="collabs" /> -->
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import SwipeIndicator from "./SwipeIndicator";
import ViewCodeButton from "./ViewCodeButton";
// import BottombarDots from "./BottombarDots";
// import BottombarLogo from "./BottombarLogo";
// import BottombarCollabs from "./BottombarCollabs";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 2rem;
  flex: 0 0 56px;
  pointer-events: none;
`;

export default {
  props: {
    dots: Array,
    activeIndex: Number,
    collabs: Array
  },
  components: {
    StyledWrapper,
    SwipeIndicator,
    ViewCodeButton
    // BottombarDots,
    // BottombarLogo,
    // BottombarCollabs
  },
  methods: {
    onDotClicked(dot) {
      this.$emit("dot-clicked", dot);
    }
  }
};
</script>
