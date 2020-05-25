<template>
  <StyledWrapper :open="open">
    <StyledNavItem v-for="item in items" :key="item.text">
      <router-link :to="{ path: item.url }">
        {{ item.text }}
      </router-link>
    </StyledNavItem>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const sidebarProps = { open: Boolean };
const StyledWrapper = styled("div", sidebarProps)`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  transform: translateX(${props => (props.open ? "0" : "-200px")});
  width: 100px;
  height: 100%;
  padding-top: 6rem;

  background: black;
  transition: transform 0.35s;
`;

const StyledNavItem = styled.div`
  & > a {
    margin: 0 0.75rem;
    height: 40px;
    display: inline-block;
    color: #888888;
    text-decoration: none;
    transition: color 0.25s;
  }

  & > a.router-link-exact-active {
    color: #522cad;
  }

  & > a:hover {
    color: #522cad;
  }
`;

export default {
  props: sidebarProps,
  components: {
    StyledWrapper,
    StyledNavItem
  },
  data: function() {
    return {
      items: [
        {
          url: "/",
          text: "Website"
        },
        {
          url: "/first-slide",
          text: "First"
        },
        {
          url: "/example-slide",
          text: "Example"
        }
      ]
    };
  }
};
</script>
