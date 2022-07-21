import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import userMock from '../mock/user'
import articleMock from '../mock/article'
export const mockModules = [...userMock, ...articleMock]

export function setupProdMockServer() {
  createProdMockServer( mockModules )
}
