<template>
  <MiddleRow :horizontalAlign="horizontalAlign" :verticalAlign="verticalAlign">
    <slot />
  </MiddleRow>
</template>

<script>
import styled from "vue-styled-components";

const props = {
  horizontalAlign: String,
  verticalAlign: String
};

const MiddleRow = styled("div", props)`
  flex: 1 0 auto;
  display: flex;
  align-items: ${props => props.verticalAlign || "center"};
  justify-content: ${props => props.horizontalAlign || "center"};
`;
export default {
  props: props,
  components: {
    MiddleRow
  }
};
</script>
