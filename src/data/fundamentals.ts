import { FundamentalItem, EducationItem } from '../types';

export const fundamentalsData: FundamentalItem[] = [
  {
    title: 'Data Structures & Algorithms',
    category: 'Core Foundations',
    concepts: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Hash Tables'],
    importance: 'Selecting optimal memory layouts and associative structures for fast lookups and state management.',
  },
  {
    title: 'Time & Space Complexity',
    category: 'Analysis',
    concepts: ['Big-O Notation', 'Asymptotic Analysis', 'Best/Average/Worst Case', 'Memory Trade-offs'],
    importance: 'Evaluating algorithmic performance to prevent performance bottlenecks in high-volume API endpoints.',
  },
  {
    title: 'Sorting & Searching',
    category: 'Algorithmic Techniques',
    concepts: ['Binary Search', 'Merge Sort', 'Quick Sort', 'Two-Pointer Technique', 'Sliding Window'],
    importance: 'Implementing predictable search and ordering operations across arrays, catalogs, and collections.',
  },
  {
    title: 'Object-Oriented Programming (OOP)',
    category: 'Software Design',
    concepts: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'SOLID Principles'],
    importance: 'Building maintainable codebases with clean separation between models, services, and data layers.',
  },
  {
    title: 'Database Management Systems (DBMS) & SQL',
    category: 'Data Engineering',
    concepts: ['Relational Modeling', 'ACID Properties', 'Normalization (1NF-3NF)', 'Indexing', 'Transactions'],
    importance: 'Structuring relational schemas that guarantee data consistency during critical financial transactions.',
  },
  {
    title: 'Operating Systems & Concurrency',
    category: 'Systems',
    concepts: ['Processes vs Threads', 'CPU Scheduling', 'Virtual Memory & Paging', 'Deadlocks', 'Event Loop'],
    importance: 'Understanding asynchronous I/O, non-blocking execution in Node.js, and process management.',
  },
  {
    title: 'Computer Networks',
    category: 'Infrastructure & Protocols',
    concepts: ['OSI & TCP/IP Model', 'HTTP/HTTPS Protocols', 'DNS Resolution', 'REST Architecture', 'WebSockets'],
    importance: 'Designing secure, low-latency API contracts and debugging client-server communication handshakes.',
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  university: 'Chandigarh University',
  status: 'Undergraduate Student (2025 – 2029)',
  expectedGraduation: '2025 – 2029',
  location: 'Punjab, India',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Object-Oriented Programming (Java/C++)',
    'Web Technologies & Distributed Systems',
    'Software Engineering Methodologies',
  ],
};
