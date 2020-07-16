<template>
  <Wrapper>
    <ProgressSvg width="64" height="64" :zIndex="2">
      <ProgressCircle
        :animationIndex="0"
        :isComplete="isComplete"
        :isClicked="isClicked"
        ringColor="#9a6fd8"
        :duration="2500"
        r="22"
        cx="32"
        cy="32"
      />
    </ProgressSvg>
    <RoundButton
      :isComplete="isComplete"
      :isClicked="isClicked"
      @click="onClick"
    >
    </RoundButton>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const duration = 2500;
const styleProps = {
  isClicked: Boolean,
  isComplete: Boolean,
  ringColor: String,
  duration: Number,
  animationIndex: Number
};
//const buttonColor = "#9A6FD8";

const Wrapper = styled.div`
  width: 64px;
  height: 64px;
  transform: scale(2);
`;

const svgProps = { zIndex: Number };
const ProgressSvg = styled("svg", svgProps)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const progressAnimation = keyframes`
  0% { stroke-dashoffset: 138; }
  20% { stroke-dashoffset: 120; }
  45% { stroke-dashoffset: 80; }
  80% { stroke-dashoffset: 35; }
  90% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 0; }
`;

const ProgressCircle = styled("circle", styleProps)`
  stroke: ${props =>
    rgba(props.ringColor, props.animationIndex === 0 ? 0.5 : 1)};
  stroke-width: 10;
  fill: transparent;
  stroke-dashoffset: ${props => (props.isClicked === undefined ? 138 : 0)};
  stroke-dasharray: 138 138;

  ${props =>
    props.isClicked === true && props.isComplete === false
      ? `animation: ${progressAnimation} ${props.duration}ms`
      : ""};

  transition: stroke 0.5s;
`;

const RoundButton = styled("button", styleProps)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #9a6fd8;
`;

export default {
  components: {
    Wrapper,
    ProgressSvg,
    ProgressCircle,
    RoundButton
  },
  methods: {
    onClick() {
      this.isClicked = true;
      setTimeout(() => {
        this.isComplete = true;
        setTimeout(() => {
          this.isClicked = undefined;
          this.isComplete = false;
        }, 2500);
      }, duration);
    }
  },
  data() {
    return {
      isClicked: undefined,
      isComplete: false
    };
  }
};
</script>
