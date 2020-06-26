<template>
  <StyledMenuItem :open="open" :index="index">
    <span class="material-icons-outlined">{{ icon }}</span>
  </StyledMenuItem>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const itemProps = {
  open: Boolean,
  index: Number,
  icon: String
};

const menuItem1Animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  20% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const menuItem2Animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  40% {
    opacity: 0;
    transform: translateY(10px);
  }
  70% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const menuItem3Animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  60% {
    opacity: 0;
    transform: translateY(10px);
  }
  90% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const menuItem4Animation = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const getMenuItemAnimation = index => {
  switch (index) {
    case 1:
      return menuItem1Animation;
    case 2:
      return menuItem2Animation;
    case 3:
      return menuItem3Animation;
    case 4:
      return menuItem4Animation;
  }
};

const StyledMenuItem = styled("div", itemProps)`
  font-size: 0.75rem !important;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.225rem 0;
  animation: ${props => getMenuItemAnimation(props.index)} 0.75s;
  opacity: ${props => (props.open ? 1 : 0)};
  transition: opacity 0.25s;
`;

export default {
  props: itemProps,
  components: {
    StyledMenuItem
  }
};
</script>
