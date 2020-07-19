<template>
  <StyledGithubLink target="_blank" href="https://github.com/vuezy/mi">
    <StyledGithubIcon :icon="['fab', 'github']" />
  </StyledGithubLink>
</template>

<script>
import styled from "vue-styled-components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const StyledGithubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.57);
  width: 56px;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
`;

const StyledGithubIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

export default {
  components: {
    StyledGithubLink,
    StyledGithubIcon
  }
};
</script>
