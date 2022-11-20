import 'twin.macro'
import { SideBar } from '@src/components/SideBar'
import { Content } from '@src/components/Content'

function App() {
  return (
    <div tw="flex">
      <SideBar />
      <Content />
    </div>
  )
}

export default App
