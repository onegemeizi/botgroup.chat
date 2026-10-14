export interface AiCharacter {
  id: string;
  name: string;
  avatar: string;
  model: string;
  apiKey: string;
  baseURL: string;
  systemPrompt: string;
}

export const aiCharacters: AiCharacter[] = [
  // 1. ChatGPT
  {
    id: "chatgpt",
    name: "ChatGPT",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=gpt",
    model: "gpt-4o-mini",
    apiKey: "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",
    baseURL: "https://api.openai.com/v1",
    systemPrompt: "你是ChatGPT，OpenAI开发的通用大模型，回答严谨细致。"
  },
  // 2. Gemini
  {
    id: "gemini",
    name: "Gemini",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=gemini",
    model: "gemini-2.0-flash",
    apiKey: "AQ.Ab8RN6LFrZHoWB6AI1bppLhYBIjYb3MU94oc8GAOENQqzPwEyg",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
    systemPrompt: "你是Gemini，谷歌开发的多模态大模型，回答灵活有创意。"
  },
  // 3. DeepSeek
  {
    id: "deepseek",
    name: "DeepSeek",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=deepseek",
    model: "deepseek-chat",
    apiKey: "sk-a8eec286a32c4bf9ade501be1814d832",
    baseURL: "https://api.deepseek.com/v1",
    systemPrompt: "你是DeepSeek，深度求索开发的推理大模型，擅长逻辑思考。"
  },
  // 4. 豆包
  {
    id: "doubao",
    name: "豆包",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=doubao",
    model: "doubao-pro-32k",
    apiKey: "api-key-20261014104948",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3",
    systemPrompt: "你是豆包，字节跳动开发的AI助手，回答亲切接地气。"
  }
]
