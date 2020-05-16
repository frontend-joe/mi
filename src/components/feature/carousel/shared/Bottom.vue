<template>
  <BottomRow>
    <FrontendJoe :src="require('@/assets/images/frontendjoe.png')" />
    <SaveIcon :style="{ display: 'none' }" class="material-icons-outlined">
      bookmark_outline
    </SaveIcon>
    <Arrow :src="require('@/assets/images/arrow.png')" />
  </BottomRow>
</template>

<script>
import styled from "vue-styled-components";

const BottomRow = styled.div`
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 28px;
`;

const FrontendJoe = styled.img`
  height: 34px;
`;

const Arrow = styled.img`
  height: 24px;
`;

const SaveIcon = styled.i`
  position: relative;
  font-size: 38px;
  color: #522cad;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: rgba(82, 44, 173, 0.1);
  }
`;

export default {
  components: {
    BottomRow,
    FrontendJoe,
    SaveIcon,
    Arrow
  }
};
</script>
