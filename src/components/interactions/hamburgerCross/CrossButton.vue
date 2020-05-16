<template>
  <StyledButton
    :background="background"
    :size="size"
    :open="open"
    :showShadow="showShadow"
    @click="$emit('crossbutton-clicked')"
  >
    <StyledIconWrapper>
      <StyledLine1 class="line-1" :open="open" :iconColor="iconColor" />
      <StyledLine2 class="line-2" :open="open" :iconColor="iconColor" />
      <StyledLine3 class="line-3" :open="open" :iconColor="iconColor" />
    </StyledIconWrapper>
  </StyledButton>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const props = {
  background: String,
  iconColor: String,
  size: String,
  open: Boolean,
  showShadow: Boolean
};

const StyledButton = styled("button", props)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || "100px"};
  height: ${props => props.size || "100px"};
  border-radius: 0.5rem;
  background: ${props => props.background || "#6d77d5"}
  box-shadow: ${props =>
    props.showShadow
      ? "0 24px 38px 3px rgba(0, 0, 0, 0.025), 0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);"
      : ""};

  &:hover .line-1 {
    ${props => (props.open ? "" : "transform: rotate(0) translate(0, -4px)")};
  }

  &:hover .line-3 {
    ${props => (props.open ? "" : "transform: rotate(0) translate(0, 4px)")};
  }
`;

const StyledIconWrapper = styled.span`
  position: relative;
  width: 36px;
  height: 36px;
  ${"" /* background: pink; */}
`;

const StyledLine = styled("span", props)`
  position: absolute;
  width: 36px;
  min-width: 36px;
  height: 4px;
  border-radius: 2px
  left: 0;
  transform-origin: 50% 100%;
  transition: transform 0.15s;
`;

const line1AnimationIn = keyframes`
  0% {
    transform: rotate(0) translate(0, 0);
  }
  25% {
    transform: rotate(0) translate(0 , 6px);
  }
  75% {
    transform: rotate(0) translate(0, 6px);
  }
  100% {
    transform: rotate(45deg) translate(4px, 6px);
  }
`;

const line1AnimationOut = keyframes`
  0% {
    transform: rotate(45deg) translate(6px, 6px);
  }
  25% {
    transform: rotate(0) translate(0, 9px);
  }
  75% {
    transform: rotate(0) translate(0, 9px);
  }
  100% {
    transform: rotate(0) translate(0, 0);
  }
`;

const StyledLine1 = styled(StyledLine, props)`
  background: ${props => props.iconColor || "#ffffff"};
  top: 8px;
  ${props =>
    props.open
      ? "transform: rotate(45deg) translate(4px, 6px)"
      : "transform: rotate(0) translate(0, 0)"};

  ${props =>
    props.open === true
      ? `animation: ${line1AnimationIn} 0.5s linear`
      : props.open === false
      ? `animation: ${line1AnimationOut} 0.5s linear`
      : ``};
`;

const StyledLine2 = styled(StyledLine, props)`
  background: ${props => props.iconColor || "#ffffff"};
  top: 16px;
  transform: ${props => (props.open ? "rotate(0)" : "rotate(0) ")};
  opacity: ${props => (props.open ? 0 : 1)};
`;

const line3AnimationIn = keyframes`
  0% {
    transform: rotate(0) translate(0, 0);
  }
  25% {
    transform: rotate(0) translate(0, -8px);
  }
  75% {
    transform: rotate(0) translate(0, -8px);
  }
  100% {
    transform: rotate(-45deg) translate(9px, -8px);
  }
`;

const line3AnimationOut = keyframes`
  0% {
    transform: rotate(-45deg) translate(8px, -6px);
  }
  25% {
    transform: rotate(0) translate(0, -9px);
  }
  75% {
    transform: rotate(0) translate(0, -9px);
  }
  100% {
    transform: rotate(0) translate(0, 0);
  }
`;

const StyledLine3 = styled(StyledLine, props)`
  background: ${props => props.iconColor || "#ffffff"};
  top: 24px;
  ${props =>
    props.open
      ? "transform: rotate(-45deg) translate(8px, -6px)"
      : "transform: rotate(0) translate(0, 0)"};

  ${props =>
    props.open === true
      ? `animation: ${line3AnimationIn} 0.5s linear`
      : props.open === false
      ? `animation: ${line3AnimationOut} 0.5s linear`
      : ``};
`;

export default {
  props: props,
  components: {
    StyledButton,
    StyledIconWrapper,
    StyledLine1,
    StyledLine2,
    StyledLine3
  }
};
</script>
