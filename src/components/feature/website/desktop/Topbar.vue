<template>
  <Wrapper>
    <MenuButton>
      <GithubLink />
    </MenuButton>
    <AppTitle>
      Micro Interactions
    </AppTitle>
    <Instagram href="https://instagram.com/frontendjoe" target="_blank">
      <i class="icofont-instagram"></i>
    </Instagram>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import GithubLink from "@/components/feature/website/shared/GithubLink";

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  background: #121117;
`;

const AppTitle = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;
  color: ${rgba("white", 0.75)};
`;

const MenuButton = styled.div`
  width: 80px;
  height: 100%;
`;

const Instagram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 80px;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: ${rgba("white", 0.65)};

  &:hover {
    color: ${rgba("white", 0.75)};
  }
`;

export default {
  components: {
    Wrapper,
    MenuButton,
    GithubLink,
    AppTitle,
    Instagram
  }
};
</script>
