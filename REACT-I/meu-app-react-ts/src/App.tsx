import './App.css'
import { AppRoutes } from './config/AppRoutes'

// ANATOMIA DE UM COMPONENTE

/**

  1 - Precisa ser um arquivo de extensão .tsx ou .jsx
  2 - O nome do arquivo deve estar no padrão PascalCase
  3 - O nome da função deve estar no padrão PascalCase
  4 - Ser uma função que retorna conteudo HTML (tags) ou outros componentes
  5 - Deve retornar 1 elemento (children) por vez
  6 - Todo o parametro (PROPS) de um componente deve ser um objeto

 */


  // SPA - Single Page Application - Uma plaicação de página única

export function App() {
  return <AppRoutes />
}


