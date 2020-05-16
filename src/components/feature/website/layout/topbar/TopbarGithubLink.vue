<template>
  <StyledGithubLink>
    <StyledGithubIcon :icon="['fab', 'github']" />
    <StyledGithubText>
      View on GitHub
    </StyledGithubText>
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

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    width: 200px;
  }
`;

const StyledGithubIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const StyledGithubText = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  margin-left: 0.5rem;
  display: none;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    display: block;
  }
`;

export default {
  components: {
    StyledGithubLink,
    StyledGithubIcon,
    StyledGithubText
  }
};
</script>
