<template>
  <Frame :background="background">
    <slot />
  </Frame>
</template>

<script>
import styled from "vue-styled-components";

const frameProps = { background: String };

const Frame = styled("div", frameProps)`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 750px;
  background: ${props =>
    props.theme.colorBackground || props.background || "transparent"};
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: background 0.4s;
`;
export default {
  props: frameProps,
  components: {
    Frame
  }
};
</script>
