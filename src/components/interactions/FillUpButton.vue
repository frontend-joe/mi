<template>
  <StyledWrapper>
    <StyledButtonWrapper>
      <Button1 class="button"><ButtonText>Center</ButtonText></Button1>
    </StyledButtonWrapper>
    <StyledButtonWrapper>
      <Button2 class="button"><ButtonText>Left</ButtonText></Button2>
    </StyledButtonWrapper>
    <StyledButtonWrapper>
      <Button3 class="button"><ButtonText>Bottom</ButtonText></Button3>
    </StyledButtonWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const transitionDuration = "0.45s";
const mainColor = "#E34F74";

const StyledWrapper = styled.div``;

const StyledButtonWrapper = styled.div`
  margin-bottom: 1.75rem;
`;

const StyledButton = styled.button`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 200px;
  height: 50px;
  background: transparent;
  border: 2px solid ${mainColor};
  border-radius: 0.325rem;
  color: ${rgba(mainColor, 0.85)};
  font-size: 18px;
  font-weight: 600;
  transition: color ${transitionDuration};

  &:hover {
    color: ${rgba("#fff", 0.85)} !important;
  }

  &:hover::after {
    transform: scale(1);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${mainColor};
    transition: transform ${transitionDuration};
  }
`;

const Button1 = styled(StyledButton)`
  &.button:hover::after {
    transform: scale(1, 1);
  }

  &.button::after {
    transform: scale(0, 1);
    transform-origin: 50% 0%;
  }
`;

const Button2 = styled(StyledButton)`
  &.button:hover::after {
    transform: scale(1, 1);
  }

  &.button::after {
    transform: scale(0, 1);
    transform-origin: 0% 100%;
  }
`;

const Button3 = styled(StyledButton)`
  &.button:hover::after {
    transform: scale(1, 1);
  }

  &.button::after {
    transform: scale(1, 1) translateY(100%);
  }
`;

const ButtonText = styled.div`
  position: relative;
  z-index: 3;
`;

export default {
  components: {
    StyledWrapper,
    StyledButtonWrapper,
    ButtonText,
    Button1,
    Button2,
    Button3
  }
};
</script>
