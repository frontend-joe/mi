<template>
  <StyledButton>
    <StyledIcon class="material-icons-outlined">menu</StyledIcon>
  </StyledButton>
</template>

<script>
import styled from "vue-styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.57);
  width: 56px;
  height: 56px;
  text-align: left;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    width: 200px;
  }
`;

const StyledIcon = styled.i``;

export default {
  components: {
    StyledButton,
    StyledIcon
  }
};
</script>
