<template>
  <StyledWrapper :valid="valid">
    <StyledTextbox
      v-model="value"
      :type="showPassword ? 'text' : 'password'"
      placeholder="Password"
    />
    <StyledShowPasswordButton
      @click="showPassword = !showPassword"
      class="material-icons-outlined"
    >
      {{ showPassword ? "visibility_off" : "visibility" }}
    </StyledShowPasswordButton>
    <StyledMessage :submitted="submitted" :valid="valid">
      {{
        valid === undefined ? "" : valid ? "Welcome Back" : "Invalid Password"
      }}
    </StyledMessage>
    <StyledButton :valid="valid" :submitted="submitted" @click="onClick">
      <StyledButtonIcon class="material-icons-outlined">
        {{ submitted ? (valid ? "check" : "close") : "arrow_forward" }}
      </StyledButtonIcon>
    </StyledButton>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const backgroundColor = "#226CE0";
const validColor = "#0DBF9B";
const invalidColor = "#F43E5C";
const transitionDuration = "0.75s";
const buttonProps = { valid: Boolean, submitted: Boolean };

const StyledWrapper = styled("div", buttonProps)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  border: 2px solid
    ${props =>
      props.valid !== undefined
        ? props.valid
          ? validColor
          : invalidColor
        : backgroundColor};
  box-shadow: 0 3px 20px -7px ${rgba("#4e3dc8", 0.5)};
  transition: border-color ${transitionDuration};
`;

const StyledTextbox = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  text-indent: 1rem;
  font-size: 1.25rem;
  width: 150px;
`;

const StyledShowPasswordButton = styled.button`
  padding: 0 0.5rem;
`;

const StyledButton = styled("button", buttonProps)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 0.5rem;
  background: ${props =>
    props.valid === undefined
      ? backgroundColor
      : props.valid
      ? validColor
      : invalidColor};
  color: white;
  transition: background ${transitionDuration};

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    transform: scale(${props => (props.submitted ? 10 : 1)});
    transition: transform ${transitionDuration};
  }
`;

const StyledButtonIcon = styled.span`
  position: relative;
  z-index: 2;
`;

const StyledMessage = styled("div", buttonProps)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  font-weight: 700;
  opacity: ${props => (props.submitted ? 1 : 0)};
  color: white;
  text-align: center;
  white-space: nowrap;
  transition: opacity ${transitionDuration};
`;

export default {
  components: {
    StyledWrapper,
    StyledTextbox,
    StyledShowPasswordButton,
    StyledButton,
    StyledButtonIcon,
    StyledMessage
  },
  methods: {
    onClick() {
      console.log(this.value);

      if (this.value === "password") {
        this.valid = true;
      } else {
        this.valid = false;
      }

      this.submitted = !this.submitted ? true : undefined;

      if (!this.submitted) {
        this.valid = undefined;
      }
    }
  },
  data() {
    return {
      value: String,
      valid: undefined,
      submitted: false,
      showPassword: false
    };
  }
};
</script>
