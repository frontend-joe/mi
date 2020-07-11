<template>
  <EyeButton :showPassword="showPassword" @click="showPassword = !showPassword">
    <EyeLineWrapper>
      <EyeLine :showPassword="showPassword" />
    </EyeLineWrapper>
    <i class="material-icons-outlined">visibility</i>
  </EyeButton>
</template>

<script>
import styled from "vue-styled-components";
// import { rgba } from "polished";

const transitionDuration = "0.625s";

const colorShow = "#5F61AB";
const colorHide = "#5F61AB";
// const colorIcon = 5F61ABfff";
const colorTextShow = "#ffffff";
const colorTextHide = "#ffffff";

const eyeProps = { showPassword: Boolean };

const EyeButton = styled("button", eyeProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
  background: ${props => (props.showPassword ? colorShow : colorHide)};
  border-radius: 50%;
  transition: background ${transitionDuration};

  & > i {
    font-size: 60px;
    color: ${props => (props.showPassword ? colorTextShow : colorTextHide)};
    transition: color ${transitionDuration};
  }
`;

const EyeLineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: rotate(45deg);
`;

const EyeLine = styled("div", eyeProps)`
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 5px;
  transform: translate(-50%, -50%)
    scaleX(${props => (props.showPassword ? 1 : 0)});
  ${"" /* translateX(${props => (props.showPassword ? "4px" : "-110%")})
translateY(-6px); */};
  transform-origin: 0% 50%;
  background: ${colorTextShow};
  transition: transform ${transitionDuration}, opacity 0.15s;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: inherit;
    background: ${props => (props.showPassword ? colorShow : colorHide)};
  }
`;

export default {
  components: {
    EyeButton,
    EyeLine,
    EyeLineWrapper
  },
  data() {
    return {
      showPassword: true
    };
  }
};
</script>
