import tw from "twin.macro";
import { FaSearch } from "react-icons/fa";

export default () => (
  <div css={styles.container}>
    <input css={styles.input} type='text' placeholder="Search..." />
    <FaSearch size={18} />
  </div>
)

const styles = {
  container: tw`w-1/5 flex items-center justify-start
                bg-gray-300
                text-gray-500
                h-9 px-2 mx-0
                rounded-md shadow-md`,
  input: tw`w-full font-sans font-semibold
            bg-transparent outline-none
            text-gray-500 placeholder-gray-500
            pl-1 rounded`,
}
