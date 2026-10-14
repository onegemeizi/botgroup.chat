export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
}

export const groups: Group[] = [
  {
    id: "ai-group",
    name: "AI模型交流群",
    description: "ChatGPT、Gemini、DeepSeek、豆包 同群聊天",
    members: ["chatgpt", "gemini", "deepseek", "doubao"]
  }
]
