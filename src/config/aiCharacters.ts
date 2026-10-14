import type { AICharacter, ModelConfig } from '../src/types'

export const modelConfigs: Record<string, ModelConfig> = {
  // 1. ChatGPT 模型配置
  openai: {
    model: 'gpt-4o-mini',
    apiKey: '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',
    baseURL: 'https://api.openai.com/v1',
  },
  // 2. Gemini 模型配置
  gemini: {
    model: 'gemini-2.0-flash',
    apiKey: 'AQ.Ab8RN6LFrZHoWB6AI1bppLhYBIjYb3MU94oc8GAOENQqzPwEyg',
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai',
  },
  // 3. DeepSeek 模型配置
  deepseek: {
    model: 'deepseek-chat',
    apiKey: 'sk-a8eec286a32c4bf9ade501be1814d832',
    baseURL: 'https://api.deepseek.com/v1',
  },
  // 4. 豆包 模型配置
  doubao: {
    model: 'doubao-pro-32k',
    apiKey: 'api-key-20261014104948',
    baseURL: 'https://ark.cn-beijing.volces.com/api/v3',
  },
}

export default function generateAICharacters(): AICharacter[] {
  return [
    // ChatGPT 角色
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      personality: '严谨细致的通用AI助手',
      model: 'openai',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=gpt',
      custom_prompt: '你是ChatGPT，OpenAI开发的大语言模型，回答严谨准确。',
    },
    // Gemini 角色
    {
      id: 'gemini',
      name: 'Gemini',
      personality: '灵活有创意的多模态AI',
      model: 'gemini',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=gemini',
      custom_prompt: '你是Gemini，谷歌开发的多模态大模型，回答富有创意。',
    },
    // DeepSeek 角色
    {
      id: 'deepseek',
      name: 'DeepSeek',
      personality: '擅长逻辑推理的AI',
      model: 'deepseek',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=deepseek',
      custom_prompt: '你是DeepSeek，深度求索开发的推理大模型，擅长深度思考。',
    },
    // 豆包 角色
    {
      id: 'doubao',
      name: '豆包',
      personality: '亲切接地气的中文AI助手',
      model: 'doubao',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=doubao',
      custom_prompt: '你是豆包，字节跳动开发的AI助手，回答亲切易懂。',
    },
  ]
}
