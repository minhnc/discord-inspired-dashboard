import tw, { TwStyle } from "twin.macro";

interface INavIcon {
  icon: JSX.Element,
  style?: TwStyle
}

export default ({ icon, style }: INavIcon) => (
  <span css={style || styles.icon}>
    {icon}
  </span>
)

const styles = {
  icon: tw`text-gray-500
            mx-3
            transition duration-200 ease-in-out
            hover:text-green-500
            cursor-pointer`
}

