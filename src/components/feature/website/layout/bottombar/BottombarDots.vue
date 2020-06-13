<template>
  <StyledWrapper>
    <StyledDotWrapper>
      <StyledDotButton
        v-for="dot in dots"
        :key="dot"
        @click="$emit('dot-clicked', dot)"
      >
        <StyledDot :active="dot === activeIndex" />
      </StyledDotButton>
    </StyledDotWrapper>
    <StyledSwipeMessage>
      <StyledSwipeIcon class="material-icons-outlined">
        arrow_back
      </StyledSwipeIcon>
      <span>Swipe</span>
      <StyledSwipeIcon class="material-icons-outlined">
        arrow_forward
      </StyledSwipeIcon>
    </StyledSwipeMessage>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const StyledDotWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDotButton = styled.button`
  padding: 1rem 0.325rem;
`;

const dotProps = { active: Boolean };
const StyledDot = styled("span", dotProps)`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid
    ${props => (props.active ? props.theme.colorPrimary : "#d4d4d4")};
  margin: 0;
  background: ${props => (props.active ? props.theme.colorPrimary : "#d4d4d4")};

  ${props =>
    props.active ? "transform: scale(1, 1);" : "transform: scale(0.625,0.625)"};

  transition: transform 0.25s;

  &:first-child {
    margin-left: 0;
  }
`;

const StyledSwipeMessage = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  color: ${rgba("#10132F", 0.38)};

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

const StyledSwipeIcon = styled.span`
  margin: 0 0.5rem;
  font-size: 18px;
`;

export default {
  props: {
    dots: Array,
    activeIndex: Number
  },
  components: {
    StyledWrapper,
    StyledDotButton,
    StyledDot,
    StyledDotWrapper,
    StyledSwipeMessage,
    StyledSwipeIcon
  }
};
</script>
