<template>
  <StyledOuterWrapper>
    <StyledWrapper>
      <StyledButtonHighlight :index="items.findIndex(obj => obj.active)" />
      <StyledButton
        v-for="item in items"
        :key="item.text"
        :active="item.active"
      >
        <PulsingBadge v-if="item.active" />
        <StyledButtonText
          :active="item.active"
          :paddingRight="item.paddingRight"
          >{{ item.text }}</StyledButtonText
        >
        <StyledButtonIcon
          :translateX="item.translateX"
          :active="item.active"
          class="material-icons-outlined"
          >{{ item.icon }}</StyledButtonIcon
        >
      </StyledButton>
    </StyledWrapper>
  </StyledOuterWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const StyledOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #4f4958;
  height: 56px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 11px 15px -7px ${rgba("#fff", 0.15)};
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const animationDuration = "0.35s";

const buttonWidth = "74px";
const buttonProps = {
  active: Boolean,
  index: Number,
  translateX: String,
  paddingRight: String
};

const StyledButton = styled("button", buttonProps)`
  position: relative;
  padding: 0;
  flex: 1;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${buttonWidth};
  height: 30px;
  color: rgba(255, 255, 255, 0.85);
`;

const StyledButtonHighlight = styled("span", buttonProps)`
  position: absolute;
  top: 50%;
  left: 0;
  height: 30px;
  width: ${buttonWidth};
  border-radius: 6px;
  transform: translate(${props => props.index * 100}%, -50%);
  background: rgba(255, 255, 255, 0.175);
  transition: transform ${animationDuration};
`;

const StyledButtonIcon = styled("span", buttonProps)`
  font-size: 18px;
  transform: translateX(${props => (props.active ? props.translateX : 0)});
  transition: transform ${animationDuration};
`;

const StyledButtonText = styled("span", buttonProps)`
  opacity: ${props => (props.active ? 1 : 0)};
  position: absolute;
  right: 0;
  padding-right: ${props => props.paddingRight};
  font-weight: 600;
  transform: translateY(-1px);
  transition: opacity ${animationDuration};
`;

const pulseAnimation = keyframes`
  0%   {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const PulsingBadge = styled.div`
  position: absolute;
  z-index: 1;
  top: -5px;
  right 6px;
  width: 10px;
  height: 10px;
  background-color: #00cc9c;
  border-radius: 50%;
  ${"" /* box-shadow: 0 0 0 15px #8362d0; */}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
    animation: ${pulseAnimation} 1.75s ease-out infinite;
  }
`;

export default {
  props: {
    animationDuration: String
  },
  components: {
    StyledOuterWrapper,
    StyledWrapper,
    StyledButton,
    StyledButtonHighlight,
    StyledButtonIcon,
    StyledButtonText,
    PulsingBadge
  },
  data() {
    return {
      items: [
        {
          text: "Stats",
          icon: "videocam",
          active: false,
          translateX: "-18px",
          paddingRight: "12px"
        },
        {
          text: "DM's",
          icon: "textsms",
          active: true,
          translateX: "-18px",
          paddingRight: "13px"
        },

        {
          text: "Find",
          icon: "send",
          active: false,
          translateX: "-15px",
          paddingRight: "15px"
        }
      ]
    };
  }
};
</script>
