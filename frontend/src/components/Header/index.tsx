/* eslint-disable */
import { useAppDispatch } from '@hooks/redux';
import logo from '../../assets/logo.svg';

import LanguageButton from './components/LanguageButton';
import { ButtonLanguageI, buttonsLanguages } from './constants';

import './styles.scss';

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full text-xs lg:text-sm font-semibold lg:font-medium text-white shadow bg-gray-900">
      <div className="flex items-center w-full h-16 max-w-[100rem] mx-auto px-4 sm:px-8">
        <a
          data-phx-link="redirect"
          data-phx-link-state="push"
          href="/dashboard"></a>
        <nav className="flex items-center flex-start">
          <a
            className="group grid gap-x-2 gap-y-1 grid-cols-1 lg:grid-cols-auto-span items-center justify-items-center lg:justify-items-start mx-1 px-3 py-2 rounded-lg bg-transparent hover:bg-[#25263D] focus:bg-[#25263D] whitespace-nowrap"
            data-phx-link="redirect"
            data-phx-link-state="push"
            href="/dashboard">
            <span className="w-14 h-4 flex justify-center">
              <img src={logo} alt="logo" className="logo" />
            </span>
            Notas App
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
