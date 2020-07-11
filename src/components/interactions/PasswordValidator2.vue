<template>
  <Wrapper :isValid="isValid">
    <Textbox
      v-model="textboxValue"
      type="password"
      placeholder="Type Password"
    />
    <SubmitButton :isValid="isValid" @click="onSubmit">
      <span class="material-icons-outlined">
        {{ isValid === false ? "close" : "arrow_forward" }}
      </span>
    </SubmitButton>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { darken } from "polished";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(0.5rem); }
  75% { transform: translateX(-0.5rem); }
  100% { transform: translateX(0); }
`;

const styleProps = { isValid: Boolean };

const Wrapper = styled("div", styleProps)`
  background: #fff;
  border-radius: 0.5rem;
  border: 3px solid
    ${props => (props.isValid === false ? "#F56476" : "#8D86C9")};
  height: 60px;
  display: flex;
  transition-property: border-color, background;
  transition-duration: 0.35s;

  & .material-icons-outlined {
    ${props => (props.isValid === false ? "background: #FF6B6C;" : "")};
  }

  ${props =>
    props.isValid === false ? `animation: ${shakeAnimation} 0.175s 0s 3` : ""};
`;

const Textbox = styled.input`
  border: 0;
  background: transparent;
  width: 150px;
  height: 100%;
  outline: none;
  padding: 0 0.875rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;

const SubmitButton = styled("button", styleProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;

  &:hover > span {
    ${props =>
      props.isValid === undefined
        ? `background: ${darken(0.1, "#8994d0")}`
        : ""};
    };
  }

  & > span {
    color: white;
    padding: 4px;
    font-size: 20px;
    background: #8994d0;
    border-radius: 50%;
    transition: background 0.35s;
  }
`;

export default {
  components: {
    Wrapper,
    Textbox,
    SubmitButton
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true;

      if (this.textboxValue === "password") {
        this.isValid = true;
      } else {
        this.isValid = false;
      }

      setTimeout(() => {
        this.textboxValue = "";
        this.isValid = undefined;
        this.isSubmitted = undefined;
      }, 2000);
    }
  },
  data() {
    return {
      textboxValue: "",
      isValid: undefined,
      isSubmitted: undefined
    };
  }
};
</script>
