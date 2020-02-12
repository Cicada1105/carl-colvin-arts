// imports
import { createGradient as gradient } from './gradient'
import { createNavigation as navigation } from './navigation'

const init = ():void => {
  gradient();
  navigation();
}

export { init }