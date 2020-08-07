<template>
  <CodeWrapper>
    <VueCodeHighlight class="language-javascript">
      {{ code }}
    </VueCodeHighlight>
  </CodeWrapper>
</template>

<script>
import styled from "vue-styled-components";
import axios from "axios";
import { component as VueCodeHighlight } from "vue-code-highlight";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

const CodeWrapper = styled(VuePerfectScrollbar)`
  min-width: 0;
  min-height: 0;
  background: #f7f7f7;
`;

export default {
  props: {
    githubPath: String
  },
  components: {
    VueCodeHighlight,
    CodeWrapper
  },
  data() {
    return {
      code: ""
    };
  },
  watch: {
    githubPath(next, prev) {
      if (prev !== next) {
        this.loadCode();
      }
      console.log("interaction changed!", next, prev);
    }
  },
  methods: {
    loadCode() {
      axios
        .get(
          `https://raw.githubusercontent.com/vuezy/mi/master/src/components/interactions/${this.githubPath}`,
          { crossdomain: true }
        )
        .then(response => {
          // handle success
          this.code = response.data;
          // console.log(response);
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
    this.loadCode();
  }
};
</script>
