const exams = [
    {
        folder: "2018",
        files: ["sample-2018.pdf"],
    },
    {
        folder: "2019",
        files: ["sample-2019-2020.pdf"],
    },
    {
        folder: "2020",
        files: [],
    },
    {
        folder: "2021",
        files: ["sample-2021-2022.pdf"],
    },
    {
        folder: "2022",
        files: ["official-2022.pdf"],
    },
    {
        folder: "2023",
        files: ["official-2023.pdf", "sample-2023.pdf"],
    },
    {
        folder: "2024",
        files: ["official-2024.pdf"],
    },
    {
        folder: "tuyensinh247",
        files: Array.from({ length: 20 - 14 + 1 }, (_, i) =>
            (14 + i).toString()
        ),
    },
];

export default exams;
