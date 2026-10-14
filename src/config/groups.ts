import type { Group } from '../src/types'

export default function generateGroups(): Group[] {
  return [
    {
      id: 'ai-group',
      name: 'AI模型交流群',
      description: '四个大模型同群聊天',
      members: ['chatgpt', 'gemini', 'deepseek', 'doubao'],
    },
  ]
}
