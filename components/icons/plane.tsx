import { useTheme } from "@/providers/theme"
import { ThemeVariants } from "@/providers/theme/models"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface PlaneIconProps {
  variant?: ThemeVariants
}

function PlaneIcon({ variant = 'primary' }:PlaneIconProps) {
  const { theme } = useTheme()

  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Path
        d="M31.33 11.166l-4.812 4.813.012.042 3.655 13.453a1.912 1.912 0 01-.444 1.671l-1.206 1.207a.714.714 0 01-1.192-.169L22.4 23.236l-1.568-1.57-4.148 4.147a6.97 6.97 0 01-1.579 1.06l.927 3.047a1.842 1.842 0 01-.42 1.663l-.368.37a1.004 1.004 0 01-1.415 0l-2.189-2.187-.038-.042-1.659-1.654-.042-.043-2.185-2.187a1.004 1.004 0 010-1.415l.37-.37a1.843 1.843 0 011.663-.415l3.047.922a6.993 6.993 0 011.06-1.579l4.148-4.147-1.57-1.566-8.948-4.944a.713.713 0 01-.168-1.191l1.206-1.207a1.914 1.914 0 011.672-.444l13.452 3.655.043.013 4.812-4.813c.78-.783 3.413-2.147 4.196-1.368.779.783-.587 3.414-1.368 4.195z"
        fill={theme.backgrounds[variant]}
      />
    </Svg>
  )
}

export default PlaneIcon