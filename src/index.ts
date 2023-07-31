import dotenv from "dotenv";
// 将文件URL转换为文件路径
import { fileURLToPath } from "url";
// dirname函数返回给定路径的目录名，resolve函数将路径片段解析为绝对路径
import { dirname, resolve } from "path";

import { askQuestion } from "./user.js";
import { botAnswer, initBot } from "./bot.js";
import { startLoading, stopLoading } from "./loading.js";
import { checkExit } from "./checkExit.js";

// 从.env文件中读取环境变量，并将其设置为Node.js进程的环境变量
dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env")
});

// 这里有用到.env文件里的OPEN_API_KEY，所以需要等dotenv将.env里的环境变量注入到Node.js进程
initBot();

// main
// API reference: https://platform.openai.com/docs/api-reference/chat/create
(async () => {
  while (true) {
    const userInput = askQuestion();
    checkExit(userInput);
    startLoading();
    await botAnswer();
    stopLoading();
  }
})();
