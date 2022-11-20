import { FaBell, FaHashtag, FaMoon, FaUserCircle } from "react-icons/fa"
import tw from "twin.macro"
import Search from "./Search"
import NavIcon from "./NavIcon"

export default () => (
  <div css={styles.container}>
    <NavIcon icon={<FaHashtag size={20} />} style={styles.hashtag} />
    <Title />
    <NavIcon icon={<FaMoon size={24} />} />
    <Search />
    <NavIcon icon={<FaBell size={24} />} />
    <NavIcon icon={<FaUserCircle size={24} />} />
  </div>
)

const Title = () => <h5 css={styles.title}>tailwind-css</h5>;

const styles = {
  container: tw`flex flex-row items-center justify-evenly
              bg-gray-200
                w-full h-16`,
  hashtag: tw`text-lg text-gray-500 tracking-wider font-semibold
              ml-20`,
  title: tw`text-xl text-gray-500 tracking-wider font-semibold text-opacity-90
            ml-2 mr-auto`
}
