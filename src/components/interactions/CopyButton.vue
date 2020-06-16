<template>
  <StyledWrapper
    :disabled="isClicked"
    :isHovered="isHovered"
    :isClicked="isClicked"
    @click="onClick()"
    @mouseover="onMouseOver()"
    @mouseleave="onMouseLeave()"
  >
    <ClickedContent :isClicked="isClicked" @mouseleave="onMouseLeave()">
      <span class="material-icons">content_copy</span> Gradient Copied!
    </ClickedContent>
    <HoverContent
      @mouseleave="onMouseLeave()"
      :isClicked="isClicked"
      class="hover-content"
    >
      <HexLeft :isHovered="isHovered">
        #9600FF
        <span class="material-icons-outlined">arrow_right</span>
      </HexLeft>
      <HexRight :isHovered="isHovered">
        #5E00FF
      </HexRight>
      <CopyIcon :isHovered="isHovered" class="material-icons-outlined"
        >content_copy</CopyIcon
      >
    </HoverContent>
    <GradientBlock
      :isClicked="isClicked"
      :isHovered="isHovered"
      class="gradient"
    />
    <GradientText> Soft Gradient </GradientText>
  </StyledWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const transitionDuration = "1.5s";
const popupDuration = "1.75s";

const props = { isHovered: Boolean, isClicked: Boolean };

const StyledWrapper = styled("button", props)`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 1.5rem;
  padding: 1rem 2rem 1rem 1.25rem;
  background: white;
  font-weight: 700;
  border: 2px solid #e8e8e8;

  &:disabled {
    cursor: not-allowed;
  }

  ${props =>
    props.isHovered || props.isClicked
      ? "& .gradient { transform: scale(10) }"
      : "& .gradient { transform: scale(1) }"};

  ${props =>
    props.isHovered && !props.isClicked
      ? "& .hover-content { opacity: 1 }"
      : "& .hover-content { opacity: 0 }"}
`;

const GradientBlock = styled("div", props)`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  margin-right: 1rem;
  background: linear-gradient(45deg, #9500ff 0%, #5e00ff 100%);
  transition: transform ${transitionDuration}, background ${transitionDuration};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    opacity: ${props => (props.isHovered || props.isClicked ? 1 : 0)};
    background: linear-gradient(45deg, #9500ff 50%, #5e00ff 100%);
    transition: opacity ${transitionDuration};
  }
`;

const GradientText = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #484881;
`;

const popup1 = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    transform: translateY(15px);
  }
  35% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const popup2 = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: translateY(15px);
  }
  45% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const popup3 = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
    transform: translateY(15px);
  }
  55% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HoverContent = styled("div", props)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  color: white;
  padding: 0 1rem;
  letter-spacing: -1px;
  transform: translateX(${props => (props.isClicked ? "-100%" : "0")});
  transition: transform ${transitionDuration}, opacity ${transitionDuration};
`;

const HexLeft = styled("div", props)`
  display: flex;
  align-items: center;
  ${props =>
    props.isHovered ? `animation: linear ${popup1} ${popupDuration}` : ""};

  & > span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const HexRight = styled("div", props)`
  ${props =>
    props.isHovered ? `animation: linear ${popup2} ${popupDuration}` : ""};
`;

const CopyIcon = styled("span", props)`
  margin-left: 1rem;
  ${props =>
    props.isHovered ? `animation: linear ${popup3} ${popupDuration}` : ""};
`;

const ClickedContent = styled("div", props)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(${props => (props.isClicked ? 0 : "100%")});
  font-size: 1.075rem;
  letter-spacing: -0.325px;
  color: white;
  opacity: ${props => (props.isClicked ? 1 : 0)};
  transition: transform ${transitionDuration}, opacity ${transitionDuration};

  & > span {
    margin-right: 0.5rem;
  }
`;

export default {
  components: {
    StyledWrapper,
    GradientBlock,
    GradientText,
    HoverContent,
    HexLeft,
    HexRight,
    CopyIcon,
    ClickedContent
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
    },
    onMouseLeave() {
      this.isHovered = false;
    },
    onClick() {
      this.isClicked = true;

      setTimeout(() => {
        this.isClicked = false;
      }, 2000);
    }
  },
  data() {
    return {
      isHovered: false,
      isClicked: false
    };
  }
};
</script>
