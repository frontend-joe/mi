<template>
  <OuterWrapper :detailOpen="detailOpen">
    <Wrapper>
      <Frame v-for="c in components" :key="c.name" :background="c.background">
        <FrameName class="frame-name"> The {{ c.name }} </FrameName>
        <component :is="c.component"></component>
        <ViewCodeButton :background="c.background" :isActive="isActive(c.name)">
          <router-link
            @click.native="setActiveItem(c.name)"
            :to="{ path: `/${c.name}` }"
          >
            View Code
          </router-link>
        </ViewCodeButton>
      </Frame>
      <DetailFrame :activeItem="activeItem" :open="detailOpen">
        <router-view></router-view>
      </DetailFrame>
    </Wrapper>
  </OuterWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const wrapperProps = { detailOpen: Boolean };

const OuterWrapper = styled("div", wrapperProps)`
  ${props => (props.detailOpen ? "overflow: visible; max-height: 100vh;" : "")};
`;

const Wrapper = styled("div", wrapperProps)`
  display: none;
  overflow-x: hidden;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const frameProps = { background: String };

const Frame = styled("div", frameProps)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex: 0 0 50%;
  height: 500px;
  max-height: 500px;
  min-height: 500px;
  background: ${props => props.background};

  &:hover .frame-name {
    opacity: 1;
  }
`;

const detailAnimationIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const detailAnimationOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const detailProps = { open: Boolean, activeItem: String };

const DetailFrame = styled("div", detailProps)`
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateX(${props => (props.open ? "0" : "100%")});
  ${
    "" /* animation: ${props =>
    props.open
      ? detailAnimationIn
      : props.activeItem
      ? detailAnimationOut
      : null}
    0.35s linear; */
  }

  ${"" /* transition: transform 0.5s; */}

  ${props => (props.open ? `animation: ${detailAnimationIn} 0.5s linear` : "")};

  ${props =>
    !props.open && props.activeItem
      ? `animation: ${detailAnimationOut} 0.5s linear`
      : ""};


  ${
    "" /*
  ${props =>
    !props.open && props.activeItem.length > 0
      ? ``
      : ""}; */
  }
`;

const FrameName = styled.div`
  color: white;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.25s;
`;

const viewCodeProps = { isActive: Boolean, background: String };

const ViewCodeButton = styled("div", viewCodeProps)`
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  & > a {
    color: pink;
  }

  &::after {
    position: absolute;
    z-index: 1;
    content: "";
    background: ${props => props.background || "black"};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50px, 0) scale(${props => (props.isActive ? 150 : 0)});
    transition: transform 0.5s;
  }
`;

export default {
  props: {
    components: Array
  },
  components: {
    OuterWrapper,
    Wrapper,
    Frame,
    DetailFrame,
    FrameName,
    ViewCodeButton
  },
  data() {
    return {
      activeItem: undefined
    };
  },
  computed: {
    detailOpen() {
      return this.$route.params.name ? true : false;
    }
  },
  methods: {
    isActive(name) {
      return name === this.$route.params.name;
    },
    setActiveItem(name) {
      this.activeItem = name;
      console.log("clicked", name);
    }
  }
};
</script>
