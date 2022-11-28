import React from 'react';
import Button from './Button';

const LaunchModal = ({ launchButtons, launch, setLaunch }: any) => {
    return (
        <div>
            <Button onClick={() => setLaunch(true)} label={"Launch App"} />
            {
                launch

                && 

                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className='space-y-3 my-5'>
                                    {
                                        launchButtons
                                    }
                                </div>
                            <div className="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={() => setLaunch(false)} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default LaunchModal;