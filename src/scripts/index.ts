// imports
import { createGradient as gradient } from './gradient/index'
import { createBgFade as bgFade } from './bg_img/index'
import { createHeader as header } from './header/index'
import { createFooter as footer } from './footer/index'
import { createBodyContent as body } from './bg_content/index'
import { loadBootstrap } from './global/methods/utilities'

const init = ():void => {
  bgFade();
  gradient();
  // Load bootstrap link for navigation hamburger bars
  loadBootstrap();
  header();
  footer();
  body();
}

export { init }