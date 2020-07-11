<template>
  <HighlightButton :colorText="colorText" :colorHighlight="colorHighlight">
    <ButtonText>
      {{ text }}
    </ButtonText>
  </HighlightButton>
</template>

<script>
import styled from "vue-styled-components";

const props = { colorText: String, colorHighlight: String };

const HighlightButton = styled("a", props)`
  position: relative;
  color: ${props => props.colorText};
  cursor: pointer;

  &:hover::after {
    transform: scaleY(3.5);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 3px;
    height: 3px;
    width: 100%;
    background: ${props => props.colorHighlight};
    transform-origin: 0% 100%;
    transition: transform 0.35s;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;

export default {
  props: {
    colorText: String,
    colorHighlight: String,
    text: String
  },
  components: {
    HighlightButton,
    ButtonText
  }
};
</script>
