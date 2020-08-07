<template>
  <StyledSwipeMessage>
    <StyledSwipeIcon
      :style="{ marginRight: '8px' }"
      class="material-icons-outlined"
    >
      arrow_back
    </StyledSwipeIcon>
    <span>Swipe</span>
    <StyledSwipeIcon
      :style="{ marginLeft: '8px' }"
      class="material-icons-outlined"
    >
      arrow_forward
    </StyledSwipeIcon>
  </StyledSwipeMessage>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const animation = keyframes`
  50% {
    transform: translateX(-10px);
  }
`;

const StyledSwipeMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${rgba("#fff", 0.75)};
  animation: ${animation} 1.5s linear infinite;
`;

const StyledSwipeIcon = styled.span`
  font-size: 26px;
`;

export default {
  components: {
    StyledSwipeMessage,
    StyledSwipeIcon
  }
};
</script>
