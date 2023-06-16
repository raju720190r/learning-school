import { ImSpinner10 } from 'react-icons/im'

const AddClassFrom = ({
    user,
    handleSubmit,
    loading,
    handleImageChange,
    uploadButtonText,
}) => {

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <iframe src="https://embed.lottiefiles.com/animation/68324"></iframe>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='Instructor' className='block text-gray-600'>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                name='instructor'
                                id='instructor'
                                type='text'
                                placeholder='Instructor Name'
                                defaultValue={user?.displayName}
                                required
                            />
                        </div>
                        <div className='space-y-6 text-sm '>
                            <label htmlFor='email' className='block text-gray-600'>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-3  text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                name='email'
                                id='email'
                                type='text'
                                placeholder='Instructor Email'
                                defaultValue={user?.email}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                name='price'
                                id='price'
                                type='number'
                                placeholder='Price'
                                required
                            />
                        </div>




                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='class' className='block text-gray-600'>
                                Class Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                name='class'
                                id='class'
                                type='text'
                                placeholder='Class Name'
                                required
                            />
                        </div>

                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={(event) => { handleImageChange(event.target.files[0]) }}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-green-600 text-white border border-gray-300  rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-400'>
                                            {uploadButtonText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>


                            <div className='space-y-1 text-sm'>
                                <label htmlFor='seats' className='block text-gray-600'>
                                    Available seats
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md '
                                    name='seats'
                                    id='seats'
                                    type='number'
                                    placeholder='Available seats'
                                    required
                                />
                            </div>
                        </div>




                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-green-600'
                >
                    {loading ? (
                        <ImSpinner10 className='m-auto animate-spin' size={24} />
                    ) : (
                        'Add Class'
                    )}
                </button>
            </form>
        </div>
    )
}

export default AddClassFrom;