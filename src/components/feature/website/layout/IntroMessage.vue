<template>
  <Wrapper :dismissDialog="dismissDialog">
    <CloseButton @click="closeDialog" class="material-icons-outlined"
      >close</CloseButton
    >
    <CardTitle>Welcome!</CardTitle>
    <CardText
      >Micro Interactions or MI, is an Instagram tutorial series. The aim is to
      simplify coding up animated interactions.</CardText
    >
    <CardLink href="https://www.instagram.com/frontendjoe/" target="_blank">
      <span>See on Instagram</span>
    </CardLink>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const styleProps = { dismissDialog: Boolean };

const Wrapper = styled("div", styleProps)`
  position: fixed;
  z-index: 10;
  bottom: 50px;
  left: 64px;
  width: 320px;
  padding: 1.5rem;
  border-radius: 10px;
  background: white;
  opacity: ${props => (props.dismissDialog ? 0 : 1)};
  visibility: ${props => (props.dismissDialog ? "hidden" : "visible")};
  transition-property: opacity, visibility;
  transition-duration: 0.35s;
  box-shadow: rgba(0, 0, 0, 0.11) 0 0 0 1px,
    rgba(0, 0, 0, 0.05) 0 10px 10px -5px;
`;

const CardTitle = styled.div`
  font-weight: 700;
  color: ${rgba("#10132F", 0.85)};
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: ${rgba("#10132F", 0.5)};
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${rgba("#792CB5", 0.75)};

  & > i {
    transform: rotate(-90deg);
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 22px 20px;
  color: ${rgba("#10132F", 0.57)};
  transition: color 0.35s;

  &:hover {
    color: ${rgba("black", 0.85)};
  }
`;

export default {
  components: {
    Wrapper,
    CloseButton,
    CardTitle,
    CardText,
    CardLink
  },
  methods: {
    closeDialog() {
      this.dismissDialog = true;
      localStorage.setItem("dismissDialog", "true");
    }
  },
  mounted() {
    var dismissDialog = localStorage.getItem("dismissDialog");

    if (dismissDialog) {
      this.dismissDialog = true;

      if (process.env.NODE_ENV === "development") {
        setTimeout(() => {
          this.dismissDialog = false;
        }, 1000);
      }
    } else {
      this.dismissDialog = false;
    }
  },
  data() {
    return {
      dismissDialog: true
    };
  }
};
</script>
