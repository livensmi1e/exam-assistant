const namify = (file) => {
    return file.startsWith("official")
        ? "Đề thi chính thức"
        : file.startsWith("sample")
        ? "Đề thi tham khảo"
        : `Đề ôn số ${file}`;
};

export default namify;
