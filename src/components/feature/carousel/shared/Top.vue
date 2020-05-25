<template>
  <TopRow>
    <Waves :style="{ display: 'none' }" />
    <span>
      Micro Interactions
    </span>
    <TopRightText v-if="topRightText">
      {{ topRightText }}
    </TopRightText>
  </TopRow>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const TopRow = styled.div`
  position: relative;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 20px;
  font-weight: 600;
  color: ${rgba("#090C22", 0.8)};
`;

const Waves = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 500px;
  background: url(${require("@/assets/images/wave-background.png")});
  background-size: 150%;
  background-position: right top;
  background-repeat: no-repeat;
`;

const TopRightText = styled.div`
  color: ${rgba("#090C22", 0.38)};
`;

export default {
  props: {
    topRightText: String
  },
  components: {
    TopRow,
    Waves,
    TopRightText
  }
};
</script>
