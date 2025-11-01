import {
  MdOutlineCheck,
  MdOutlineClose,
  MdOutlineCode,
  MdOutlineFileDownload,
  MdOutlineMail,
  MdOutlineWavingHand,
  MdWorkOutline,
} from 'react-icons/md';
import { AiOutlineInfoCircle, AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal, BiLogoGmail } from 'react-icons/bi';
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
export const ICONS = {
  work: <MdWorkOutline />,
  info: <AiOutlineInfoCircle />,
  github: <AiFillGithub size={24} />,
  link: <BiLinkExternal />,
  email: <BiLogoGmail />,
  phone: <FaPhoneAlt />,
  linkedin: <FaLinkedin size={24} />,
  close: <MdOutlineClose />,
  code: <MdOutlineCode />,
  mail: <MdOutlineMail />,
  hamBurger: <RxHamburgerMenu size={24} />,
  download: <MdOutlineFileDownload size={24} />,
  wave: <MdOutlineWavingHand size={24} />,
  check: <MdOutlineCheck />,
};
