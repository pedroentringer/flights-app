import { ThemeVariants } from '@/providers/theme/models'
import PlaneIcon from '../icons/plane'
import { RoundedButton } from './styles'

interface PlaneButtonProps {
  variant?: ThemeVariants
  onPress: () => void 
}

export const PlaneButton = ({ variant, onPress }: PlaneButtonProps) => {
  return (
    <RoundedButton onPress={onPress}>
      <PlaneIcon variant={variant}/>
    </RoundedButton>
  )
}