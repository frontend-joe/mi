<template>
  <StyledButton id="ripple-button" class="ripple-button" @click="onClick">
    <StyledButtonText>Ripple Button</StyledButtonText>
  </StyledButton>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba, lighten } from "polished";

const backgroundColor = "#445FE7";
const rippleColor = "#445FE7";

const rippleAnimation = keyframes`
0% {
  opacity: 0;
  transform: scale(0) translate(-50%, -50%);
  /* box-shadow: inset 0 0 0 0 rgba(255, 255, 255, 0.15),
    inset 0 0 0 10px rgba(255, 255, 255, 0.15); */
  /* box-shadow: inset 8px 8px 17px 0 rgba(0, 0, 0, 0.05),
    inset -13px -13px 12px 0 #5448c8, -11px -11px 40px 3px #5448c8,
    8px 14px 40px -20px rgba(0, 0, 0, 0.19); */
}
75% {
  opacity: 1;
}
100% {
  opacity: 0;
  transform: scale(3) translate(-50%, -50%);
  /* box-shadow: inset 8px 8px 17px 0 rgba(0, 0, 0, 0.05),
    inset -13px -13px 12px 0 #5448c8, -11px -11px 40px 3px #5448c8,
    8px 14px 40px -20px rgba(0, 0, 0, 0.19); */
  /* box-shadow: inset 0 0 0 10px rgba(255, 255, 255, 0.15),
    inset 0 0 0 30px rgba(255, 255, 255, 0.15); */
}
`;

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
    background: ${rgba(rippleColor, 0.5)};
    box-shadow: inset 0 0 10px ${lighten(0.015, rippleColor)},
      inset 0 0 10px rgba(255, 255, 255, 0.075);

    pointer-events: none;
    transform-origin: 0% 0%;
    animation-timing-function: infinite;
    animation: ${rippleAnimation} 1.25s;
  }

  & .ripple-center {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${rgba(rippleColor, 0.25)};
    box-shadow: inset 0 0 10px ${lighten(0.015, rippleColor)},
      inset 0 0 10px rgba(255, 255, 255, 0.025);
  }

  & .ripple-image {
    width: 100px;
    height: 100px;
    pointer-events: none;
    transform-origin: 0% 0%;
    animation-timing-function: infinite;
    animation: ${rippleAnimation} 1.25s;
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

      // create element
      const rippleButton = document.getElementById("ripple-button");

      const rippleDomElement = document.createElement("img");
      rippleDomElement.className = "ripple-image";
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
