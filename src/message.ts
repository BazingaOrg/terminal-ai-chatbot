export const messages: { role: "user" | "assistant"; content: string }[] = [];

// 限制聊天对话长度
const MAX_MSG_LEN = 6;

export function addUserMessage(message: string) {
  checkMaxMessageLength();
  messages.push({ role: "user", content: message });
}

export function addBotMessage(answer: string) {
  checkMaxMessageLength();
  messages.push({ role: "assistant", content: answer! });
}

function checkMaxMessageLength() {
  messages.length >= MAX_MSG_LEN && messages.splice(0, 1);
}
