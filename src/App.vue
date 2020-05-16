<template>
  <StyleWrapper :theme="theme">
    <Hamburger
      :open="sidebarOpen"
      v-on:crossbutton-clicked="handleMenuButtonClicked"
    />
    <Sidebar :open="sidebarOpen" />
    <Content>
      <router-view />
    </Content>
  </StyleWrapper>
</template>

<script>
import styled, { ThemeProvider } from "vue-styled-components";
import { themeDefault } from "@/themes/themeDefault";
import Sidebar from "@/components/layout/Sidebar";
import Content from "@/components/layout/Content";
import Hamburger from "@/components/layout/Hamburger";

const StyleWrapper = styled(ThemeProvider)`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default {
  name: "App",
  components: {
    StyleWrapper,
    Sidebar,
    Content,
    Hamburger
  },
  methods: {
    handleMenuButtonClicked() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  },
  data() {
    return {
      theme: themeDefault,
      sidebarOpen: false
    };
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  color: rgba(0, 0, 0, 0.75);
  background: #ffffff;
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

button,
a {
  cursor: pointer;
  outline: none;
}

button {
  padding: 0;
  border: 0;
  background: transparent;
}
</style>
