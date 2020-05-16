<template>
  <MiddleRow :horizontalAlign="horizontalAlign">
    <slot />
  </MiddleRow>
</template>

<script>
import styled from "vue-styled-components";

const props = {
  horizontalAlign: String
};

const MiddleRow = styled("div", props)`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: ${props => props.horizontalAlign || "center"};
`;
export default {
  props: props,
  components: {
    MiddleRow
  }
};
</script>
