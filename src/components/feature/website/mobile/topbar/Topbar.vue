<template>
  <StyledWrapper>
    <TopbarTitle />
    <TopbarGithubLink v-if="false" />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopbarGithubLink from "./TopbarGithubLink";
import TopbarTitle from "./TopbarTitle";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  color: white;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 2rem;
  }
`;

export default {
  components: {
    StyledWrapper,
    TopbarGithubLink,
    TopbarTitle
  }
};
</script>
