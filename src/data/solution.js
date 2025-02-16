const solutions = {
    "sample-2018.pdf": [
        "https://hoctot12.vn/de-thi-danh-gia-nang-luc-dhqg-tphcm-2018/",
        "https://www.youtube.com/watch?v=pI-0Y9CkAmQ",
        "https://www.youtube.com/watch?v=-H3KjMuC38c",
    ],
    "sample-2019-2020.pdf": ["https://www.youtube.com/watch?v=-H3KjMuC38c"],
    "sample-2021-2022.pdf": ["https://www.youtube.com/watch?v=-H3KjMuC38c"],
    "official-2022.pdf": [
        "https://www.youtube.com/playlist?list=PL7EC_5fR6f39_UZpaE9W1M-CSqwZaEX3i",
        "https://www.youtube.com/watch?v=-H3KjMuC38c",
    ],
    "official-2023.pdf": [
        "https://www.youtube.com/playlist?list=PL7EC_5fR6f39_UZpaE9W1M-CSqwZaEX3i",
        "https://dethidanhgianangluc.info/de-thi-danh-gia-nang-luc-lan-1-nam-2023-dai-hoc-quoc-gia-tp-hcm-de-chinh-thuc-a31371.html",
    ],
    "sample-2023.pdf": [],
    "official-2024.pdf": [
        "https://danhgianangluc.info/de-thi-danh-gia-nang-luc-dhqg-tphcm-nam-2024-dot-1-de-chinh-thuc-a32084.html",
        "https://www.youtube.com/playlist?list=PL7EC_5fR6f39_UZpaE9W1M-CSqwZaEX3i",
    ],
    ...Object.fromEntries(
        Array.from({ length: 20 - 14 + 1 }, (_, i) => [
            (14 + i).toString() + ".pdf",
            [
                "https://danhgianangluc.info/20-de-thi-danh-gia-nang-luc-tuyensinh247-a27116.html",
            ],
        ])
    ),
};

export default solutions;
