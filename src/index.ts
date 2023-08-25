import { Plugin, Dialog, getFrontend, getBackend } from "siyuan";
//import svgEdit from "@/libs/svg-edit.svelte";
export default class siyuanPluginSvgBlockEdit extends Plugin {
  private blockIconEventBindThis = this.blockIconEvent.bind(this);
  //private blockId: BlockId;
  async onload() {
    console.log(this.i18n.helloPlugin);
  }

  onLayoutReady() {
    this.eventBus.on("click-blockicon", this.blockIconEventBindThis);
    console.log(`frontend: ${getFrontend()}; backend: ${getBackend()}`);
  }

  onunload() {
    this.eventBus.off("click-blockicon", this.blockIconEventBindThis);
    console.log(this.i18n.byePlugin);
  }
  private blockIconEvent({ detail }: any) {
    //console.log(detail);
    if (detail.blockElements.length > 1) {
      return;
    }
    const ele = detail.blockElements[0] as HTMLElement;
    if (ele.getAttribute("data-type") !== "NodeHTMLBlock") {
      return;
    }
    const blockId = ele.getAttribute("data-node-id");

    const loadEditor = this.loadEditor.bind(this);
    detail.menu.addItem({
      label: this.i18n.editSVG,
      async click() {
        loadEditor(blockId);
      },
    });
  }
  private loadEditor(blockId: BlockId) {
    //console.log(html);
    const height = 540;
    const width = 700;
    const content = `<div class="b3-dialog__content" id="plugin-svgblockedit">
                        <div class="protyle-wysiwyg protyle-wysiwyg--attr"  width="100%">
                            <iframe id="siyuanPlugin-svgBlockEdit" width="100%" style="height: ${
                              height - 50
                            }px;"
                                src="./plugins/siyuanPlugin-svgBlockEdit/libs/editor/index.html"
                                targetId='${blockId}'>
                            </iframe>
                        </div>
                    </div>`;
    let dialog = new Dialog({
      title: "svg编辑器",
      transparent: false,
      width: width + "px",
      content: content,
      height: height + "px",
    });

    //const svgEditor = new Editor(document.getElementById("plugin-svgblockedit-container"));
    //console.log(svgEditor)
    //svgEditor.init();
    //svgEditor.configObj.curConfig.imgPath="./plugins/siyuanPlugin-svgBlockEdit/libs/editor/images"
  }
}
