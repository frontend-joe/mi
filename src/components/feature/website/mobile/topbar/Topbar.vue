<template>
  <StyledWrapper>
    <TopbarIconLink linkUrl="https://github.com/vuezy/mi" icon="github" />
    <TopbarTitle />
    <TopbarIconLink
      linkUrl="https://www.instagram.com/frontendjoe/"
      icon="instagram"
    />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import TopbarIconLink from "./TopbarIconLink";
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

  padding: 0;
  color: white;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    padding: 0 2rem;
  }
`;

export default {
  components: {
    StyledWrapper,
    TopbarIconLink,
    TopbarTitle
  }
};
</script>
