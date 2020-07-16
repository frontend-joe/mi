<template>
  <OuterWrapper :detailOpen="detailOpen">
    <Wrapper>
      <Frame v-for="c in components" :key="c.name" :background="c.background">
        <FrameName class="frame-name"> The {{ c.name }} </FrameName>
        <component :is="c.component"></component>
        <ViewCodeButton :background="c.background" :isActive="isActive(c.name)">
          <router-link :to="{ path: `/${c.name}` }">
            View Code
          </router-link>

          <ViewCodeSvg
            :isActive="isActive(c.name)"
            width="64"
            height="64"
            :zIndex="2"
          >
            <ViewCodeCircle :background="c.background" r="22" cx="32" cy="32" />
          </ViewCodeSvg>
        </ViewCodeButton>
      </Frame>
      <DetailFrame :activeItemName="activeItemName" :open="detailOpen">
        <Detail
          :interactionTitle="interactionTitle"
          :interactionNumber="activeComponent ? activeComponent.id : 0"
          :activeItemNumber="activeItemNumber"
          :code="activeItemCode"
          :activeComponent="activeComponent"
        />
      </DetailFrame>
      <BackButton
        background="red"
        :isActive="$route.params.name && $route.params.name.length > 0"
      >
        <router-link class="material-icons-outlined" :to="{ path: `/` }">
          arrow_back
        </router-link>
      </BackButton>
    </Wrapper>
  </OuterWrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import axios from "axios";
import Detail from "./Detail";

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
  max-height: 600px;
  min-height: 600px;
  background: ${props => props.background};

  &:hover .frame-name {
    opacity: 1;
  }
`;

const detailAnimationIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  40% {
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

const detailProps = {
  open: Boolean,
  activeItemName: String,
  activeItemColor: String
};

const DetailFrame = styled("div", detailProps)`
  display: flex;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateX(
    ${props => (props.open && props.activeItemName ? "0" : "100%")}
  );

  ${props => (props.open ? `animation: ${detailAnimationIn} 1s` : "")};

  ${props =>
    !props.open && props.activeItemName
      ? `animation: ${detailAnimationOut} 0.5s`
      : ""};
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
`;

const ViewCodeSvg = styled("svg", viewCodeProps)`
  position: absolute;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${props => (props.isActive ? 200 : 0)});
  transition: transform ${props => (props.isActive ? "2s" : "1s")};
`;

const ViewCodeCircle = styled("circle", viewCodeProps)`
  fill: ${props => props.background || "black"};
`;

const BackButton = styled("div", viewCodeProps)`
  position: fixed;
  z-index: 20;
  top: 3rem;
  left: 3rem;
  transform: translateX(${props => (props.isActive ? "0" : "-80px")});
  transition: transform 0.3s linear;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    font-size: 2.5rem;
    border-radius: 50%;
    background: white;
    color: black;
    transform: scale(${props => (props.isActive ? "1" : "0")});
    transition: transform 0.3s linear;
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
    Detail,
    FrameName,
    ViewCodeButton,
    ViewCodeSvg,
    ViewCodeCircle,
    BackButton
  },
  data() {
    return {
      activeItemName: undefined,
      activeItemColor: "transparent",
      activeComponent: undefined,
      activeItemCode: ""
    };
  },
  computed: {
    detailOpen() {
      return this.$route.params.name ? true : false;
    },
    interactionTitle() {
      return this.activeItemName && this.activeItemName.replace(/-/g, " ");
    }
  },
  watch: {
    $route(to, from) {
      console.log("route changed", from.path);

      if (to.path === "/" && this.activeItemName) {
        setTimeout(() => {
          this.activeItemColor = "transparent";
        }, 1000);
      }

      if (this.$route.params.name) {
        this.loadInteraction();
      }
    }
  },
  methods: {
    isActive(name) {
      return name === this.$route.params.name;
    },
    loadInteraction() {
      this.activeItemName = this.$route.params.name;

      const activeItem = this.components.find(
        obj => obj.name === this.$route.params.name
      );

      this.activeComponent = activeItem.component;
      this.activeItemColor = activeItem.background;
      this.activeItemNumber = activeItem.id;

      axios
        .get(
          // `https://api.github.com/users/vuezy/mi/blob/master/src/components/interactions/${activeItem.githubUrl}`,
          // `https://api.github.com/repos/vuezy/mi/contents/src/components/interactions/${activeItem.githubUrl}`,
          // `https://api.github.com/repos/vuezy/mi/contents/src/components/interactions/${activeItem.githubUrl}`,
          `https://raw.githubusercontent.com/vuezy/mi/master/src/components/interactions/${activeItem.githubUrl}`,
          { crossdomain: true }
        )
        .then(response => {
          // handle success
          this.activeItemCode = response.data;
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });

      //
    }
  },
  mounted() {
    if (this.$route.params.name) {
      this.loadInteraction();
    }
  }
};
</script>
