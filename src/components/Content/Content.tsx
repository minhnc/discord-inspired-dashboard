import tw from "twin.macro"
import Nav from "./Nav"

export const Content = () => (
  <div css={styles.container}>
    <Nav />
  </div>
)

const styles = {
  container: tw`flex
                h-full w-full`
}
