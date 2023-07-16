import LightDesktopLogo from '../assets/img/logo-light.png';
import ColorDesktopLogo from '../assets/img/logo-color.png';
import ColorMobileLogo from '../assets/img/mobile-color.png';
import LightMobileLogo from '../assets/img/mobile-light.png';
const Logo = ({ small }: { small?: boolean }) => {
  return (
    <div>
      <>
        <img
          src={small ? ColorMobileLogo : ColorDesktopLogo}
          alt="Agent Express"
          className="block dark:hidden h-8"
        />
        <img
          src={small ? LightMobileLogo : LightDesktopLogo}
          alt="Agent Express"
          className="dark:block hidden h-8"
        />
      </>
    </div>
  );
};

export default Logo;
