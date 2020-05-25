<template>
  <StyledWrapper :wrapperWidth="wrapperWidth" :wrapperHeight="wrapperHeight">
    <StyledFirstDot :dotSize="dotSize" />
    <StyledSecondDot :dotSize="dotSize" />
    <StyledThirdDot :dotSize="dotSize" />
  </StyledWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const props = {
  dotGap: String,
  dotSize: String,
  wrapperHeight: String,
  wrapperWidth: String
};

const animationDuration = "1s";

const StyledWrapper = styled("div", props)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.wrapperHeight || "56px"};
  width: ${props => props.wrapperWidth || "auto"};
`;

const StyledDot = styled("div", props)`
  width: ${props => props.dotSize || "10px"};
  height: ${props => props.dotSize || "10px"};
  margin-right: ${props => props.dotGap || "2px"};
  border-radius: 50%;
  background: ${props => props.dotColor || "#fff"};
  opacity: 0;

  &:last-child {
    margin-right: 0;
  }
`;

const dotAnimation = keyframes`
  0% {
    opacity: 0.25;
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 0.25;
  }
`;

const StyledFirstDot = styled(StyledDot)`
  animation: ${dotAnimation} infinite ${animationDuration};
`;

const StyledSecondDot = styled(StyledDot)`
  animation: ${dotAnimation} infinite ${animationDuration};
  animation-delay: 0.33s;
`;

const StyledThirdDot = styled(StyledDot)`
  animation: ${dotAnimation} infinite ${animationDuration};
  animation-delay: 0.66s;
`;

export default {
  props,
  components: {
    StyledWrapper,
    StyledFirstDot,
    StyledSecondDot,
    StyledThirdDot
  }
};
</script>
