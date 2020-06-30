export default {
    studClass: '1B',
    student:
    {
        name: 'Terry',
        studId: '2',
        gender: 'male',
        tel: '12345678',
        overallResults: [
            {
                numQuestion: 3,
                numCorrect: 1,
                results: [false, false, true],
                details: [
                    'Question: 3 = 3 * ?\nAnswer: 1\nYour Answer: 5',
                    'Question: 2 = 2 * ?\nAnswer: 1\nYour Answer: 3',
                    'Question: 1 = 1 * ?\nAnswer: 1\nYour Answer: 1'
                ]
            },
            {
                numQuestion: 3,
                numCorrect: 3,
                results: [true, true, true],
                details: [
                    'Question: 5 = 5 * ?\nAnswer: 1\nYour Answer: 1',
                    'Question: 6 = 6 * ?\nAnswer: 1\nYour Answer: 1',
                    'Question: 7 = 7 * ?\nAnswer: 1\nYour Answer: 1'
                ]
            },
            {
                numQuestion: 3,
                numCorrect: 2,
                results: [true, true, false],
                details: [
                    'Question: 5 = 5 * ?\nAnswer: 1\nYour Answer: 1',
                    'Question: 6 = 6 * ?\nAnswer: 1\nYour Answer: 1',
                    'Question: 7 = 7 * ?\nAnswer: 1\nYour Answer: 6'
                ]
            }
        ]
    }
}