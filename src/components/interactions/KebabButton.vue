<template>
  <Wrapper @click="isClicked = !isClicked">
    <Icon>
      <Dot :isClicked="isClicked" top="2px" />
      <Dot :isClicked="isClicked" top="18px" />
      <Dot :isClicked="isClicked" top="34px" />
      <Rectangle isFirst :isClicked="isClicked" />
      <Rectangle :isClicked="isClicked" />
    </Icon>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const transitionDuration = "0.35s";
const iconColor = "#fbfbfb";

const Wrapper = styled.button`
  height: 76px;
  padding: 16px;
  border-radius: 50%;
  background: #6e42a7;
  box-shadow: 0px 10px 20px ${rgba("black", 0.05)};
`;

const Icon = styled.span`
  position: relative;
  width: 44px;
  height: 44px;
  display: block;
`;

const styleProps = { top: String, isClicked: Boolean, isFirst: Boolean };

const Dot = styled("span", styleProps)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%)
    translateY(${props => (props.isClicked ? "17px" : props.top)});
  border-radius: 50%;
  background: ${iconColor};
  width: 8px;
  height: 8px;
  ${"" /* opacity: ${props => (props.isClicked ? 0 : 1)}; */}
  transition-property: transform, opacity;
  transition-duration: ${transitionDuration};
`;

const Rectangle = styled("span", styleProps)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotate(${props => (props.isFirst ? "45deg" : "-45deg")});
  width: 8px;
  height: ${props => (props.isClicked ? "44px" : "5px")};
  border-radius: 5px;
  background: ${iconColor};
  ${"" /* opacity: ${props => (props.isClicked ? 1 : 0)}; */}
  transition-property: opacity, height;
  transition-duration: ${transitionDuration};
`;

export default {
  components: {
    Wrapper,
    Icon,
    Dot,
    Rectangle
  },
  data() {
    return {
      isClicked: false
    };
  }
};
</script>
