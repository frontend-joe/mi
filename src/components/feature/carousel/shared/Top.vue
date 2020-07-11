<template>
  <TopRow :textColor="textColor">
    <Waves :style="{ display: 'none' }" />
    <span>
      MI
    </span>
    <TopRightText :textColor="textColor" v-if="topRightText">
      {{ topRightText }}
    </TopRightText>
  </TopRow>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const scProps = { textColor: String };

const TopRow = styled("div", scProps)`
  position: relative;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 21px;
  font-weight: 600;
  color: ${props =>
    rgba(props.theme.colorText || props.textColor || "#fff", 0.38)};
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

const TopRightText = styled("div", scProps)`
  color: ${props =>
    props.textColor ? rgba(props.textColor, 0.38) : rgba("#fff", 0.57)};
`;

export default {
  props: {
    textColor: String,
    topRightText: String
  },
  components: {
    TopRow,
    Waves,
    TopRightText
  }
};
</script>
