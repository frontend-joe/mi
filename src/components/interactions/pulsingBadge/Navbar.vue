<template>
  <Wrapper>
    <IconWrapper>
      <Icon class="material-icons-outlined">
        article
      </Icon>
    </IconWrapper>
    <IconWrapper>
      <PulsingBadge><Pulser /></PulsingBadge>
      <Icon class="material-icons-outlined">
        favorite_border
      </Icon>
    </IconWrapper>
    <IconWrapper>
      <Icon class="material-icons-outlined">
        mail
      </Icon>
    </IconWrapper>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  height: 56px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  padding: 0 1rem 0 0.5rem;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  padding: 0 0.5rem;
  color: ${rgba("black", 0.85)};
`;

const pulseAnimation = keyframes`
  0%   {
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const PulsingBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: -3px;
  right: 4px;
  width: 12px;
  height: 12px;
  background-color: #00cc9c;
  border-radius: 50%;

  & > span {
    position: relative;
    z-index: 2;
    font-weight: 700;
    font-size: 8px;
    color: white;
  }
`;

const Pulser = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: inherit;
  border-radius: inherit;
  animation: ${pulseAnimation} 1.5s ease-out infinite;
`;

export default {
  components: {
    Wrapper,
    IconWrapper,
    Icon,
    PulsingBadge,
    Pulser
  }
};
</script>
