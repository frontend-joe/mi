<template>
  <Wrapper v-tippy :content="`Collab with @${collabInsta}`">
    <Collab>
      <CollabImage :src="require('@/assets/images/joe.png')" />
      <CollabName>@frontendjoe</CollabName>
    </Collab>
    <Collab :float="true">
      <CollabImage :src="collabImage" />
      <CollabName float>@{{ collabInsta }}</CollabName>
    </Collab>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const collabProps = { float: Boolean };

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
`;

const Collab = styled("div", collabProps)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${props => (props.float ? "z-index: 0; transform: translateX(-25px)" : "")};
`;

const CollabName = styled("div", collabProps)`
  font-size: 0.575rem;
  color: rgba(0, 0, 0, 0.38);

  ${props => (props.float ? "padding-left: 18px" : "")};
`;

const CollabImage = styled("img", collabProps)`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid #ebebeb;
  margin-bottom: 0.25rem;
`;

export default {
  props: {
    collabImage: String,
    collabInsta: String
  },
  components: {
    Wrapper,
    Collab,
    CollabImage,
    CollabName
  }
};
</script>
