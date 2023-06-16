import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const FeedbackModal = ({isOpen,inputValue, closeModal, handleInputChange, handleSend, } ) => {
    return (
        <>

            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 flex items-center justify-center"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="bg-white rounded-lg p-6 w-[400px] mx-auto">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Feedback Modal
                                </Dialog.Title>

                                <div className="mt-4">
                                    <textarea
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className="border border-gray-300 rounded-md w-full px-3 py-2"
                                        placeholder="Enter Feedback"
                                    />
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={handleSend}
                                        className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Send
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default FeedbackModal;