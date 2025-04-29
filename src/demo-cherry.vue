<template>
  <!-- <t-chat-content role="assistant" :content="mermaid" variant="base"> </t-chat-content> -->
  <!-- <Markdown :content="mermaid"> </Markdown> -->
   {{ cherryInstance }}
</template>
<script setup lang="ts">
import { Markdown } from 'vue-markdown-next';
// import remarkGfm from 'remark-gfm';
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown/dist/cherry-markdown.core';
import CherryMermaidPlugin from 'cherry-markdown/dist/addons/cherry-code-block-mermaid-plugin';
import mermaid from 'mermaid';
import { ref } from 'vue';

// Plug-in registration must be done before Cherry is instantiated
Cherry.usePlugin(CherryMermaidPlugin, {
  mermaid, // pass in mermaid object
  // mermaidAPI: mermaid.mermaidAPI, // Can also be passed in mermaid API
  // At the same time, you can configure mermaid's behavior here, please refer to the official mermaid document
  // theme: 'neutral',
  // sequence: { useMaxWidth: false, showSequenceNumbers: true }
});

const cherryInstance = ref<Cherry | null>(null);

 const parseCustomLinks = (content) => {
    const regex = /\[\d+(?:,\d+)*\]\(@ref\)/g;
    return content.replace(regex, (match, p1) => {
      const numbers = p1.split(',');
      return numbers.map(num => `[${num}](@ref)`).join(' ');
    });
  }
const doc = `
### 类型
`;
const mermaidStr = `我将为这段代码生成一个业务流程图，使用Mermaid语法来表示流程：

\`\`\`mermaid
flowchart TD
    Start([开始]) --> A[设置小程序运行环境]
    A --> B[获取上报页面ID]
    B --> C[获取基础参数]
\`\`\`


以下是一段Markdown格式的LaTeX数学公式：

我是一个行内公式：$E=mc^2$

我是一个独立公式：
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

我是一个带有分式的公式：
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

我是一个带有上下标的公式：
$$
x^{2} + y^{2} = r^{2}
$$

我是一个带有积分符号的公式：
$$
\\int_{a}^{b} f(x) \\, dx
$$
### 代码解析：
\`\`\`javascript
import { createApp } from 'vue';
import App from './app.vue';

const app = createApp(App);
app.use(TDesignChat);
\`\`\`
`;
const cherryConfig = {
  editor: {
    height: 'auto',
    defaultModel: 'previewOnly',
  },
  engine: {
    global: {
      // 开启流式模式 （默认 true）
      flowSessionContext: true,
      flowSessionCursor: 'default',
    },
    syntax: {
      codeBlock: {
        selfClosing: false,
      },
      header: {
        anchorStyle: 'none',
      },
      table: {
        selfClosing: false,
      },
      fontEmphasis: {
        selfClosing: false,
      }
    }
  },
  previewer: {
    enablePreviewerBubble: false,
  },
  isPreviewOnly: true,
};
cherryInstance.value = new Cherry(
  Object.assign({}, cherryConfig, { id: 'markdown-container',
  value: mermaidStr})
);
console.log('打印markdown', cherryInstance.value);
// const doc2 = parseCustomLinks(doc);
// console.log(doc2);
const content = '这是一个示例[1,2,3](@ref)和另一个。';
const regex = /\[(\d+(?:,\d+)*)\]\(@ref\)/g;
let match;

while ((match = regex.exec(doc)) !== null) {
  console.log('Full match:', match[0]); // 输出整个匹配项
  console.log('Numbers:', match[1]); // 输出捕获组中的数字
  // 匹配到regex时用
}
const pattern = /\[(\d+(?:,\d+)*)\]\(@ref\)/g;

const result = doc.replace(pattern, (match, p1) => {
  const numbers = p1.split(',').map(Number);
  return numbers.map(num => `[${num}](@ref)`).join('');
});

console.log(result);
</script>
