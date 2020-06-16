<template>
  <StyledWrapper>
    <StyledTooltipWrapper class="tooltip">
      <StyledTooltip @click="copyText()">
        <StyledTooltipMessage :copied="copied">Copied</StyledTooltipMessage>
        <StyledTooltipCopyButton>
          <i class="icofont-ui-copy"> </i>
        </StyledTooltipCopyButton>
        #6E45BD
      </StyledTooltip>
    </StyledTooltipWrapper>
    <StyledColorSquare />
    <StyledTextbox>Carolina Blue</StyledTextbox>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const tooltipBackground = "#10132f";
const transitionDuration = "0.25s";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 1.25rem 0 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 11px 15px -7px ${rgba("#4e3dc8", 0.5)};
  background: white;

  &:hover .tooltip {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const StyledTooltipWrapper = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
  opacity: 0;
  padding: 0 0 0.5rem;
  user-select: none;
  transition: transform ${transitionDuration}, opacity ${transitionDuration};
`;

const StyledTooltip = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 0.5rem;
  padding: 0 1rem;
  box-shadow: 0 11px 15px -7px ${rgba("#4e3dc8", 0.5)};
  color: white;
  background: ${tooltipBackground};
  cursor: pointer;

  ${"" /* &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    bottom: -7px;
    background: inherit;
    transform: rotate(45deg) translateX(-50%);
  } */}
`;

const tooltipProps = { copied: Boolean };
const StyledTooltipMessage = styled("div", tooltipProps)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${tooltipBackground};
  transform: translateY(${props => (props.copied ? 0 : "100%")});
  transition: transform ${transitionDuration};
`;

const StyledTooltipCopyButton = styled.i`
  padding: 0;
  margin-right: 0.5rem;
`;

const StyledTextbox = styled.div`
  font-weight: 700;
`;

const StyledColorSquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: #449dd1;
  margin-right: 0.75rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledTooltip,
    StyledTooltipWrapper,
    StyledTooltipCopyButton,
    StyledTooltipMessage,
    StyledTextbox,
    StyledColorSquare
  },
  methods: {
    copyText() {
      this.copied = true;

      console.log("copied", this.copied);

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }
  },
  data() {
    return {
      copied: false
    };
  }
};
</script>
