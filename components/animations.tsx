import { AnimatePresence, MotiProps, MotiView} from 'moti'
import { PropsWithChildren } from 'react'
import { ViewProps, ViewStyle } from 'react-native'

type FadeProps = MotiProps<ViewStyle> & ViewProps

type FadeInOutProps = {
  visible?: boolean
} & FadeProps

const defaultFadeInProps:FadeProps = {
  from: {
    opacity: 0,
    translateY: 20
  },
  animate: {
    opacity: 1,
    translateY: 0
  },
  transition: {
    type: "timing",
    duration: 1_000
  }
}

const defaultFadeInOutProps:FadeProps = {
  exit: {
    opacity: 0
  }
}

export const FadeIn = (props: PropsWithChildren<FadeProps>) => {
  return (
    <MotiView {...defaultFadeInProps} {...props} />
  )
}

export const FadeInOut = ({ visible, ...props }: PropsWithChildren<FadeInOutProps>) => {
  return (
    <AnimatePresence>
      {visible && (
        <FadeIn {...defaultFadeInOutProps} {...props} />
      )}
    </AnimatePresence>
  )
}