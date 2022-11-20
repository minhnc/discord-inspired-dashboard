import 'twin.macro'
import { SideBar } from '@src/SideBar'
import { Content } from '@src/Content'

function App() {
  return (
    <div tw="flex">
      <SideBar />
      <Content />
    </div>
  )
}

export default App
