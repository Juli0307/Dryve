import {
  BellIcon,
  LogoBackoffice,
  SearchIcon,
  TopbarContainer,
  TopbarIconsContainer,
} from './styles';
import { TopbarLogo } from './styles';
import logoDryve from '../../assets/logoDryve.svg';
import { BsFillBellFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

export function Topbar() {
  return (
    <TopbarContainer>
      <TopbarLogo>
        <img src={logoDryve} />
        <LogoBackoffice>BACKOFFICE</LogoBackoffice>
      </TopbarLogo>
      <TopbarIconsContainer>
        <SearchIcon>
          <AiOutlineSearch size={22} />
        </SearchIcon>
        <BellIcon>
          <BsFillBellFill size={20} />
        </BellIcon>
      </TopbarIconsContainer>
    </TopbarContainer>
  );
}
