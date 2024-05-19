import PlaneImage from '@/assets/images/plane.png'
import { MotiView, AnimatePresence, MotiImage} from 'moti'

interface PlaneProps {
  show: boolean 
}

const Plane = ({ show }: PlaneProps) => {

  return (
    <MotiView style={{ alignSelf: 'stretch', alignItems: 'flex-end'}}>
      <AnimatePresence>
        {show && (
          <MotiImage
            source={PlaneImage} 
            from={{
              translateX: 400,
              translateY: 10
            }}
            animate={{
              translateX: 0,
              translateY: 0
            }}
            exit={{
              translateX: 400,
              translateY: -200
            }}
            transition={{
              translateX: {
                type: 'timing',
                duration: 1_000,
              },
              translateY: {
                type: 'timing',
                duration: 500,
                loop: true
              }
            }}
            exitTransition={{
              translateX: {
                type: 'timing',
                duration: 1_000,
                delay: 200
              },
              translateY: {
                type: 'timing',
                duration: 1_500
              }
            }}
          />
        )}
      </AnimatePresence>
    </MotiView>
  )
}

export default Plane;