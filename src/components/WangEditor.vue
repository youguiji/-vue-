<!--
 * @Description: 
 * @Version: 
 * @Autor: Austral
 * @Date: 2022-11-19 09:22:37
 * @LastEditors: Austral
 * @LastEditTime: 2022-11-19 09:24:34
-->
<template>
  <div class="wangeditor">
    <div ref="editor"></div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, reactive, ref, toRefs } from "vue";
import WangEditor from "wangeditor";
export default {
  setup() {
    const editor = ref();
    const state = reactive({
      html: "",
      text: "",
    });
    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        onchange() {
          console.log("change");
        },
      });
      instance.create();
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    return {
      ...toRefs(state),
      editor,
    };
  },
};
</script>

<style lang="less">
</style>

