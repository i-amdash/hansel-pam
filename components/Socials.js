import Link from "next/link";

import { RiYoutubeLine, RiInstagramLine, RiTwitterLine, RiFacebookBoxLine, RiLinkedinLine} from 'react-icons/ri'


export const socialData = [
  { name: 'youtube', path: '/', icon: <RiYoutubeLine /> },
  { name: 'instagram', path: '/about', icon: <RiInstagramLine /> },
  { name: 'twitter', path: '/services', icon: <RiTwitterLine /> },
  { name: 'facebook', path: '/work', icon: <RiFacebookBoxLine /> },
  {
    name: 'linkedin',
    path: '/testimonials',
    icon: <RiLinkedinLine />,
  },
];
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    {socialData.map((link, index) => {
     return <Link href={link.path} className="hover:text-accent transition-all duration-300" key={index}>{link.icon}</Link>
    })}
  </div>;
};

export default Socials;
