/** @type { import("../../types/Chapter").Chapter } */
const Chapter = {
    stages: [
        {
            Symbol: "3-1",
            Title: "Factorials!",
            Description: "Make 120",
            Goal: ["120"],
            Items: [[["number", { symbol: 5 }]], [["operator", { symbol: "!" }]]],
        },
        {
            Symbol: "3-2",
            Title: "pseudo-Factorials!",
            Description: "Make 12",
            Goal: ["12"],
            Items: [
                [
                    ["number", { symbol: 2 }],
                    ["number", { symbol: 4 }],
                ],
                [
                    ["operator", { symbol: "!" }]
                ],
            ],
        },
        {
            Symbol: "3-3",
            Title: "Harder?",
            Description: "Make 144",
            Goal: ["144"],
            Items: [
                [
                    ["number", { symbol: 2 }],
                    ["number", { symbol: 4 }],
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "×" }],
                ],
            ],
        },
        {
            Symbol: "3-4",
            Title: "Plus & Minus",
            Description: "Make 25",
            Goal: ["25"],
            Items: [
                [
                    ["number", { symbol: 5 }]
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "+" }],
                    ["operator", { symbol: "-" }],
                ],
            ],
        },
        {
            Symbol: "3-5",
            Title: "Multiply & Divide",
            Description: "Make 24",
            Goal: ["24"],
            Items: [
                [
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 2 }],
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "÷" }],
                ],
            ],
        },
        {
            Symbol: "3-6",
            Title: "What?",
            Description: "Make 2303",
            Goal: ["2303"],
            Items: [
                [
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 3 }],
                ],
                [
                    ["number", { symbol: 2 }],
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "!" }],
                ],
                [
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "÷" }],
                ],
            ],
        },
        {
            Symbol: "3-7",
            Title: "A BiT CoMpLiCaTeD",
            Description: "Make 505",
            Goal: ["505"],
            Items: [
                [
                    ["number", { symbol: 2 }],
                    ["number", { symbol: 2 }],
                ],
                [
                    ["operator", { symbol: "-" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "-" }],
                ],
            ],
        },
        {
            Symbol: "3-8",
            Title: "What is negative factorial in this game?",
            Description: "Find the definition by your own and make 2",
            Goal: ["2"],
            Items: [
                [
                    ["number", { symbol: -2 }],
                    ["number", { symbol: -3 }],
                    ["number", { symbol: 4 }],
                    ["number", { symbol: 5 }],
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                ],
            ],
        },
        {
            Symbol: "3-9",
            Title: "Are you ready for FINAL STAGE of chapter 3?",
            Description: "Make -2021",
            Goal: ["-2021"],
            Items: [
                [
                    ["number", { symbol: 47 }],
                    ["number", { symbol: -44 }],
                    ["number", { symbol: -5 }],
                    ["number", { symbol: -3 }],
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "÷" }],
                ],
            ],
        },
        {
            Symbol: "3-10",
            Title: "Final stage of chapter 3",
            Description: "Make 2310",
            Goal: ["2310"],
            Items: [
                [
                    ["number", { symbol: -5 }],
                    ["number", { symbol: -4 }],
                    ["number", { symbol: -2 }],
                    ["number", { symbol: 3 }],
                    ["number", { symbol: 6 }],
                    ["number", { symbol: 7 }],
                    ["number", { symbol: 10 }],
                ],
                [
                    ["operator", { symbol: "×" }],
                    ["operator", { symbol: "÷" }],
                    ["operator", { symbol: "÷" }],
                ],
                [
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                    ["operator", { symbol: "!" }],
                ],
            ],
        },
    ]
};

export default Chapter;
