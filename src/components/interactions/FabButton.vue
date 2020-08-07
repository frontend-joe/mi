<template>
  <Wrapper>
    <FabButton :isOpen="isOpen" @click="isOpen = !isOpen">
      <span class="material-icons-outlined">add</span>
    </FabButton>
    <MenuWrapper :isOpen="isOpen">
      <MenuCircle :isOpen="isOpen">
        <IconButton
          :isOpen="isOpen"
          top="37px"
          left="-44px"
          textColor="#2CC3FB"
        >
          <font-awesome-icon :icon="['fas', 'trash-alt']" />
        </IconButton>
        <IconButton
          :isOpen="isOpen"
          top="-18px"
          left="-20px"
          textColor="#42E2B8"
        >
          <font-awesome-icon :icon="['fas', 'tag']" />
        </IconButton>
        <IconButton
          :isOpen="isOpen"
          top="-46px"
          left="42px"
          textColor="#ebef3c"
        >
          <font-awesome-icon :icon="['fas', 'edit']" />
        </IconButton>
      </MenuCircle>
    </MenuWrapper>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const animationDuration = 1;

const buttonSize = "48px";

const styleProps = {
  isOpen: Boolean,
  top: String,
  left: String,
  textColor: String
};

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.625);
`;

const fabIconAnimationIn = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(135deg);
  }
`;

const fabIconAnimationOut = keyframes`
  0% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const FabButton = styled("button", styleProps)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f84aa7;
  color: white;
  width: ${buttonSize};
  height: ${buttonSize};
  border-radius: 50%;
  transform: rotate(${props => (props.isOpen ? "135deg" : "0deg")});

  ${props =>
    props.isOpen === true
      ? `animation: ${fabIconAnimationIn} ${animationDuration}s linear`
      : ""};

  ${props =>
    props.isOpen === false
      ? `animation: ${fabIconAnimationOut} ${animationDuration}s linear`
      : ""};

  & > span {
    font-size: 28px;
  }
`;

const menuWrapperAnimationIn = keyframes`
0% {
  transform: rotate(-135deg);
}
20% {
  transform: rotate(-135deg);
}
50% {
  transform: rotate(0deg);
}
`;

const menuWrapperAnimationOut = keyframes`
0% {
  transform: rotate(0deg);
}
30% {
  transform: rotate(-135deg);
}
100% {
  transform: rotate(-135deg);
}
`;

const MenuWrapper = styled("div", styleProps)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  transform: rotate(${props => (props.isOpen ? "0deg" : "-135deg")});

  ${props =>
    props.isOpen === true
      ? `animation: ${menuWrapperAnimationIn} ${animationDuration}s`
      : ""};

  ${props =>
    props.isOpen === false
      ? `animation: ${menuWrapperAnimationOut} ${animationDuration}s linear`
      : ""};
`;

const menuAnimationIn = keyframes`
0% {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}
50% {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
`;

const menuAnimationOut = keyframes`
0% {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
25% {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
100% {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}
`;

const MenuCircle = styled("div", styleProps)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 50px solid ${rgba("white", 0.05)};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: translate(-50%, -50%);

  transform-origin: 50% 50%;

  ${props =>
    props.isOpen === true
      ? `animation: ${menuAnimationIn} ${animationDuration}s`
      : ""};
  ${props =>
    props.isOpen === false
      ? `animation: ${menuAnimationOut} ${animationDuration}s`
      : ""};
`;

const iconAnimationIn = keyframes`
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const iconAnimationOut = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const IconButton = styled("button", styleProps)`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  color: ${props => props.textColor};
  width: 40px;
  height: 40px;
  font-size: 22px;
  ${props =>
    props.isOpen === true
      ? `animation: ${iconAnimationIn} ${animationDuration / 4}s`
      : ""};
  ${props =>
    props.isOpen === false
      ? `animation: ${iconAnimationOut} ${animationDuration}s linear`
      : ""};

  transition: transform 0.25s;

  &:hover {
    transform: scale(1.175);
  }
`;

export default {
  components: {
    Wrapper,
    FabButton,
    MenuWrapper,
    MenuCircle,
    IconButton
  },
  data() {
    return {
      isOpen: undefined
    };
  }
};
</script>
