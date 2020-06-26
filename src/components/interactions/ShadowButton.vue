<template>
  <Stage>
    <Wrapper>
      <Shadow />
      <TheButton class="button-topleft">Left</TheButton>
    </Wrapper>
    <Wrapper>
      <Shadow />
      <TheButton class="button-topright">Right</TheButton>
    </Wrapper>
    <Wrapper>
      <Shadow />
      <TheButton class="button-topcenter">Center</TheButton>
    </Wrapper>
  </Stage>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { rgba } from "polished";

const Stage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  height: 56px;
  width: 150px;
  margin-bottom: 1.5rem;

  &:hover .button-topleft {
    transform: translate(-10px, -10px);
  }

  &:hover .button-topright {
    transform: translate(10px, -10px);
  }

  &:hover .button-topcenter {
    transform: translate(0, -10px);
  }
`;

const sharedCss = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 2px;
`;

const Shadow = styled.div`
  z-index: 0;
  ${sharedCss};
  background: ${rgba("black", 0.2)};
`;

const TheButton = styled.button`
  z-index: 1;
  ${sharedCss};
  background: #7405fc;
  font-weight: 700;
  text-transform: uppercase;

  ${"" /* background: rebeccapurple; */}
  color: white;
  transition: transform 0.35s;
`;

export default {
  components: {
    Stage,
    Wrapper,
    Shadow,
    TheButton
  }
};
</script>
