<template>
  <Wrapper>
    <Left></Left>
    <Right>
      <router-link :to="{ path: `/` }">Back</router-link>
      {{ name }}
    </Right>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 5;
  height: 400px;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  min-height: 100%;
  background: red;
`;

const Right = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  background: white;
`;

export default {
  components: {
    Wrapper,
    Left,
    Right
  },
  computed: {
    name() {
      return this.$route.params.name;
    }
  },
  mounted() {
    console.log("mounted!", this.$route);
  }
};
</script>
