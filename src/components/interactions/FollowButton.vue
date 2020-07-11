<template>
  <Wrapper>
    <Icon class="material-icons-outlined">arrow_forward</Icon>
    <ButtonText>Follow</ButtonText>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  width: 140px;
  height: 40px;
  padding: 0 2px;
  border-radius: 40px;
  background: white;
`;

const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #cb429f;
  color: white;
`;

const ButtonText = styled.span`
  color: #cb429f;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-left: 0.75rem;
`;

export default {
  components: {
    Wrapper,
    Icon,
    ButtonText
  }
};
</script>
