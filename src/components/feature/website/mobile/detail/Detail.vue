<template>
  <Overlay @click="$emit('close-dialog')" :isOpen="isOpen">
    <Dialog :isOpen="isOpen">
      <InteractionNumber>{{ interaction.id }}</InteractionNumber>
      <InteractionTitle
        :style="{ marginBottom: '2rem' }"
        :interactionName="interaction.name"
      />
      <InteractionArtists
        :style="{ marginBottom: '2rem', transform: 'scale(0.5)' }"
        :collabImage="interaction.image"
        :collabInsta="interaction.collab"
      />
      <InteractionCode :githubPath="interaction.githubUrl" />
    </Dialog>
  </Overlay>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import {
  InteractionTitle,
  InteractionNumber,
  InteractionCode,
  InteractionArtists
} from "@/components/feature/website/shared";

const transitionDuration = "0.65s";

const styleProps = {
  isOpen: Boolean
};

const Overlay = styled("div", styleProps)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba("black", 0.05)};

  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};

  transition-property: visibility, opacity;
  transition-duration: ${transitionDuration};
`;

const Dialog = styled("div", styleProps)`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: white;
  transform: translateX(${props => (props.isOpen ? 0 : "100%")});
  transition: transform ${transitionDuration};
`;

export default {
  props: {
    interaction: Object,
    isOpen: Boolean
  },
  components: {
    Overlay,
    Dialog,
    InteractionTitle,
    InteractionNumber,
    InteractionCode,
    InteractionArtists
  }
};
</script>
