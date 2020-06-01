<template>
  <StyledButton
    @click="onClick"
    :clicked="clicked"
    :disabled="clicked"
    :sent="sent"
  >
    <ButtonIcon :clicked="clicked" class="material-icons-outlined" :sent="sent">
      {{ sent ? "check" : "send" }}
    </ButtonIcon>
    <ButtonSendText :sent="sent" :clicked="clicked">
      <span
        v-if="sent"
        :style="{ marginRight: '10px' }"
        class="material-icons-outlined"
        >check</span
      >
      {{ !clicked ? "Send Msg" : clicked && sent ? "Sent" : "Sending" }}
      <template v-if="clicked && !sent">
        <LoadingDot>.</LoadingDot><LoadingDot delay="0.175s">.</LoadingDot
        ><LoadingDot delay="0.25s">.</LoadingDot>
      </template>
    </ButtonSendText>
  </StyledButton>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const animationDurationNumber = 3.25;
const animationDuration = `${animationDurationNumber}s`;

const buttonSendTextAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: translate(-12px, 0);
  }
  30% {
    opacity: 1;
    transform: translate(-12px, 0);
  }
  40% {
    opacity: 0;
    transform: translate(-12px, 100%);
  }
  48% {
    opacity: 0;
    transform: translate(-100%, 100%);
  }
  50% {
    opacity: 1;
    transform: translate(-360px, -160px);
  }
  51% {
    opacity: 1;
    transform: translate(-12px, -100%);
  }
  70% {
    opacity: 1;
    transform: translate(-12px, 0);
  }
`;

const buttonIconAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  12% {
    transform: translate(-60px, 0) scale(0.8, 0.8);
  }
  35% {
    transform: translate(-60px, 0) scale(0.8, 0.8);
  }
  50% {
    transform: translate(200px, 0) scale(1.75, 1.75);
  }
  60% {
    transform: translate(200px, 100%) scale(1.75, 1.75);
  }
  61% {
    transform: translate(0, 100%) scale(1, 1);
  }
  65% {
    transform: translate(-160px, 0) scale(1, 1);
  }
`;

const loadingDotAnimation = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.25;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0.25;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.25;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
`;

const buttonProps = { clicked: Boolean, sent: Boolean };

const StyledButton = styled("button", buttonProps)`
  position: relative;
  display: flex;
  align-items: flex-start;
  height: 56px;
  min-width: 204px;
  max-width: 224px;
  padding: 0 2rem;
  border: 0;
  border-radius: 28px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background: ${props =>
    props.sent ? "#6331D8" : props.clicked ? "#6331D8" : "#6331D8"};
  color: ${rgba("white", 0.85)};
  box-shadow: 0 11px 15px -7px ${rgba("#a3a5c3", 0.75)};
  cursor: pointer;
  outline: none;
  transition: background 0.25s;
  overflow: hidden;

  ${"" /* &:hover {
    color: black;
    ${props => (!props.disabled ? "background: #07fde2;" : "")};
  } */}

  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonSendText = styled("span", buttonProps)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-left: 0.75rem;
  height: 56px;
  line-height: 56px;
  transform: translate(${props => (props.sent ? "-12px" : "0")}, 0);

  ${props =>
    props.clicked
      ? `animation: ${buttonSendTextAnimation} ease-in-out
        ${animationDuration}`
      : ""}
`;

const ButtonIcon = styled("i", buttonProps)`
  font-size: 24px;
  line-height: 56px;
  transform: translate(${props => (props.sent ? "-200px" : "0")}, 0);
  color: ${rgba("white", 0.85)};

  ${props =>
    props.clicked
      ? `animation: ${buttonIconAnimation} ease-in-out
        ${animationDuration}`
      : ""}
`;

const dotProps = { delay: String };
const LoadingDot = styled("span", dotProps)`
  animation: ${loadingDotAnimation} infinite ${animationDuration};
  animation-delay: ${props => props.delay};
`;

export default {
  components: {
    StyledButton,
    ButtonSendText,
    ButtonIcon,
    LoadingDot
  },
  data: function() {
    return {
      clicked: false,
      sent: false,
      completed: false
    };
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked;
      this.sent = false;

      setTimeout(() => {
        this.sent = true;
      }, (animationDurationNumber / 2) * 1000);

      setTimeout(() => {
        setTimeout(() => {
          this.sent = false;
          this.clicked = false;
        }, 2000);
      }, animationDurationNumber * 1000);
    }
  }
};
</script>
