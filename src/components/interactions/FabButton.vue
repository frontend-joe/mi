<template>
  <Wrapper>
    <FabButton :isOpen="isOpen" @click="isOpen = !isOpen">
      <span class="material-icons-outlined">add</span>
    </FabButton>
    <MenuWrapper :isOpen="isOpen">
      <MenuCircle :isOpen="isOpen">
        <IconButton
          :isOpen="isOpen"
          class="material-icons-outlined"
          top="-42px"
          left="33px"
          textColor="#faff06"
          >image</IconButton
        >
        <IconButton
          :isOpen="isOpen"
          class="material-icons-outlined"
          top="-19px"
          left="-18px"
          textColor="#42E2B8"
          >videocam</IconButton
        >
        <IconButton
          :isOpen="isOpen"
          class="material-icons-outlined"
          top="35px"
          left="-41px"
          textColor="#2CC3FB"
          >speaker</IconButton
        >
      </MenuCircle>
    </MenuWrapper>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const animationDuration = 1.5;

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
  100% {
    transform: rotate(315deg);
  }
`;

const fabIconAnimationOut = keyframes`
  0% {
    transform: rotate(315deg);
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
  transform: rotate(${props => (props.isOpen ? "315deg" : "0deg")});

  ${props =>
    props.isOpen === true
      ? `animation: ${fabIconAnimationIn} ${animationDuration / 2}s linear`
      : ""};

  ${props =>
    props.isOpen === false
      ? `animation: ${fabIconAnimationOut} ${animationDuration / 2}s linear`
      : ""};

  & > span {
    font-size: 28px;
  }
`;

const menuWrapperAnimationIn = keyframes`
0% {
  transform: rotate(-140deg);
}
50% {
  transform: rotate(-140deg);
}
100% {
  transform: rotate(0deg);
}
`;

const menuWrapperAnimationOut = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(-140deg);
}
100% {
  transform: rotate(-140deg);
}
`;

const MenuWrapper = styled("div", styleProps)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  transform: rotate(${props => (props.isOpen ? "0deg" : "-140deg")});

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
50% {
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
  width: 200px;
  height: 200px;
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
  50% {
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
    opacity: 1;
  }
  50% {
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
  font-size: 32px;
  ${props =>
    props.isOpen === true
      ? `animation: ${iconAnimationIn} ${animationDuration}s`
      : ""};
  ${props =>
    props.isOpen === false
      ? `animation: ${iconAnimationOut} ${animationDuration}s linear`
      : ""};
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
