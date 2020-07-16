<template>
  <Wrapper>
    <Mobile :slides="slides" />
    <Desktop :components="slides" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";

import TrashcanShredder from "@/components/interactions/trashcanShredder/Wrapper";
import HamburgerClose from "@/components/interactions/hamburgerClose/Wrapper2";
import NavbarSlider from "@/components/interactions/NavbarSlider";
import RippleButton from "@/components/interactions/rippleButton/WrapperCss";
import PaperPlaneSend from "@/components/interactions/PaperPlaneSend";
import UnderlineButton from "@/components/interactions/UnderlineButton";
import PasswordValidator from "@/components/interactions/PasswordValidator";
import UnderlineTabs from "@/components/interactions/UnderlineTabs";
import CopyButton from "@/components/interactions/CopyButton";
import MaterialCheckbox from "@/components/interactions/MaterialCheckboxWebsite";
import FillUpButton from "@/components/interactions/FillUpButton";
import OutlinedInput from "@/components/interactions/OutlinedInputWebsite";
import ShadowButton from "@/components/interactions/ShadowButton";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Wrapper,
    Mobile,
    Desktop
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "hamburger-close",
          collab: "leeohgonzalez",
          image: require("@/assets/images/leeo.png"),
          component: HamburgerClose,
          background: "#1b215d",
          githubUrl: "hamburgerClose/Wrapper2.vue"
        },
        {
          id: 2,
          name: "trashcan-shredder",
          collab: "bydanromero",
          image: require("@/assets/images/dan.png"),
          component: TrashcanShredder,
          background: "#59bf97"
        },
        {
          id: 3,
          name: "navbar-slider",
          collab: "ux.ale",
          image: require("@/assets/images/ale.png"),
          component: NavbarSlider,
          background: "#323553"
        },
        {
          id: 4,
          name: "ripple-button",
          collab: "andrew.eugene",
          image: require("@/assets/images/eugene.png"),
          component: RippleButton,
          background: "#1b2650"
        },
        {
          id: 5,
          name: "paper-plane-send",
          collab: "mikevdijssel",
          image: require("@/assets/images/mike.png"),
          component: PaperPlaneSend,
          background: "#1b2650"
        },
        {
          id: 6,
          name: "underline-button",
          collab: "janm_ux",
          image: require("@/assets/images/jan.png"),
          component: UnderlineButton,
          background: "#f8f8fd"
        },
        {
          id: 7,
          name: "password-validator",
          collab: "misaac85",
          image: require("@/assets/images/miriam.png"),
          component: PasswordValidator,
          background: "#fbfaff"
        },
        {
          name: "underline-tabs",
          collab: "lianascimentto",
          image: require("@/assets/images/lia.png"),
          component: UnderlineTabs,
          background: "#6e46bb"
        },
        {
          name: "copy-button",
          collab: "alex.arutuynov",
          image: require("@/assets/images/alex.png"),
          component: CopyButton,
          background: "#262439"
        },
        {
          name: "material-checkbox",
          collab: "abdulldsgnr",
          image: require("@/assets/images/abdul.png"),
          component: MaterialCheckbox,
          background: "#ebebeb"
        },
        {
          name: "fill-up-button",
          collab: "janm_ux",
          image: require("@/assets/images/jan.png"),
          component: FillUpButton,
          background: "#11141a"
        },
        {
          name: "outlined-input",
          collab: "gabrielemalaspina",
          image: require("@/assets/images/gabriele.png"),
          component: OutlinedInput,
          background: "#001128"
        },
        {
          name: "shadow-button",
          collab: "mauricio.bucardo",
          image: require("@/assets/images/mauricio.png"),
          component: ShadowButton,
          background: "#40009c"
        }
      ]
    };
  }
};
</script>
