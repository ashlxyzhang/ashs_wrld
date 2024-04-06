import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const emailClick = () => {
    setOpen(true);
  };
  const sendEmail = () => {
    setOpen(false);
    console.log("sent");
  };

  return (
    <>
      <a className="cursor-pointer underline" onClick={emailClick}>
        Email <br />
      </a>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                  <div className="bg-white px-4 sm:p-6 sm:pb-4">
                    <div className="sm:items-start">
                      <div className="m-3 sm:m-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl text-center font-bold leading-6 text-gray-900"
                        >
                          Contact
                        </Dialog.Title>
                        <hr className="mt-3 mb-3" />
                        <div className="flex">
                          <label htmlFor="email">From:&nbsp;</label>
                          <input
                            className="border-none outline-none overflow-hidden text-ellipsis flex-auto"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="(enter your email address)..."
                          />
                        </div>
                        <hr className="mt-3 mb-3" />
                        <div className="flex flex-col min-h-64">
                          <textarea
                            className="flex flex-col flex-grow resize-none border-none outline-none"
                            placeholder="Write your message..."
                            rows={1}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-pink-300 sm:ml-3 sm:w-auto"
                      onClick={sendEmail}
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
