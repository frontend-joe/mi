<template>
  <Wrapper>
    <Textbox placeholder="Type here" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 70px;
`;

const Textbox = styled.input`
  outline: none;
  height: 56px;
  line-height: 56px;
  font-size: 2rem;
  background: transparent;
  color: ${rgba("black", 0.8)};
  border: 0;
  border-radius: 0.5rem;
  padding: 0 1rem;

  &::placeholder {
    color: ${rgba("black", 0.38)};
  }
`;

export default {
  components: {
    Wrapper,
    Textbox
  }
};
</script>
