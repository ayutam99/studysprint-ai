export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/prep', label: 'Emergency Prep' },
  { href: '/tools', label: 'Tools' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/flashcards', label: 'Flashcards' },
  { href: '/chat', label: 'Chat' },
  { href: '/profile', label: 'Profile' },
];

export const subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Business Studies', 'MBA Marketing', 'Economics', 'Computer Science', 'English'];

export const toolTabs = [
  {
    key: 'summary',
    title: 'Smart Summary',
    content: [
      'Physics: Newton’s Laws connect force, motion, and inertia for almost every mechanics question.',
      'Chemistry: Bond polarity predicts molecular behavior and reaction tendency.',
      'Economics: Elasticity, inflation, and fiscal policy are high-weightage, definition-driven topics.',
      'English: Score high with a clear thesis, structured body paragraphs, and concise evidence.',
    ],
  },
  {
    key: 'mcq',
    title: 'MCQ Quiz Generator',
    content: [
      '25 exam-style MCQs generated with easy/medium/hard labels.',
      'Every question includes a short explanation so you learn while practicing.',
      'Demo packs available for Physics, Biology, Economics, and Computer Science.',
    ],
  },
  {
    key: 'flashcards',
    title: 'Flashcards',
    content: [
      'Opportunity Cost: value of the next best alternative forgone.',
      'Osmosis: water movement from low solute to high solute concentration.',
      'Binary Search Complexity: O(log n), only for sorted arrays.',
    ],
  },
  {
    key: 'formula',
    title: 'Formula Sheet',
    content: [
      'Mathematics: d/dx(sin x)=cos x, integration by substitution for standard forms.',
      'Physics: F=ma, v=u+at, s=ut+½at², P=W/t.',
      'Economics: GDP=C+I+G+(X-M), Price Elasticity=%ΔQ/%ΔP.',
    ],
  },
  {
    key: 'viva',
    title: 'Viva Questions',
    content: [
      'Explain Bernoulli principle with one real-life engineering example.',
      'Differentiate mitosis and meiosis in 45 seconds.',
      'How would you use STP to launch a new education app?',
    ],
  },
  {
    key: 'chat',
    title: 'Ask Doubts Chatbot',
    content: [
      'AI responds in 3 layers: quick answer, exam-focused version, and easy explanation.',
      'Useful for last-minute revision when you need crisp concepts quickly.',
    ],
  },
  {
    key: 'mnemonics',
    title: 'Mnemonics / Memory Tricks',
    content: [
      'Biology taxonomy: King Philip Came Over For Good Soup.',
      'Marketing 4Ps: Please Provide Premium Packaging.',
      'Trigonometry signs by quadrant: All Students Take Calculus.',
    ],
  },
  {
    key: 'plan',
    title: 'One-Day Study Plan',
    content: [
      '06:30–08:00 high-weightage chapter recap.',
      '10:00–11:00 timed MCQ test + error log.',
      '14:00–15:00 formula and definition sprint.',
      '21:00–21:30 final active recall and sleep reset.',
    ],
  },
] as const;

export const quizQuestions = [
  {
    question: 'In economics, price elasticity of demand greater than 1 indicates:',
    options: ['Inelastic demand', 'Perfectly inelastic demand', 'Elastic demand', 'Unitary elasticity'],
    answer: 2,
    explanation: 'Elastic demand means quantity demanded changes more than the price change proportionally.',
  },
  {
    question: 'Which law states that acceleration is proportional to net force?',
    options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Hooke\'s Law', 'Boyle\'s Law'],
    answer: 1,
    explanation: 'Newton\'s Second Law is expressed as F = ma.',
  },
  {
    question: 'The powerhouse of the cell is:',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
    answer: 2,
    explanation: 'Mitochondria generate ATP via cellular respiration.',
  },
  {
    question: 'A marketing funnel stage focused on conversion is:',
    options: ['Awareness', 'Interest', 'Decision', 'Retention'],
    answer: 2,
    explanation: 'Decision stage includes evaluating options and converting interest into action.',
  },
  {
    question: 'Derivative of x² is:',
    options: ['2x', 'x', 'x³', '2'],
    answer: 0,
    explanation: 'Using power rule d/dx (x^n) = nx^(n-1), derivative is 2x.',
  },
];

export const flashcards = [
  { front: 'Physics: What is inertia?', back: 'Tendency of an object to resist changes in its state of motion.' },
  { front: 'Chemistry: What is molarity?', back: 'Moles of solute per liter of solution.' },
  { front: 'Biology: Define photosynthesis.', back: 'Process where plants use sunlight to make glucose from CO2 and water.' },
  { front: 'Business: What is SWOT?', back: 'Strengths, Weaknesses, Opportunities, and Threats analysis framework.' },
  { front: 'Computer Science: Big-O of binary search?', back: 'O(log n), because search space halves every step.' },
  { front: 'English: What is a thesis statement?', back: 'The central claim of an essay that guides all arguments.' },
];

export const prepSections = {
  topQuestions: Array.from({ length: 20 }, (_, i) => `Q${i + 1}: Explain one high-scoring concept from your syllabus with a diagram/example.`),
  crashCourse: [
    '0-10 min: Revise core definitions and formulas.',
    '10-20 min: Solve 8 mixed past-paper MCQs.',
    '20-25 min: Rapid recall with flashcards.',
    '25-30 min: Write 5 likely long-answer outlines.',
  ],
  quickNotes: [
    'Physics: Focus on laws, units, graph interpretation.',
    'Chemistry: Reaction mechanisms + balancing certainty.',
    'Economics: Definitions + diagrams + policy implications.',
  ],
  probable: ['Numericals from current chapter', 'Case-study based application question', 'Compare/contrast short note', 'Formula derivation with assumptions'],
  mustRemember: ['Keywords in definitions', 'Units and dimensions', 'Graph labels', 'Three real-world examples per topic'],
  strategy: ['Attempt easy questions first', 'Use 70/20/10 time split', 'Underline key terms in long answers', 'Leave final 8 mins for review'],
  motivation: 'You do not need perfection tonight—only focused progress. One clear concept at a time equals marks tomorrow. You got this 💙',
};

export const chatPrompts = ['Explain osmosis in simple words', 'Give me a one-day plan for MBA Marketing', 'Ask me 5 viva questions on economics', 'What are the top formulas for calculus revision?'];
