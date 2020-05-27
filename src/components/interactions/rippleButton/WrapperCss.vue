<template>
  <StyledButton id="ripple-button" class="ripple-button" @click="onClick">
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
  transform: scale(0) translate(-50%, -50%);
}

35% {
  opacity: 1;
}
100% {
  opacity: 0;
  transform: scale(1.75) translate(-50%, -50%);
}
`;

const rippleAnimationDuration = "1.15s";

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 56px;
  width: 180px;
  border: 0;
  border-radius: 27px;
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
    box-shadow: inset -5px -5px 10px ${lighten(0.075, backgroundColor)},
      inset 5px 5px 10px ${darken(0.1, backgroundColor)};
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
  font-weight: 600;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  pointer-events: none;
`;

export default {
  components: {
    StyledButton,
    StyledButtonText
  },
  methods: {
    onClick(event) {
      // get mouse position

      const rect = event.target.getBoundingClientRect();
      const clientX = event.clientX;
      const clientY = event.clientY;

      const clientXInButton = clientX - rect.x;
      const clientYInButton = clientY - rect.y;

      //console.log("onClick", event, rect);

      console.log("clientXInButton", clientXInButton);
      console.log("clientYInButton", clientYInButton);

      // create element
      const rippleButton = document.getElementById("ripple-button");

      // const rippleDomElement = document.createElement("img");
      // rippleDomElement.className = "ripple-image";
      const rippleDomElement = document.createElement("span");
      rippleDomElement.className = "ripple";

      rippleDomElement.src = require("@/assets/images/ripple.png");
      rippleDomElement.style.position = "absolute";
      rippleDomElement.style.transform = "scale(1) translate(-50%, -50%)";
      rippleDomElement.style.top = clientYInButton + "px";
      rippleDomElement.style.left = clientXInButton + "px";

      // const rippleCenterDomElement = document.createElement("span");
      // rippleCenterDomElement.className = "ripple-center";
      //
      // rippleDomElement.appendChild(rippleCenterDomElement);

      const removeFunction = () => {
        rippleButton.removeChild(rippleDomElement);
      };

      rippleDomElement.addEventListener("webkitAnimationEnd", removeFunction);
      rippleDomElement.addEventListener("animationend", removeFunction);

      rippleButton.appendChild(rippleDomElement);

      // remove element
    }
  }
};
</script>
