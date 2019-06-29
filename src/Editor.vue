<template>
  <div class="editor-container">
    <span class="editor-help">{{ state }}</span>
    <div id="editor" ref="editor"></div>
  </div>
</template>

<script>
import CodeFlask from 'codeflask';
import { debounce } from 'throttle-debounce';

const states = {
  SAVED: 'Saved',
  SAVING: 'Saving'
};

export default {
  name: 'Editor',
  data() {
    return {
      flask: null,
      state: states.SAVED
    };
  },
  mounted() {
    // Change language depending on current snippet
    this.flask = new CodeFlask(this.$refs.editor, { language: 'js' });
    this.flask.onUpdate(debounce(200, this.saveCode));
  },
  beforeDestroy() {
    this.flask = null;
  },
  methods: {
    saveCode(code) {
      console.log(code);
      // Save to BE
      new Promise(resolve => {
        this.state = states.SAVING;

        setTimeout(() => {
          resolve();
        }, 3000);
      }).then(() => {
        console.log('finished');
        this.state = states.SAVED;
      });
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

#editor {
  position: relative;
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  margin: 0;
  padding: 1rem;
}

.codeflask {
  border: 2px solid black;
}
</style>
