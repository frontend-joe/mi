<template>
  <StyledButton
    :disabled="clicked"
    :deleted="deleted"
    :clicked="clicked"
    @click="onClick"
  >
    <TrashAnimationStage>
      <TrashWrapper>
        <PaperUnshreddedWrapper>
          <PaperUnshredded :clicked="clicked" />
        </PaperUnshreddedWrapper>
        <PaperShreddedWrapper>
          <PaperShredded :clicked="clicked" />
          <PaperShredded :clicked="clicked" />
          <PaperShredded :clicked="clicked" />
        </PaperShreddedWrapper>
        <TrashLid />
        <TrashCan>
          <TrashCanPaper :clicked="clicked" />
        </TrashCan>
      </TrashWrapper>
    </TrashAnimationStage>
  </StyledButton>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

// const animationLengthNumber = 1;
const animationLengthNumber = 2.5;
const animationLength = `${animationLengthNumber}s`;
const animationIterationCount = 3;
const paperShreddedColor = "#06D6A0";
const paperUnshreddedColor = "#F56476";
const trashcanColor = "#1D84B5";
const trashcanPaperColor = "#ED7D3A";

const buttonProps = { clicked: Boolean, deleted: Boolean };

const StyledButton = styled("button", buttonProps)`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 56px;
  width: 56px;
  border: 0;
  border-radius: 0.325rem;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background: ${props => (props.deleted ? "#192E3F" : "#192E3F")};
  color: #ffffff;
  cursor: pointer;
  outline: none;
  transition: background 0.25s;
  overflow: hidden;

  &:hover {
    ${props => (!props.disabled ? "background: #192E3F" : "")};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const TrashAnimationStage = styled.span`
  margin-top: -16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 38px;
  overflow: hidden;
`;

const TrashWrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  width: 24px;
`;

const TrashCan = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  width: 14px;
  height: 16px;
  border: 2px solid ${trashcanColor};
  border-bottom-left-radius: 0.275rem;
  border-bottom-right-radius: 0.275rem;
`;

const trashCanPaperAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(12px);
  }
  25% {
    transform: translateX(-50%) translateY(12px);
  }
  30% {
    transform: translateX(-50%) translateY(8px);
  }
  60% {
    transform: translateX(-50%) translateY(8px);
  }
  65% {
    transform: translateX(-50%) translateY(4px);
  }
  90% {
    transform: translateX(-50%) translateY(4px);
  }
  95% {
    transform: translateX(-50%) translateY(0);
  }
`;

const TrashCanPaper = styled("span", buttonProps)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 12px;
  transform: translateX(-50%)
    translateY(${props => (props.clicked ? 0 : "12px")});
  background: ${trashcanPaperColor};

  ${props =>
    props.clicked
      ? `animation: ${trashCanPaperAnimation} ease-in-out ${animationLengthNumber *
          animationIterationCount}s`
      : ""}
`;

const TrashLid = styled.span`
  display: block;
  height: 2px;
  width: 16px;
  margin-bottom: 2px;
  background: ${trashcanColor};
`;

const PaperUnshreddedWrapper = styled.span`
  position: absolute;
  top: 0;
  height: 18px;
  overflow: hidden;
`;

const paperUnshreddedAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-12px);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(38px);
  }
`;

const PaperUnshredded = styled("span", buttonProps)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 6px;
  height: 12px;
  background: ${paperUnshreddedColor};
  transform: translateY(-12px);
  animation-name: ${props => (props.clicked ? paperUnshreddedAnimation : "")};
  animation-duration: ${animationLength};
  animation-timing-function: linear;
  animation-iteration-count: ${animationIterationCount};
`;

const PaperShreddedWrapper = styled.span`
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  width: 5px;
  height: 14px;
  justify-content: space-between;
`;

const paperShreddedAnimation = keyframes`
  0% {
    transform: translateY(-30px);

  }
  100% {
    transform: translateY(20px);
  }
`;

const PaperShredded = styled("span", buttonProps)`
  flex: 0 0 1px;
  width: 1px;
  height: 12px;
  background: ${paperShreddedColor};
  transform: translateY(-30px);
  animation-name: ${props => (props.clicked ? paperShreddedAnimation : "")};
  animation-duration: ${animationLength};
  animation-timing-function: linear;
  animation-iteration-count: ${animationIterationCount};
`;

export default {
  components: {
    StyledButton,
    TrashAnimationStage,
    TrashWrapper,
    TrashCan,
    TrashCanPaper,
    TrashLid,
    PaperUnshreddedWrapper,
    PaperUnshredded,
    PaperShreddedWrapper,
    PaperShredded
  },
  data: function() {
    return {
      clicked: false,
      deleted: false
    };
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked;
      this.deleted = false;

      setTimeout(() => {
        this.deleted = true;

        setTimeout(() => {
          this.deleted = false;
          this.clicked = false;
        }, 2000);
      }, animationLengthNumber * animationIterationCount * 1024);
    }
  }
};
</script>
