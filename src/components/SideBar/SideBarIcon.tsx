import tw from 'twin.macro'

interface ISideBarIcon {
  icon: JSX.Element
  text?: string
}

export default ({ icon, text = 'tooltip 💡' }: ISideBarIcon) => (
  <div css={styles.container} className="group">
    {icon}
    <span css={styles.tooltip}>{text}</span>
  </div>
)

const styles = {
  container: tw`relative flex items-center justify-center
                h-12 w-12 mt-2 mb-2 mx-auto
                bg-gray-300 hover:bg-green-600
                text-green-500 hover:text-white
                hover:rounded-xl rounded-3xl
                transition-all duration-200 ease-linear
                cursor-pointer shadow-lg`,
  tooltip: tw`absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
            text-white bg-gray-900
              text-xs font-bold
              transition-all duration-100 scale-0 group-hover:scale-100 origin-left`
}



