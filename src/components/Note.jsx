import React from "react";

function Note({ children, type }) {
    const supportedNotes = {
        info: {
            bgColor: "#60a5fa0d",
            bdColor: "#60a5fa",
        },
        warning: {
            bgColor: "#fb923c0d",
            bdColor: "#fb923c",
        },
        help: {
            bgColor: "#84cc160d",
            bdColor: "#84cc16",
        },
    };
    const note = supportedNotes[type] || supportedNotes.info;
    return (
        <div
            className={`rounded-tr-[0.375rem] rounded-br-[0.375rem] border-s-[3px] p-md mb-lg`}
            style={{
                background: note.bgColor,
                borderInlineStartColor: note.bdColor,
            }}
        >
            <div
                className={`flex gap-3 items-center mb-2 text-lg`}
                style={{ color: note.bdColor }}
            >
                <span className="material-symbols-rounded">{type}</span>
                <span className="font-500 tracking-wider">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Note;
