<template>
  <StyledGithubLink
    target="_blank"
    href="https://github.com/vuezy/mi/tree/master/src/components/interactions"
  >
    <StyledGithubIcon :icon="['fab', 'github']" />
  </StyledGithubLink>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = {
  size: {
    type: String,
    default: "56px"
  },
  iconSize: {
    type: String,
    default: "24px;"
  }
};

const StyledGithubLink = styled("a", props)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size};
  height: ${props => props.size};
  color: ${rgba("white", 0.75)};
`;

const StyledGithubIcon = styled(FontAwesomeIcon, props)`
  font-size: ${props => props.iconSize};
`;

export default {
  props: props,
  components: {
    StyledGithubLink,
    StyledGithubIcon
  }
};
</script>
