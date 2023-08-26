# svg 块编辑器

[English](./README_en_US.md)

[思源笔记](https://github.com/siyuan-note/siyuan)插件，使用[svgedit](https://github.com/SVG-Edit/svgedit)编辑 html 块。

本质上就是把 svgedit 编辑器通过 iframe 嵌入思源 Tab，并在开启与关闭编辑器时与思源笔记通信，获取或修改 html 块。svg 虽在绘制复杂图形时存在性能问题，但是思源笔记的 html 块原生支持，修改也较为方便，不会引入新附件。

## 使用方法

开启插件后，在 html 块右键菜单中会增加`在svg编辑器中编辑`选项，点击会打开一个新标签页，编辑完成后，关闭标签页，将提示保存或取消。

❗ 目前，在标签页关闭之前，均不会保存编辑后的图形到 html 块中，您唯一的保存机会就是在关闭标签页后的弹出窗口中选择保存。

❗html 块当然并不止针对 svg 图形，所以目前只会对能够找到 svg 标签或者空白的 html 块增加该功能，如果您的 html 块中是包含有 svg 的混合内容，编辑并保存后其他内容将会丢失。

针对 svgedit 的使用方法，请参见[svgedit-Github](https://github.com/SVG-Edit/svgedit)，或者在[Try SVGEdit V7 (npm)](https://unpkg.com/svgedit@latest/dist/editor/index.html)中试用。

## 已知问题

- 无法绘制线条 ❔ 在画布顶部工具栏开启`线条模式`![](./images/线条模式.png)，现在应该可以刚刚绘制的线条，将其选中，在底部工具栏将其颜色改为白色以外的颜色，并增大线条宽度（至少应大于 0）。现在关闭`线条模式`,应该就可以看到刚才绘制的图形。
  ![](./images/线条宽度.PNG)

- 绘制的 svg 背景总是透明的 ❔ 目前不会将画布一起保存至 html 块中，目前的解决方案是绘制一个与画布尺寸基本一致的长方形，将其填充为其他颜色，并设置置于底层。

## 感谢

- [SVGEdit——Powerful SVG-Editor for your browser](https://github.com/SVG-Edit/svgedit)
- [SiYuan plugin sample with vite and svelte](https://github.com/siyuan-note/plugin-sample-vite-svelte)
