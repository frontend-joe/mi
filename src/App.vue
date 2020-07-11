<template>
  <StyleWrapper :theme="getTheme">
    <Hamburger
      v-if="env === 'development'"
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

import "./assets/css/icofont.min.css";

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
  mounted() {
    this.env = process.env.NODE_ENV;
  },
  data() {
    return {
      getTheme: themeDefault,
      sidebarOpen: false,
      env: ""
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
}

@media only screen and (max-width: 992px) {
  body {
    overflow: hidden;
  }
}

* {
  box-sizing: border-box;
}

button,
input,
label,
select {
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
}

button,
a {
  cursor: pointer;
  outline: none;
  text-decoration: none;
}

button {
  padding: 0;
  border: 0;
  background: transparent;
}
</style>
