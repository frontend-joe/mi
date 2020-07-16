<template>
  <Wrapper>
    <Highlight class="highlight" />
    <TheLink>Highlight</TheLink>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: relative;

  &:hover .highlight {
    transform: scaleY(3.5);
  }
`;

const Highlight = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 6px;
  background: #fb5b69;
  transform-origin: 0% 100%;
  transition: transform 0.25s;
`;

const TheLink = styled.a`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  font-weight: 700;
  color: white;
`;

export default {
  components: {
    Wrapper,
    Highlight,
    TheLink
  }
};
</script>
