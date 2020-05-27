<template>
  <StyledWrapper>
    <StyledCircle>
      <!-- <StyledInnerCircle /> -->
    </StyledCircle>
  </StyledWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { lighten, darken } from "polished";

const backgroundColor = "#445FE7";

const StyledWrapper = styled.div`
  background: ${backgroundColor};
  padding: 8rem;
`;

const rippleAnimation = keyframes`
0% {
  transform: scale(0, 0);
}
75% {
}
100% {
  transform: scale(3, 3);
}
`;

const StyledCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset -5px -5px 10px ${lighten(0.1, backgroundColor)},
    inset 5px 5px 10px ${darken(0.1, backgroundColor)};

  animation: ${rippleAnimation} 2s infinite;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: ${backgroundColor};
    box-shadow: inset -5px -5px 10px ${lighten(0.1, backgroundColor)},
      inset 5px 5px 10px ${darken(0.1, backgroundColor)};
  }

  ${"" /* background-color: #5448c8; */}
  ${"" /* box-shadow: inset 8px 8px 17px 0 ${lighten(0.1, backgroundColor)},
    inset -13px -13px 8px 0 ${lighten(0.1, backgroundColor)},
    -11px -11px 40px 3px ${lighten(0.075, backgroundColor)},
    8px 14px 40px -20px rgba(0, 0, 0, 0.19); */}
`;

// const StyledInnerCircle = styled.div`
//
// `;

export default {
  components: {
    StyledWrapper,
    StyledCircle
    // StyledInnerCircle
  }
};
</script>
