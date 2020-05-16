<template>
  <StyledWrapper>
    <Frame>
      <StyledBackground />
      <Top topRightText="#01" />
      <Middle>
        <StyledMiddleText>
          <StyledNumber>Collab</StyledNumber>
          <StyledTitle>The Hamburger Close</StyledTitle>
          <div>
            <StyledImage :src="require('@/assets/images/joe.png')" />
            <StyledImage :src="require('@/assets/images/leeo.png')" isLast />
          </div>
        </StyledMiddleText>
        <StyledMiddleWrapper>
          <FocalInteraction size="200px" />
        </StyledMiddleWrapper>
      </Middle>
      <Bottom />
    </Frame>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalInteraction from "@/components/interactions/hamburgerCross/Wrapper2";
import Frame from "./shared/Frame";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "DM Sans";
  position: relative;
`;

const StyledBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: #f7f7ff;
`;

const StyledMiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StyledMiddleText = styled.div`
  width: 45%;
  padding-left: 28px;
`;

const StyledNumber = styled.div`
  color: #a7a7a7;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.175;
  margin-bottom: 1rem;
`;

const imageProps = { isLast: Boolean };
const StyledImage = styled("img", imageProps)`
  border-radius: 50%;
  width: 58px;
  height: 58px;
  border: 3px solid #f7f7ff;

  transform: translateX(${props => (props.isLast ? "-10px" : "0")});
`;

export default {
  components: {
    FocalInteraction,
    StyledWrapper,
    StyledBackground,
    StyledMiddleWrapper,
    StyledMiddleText,
    StyledNumber,
    StyledTitle,
    StyledImage,
    Frame,
    Top,
    Middle,
    Bottom
  }
};
</script>
