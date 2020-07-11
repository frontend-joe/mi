<template>
  <Wrapper>
    <!-- <i class="material-icons-outlined">person_outline</i> -->
    <Textfield
      placeholder="Password"
      :showPassword="showPassword"
      :type="showPassword ? 'text' : 'password'"
      value="password"
    />
    <EyeButton
      :showPassword="showPassword"
      @click="showPassword = !showPassword"
    >
      <EyeLineWrapper>
        <EyeLine :showPassword="showPassword" />
      </EyeLineWrapper>
      <i class="material-icons-outlined">visibility</i>
    </EyeButton>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
// import { rgba } from "polished";

const transitionDuration = "0.625s";

const colorShow = "#5F61AB";
const colorHide = "#CACAE3";
const colorIcon = "#5F61AB";
const colorTextShow = "#000000";
const colorTextHide = "#ffffff";

const Wrapper = styled.div`
  overflow: hidden;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 56px;
  border-radius: 0.5rem;
  background: ${colorShow};
`;

const eyeProps = { showPassword: Boolean };

const Textfield = styled("input", eyeProps)`
  position: relative;
  z-index: 2;
  outline: none;
  border: 0;
  background: transparent;
  color: ${props => (props.showPassword ? colorTextShow : colorTextHide)};
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  transition: color 0.25s;
`;

const EyeButton = styled("button", eyeProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${colorHide};
    transform: scale(${props => (props.showPassword ? "20" : "1")});
    transition: transform ${transitionDuration};
  }

  & > i {
    position: relative;
    z-index: 1;
    font-size: 20px;
    color: ${colorIcon};
  }
`;

const EyeLineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const EyeLine = styled("div", eyeProps)`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 50%;
  width: 24px;
  height: 2px;
  transform: rotate(45deg)
    translateX(${props => (props.showPassword ? "1px" : "-26px")})
    translateY(-3px);
  transform-origin: 50% 50%;
  background: ${colorIcon};
  transition: transform ${transitionDuration};

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: inherit;
    height: inherit;
    background: ${colorHide};
  }
`;

export default {
  components: {
    Wrapper,
    Textfield,
    EyeButton,
    EyeLine,
    EyeLineWrapper
  },
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
