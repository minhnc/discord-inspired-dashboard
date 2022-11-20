import { FaBell, FaHashtag, FaMoon, FaSun, FaUserCircle } from "react-icons/fa"
import { useEffect } from 'react';
import tw from "twin.macro"
import { useDarkMode } from 'usehooks-ts'
import Search from "./Search"
import NavIcon from "./NavIcon"

export default () => (
  <div css={styles.container}>
    <NavIcon icon={<FaHashtag size={20} />} style={styles.hashtag} />
    <Title />
    <ThemeIcon />
    <Search />
    <NavIcon icon={<FaBell size={24} />} />
    <NavIcon icon={<FaUserCircle size={24} />} />
  </div>
)

const Title = () => <h5 css={styles.title}>tailwind-css</h5>;

const ThemeIcon = () => {
  const { isDarkMode, toggle } = useDarkMode()

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isDarkMode ? bodyClass.add(className) : bodyClass.remove(className);

  }, [isDarkMode])

  return (
    <span onClick={toggle} css={styles.theme}>
      {isDarkMode ?
        <NavIcon icon={<FaSun size={24} />} />
        :
        <NavIcon icon={<FaMoon size={24} />} />
      }
    </span>
  )
}

const styles = {
  container: tw`flex flex-row items-center justify-evenly
              bg-gray-200 dark:bg-gray-700 bg-opacity-90
                w-full h-16
                shadow-lg`,
  hashtag: tw`text-lg text-gray-500 tracking-wider font-semibold
              ml-20`,
  title: tw`text-xl text-gray-500 tracking-wider font-semibold text-opacity-90
            ml-2 mr-auto`,
  theme: tw`ml-auto mr-4`
}
