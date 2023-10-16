::: tabs

@tab 标题 1

<!-- 此处，选项卡 1 的标题“标题 1”将用作值。 -->

tab 1 内容

@tab 标题 2#值 2

<!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值-->

tab 2 内容

:::



```js
  el.onpaste = (event) => {
        const clipboardData = event.clipboardData || window.clipboardData;
        if (clipboardData) {
          const items = clipboardData.items;
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.indexOf('image') !== -1) {
              const file = item.getAsFile();
              upImage({ file }, {
                resolve: (option) => {
                  console.log(option.default);
                  addBlock('image', {
                    src: option.default
                  })
                }
              })
            }
          }
        }
      }
```