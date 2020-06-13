<template>
  <BottomRow>
    <FrontendJoe :src="handleUrl" />
    <SaveIcon :style="{ display: 'none' }" class="material-icons-outlined">
      bookmark_outline
    </SaveIcon>
    <ArrowIcon :textColor="textColor" class="material-icons-outlined"
      >bookmark_outline</ArrowIcon
    >
  </BottomRow>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

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
  height: 36px;
`;

const arrowProps = { textColor: String };

const ArrowIcon = styled("span", arrowProps)`
  font-size: 42px;
  color: ${props => rgba(props.textColor || "white", 0.45)};
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
  props: {
    textColor: String,
    handleColor: String
  },
  data() {
    return {
      handleUrl: "@/assets/images/arrow.png"
    };
  },
  mounted() {
    switch (this.handleColor) {
      case "grey":
        this.handleUrl = require("@/assets/images/frontendjoe-grey.png");
        break;
      case "purple":
        this.handleUrl = require("@/assets/images/frontendjoe-purple.png");
        break;
      default:
        this.handleUrl = require("@/assets/images/frontendjoe.png");
        break;
    }
  },
  components: {
    BottomRow,
    FrontendJoe,
    SaveIcon,
    ArrowIcon
  }
};
</script>
