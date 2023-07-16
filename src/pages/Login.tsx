import LoginForm from '../components/LoginForm';
import loginImg from '../assets/img/loginImg.png';
import ToggleSwitch from '../components/ToggleSwitch';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark h-full min-h-screen md:grid place-items-center  transition-all duration-200 ease-in dark:ease-out w-full">
      <div className=" bg-white dark:bg-primary-dark md:border-2 border-border-light max-h-max lg:min-h-[80%] rounded-xl flex flex-col gap-4 p-4 w-full md:max-w-[90%] dark:text-white transition-all duration-500 linear">
        <div className="flex lg:hidden justify-between py-2.5 items-center">
          <div>
            <Logo />
          </div>
          <ToggleSwitch />
        </div>
        <div className="flex-1 lg:grid lg:grid-cols-12 gap-12 lg:gap-6 lg:h-full lg:items-center">
          <div className="lg:col-span-7">
            <div className="h-full max-h-[13.875rem] md:max-h-[19.375rem] lg:max-h-[100%] inline-block overflow-hidden">
              <div className="flex h-full justify-center">
                <img
                  src={loginImg}
                  alt=""
                  className="object-cover max-h-[13.875rem] md:max-h-[19.375rem] lg:max-h-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 px-4 md:px-6 lg:px-12 flex flex-col gap-2  divide-y-2 divide-border-light">
            <div className="hidden lg:flex justify-between py-2.5 items-center">
              <div>
                <Logo />
              </div>
              <ToggleSwitch />
            </div>
            <div className="py-6 text-center">
              <h2 className="text-3xl font-bold font-Merienda uppercase">
                Hello Again!
              </h2>
              <p>Welcome back you've been missed! </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
