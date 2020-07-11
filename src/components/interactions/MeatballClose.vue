<template>
  <Wrapper :isClicked="isClicked" @click="isClicked = !isClicked">
    <IconWrapper>
      <Dot1 />
      <Dot2 />
      <Dot3 />
      <Bar1 :isClicked="isClicked" />
      <Bar2 v-if="false" :isClicked="isClicked" />
    </IconWrapper>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const duration = "5s";
const styleProps = { isClicked: Boolean };

const Wrapper = styled("button", styleProps)`
  background: ${props => (props.isClicked ? "grey" : "white")};
  border: 0;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: pink;
`;

const Ellipse = styled.div`
  position: absolute;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
`;

const Dot1 = styled(Ellipse)`
  left: 0;
`;

const Dot2 = styled(Ellipse)`
  left: 12px;
`;

const Dot3 = styled(Ellipse)`
  left: 24px;
`;

const Rectangle = styled("div", styleProps)`
  position: absolute;
  top: 12px;
  left: 0;
  width: calc(100% - 6px);
  height: 8px;
  border-radius: 4px;
  background: black;
  transform-origin: 0% 50%;
`;

const bar1AnimationIn = keyframes`
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1) rotate(45deg);
  }
`;

const bar1AnimationOut = keyframes`
  0% {
    transform: scaleX(1) rotate(45deg);
  }
  50% {
    transform: scaleX(1) rotate(0);
  }
  100% {
    transform: scaleX(0) rotate(0);
  }
`;

const Bar1 = styled(Rectangle, styleProps)`
  ${props =>
    props.isClicked === true
      ? `animation: ${bar1AnimationIn} ${duration};`
      : ""};

  ${props =>
    props.isClicked === false
      ? `animation: ${bar1AnimationOut} ${duration};`
      : ""};

  transform: ${props =>
    props.isClicked ? "scaleX(1) rotate(45deg)" : "scaleX(0) rotate(0)"};
`;

const Bar2 = styled(Rectangle, styleProps)`
  transform: translateX(${props => (props.isClicked ? "3px" : "0")});
  opacity: ${props => (props.isClicked ? 1 : 0)};
`;

export default {
  components: {
    Wrapper,
    IconWrapper,
    Dot1,
    Dot2,
    Dot3,
    Bar1,
    Bar2
  },
  data() {
    return {
      isClicked: undefined
    };
  }
};
</script>
