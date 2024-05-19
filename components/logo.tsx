import LogoWhite from '@/assets/images/logo-white.png'
import LogoBlue from "@/assets/images/logo-blue.png"
import { Image } from 'react-native';

interface LogoProps {
  variant?: 'white' | 'blue'
}

const logos = {
  white: LogoWhite,
  blue: LogoBlue
}

const Logo = ({ variant = 'blue' }: LogoProps) => {
  return <Image source={logos[variant]} />
}

export default Logo;