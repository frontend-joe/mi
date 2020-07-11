<template>
  <Wrapper>
    <Frame>
      <Content>
        <ContentTitle>
          Simplest <br />
          Ways To
          <HighlightButton
            colorText="#404040"
            colorHighlight="#D2B7F5"
            text="Save"
          ></HighlightButton>
        </ContentTitle>
        <ContentSubtitle>
          With clover you can manage your money directly in-app and pay with
          your card no matter where you are.
        </ContentSubtitle>
      </Content>
    </Frame>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import HighlightButton from "./HighlightButton";

const Wrapper = styled.div``;

const Frame = styled.div`
  background: url(${require("@/assets/images/trups-example.png")});
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: center;
  border-radius: 20px;
  width: 500px;
  height: 330px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.075);
  display: flex;
  align-items: center;
  padding: 0 50px 0;
`;

const Content = styled.div`
  width: 180px;
`;

const ContentTitle = styled.div`
  font-size: 1.85rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1.5px;
  margin-bottom: 0.625rem;
  color: #404040;
`;

const ContentSubtitle = styled.div`
  color: ${rgba("#404040", 0.57)};
  font-size: 0.625rem;
  line-height: 1.35;
`;

export default {
  components: {
    Wrapper,
    Frame,
    Content,
    ContentTitle,
    ContentSubtitle,
    HighlightButton
  }
};
</script>
