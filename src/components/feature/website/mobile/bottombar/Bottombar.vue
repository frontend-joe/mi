<template>
  <StyledWrapper>
    <BottombarLogo />
    <BottombarDots
      :activeIndex="activeIndex"
      v-on:dot-clicked="onDotClicked"
      :dots="dots"
    />
    <BottombarCollabs :collabs="collabs" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import BottombarDots from "./BottombarDots";
import BottombarLogo from "./BottombarLogo";
import BottombarCollabs from "./BottombarCollabs";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 2rem;
  }
`;

export default {
  props: {
    dots: Array,
    activeIndex: Number,
    collabs: Array
  },
  components: {
    StyledWrapper,
    BottombarDots,
    BottombarLogo,
    BottombarCollabs
  },
  methods: {
    onDotClicked(dot) {
      this.$emit("dot-clicked", dot);
    }
  }
};
</script>
