## terminal-ai-chatbot
> 学习在终端运行的 AI 聊天机器人，教程链接[点这里](https://www.bilibili.com/video/BV1C94y1i7Nu/?spm_id_from=333.999.0.0&vd_source=dc25f778f6f3b59efa276ab00fb10d3f)

## 知识点
- chatGPT api 
- readlineSync
- dotenv 环境变量的设置
- colors 给字体来点颜色
- ora 终端显示进度条动画
- rollup 打包库
- typescript
- 重构技巧 
- 模块化思维
- 全局 cli

## 运行
```javacrpt
1. 首先在项目根目录添加.env文件，其内容为OPEN_API_KEY=XXXXXXXX，这里变量命命可以根据自己喜好，bot.ts文件里有使用到这个，因此也要同步修改一下。
2. npm install
3. npm run build
4. npm run dev
```

## 全局调用
1. dist/bundler.js 文件头需要添加 #!/usr/bin/env node，方法：
```javacrpt
(1) npm i rollup-plugin-add-shebang

(2) rollup.config.js
import addShebang from "rollup-plugin-add-shebang";

export default defineConfig({
  plugins: [addShebang({ include: "./dist/bundler.js" })]
});
```

2. 在 package.json 文件中添加 "bin": "dist/bundler.js"
3. npm link --global 注册全局
4. 打开任意终端输入 package.json 文件中对应 name 字段的值即可启用终端聊天机器人