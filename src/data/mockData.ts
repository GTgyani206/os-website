export const similarSessions = [
    { id: 1, date: '18 May 2022', title: 'DSML Intermediate: Python Refresher', color: 'from-blue-500 to-blue-600' },
    { id: 2, date: '22 Jun 2022', title: 'DSML Intermediate: Python Refresher', color: 'from-green-500 to-green-600' },
    { id: 3, date: '18 Apr 2022', title: 'DSML Intermediate: Python Refresher', color: 'from-pink-500 to-pink-600' },
    { id: 4, date: '22 Apr 2022', title: 'DSML Intermediate: Functional Programming', color: 'from-purple-400 to-purple-500' },
];

export const problems = [
    { id: 1, name: 'sum in tuple', type: 'MCQ', difficulty: 'Easy', score: '10.0/10', status: 'Solved', submissions: 1, points: 5 },
    { id: 2, name: 'Create dictionary', type: 'MCQ', difficulty: 'Easy', score: '10.0/10', status: 'Solved', submissions: 1, points: 5 },
    { id: 3, name: 'a subset of b', type: 'MCQ', difficulty: 'Easy', score: '10.0/10', status: 'Solved', submissions: 1, points: 4 },
    { id: 4, name: 'duplicates in string', type: 'MCQ', difficulty: 'Easy', score: '6.7/8', status: 'Solved', submissions: 1, points: 5 },
    { id: 5, name: 'remove duplicate tuple', type: 'MCQ', difficulty: 'Medium', score: '8.07/11', status: 'Solved', submissions: 2, points: 5 },
    { id: 6, name: 'access the values', type: 'MCQ', difficulty: 'Easy', score: '15.0/15', status: 'Solved', submissions: 1, points: 5 },
    { id: 7, name: '18 plus guests', type: 'MCQ', difficulty: 'Medium', score: '13.07/14', status: 'Solved', submissions: 1, points: 5 },
    { id: 8, name: 'PyCharm3', type: 'MCQ', difficulty: 'Medium', score: '15.0/15', status: 'Solved', submissions: 1, points: 5 },
];

export const assignmentTabs = [
    { id: 'session', label: 'Session', value: '100%' },
    { id: 'assignment', label: 'Assignment', value: '15/15', icon: '🔓' },
    { id: 'additional', label: 'Additional Problems', value: '0/0', tag: 'New' },
    { id: 'feedback', label: 'Feedback', icon: '🔓' },
];

export const modules = [
    {
        id: 1, number: 2,
        title: 'Introduction to Problem Solving (Intermediate) 1',
        subtitle: 'Introduction to Problem-Solving Techniques: Part 1',
        weeks: '4 weeks', completed: true,
        mockInterview: { status: 'Not Required' },
    },
    {
        id: 2, number: 3,
        title: 'Introduction to Problem Solving (Intermediate) 2',
        subtitle: 'Introduction to Problem-Solving Techniques: Part 2',
        completed: true,
        mockInterview: { status: 'Not Required' },
    },
    {
        id: 3, number: 4,
        title: 'Common Core Foundations',
        subtitle: 'Numerical Programming in Python',
        completed: true,
        mockInterview: { status: 'Cleared the Interview' },
    },
];

export const curriculumClasses = [
    { id: 1, day: '14 APR', title: 'Intermediate DSA : Problem Solving Session - 1', type: 'Optional Class', lecture: '0.0%', assignment: '' },
    { id: 2, day: '16 APR', title: 'Intermediate DSA : Problem Solving Session - 2', type: 'Optional Class', lecture: '0.0%', assignment: '' },
    { id: 3, day: 'DAY 2, 18 APR', title: 'DSML Intermediate: Python Refresher 1', type: '', lecture: '100.0%', assignment: '11 / 11' },
    { id: 4, day: 'DAY 3, 20 APR', title: 'DSML Intermediate: Python Refresher 2', type: '', lecture: '100.0%', assignment: '15 / 15' },
    { id: 5, day: 'DAY 4, 22 APR', title: 'DSML Intermediate: Functional Programming', type: '', lecture: '100.0%', assignment: '15 / 15' },
];

export const curriculumTabs = ['Core Skills And Curriculum', 'Skill Certification', 'Degree Evaluation', 'Other Classes', 'OS Lectures Video Library'];

export const mentorSessions = [
    { id: 1, number: 3, agenda: 'Resume Gaps & Strategy', completed: true },
    { id: 2, number: 2, agenda: 'Time Management', completed: true },
    { id: 3, number: 1, agenda: 'Introductory Session: Get to know each other', completed: true },
];

export const careerModules = [
    { id: 1, title: 'Career', subtitle: 'Optional (Every 2-3 weeks)', status: 'Classes in progress' },
    { id: 2, title: 'Ask Me Anything Sessions', subtitle: 'Optional (Every 2-3 weeks)', status: 'Classes in progress' },
];

export const discussions = [
    { id: 1, title: 'Delhivery | SDE1 | Offer', author: { initial: 'A', color: 'bg-gray-400' }, views: 35874, replies: 26 },
    { id: 2, title: 'Intuit | Feb, 22 | Offer', author: { initial: '❧', color: 'bg-amber-400' }, views: 16658, replies: 21 },
    { id: 3, title: 'Microsoft, SWE | JP Morgan Chase, Quant Analyst | Dec, 21 | Offer', author: { initial: 'S', color: 'bg-green-400' }, views: 22475, replies: 15 },
    { id: 4, title: 'Google Offer | SE3 | Bangalore | April 2022', author: { initial: 'K', color: 'bg-amber-500' }, views: 21320, replies: 44 },
];

export const mcqOptions = [
    { id: 'a', text: 'It will be printing the sum of all elements in the list' },
    { id: 'b', text: 'It will be printing the sum of the first elements of tuples in the list' },
    { id: 'c', text: 'It will be printing the sum of the second elements of tuples in the list', correct: true },
    { id: 'd', text: 'None of the options is correct' },
];
