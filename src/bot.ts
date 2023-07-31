import { Configuration, OpenAIApi } from "openai";
import colors from "colors";
import { messages, addBotMessage } from "./message.js";

let openAI: OpenAIApi;

export function initBot() {
  openAI = new OpenAIApi(
    new Configuration({
      basePath: "https://jiushi21.win/v1",
      apiKey: process.env.OPEN_API_KEY
    })
  );
}

export async function botAnswer() {
  const chatCompletion = await openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages
  });

  const answer = chatCompletion.data.choices[0].message?.content;
  addBotMessage(answer!);
  console.log(colors.cyan("Chat Bot: "), answer);
}
