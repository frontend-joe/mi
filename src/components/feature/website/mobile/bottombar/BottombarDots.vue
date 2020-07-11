<template>
  <StyledWrapper>
    <StyledDotWrapper>
      <StyledDotButton
        v-for="dot in dots"
        :key="dot"
        @click="$emit('dot-clicked', dot)"
      >
        <StyledDot :active="dot === activeIndex" />
      </StyledDotButton>
    </StyledDotWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const StyledDotWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDotButton = styled.button`
  padding: 1rem 0.325rem;
`;

const dotProps = { active: Boolean };
const StyledDot = styled("span", dotProps)`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid
    ${props => (props.active ? props.theme.colorPrimary : "#d4d4d4")};
  margin: 0;
  background: ${props => (props.active ? props.theme.colorPrimary : "#d4d4d4")};

  ${props =>
    props.active ? "transform: scale(1, 1);" : "transform: scale(0.625,0.625)"};

  transition: transform 0.25s;

  &:first-child {
    margin-left: 0;
  }
`;

export default {
  props: {
    dots: Array,
    activeIndex: Number
  },
  components: {
    StyledWrapper,
    StyledDotButton,
    StyledDot,
    StyledDotWrapper
  }
};
</script>
