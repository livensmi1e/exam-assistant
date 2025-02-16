import React, { useEffect, useState } from "react";
import Note from "./Note";
import { useParams } from "react-router";
import namify from "../utils/namify";
import ConfettiButton from "./ConfettiButton";
import apiCall, { POST } from "../api";

function ExamResource() {
    const params = useParams();
    const folder = params.folder;
    const file = params.file + ".pdf";
    const title = namify(params.file);
    const uri = `/assets/exams/${folder}/${file}`;

    const [notes, setNotes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [noteContent, setNoteContent] = useState("");

    useEffect(() => {
        fetchNotes();
        console.log(notes);
    }, []);

    const fetchNotes = async () => {
        try {
            const resp = await apiCall(`/note/${params.file}`);
            if (resp.success) setNotes(resp.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddNote = async (e) => {
        e.preventDefault();
        if (!noteContent.trim()) return;
        const body = {
            title: params.file,
            content: noteContent,
        };
        try {
            const data = await apiCall("/note", POST, body);
            if (data.success) {
                setNoteContent("");
                setShowForm(false);
                fetchNotes();
            }
        } catch (err) {
            console.error(err);
        }
    };

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
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd-gJt1hj31I5SOkF0r0zXKzF0VHqQoqRbuFnitLAnE_EOLbQ/viewform?embedded=true"
                    width="40%"
                    height="600px"
                >
                    Đang tải…
                </iframe>
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
                    onClick={() => setShowForm(true)}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
                >
                    <span className="material-symbols-rounded">add</span>
                    <span>Ghi chú</span>
                </button>
            </h4>
            {showForm && (
                <form onSubmit={handleAddNote}>
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="comment" className="sr-only">
                                Your comment
                            </label>
                            <textarea
                                value={noteContent}
                                onChange={(e) => setNoteContent(e.target.value)}
                                id="comment"
                                rows="3"
                                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
                                placeholder="Write a comment..."
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
                            <button
                                type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                                Ghi uncle
                            </button>
                        </div>
                    </div>
                </form>
            )}
            {notes.map((note, index) => {
                const types = ["info", "warning", "help"];
                const type = types[Math.floor(Math.random() * types.length)];
                return (
                    <Note key={index} type={`${type}`}>
                        {note.content}
                    </Note>
                );
            })}
        </div>
    );
}

export default ExamResource;
