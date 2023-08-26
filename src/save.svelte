<script lang="ts">
  import { updateBlock } from "../../siyuanPlugin-common/siyuan-api";
  import { onMount } from "svelte";
  export let blockId: string;
  export let svgHtml: string;
  export let dialog;
  //console.log(blockId);
  //console.log(svgHtml);
  onMount(() => {
    if (!svgHtml) {
      closeDialog();
    }
  });
  function saveSVG() {
    updateBlock("markdown", `<div>${svgHtml}</div>`, blockId);
    closeDialog();
  }
  function closeDialog() {
    dialog.destroy();
  }
</script>

<div class="b3-dialog__content">
  <div class="fn__flex-1">是否保存？</div>
  <div class="b3-dialog__action">
    <button class="b3-button b3-button--cancel" on:click={closeDialog}
      >取消</button
    >
    <div class="fn__space" />
    <button class="b3-button b3-button--text" on:click={saveSVG}>保存</button>
  </div>
  <!--
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1" />
    <span class="fn__space" />
    <button
      class="b3-button b3-button--outline fn__flex-center fn__size100"
      on:click={saveSVG}>保存</button
    ></label
  >
  -->
</div>
