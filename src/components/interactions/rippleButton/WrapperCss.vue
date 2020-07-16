<template>
  <StyledButton :id="buttonId" class="ripple-button" @click="onClick">
    <StyledButtonText>Ripple Button</StyledButtonText>
  </StyledButton>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { lighten, darken } from "polished";

const backgroundColor = "#445FE7";
// const rippleColor = "#445FE7";

const rippleAnimation = keyframes`
0% {
  opacity: 0;
  transform: scale(0.5) translate(-50%, -50%);
}

35% {
  opacity: 1;
}
70% {
  opacity: 0;
}
100% {
  transform: scale(2.25) translate(-50%, -50%);
}
`;

const rippleAnimationDuration = "1.15s";

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 64px;
  width: 190px;
  border: 0;
  border-radius: 32px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  background: ${backgroundColor};
  color: white;

  & .ripple {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    ${"" /* box-shadow: inset -5px -5px 10px ${lighten(0.075, backgroundColor)},
      inset 5px 5px 10px ${darken(0.1, backgroundColor)}; */}
    opacity: 0;
    pointer-events: none;
    transform-origin: 0% 0%;
    animation-timing-function: infinite;
    animation: ${rippleAnimation} ${rippleAnimationDuration};
  }

  & .ripple-center {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: ${backgroundColor};
    box-shadow: inset -5px -5px 10px ${lighten(0.075, backgroundColor)},
      inset 5px 5px 10px ${darken(0.1, backgroundColor)};
  }

  & .ripple-image {
    width: 100px;
    height: 100px;
    pointer-events: none;
    transform-origin: 0% 0%;
    animation-timing-function: infinite;
    animation: ${rippleAnimation} ${rippleAnimationDuration};
  }
`;

const StyledButtonText = styled.span`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  font-size: 1.175rem;
  font-weight: 600;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
`;

export default {
  props: {
    buttonId: {
      type: String,
      default: "ripple-button"
    }
  },
  components: {
    StyledButton,
    StyledButtonText
  },
  methods: {
    getScrollParent(node) {
      if (node == null) {
        return null;
      }

      if (node.scrollHeight > node.clientHeight) {
        return node;
      } else {
        return this.getScrollParent(node.parentNode);
      }
    },
    onClick(event) {
      const rippleButton = document.getElementById(this.buttonId);

      const rect = event.target.getBoundingClientRect();
      const clientX = event.clientX;
      const clientY = event.clientY;

      const clientXInButton = clientX - rect.x;
      const clientYInButton = clientY - rect.y;

      const rippleDomElement = document.createElement("span");
      rippleDomElement.className = "ripple";

      rippleDomElement.src = require("@/assets/images/ripple.png");
      rippleDomElement.style.position = "absolute";
      rippleDomElement.style.transform = "scale(1) translate(-50%, -50%)";
      rippleDomElement.style.top = clientYInButton + "px";
      rippleDomElement.style.left = clientXInButton + "px";

      const removeFunction = () => {
        rippleButton.removeChild(rippleDomElement);
      };

      rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
      rippleDomElement.addEventListener("animationend", removeFunction);

      rippleButton.appendChild(rippleDomElement);
    }
  }
};
</script>
