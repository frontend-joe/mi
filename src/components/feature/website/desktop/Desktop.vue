<template>
  <Wrapper>
    <Frame
      @click="viewCode(c.name)"
      v-for="c in components"
      :key="c.name"
      :background="c.background"
    >
      <FrameHeader class="frame-header">
        <FrameNumber>#{{ c.id }}</FrameNumber>
        <DetailName :detailName="c.name" />
        <FrameCollab
          v-tippy
          :content="`collab with ${c.collab}`"
          :src="c.image"
        />
      </FrameHeader>
      <FrameComponent>
        <div @click="event => event.stopPropagation()">
          <component v-bind="c.componentProps" :is="c.component"></component>
        </div>
      </FrameComponent>

      <ViewCodeText class="viewcode-text">
        <span
          class="material-icons-outlined"
          :style="{ marginRight: '0.75rem' }"
          >code</span
        >
        View Code
      </ViewCodeText>

      <ViewCodeButton
        class="viewcode-button"
        :background="c.background"
        :isActive="isActive(c.name)"
      >
        <!-- <router-link v-if="!detailOpen" :to="{ path: `/${c.name}` }">
          View Code
        </router-link> -->

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
        :open="detailOpen"
        :interactionTitle="interactionTitle"
        :interactionNumber="activeComponent ? activeComponent.id : 0"
        :activeItemNumber="activeItemNumber"
        :code="activeItemCode"
        :activeComponent="activeComponent"
        :collabImage="activeItemCollabImage"
        :collabInsta="activeItemCollabInsta"
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
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import axios from "axios";
import Detail from "./Detail";
import DetailName from "./DetailName";

const wrapperProps = { detailOpen: Boolean };

const Wrapper = styled("div", wrapperProps)`
  display: none;
  overflow-x: hidden;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    display: flex;
    flex-wrap: wrap;
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

const frameProps = { background: String };

const Frame = styled("div", frameProps)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex: 0 0 50%;
  max-height: 500px;
  min-height: 500px;
  background: ${props => props.background};

  &:hover .frame-header,
  &:hover .viewcode-text {
    opacity: 1;
  }

  @media (min-width: ${props => props.theme.screenWidthXl}) {
    max-height: 700px;
    min-height: 700px;
  }

  @media (min-width: ${props => props.theme.screenWidthXxl}) {
    max-height: 900px;
    min-height: 900px;
  }
`;

const FrameHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  opacity: 0;
  padding: 0 3rem;
  font-size: 1.5rem;

  transition: opacity 0.35s;
`;

const FrameNumber = styled.div`
  width: 40px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.38);
`;

const FrameCollab = styled.img`
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  padding: 2px;
  border-radius: 50%;
`;

const FrameComponent = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;

const viewCodeProps = { isActive: Boolean, background: String };

const ViewCodeButton = styled("div", viewCodeProps)`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ViewCodeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 700;
  font-size: 1.5rem;
  opacity: 0;

  & > span {
    font-size: 36px;
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
  transform: translateX(${props => (props.isActive ? "0" : "-110px")});
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
    transform: scale(${props => (props.isActive ? "1" : "0.65")});
    transition: transform 0.3s linear;
  }
`;

export default {
  props: {
    components: Array
  },
  components: {
    Wrapper,
    Frame,
    DetailFrame,
    Detail,
    DetailName,
    FrameHeader,
    FrameComponent,
    FrameNumber,
    FrameCollab,
    ViewCodeButton,
    ViewCodeSvg,
    ViewCodeCircle,
    ViewCodeText,
    BackButton
  },
  data() {
    return {
      activeItemName: undefined,
      activeItemColor: "transparent",
      activeComponent: undefined,
      activeItemCode: "",
      activeItemCollab: "",
      activeItemCollabImage: "",
      activeItemCollabInsta: "",
      activeItemNumber: 0
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
    viewCode(name) {
      this.$router.push({ path: `/${name}` });
    },
    loadInteraction() {
      this.activeItemName = this.$route.params.name;

      const activeItem = this.components.find(
        obj => obj.name === this.$route.params.name
      );

      this.activeComponent = activeItem.component;
      this.activeItemColor = activeItem.background;
      this.activeItemNumber = activeItem.id;
      this.activeItemCollabImage = activeItem.image;
      this.activeItemCollabInsta = activeItem.collab;

      axios
        .get(
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
