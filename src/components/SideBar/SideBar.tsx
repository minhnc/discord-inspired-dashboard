import tw from 'twin.macro'
import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';
import { FaFire, FaPooStorm } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

export const SideBar = () => (
  <div css={styles.container}>
    <SideBarIcon icon={<FaFire size={28} />} />
    <Hr />
    <SideBarIcon icon={<BsPlus size={32} />} />
    <SideBarIcon icon={<BsFillLightningFill size={22} />} />
    <SideBarIcon icon={<FaPooStorm size={22} />} />
    <Hr />
    <SideBarIcon icon={<BsGearFill size={28} />} />
  </div>
)

const Hr = () => <hr css={styles.hr} />

const styles = {
  container: tw`fixed top-0 left-0
                h-screen w-16
                flex flex-col
                bg-white dark:bg-gray-900
                shadow-lg`,
  hr: tw`bg-gray-200 dark:bg-gray-800
          border border-gray-200 dark:border-gray-800 rounded-full
          mx-2`
}
