<template>
  <Wrapper v-if="activeComponent">
    <DetailBackground>
      <ComponentWrapper :open="open">
        <component :is="activeComponent"></component>
      </ComponentWrapper>
    </DetailBackground>
    <DetailContent>
      <HeaderWrapper :open="open">
        <InteractionNumber class="number">
          #{{ activeItemNumber }}
        </InteractionNumber>

        <HeaderRow>
          <InteractionTitle>
            The <br />
            {{ interactionTitle }}
          </InteractionTitle>
          <DetailCollabs
            :collabImage="collabImage"
            :collabInsta="collabInsta"
          />
        </HeaderRow>
      </HeaderWrapper>
      <CodeTitle v-if="false">
        Vuejs Code
      </CodeTitle>
      <CodeAnimation :open="open">
        <CodeWrapper id="code-box">
          <VueCodeHighlight class="language-javascript">
            {{ code }}
          </VueCodeHighlight>
        </CodeWrapper>
      </CodeAnimation>
    </DetailContent>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { component as VueCodeHighlight } from "vue-code-highlight";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import DetailCollabs from "./DetailCollabs";

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  max-width: 100vw;
`;

const detailProps = {
  open: Boolean,
  activeItemName: String,
  activeItemColor: String
};

const DetailBackground = styled("div", detailProps)`
  width: 50%;
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailContent = styled.div`
  flex: 1 1 50%;
  background: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const componentAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  75% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ComponentWrapper = styled("div", detailProps)`
  ${props => (props.open ? `animation: ${componentAnimation} 2.5s` : "")};
`;

const headerAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderWrapper = styled("div", detailProps)`
  ${props => (props.open ? `animation: ${headerAnimation} 2s` : "")};
`;

const HeaderRow = styled("div", detailProps)`
  flex: 0 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const InteractionNumber = styled.div`
  line-height: 1.5;
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  color: rgba(0, 0, 0, 0.28);
`;

const InteractionTitle = styled.div`
  width: 15rem;
  line-height: 1.15;
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  margin-right: 2rem;
`;

const CodeTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: -1px;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.38);
`;

const codeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  75% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CodeAnimation = styled("div", detailProps)`
  min-height: 0;
  min-width: 0;
  max-width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${props => (props.open ? `animation: ${codeAnimation} 2s` : "")};
  background: #f7f7f7;
`;

const CodeWrapper = styled(VuePerfectScrollbar)`
  min-width: 0;
  min-height: 0;
`;

export default {
  props: {
    open: Boolean,
    activeComponent: Object,
    code: String,
    interactionTitle: String,
    activeItemNumber: Number,
    collabImage: String,
    collabInsta: String
  },
  components: {
    Wrapper,
    DetailBackground,
    DetailContent,
    ComponentWrapper,
    HeaderWrapper,
    HeaderRow,
    InteractionTitle,
    InteractionNumber,
    VueCodeHighlight,
    CodeAnimation,
    CodeWrapper,
    CodeTitle,
    DetailCollabs
  },
  watch: {
    $route() {
      if (this.$route.params.name) {
        const codeBox = document.getElementById("code-box");

        if (codeBox) {
          codeBox.scrollTop = 0;
        }
      }
    }
  }
};
</script>
