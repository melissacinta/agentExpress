import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useAuth from '../hooks/useAuth';

type Props = {
  open: boolean;
  setOpen: (x: boolean) => void;
};

export default function LogOutModal({ open, setOpen }: Props) {
  const { handleLogout } = useAuth();
  function closeModal() {
    setOpen(false);
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary-dark/25 bg dark:bg-white/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-primary-dark p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <p className="text-lg font-medium leading-6 text-primary-dark dark:text-purple-50">
                    Are you sure you want to Sign out?
                  </p>
                </div>

                <div className="mt-9 sm:mt-8 sm:flex sm:flex-row-reverse gap-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-[#F85D5D] px-4 py-2 text-sm font-medium text-white hover:bg-gradient-rev hover:text-white focus:outline-none focus-visible:ring-0 mr-2 sm:mr-0"
                    onClick={handleLogout}
                  >
                    Yes Please!
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-primary-light shadow px-4 py-2 text-sm font-medium text-primary-dark  hover:bg-gradient-rev hover:text-white focus:outline-none focus-visible:ring-0"
                    onClick={closeModal}
                  >
                    No, Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
