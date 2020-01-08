import { Controller } from 'stimulus';
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

export default class extends Controller {
  static targets = [ 'menu' ];

  connect() {
    clearAllBodyScrollLocks();
  }

  closeMenuOnLargeBreakpoint() {
    if (window.innerWidth > 768) {
      clearAllBodyScrollLocks();
      this.menuTarget.classList.add('hidden');
    }
  }

  openMenu() {
    this.menuTarget.classList.remove('hidden');
    disableBodyScroll(this.menuTarget);
  }

  closeMenu() {
    this.menuTarget.classList.add('hidden');
    enableBodyScroll(this.menuTarget);
  }
}
