export type Project = {
  id: number
  name: string
  description: string
  link: string
  category: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Portfolio V1',
    description: 'Site de portfólio com React, TS e styled-components.',
    link: 'https://github.com/seuuser/portfolio-v1',
    category: 'Web'
  },
  {
    id: 2,
    name: 'Todo App',
    description: 'Gerenciador de tarefas usando Context API e hooks.',
    link: 'https://github.com/seuuser/todo-app',
    category: 'Web'
  },
  {
    id: 3,
    name: 'Chat em Tempo Real',
    description: 'Chat usando Socket.io e Node.js.',
    link: 'https://github.com/seuuser/chat-realtime',
    category: 'Node'
  },
  // ...adicione mais projetos
]
