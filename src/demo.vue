<template>
  <Markdown
    :content="testContent"
    :remark-plugins="[remarkMath]"
    :rehype-plugins="[[rehypeMermaid, { strategy: 'inline-svg' }], rehypeKatex]"
  >
    <template #pre="{ node }">
      <t-button>Using TDesign Button</t-button>
      <pre v-html="node.children[0].children[0].value"></pre>
    </template>
  </Markdown>
</template>

<script setup>
import { Markdown, VNodeRenderer } from 'vue-markdown-next';
import { Divider as TDivider } from 'tdesign-vue-next';
import rehypeMermaid from 'rehype-mermaid';
import remarkMath from 'remark-math';
// choose your favorite solution
// import rehypeMathjax from 'rehype-mathjax';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const testContent = `

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
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


- Red
- Green
- Blue
    - Red
    - Green
        - Blue


\`\`\`bash
$ npm i tdesign-vue-next
\`\`\`

---

\`\`\`javascript
import { createApp } from 'vue';
import App from './app.vue';

const app = createApp(App);
app.use(TDesignChat);
\`\`\`

`;
</script>