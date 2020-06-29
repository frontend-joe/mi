<template>
  <Wrapper>
    <Textfield
      :showPassword="showPassword"
      :type="showPassword ? 'text' : 'password'"
      value="password"
    />
    <EyeButton
      :showPassword="showPassword"
      @click="showPassword = !showPassword"
    >
      <EyeBorder>
        <EyeLid :showPassword="showPassword" />
      </EyeBorder>
      <EyeBall :showPassword="showPassword" />
    </EyeButton>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const transitionDuration = "0.75s";

const Wrapper = styled.div`
  overflow: hidden;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 56px;
  border-radius: 0.5rem;
  background: #121727;
`;

const Textfield = styled("input", eyeProps)`
  position: relative;
  z-index: 2;
  outline: none;
  border: 0;
  background: transparent;
  color: ${props => (props.showPassword ? "black" : "white")};
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  transition: color ${transitionDuration};
`;

const eyeProps = { showPassword: Boolean };

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
    background: #fbfbfb;
    transform: scale(${props => (props.showPassword ? "20" : "1")});
    transition: transform ${transitionDuration};
  }
`;

const EyeBorder = styled("div", eyeProps)`
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 16px;
  height: 16px;
  border-radius: 75% 0;
  transform: rotate(45deg);
  border: 2px solid #7f88a5;
  transition: transform ${transitionDuration};
`;

const EyeLid = styled("div", eyeProps)`
  width: 20px;
  height: 20px;
  background: #c7cbd6;
  transform: rotate(45deg)
    translateX(${props => (!props.showPassword ? "-24px" : "0")});
  transition: transform ${transitionDuration};
`;

const EyeBall = styled("div", eyeProps)`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #7f88a5;
  opacity: ${props => (!props.showPassword ? 1 : 0)};
  transition: opacity ${transitionDuration};
`;

export default {
  components: {
    Wrapper,
    Textfield,
    EyeButton,
    EyeBorder,
    EyeLid,
    EyeBall
  },
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
