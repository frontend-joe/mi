<template>
  <StyledLink target="_blank" :href="linkUrl">
    <StyledIcon :icon="['fab', icon]" />
  </StyledLink>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${rgba("white", 0.57)};
  width: 56px;
  height: 56px;

  &:hover {
    color: ${rgba("white", 0.75)};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
`;

export default {
  props: {
    linkUrl: String,
    icon: String
  },
  components: {
    StyledLink,
    StyledIcon
  }
};
</script>
