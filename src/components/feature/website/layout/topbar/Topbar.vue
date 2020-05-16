<template>
  <StyledWrapper>
    <TopbarMenu />
    <TopbarTitle />
    <TopbarGithubLink />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopbarMenu from "./TopbarMenu";
import TopbarGithubLink from "./TopbarGithubLink";
import TopbarTitle from "./TopbarTitle";

const StyledWrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 2rem;
  }
`;

export default {
  components: {
    StyledWrapper,
    TopbarMenu,
    TopbarGithubLink,
    TopbarTitle
  }
};
</script>
