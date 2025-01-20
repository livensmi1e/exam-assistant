import React from "react";

function Note({ children }) {
    return (
        <div className="rounded-tr-[0.375rem] rounded-br-[0.375rem] bg-[#60a5fa0d] dark:bg-[#70b1ff0d] border-s-[3px] border-s-[#60a5fa] bor p-md mb-lg">
            {children}
        </div>
    );
}

export default Note;
