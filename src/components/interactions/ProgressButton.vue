<template>
  <Wrapper>
    <Progress :isComplete="isComplete" :isClicked="isClicked">
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

      <ProgressSvg
        v-if="isComplete === true"
        width="64"
        height="64"
        :zIndex="2"
      >
        <ProgressCircle
          :isComplete="false"
          :isClicked="true"
          ringColor="#13C4A3"
          r="22"
          cx="32"
          cy="32"
          :duration="1500"
        />
      </ProgressSvg>
    </Progress>
    <RoundButton
      :isComplete="isComplete"
      :isClicked="isClicked"
      @click="onClick"
    >
      <IconWrapper :isClicked="isClicked" :isComplete="isComplete">
        <!-- <Icon
          :isClicked="isClicked"
          :class="{
            'icofont-check': isComplete,
            'icofont-cloud-upload': !isComplete
          }"
        >
        </Icon> -->
        <Icon class="material-icons" :isClicked="isClicked">
          cloud_upload
        </Icon>
      </IconWrapper>

      <CompleteIcon
        v-if="isComplete"
        class="material-icons"
        :isClicked="isClicked"
      >
        cloud_done
      </CompleteIcon>
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
const buttonColor = "#9A6FD8";
// const buttonColorDark = "#5b4682";
const buttonColorComplete = "#13C4A3";
// const buttonColorCompleteDark = "#1c7168";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transform: scale(1.65);
`;

const Progress = styled("div", styleProps)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const svgProps = { zIndex: Number };
const ProgressSvg = styled("svg", svgProps)`
  position: absolute;
  z-index: ${props => props.zIndex};
`;

const progressAnimation = keyframes`
  0% {
    stroke-dashoffset: 138;
  }
  20% {
    stroke-dashoffset: 120;
  }
  45% {
    stroke-dashoffset: 80;
  }
  80% {
    stroke-dashoffset: 35;
  }
  90% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const progressAnimation2 = keyframes`
  0% {
    opacity: 1;
    stroke-dashoffset: 138;
  }
  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
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
      ? `animation: ${
          props.animationIndex === 0 ? progressAnimation : progressAnimation2
        } ${props.duration}ms`
      : ""};

  transition: stroke 0.5s;
`;

const spinAnimation = keyframes`
  25% {
    transform: translateY(1px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-1px);
  }
`;

const iconAnimationOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

const RoundButton = styled("button", styleProps)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: ${props => (props.isClicked ? "pointer" : "pointer")};
  background: ${props =>
    props.isComplete ? buttonColorComplete : buttonColor};

  ${props => (props.isComplete ? "transition: background 0.65s;" : "")};
`;

const IconWrapper = styled("div", styleProps)`
  width: 20px;
  height: 20px;
  opacity: ${props => (props.isComplete ? 0 : 1)};
  transition: opacity 0.25s;

  ${props =>
    props.isClicked && !props.isComplete
      ? `animation: ${spinAnimation} 1s infinite linear`
      : props.isComplete
      ? `animation: ${iconAnimationOut} 0.5s 1 linear`
      : ""};
`;

const Icon = styled("i", styleProps)`
  font-size: 20px;
  width: 20px;
  height: 20px;
`;

const completeAnimationIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 1;
    transform: scale(0);
  }
  40% {
    opacity: 1;
    transform: scale(1.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const CompleteIcon = styled.i`
  position: absolute;
  font-size: 20px;
  width: 20px;
  height: 20px;
  animation: ${completeAnimationIn} 2s 1;
`;

export default {
  components: {
    Wrapper,
    Progress,
    ProgressSvg,
    ProgressCircle,
    RoundButton,
    IconWrapper,
    Icon,
    CompleteIcon
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
