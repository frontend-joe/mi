<template>
  <Wrapper v-if="activeComponent">
    <DetailBackground>
      <component :is="activeComponent"></component>
    </DetailBackground>
    <DetailContent>
      <InteractionNumber class="number">
        #{{ activeItemNumber }}
      </InteractionNumber>
      <InteractionTitle>
        The <br />
        {{ interactionTitle }}
      </InteractionTitle>
      <CodeTitle>
        Vuejs Code
      </CodeTitle>
      <CodeWrapper>
        <VueCodeHighlight class="language-javascript">
          {{ code }}
        </VueCodeHighlight>
      </CodeWrapper>
    </DetailContent>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { component as VueCodeHighlight } from "vue-code-highlight";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
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

  &:hover .number {
    opacity: 1;
  }
`;

const InteractionNumber = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  line-height: 1.15;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  color: rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.5s;
`;

const InteractionTitle = styled.div`
  width: 15rem;
  line-height: 1.15;
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -3px;
  margin-bottom: 2rem;
`;

const codeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CodeTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: -1px;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.38);
`;

const CodeWrapper = styled(VuePerfectScrollbar)`
  min-height: 0;
  animation: ${codeAnimation} 1s;
`;

export default {
  props: {
    activeComponent: Object,
    code: String,
    interactionTitle: String,
    activeItemNumber: Number
  },
  components: {
    Wrapper,
    DetailBackground,
    DetailContent,
    InteractionTitle,
    InteractionNumber,
    VueCodeHighlight,
    CodeWrapper,
    CodeTitle
  }
};
</script>
