<template>
  <StyledButton id="ripple-button" class="ripple-button" @click="onClick">
    <StyledButtonText>Ripple Button</StyledButtonText>
  </StyledButton>
</template>

<script>
import styled from "vue-styled-components";

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  height: 56px;
  width: 180px;
  border: 0;
  border-radius: 27px;
  background: #5448c8;
  color: white;
`;

const StyledButtonText = styled.span`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
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

      const rippleDomElement = document.createElement("span");
      rippleDomElement.className = "ripple";
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

      // remove element
    }
  }
};
</script>

<style>
@keyframes rippleAnimation {
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }
  25% {
    opacity: 0.5;
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(-50%, -50%);
  }
}

.ripple-button .ripple {
  display: block;
  position: absolute;
  z-index: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: none;
  transform-origin: 0% 0%;
  transform: scale(0) translate(-50%, -50%);
  animation-timing-function: linear;
  animation: rippleAnimation 1.75s;
}
</style>
