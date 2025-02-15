import React from "react";

function TimeLine() {
    return (
        <div className="py-lg">
            <h2 className="font-500 text-2xl mb-xxl mt-md flex justify-between items-center">
                Timeline
            </h2>
            <div className="flex justify-around gap-6">
                <div className="px-md">
                    <h3 className="font-400 text-xl mb-6">Đợt 1</h3>
                    <div className="border-l-[1px] border-gray-200 dark:border-gray-700 relative">
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 22/03/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Thông báo phiếu báo dự thi
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 30/03/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Tổ chức thi
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 16/04/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Thông báo kết quả
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                    </div>
                </div>
                <div className="px-md">
                    <h3 className="font-400 text-xl mb-6">Đợt 2</h3>
                    <div className="border-l-[1px] border-gray-200 dark:border-gray-700 relative">
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 24/05/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Thông báo phiếu báo dự thi
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 01/06/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Tổ chức thi
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                        <div className="mb-10 ml-4">
                            <div className="absolute -start-1.5 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5"></div>
                            <div className="text-gray-400 dark:text-gray-500">
                                Ngày 16/06/2025
                            </div>
                            <h4 className="text-lg font-500 mt-xs">
                                Thông báo kết quả
                            </h4>
                            <p className="mt-xs"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
