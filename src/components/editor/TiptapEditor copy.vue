<template>
  <div class="editor">
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import Icon from './TiptapIcon';
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

export default {
  name: 'TiptapEditor',
  components: {
    EditorContent,
    Icon,
  },
  props: {
    initialContent: {
      type: String,
      required: true,
      default: '',
    },
    activeButtons: {
      type: Array,
      validator: function (list) {
        for (let el of list) {
          // The value must match one of these strings
          if (
            [
              'bold',
              'italic',
              'strike',
              'underline',
              'code',
              'h1',
              'h2',
              'h3',
              'bulletList',
              'orderedList',
              'blockquote',
              'codeBlock',
              'horizontalRule',
              'undo',
              'redo',
            ].indexOf(el) === -1
          ) {
            return -1;
          }
        }
        return 1;
      },
      default: () => ['bold', 'italic'],
    },
  },
  emits: ['update'],
  data() {
    return {
      json: '',
      editor: null,
    };
  },
  created() {
    this.editor = new Editor({
      content: this.initialContent,
      extensions: [StarterKit, Underline],
    });

    this.json = this.editor.getJSON();

    this.editor.on('update', () => {
      this.json = this.editor.getJSON();
      //여기서 vuex로 저장하기
      this.$emit('update', this.json);
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="css" scoped></style>

<style lang="sass" scoped>
@import '@/sass/main.scss'
</style>

<style lang="css" scoped>
#app {
  display: flex;
  padding-top: 100px;
  box-sizing: border-box;
  flex-flow: column;
  align-items: center;
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica,
    'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC',
    'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC',
    'Source Han Sans CN', 'Microsoft YaHei', 'Wenquanyi Micro Hei',
    'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp',
    sans-serif;
}
</style>