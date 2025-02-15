import React from "react";
import exams from "../data";
import { Link } from "react-router";
import namify from "../utils/namify";

function PracticeList() {
    return (
        <div className="py-lg">
            <h2 className="font-500 text-2xl mb-xxl mt-md ml-60">
                Practice Exams
            </h2>
            {exams.map((exam) => {
                if (exam.files.length === 0) return <div key={""}></div>;
                return (
                    <div className="mb-xl ml-60" key={exam.folder}>
                        <h4 className="mb-md font-500">{exam.folder}</h4>
                        <div className="text-[1.1rem] border-l-[1.5px] dark:border-l-[rgb(126,132,141)]">
                            {exam.files.map((file) => {
                                const title = namify(file);
                                return (
                                    <Link
                                        to={`/practice/${
                                            exam.folder
                                        }/${file.replace(/\.pdf/, "")}`}
                                        key={file}
                                    >
                                        <div className="py-xs px-lg flex items-center gap-xxl ml-[-1.5px] hover:border-l-[3px] hover:border-text">
                                            <span>{title}</span>
                                            <span>90 / 120 câu</span>
                                            <span className="material-symbols-rounded">
                                                favorite
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default PracticeList;
