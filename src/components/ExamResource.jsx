import React from "react";
import Note from "./Note";
import { useParams } from "react-router";
import namify from "../utils/namify";
import ConfettiButton from "./ConfettiButton";

function ExamResource() {
    const params = useParams();
    const folder = params.folder;
    const file = params.file + ".pdf";
    const title = namify(params.file);
    const uri = `/assets/exams/${folder}/${file}`;
    return (
        <div className="py-lg">
            <h2 className="font-500 text-2xl mb-xxl mt-md flex justify-between items-center">
                <span>{title + " - " + folder}</span>
                <span>
                    <ConfettiButton />
                </span>
            </h2>
            <div className="flex">
                <iframe
                    className="mb-xxl"
                    src={uri}
                    width="60%"
                    height="600px"
                ></iframe>
                {/* <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd5BkQXf6M8BA17aeTmgXgz_aMlXmRf0zMFfIGFBn5NJ_9QLg/viewform?embedded=true"
                    width="40%"
                    height="600px"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Đang tải…
                </iframe> */}
            </div>
            <h4 className="text-xl font-500 mb-md">Đáp án tham khảo</h4>
            <ul className="list-disc list-inside mb-xl tracking-wide">
                <li className="my-xxs">
                    <a href="https://youtube.com" target="_blank">
                        https://youtube.com
                    </a>
                </li>
                <li className="my-xxs">
                    <a href="https://youtube.com" target="_blank">
                        https://youtube.com
                    </a>
                </li>
                <li className="my-xxs">
                    <a href="https://youtube.com" target="_blank">
                        https://youtube.com
                    </a>
                </li>
            </ul>
            <h4 className="text-xl font-500 mb-md flex justify-between items-center">
                <span>Ghi chú</span>
                <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
                >
                    <span className="material-symbols-rounded">add</span>
                    <span>Ghi chú</span>
                </button>
            </h4>
            <Note type="warning">
                Tip! You can get ISO 8601 datetime by running new
                Date().toISOString() in the console. Make sure you remove quotes
                though.
            </Note>
        </div>
    );
}

export default ExamResource;
