
# SVG Block Editor

[中文版](./README.md)

[Siyuan Notes](https://github.com/siyuan-note/siyuan) plugin, using [svgedit](https://github.com/SVG-edit/svgedit) to edit html blocks.

Essentially, the svgedit editor is embedded in the Siyuan tab through an iframe, and when the editor is opened and closed, it communicates with Siyuan notes to obtain or modify HTML blocks. Although SVG has performance problems when drawing complex graphics, the HTML block of Siyuan Note natively supports it, and it is easier to modify, and no new attachments will be introduced.

## Usage

After turning on the plugin, the 'Edit in SVG Editor' option will be added to the HTML block right-click menu, clicking will open a new tab, after editing, close the tab, and will prompt to save or cancel.

❗ Currently, edited graphics are not saved into HTML blocks until the tab is closed, and your only chance to save is to select Save in the pop-up window after closing the tab.

❗Of course, HTML blocks are not limited to SVG graphics, so this feature will only be added to HTML blocks that can find SVG tags or blanks, and if your HTML block contains mixed content containing SVG, the rest of the content will be lost after editing and saving.

For how to use svgedit, see [svgedit-github](https://github.com/SVG-edit/svgedit), or try it out in [Try SVGEdit V7 (npm)](https://unpkg.com/svgedit@latest/dist/editor/index.html).

## Known issues

- Can't draw lines ❔ Turn on 'Line Mode' on the toolbar at the top of the canvas![](./images/线条模式.png), you should now be able to select the line you just drawn, change its color to a color other than white in the bottom toolbar, and increase the line width (at least greater than 0). Now turn off 'Line Mode' and you should be able to see the graphic you just drawn.
  ![](./images/线条宽度.PNG)

- Drawn SVG background is always transparent ❔ Currently, the canvas is not saved together into an HTML block, the current solution is to draw a rectangle that is basically the same size as the canvas, fill it with a different color, and set it to the bottom.

## Thanks

- [SVGEdit——Powerful SVG-Editor for your browser](https://github.com/SVG-Edit/svgedit)
- [SiYuan plugin sample with vite and svelte](https://github.com/siyuan-note/plugin-sample-vite-svelte)