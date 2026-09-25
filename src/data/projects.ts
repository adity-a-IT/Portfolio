import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'mealbites',
    title: 'MealBites',
    category: 'Full-Stack',
    categoryLabel: 'Full-Stack Food Delivery Platform',
    tagline: 'Multi-vendor food ordering & restaurant management system',
    description:
      'MealBites is a full-stack food delivery platform focused on restaurant discovery, menu management, ordering, payments, and vendor/admin workflows.',
    isFlagship: true,
    liveUrl: 'https://mealbites-kappa.vercel.app',
    githubUrl: 'https://github.com/adity-a-IT/mealbites',
    caseStudyAvailable: true,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Native',
      'Expo',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'Razorpay',
    ],
    highlights: [
      'React + TypeScript web application',
      'React Native mobile application',
      'Node.js + Express backend',
      'REST API architecture',
      'PostgreSQL database',
      'Prisma ORM',
      'JWT authentication',
      'Role-based access control (Customer, Restaurant Partner, Admin)',
      'Restaurant management',
      'Menu/catalog management with live item status',
      'Cart and ordering workflows',
      'Payment integration (Razorpay)',
      'Admin analytics dashboard',
    ],
    caseStudy: {
      id: 'mealbites-case-study',
      title: 'MealBites — Full-Stack Food Delivery Platform Engineering Deep Dive',
      category: 'Flagship Full-Stack Engineering Case Study',
      liveUrl: 'https://mealbites-kappa.vercel.app',
      githubUrl: 'https://github.com/adity-a-IT/mealbites',
      overview:
        'MealBites is a comprehensive full-stack food ordering platform designed to bridge customers, local food vendors, and platform administrators. Built with a decoupled client-server architecture, it supports both web and mobile clients driven by a unified REST API, strongly typed schemas, and transactional PostgreSQL storage.',
      problem:
        'Small food outlets and multi-vendor campus cafeterias frequently face issues coordinating orders during peak hours using manual messaging or rigid single-store apps. Key pain points include out-of-sync inventory, order confirmation delays, messy billing reconciliations, and absence of unified dashboard metrics for kitchen managers.',
      solution:
        'Engineered an end-to-end full-stack platform featuring a reactive web portal (React + Vite), a companion mobile application (React Native + Expo), and an asynchronous Node.js/Express REST backend. Customers can seamlessly browse restaurants, filter menu items, build carts, and trigger verified checkouts via Razorpay, while restaurant owners manage availability in real time.',
      architectureDescription:
        'The system decouples client presentation from core domain services. Frontend clients communicate via typed HTTP requests with JWT tokens. The Express server enforces role verification and delegates business logic through controller layers down to Prisma ORM, which manages connection pooling and migrations over PostgreSQL.',
      features: [
        'Dynamic Restaurant Catalog: Search, filter by cuisine, rating, and delivery radius.',
        'Interactive Menu Builder: Category organization, addon customizers, vegetarian/non-veg tags, and instant stock toggle.',
        'Transactional Checkout: Server-validated cart calculations preventing client-side price tampering.',
        'Real-time Order Lifecycle: Multi-stage order tracker (Pending -> Accepted -> Preparing -> Out for Delivery -> Delivered).',
        'Role-Based Authorization: Distinct guards for Customers, Restaurant Kitchen Managers, and Super Administrators.',
        'Payment Webhook Verification: Cryptographically signed webhook validation ensuring orders confirm only on verified transactions.',
        'Cross-Platform Mobile Client: React Native app with native performance and persistent offline caching of recent orders.',
      ],
      databaseDesign: {
        description:
          'Normalized relational schema designed in PostgreSQL via Prisma Schema with foreign key integrity, index optimizations on restaurant slugs and customer UUIDs, and audit timestamps.',
        entities: [
          'User (id, email, passwordHash, role: CUSTOMER | RESTAURANT_OWNER | ADMIN, phone, createdAt)',
          'Restaurant (id, ownerId, name, slug, address, rating, isOpen, preparationTime)',
          'Category (id, restaurantId, name, displayOrder)',
          'MenuItem (id, categoryId, name, description, price, isAvailable, imageUrl)',
          'Order (id, customerId, restaurantId, status, totalAmount, paymentStatus, deliveryAddress, createdAt)',
          'OrderItem (id, orderId, menuItemId, quantity, unitPrice)',
          'PaymentTransaction (id, orderId, razorpayOrderId, razorpayPaymentId, signature, status)',
        ],
      },
      apiDesign: {
        description:
          'Stateless RESTful API adhering to standard HTTP methods, JSON payloads, consistent error structures, and rate-limited endpoints.',
        endpoints: [
          { method: 'POST', path: '/api/v1/auth/register', purpose: 'User registration with bcrypt hashing' },
          { method: 'POST', path: '/api/v1/auth/login', purpose: 'Credentials verification and JWT issue' },
          { method: 'GET', path: '/api/v1/restaurants', purpose: 'Public discovery with pagination & search' },
          { method: 'GET', path: '/api/v1/restaurants/:id/menu', purpose: 'Structured menu tree with active items' },
          { method: 'POST', path: '/api/v1/orders', purpose: 'Order creation with server-side price validation' },
          { method: 'POST', path: '/api/v1/payments/verify', purpose: 'HMAC-SHA256 signature verification' },
          { method: 'GET', path: '/api/v1/vendor/orders', purpose: 'Kitchen management order queue' },
          { method: 'PATCH', path: '/api/v1/vendor/orders/:id/status', purpose: 'Transition order pipeline status' },
        ],
      },
      authentication:
        'Authentication utilizes JSON Web Tokens (JWT) signed with HMAC-SHA256. Access tokens are transmitted via Authorization Bearer headers. Middleware decodes tokens, verifies expiration, and injects the authenticated user context into request handlers. Route guards inspect user roles before granting access to vendor or admin management endpoints.',
      paymentWorkflow:
        '1. Client triggers checkout with cart contents. 2. Backend recalculates item prices against current database records to prevent client tampering. 3. Backend calls Razorpay Orders API to initialize an order token. 4. Frontend opens Razorpay Checkout modal with the returned order id. 5. Upon customer payment authorization, Razorpay returns paymentId, orderId, and signature. 6. Server verifies SHA-256 HMAC digest against secret key before transitioning order status to PAID and dispatching notification to kitchen queue.',
      challenges: [
        'Handling concurrent order states during peak periods without race conditions in cart stock checks.',
        'Guaranteeing payment idempotency so network retries do not trigger duplicate orders or duplicate charges.',
        'Structuring shared TypeScript types between React web client and React Native mobile codebase.',
        'Managing cold starts on serverless database connections using Prisma client connection pooling.',
      ],
      whatILearned: [
        'How to design relational schemas that balance strict normalization with high-read query speed.',
        'Defensive backend validation: never trusting client prices, counts, or discount inputs.',
        'Practical implementation of secure payment gateway handshakes and webhook verification.',
        'Building reusable TypeScript contracts across multiple client environments.',
      ],
      futureImprovements: [
        'WebSockets / Server-Sent Events (SSE) for zero-latency kitchen order dispatch.',
        'Redis caching layer for high-throughput restaurant menu queries.',
        'Automated geospatial matching to calculate exact delivery estimates and driver routing.',
      ],
    },
  },
  {
    id: 'derma-ai',
    title: 'Derma.AI',
    category: 'AI / Healthcare',
    categoryLabel: 'AI & Healthcare Exploration',
    tagline: 'Engineering exploration in technology-assisted dermatological triage & tracking',
    description:
      'An AI-oriented healthcare project exploring technology-assisted dermatology and psoriasis-related use cases, focusing on image ingestion, preprocessing pipelines, and structured symptom intake.',
    isFlagship: false,
    githubUrl: 'https://github.com/adity-a-IT/derma-ai',
    caseStudyAvailable: true,
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PyTorch / Computer Vision',
      'Tailwind CSS',
    ],
    highlights: [
      'Engineered for dermatological and psoriasis observation workflows',
      'Client-side image normalization and client-side privacy safeguards',
      'FastAPI inference wrapper architecture for asynchronous image evaluation',
      'Structured symptom questionnaire integration for holistic intake data',
      'Strict adherence to engineering boundaries: strictly non-diagnostic',
    ],
    caseStudy: {
      id: 'derma-ai-case-study',
      title: 'Derma.AI — Engineering Architecture & Exploration',
      category: 'AI / Healthcare Engineering Concept',
      overview:
        'Derma.AI is an experimental software engineering project exploring how computer vision models and structured medical intake forms can assist users in monitoring skin conditions (such as psoriasis flare-ups) over time. This project is built solely as an exploratory engineering showcase and deliberately avoids making autonomous clinical or diagnostic claims.',
      problem:
        'Patients tracking chronic skin conditions like psoriasis often struggle to objectively document progression between clinical visits. Photos taken under inconsistent lighting and lack of structured symptom logging make it difficult for consulting physicians to review chronological history.',
      solution:
        'Constructed a pipeline prototype featuring standardized client-side image cropping and normalization, combined with a FastAPI backend that evaluates texture features and structures user inputs into longitudinal progress logs.',
      architectureDescription:
        'React frontend captures user inputs and camera feeds, performs initial dimension constraints, and transmits data over secure REST endpoints to a FastAPI backend. The backend executes inference routines and stores encrypted metadata.',
      features: [
        'Structured Chronological Logging: Track affected areas with timestamped photos and severity self-assessments.',
        'Client-Side Image Guard: Ensures images meet resolution and framing parameters before uploading.',
        'Asynchronous Processing: Background task queues for heavy image processing routines.',
        'Engineering Boundaries Note: Clear ethical prompts informing users this tool is purely illustrative and never a substitute for certified medical consultation.',
      ],
      databaseDesign: {
        description: 'Relational data model tracking patient timelines with encrypted asset pointers.',
        entities: [
          'User (id, email, consentAcknowledged, createdAt)',
          'SymptomLog (id, userId, reportedSeverity, notes, loggedAt)',
          'MediaRecord (id, symptomLogId, secureStorageUri, lightingScore, bodyLocation)',
        ],
      },
      apiDesign: {
        description: 'FastAPI microservice endpoints prioritizing privacy and validation.',
        endpoints: [
          { method: 'POST', path: '/api/v1/intake', purpose: 'Submit questionnaire with user parameters' },
          { method: 'POST', path: '/api/v1/analyze', purpose: 'Asynchronous computer vision feature extraction' },
          { method: 'GET', path: '/api/v1/timeline', purpose: 'Retrieve historical observations for visualization' },
        ],
      },
      authentication:
        'Bearer token authentication with strict user data isolation so patient timelines are completely partitioned.',
      challenges: [
        'Handling varied image lighting and angles without giving misleading visual outputs.',
        'Ensuring ethical UX communication that clearly states software is not diagnostic.',
        'Optimizing deep learning inference memory consumption for lightweight cloud deployment.',
      ],
      whatILearned: [
        'Integrating machine learning models into robust, responsive REST APIs.',
        'The critical importance of disclaimers and responsible AI engineering in health-tech domains.',
        'Managing asynchronous task workers for compute-intensive tasks.',
      ],
      futureImprovements: [
        'Integration with DICOM medical image standards.',
        'Federated learning concepts to keep patient images entirely on personal devices.',
      ],
    },
  },
  {
    id: 'ultimate-e-solution',
    title: 'Ultimate E Solution',
    category: 'Enterprise',
    categoryLabel: 'Enterprise & Business Web Platform',
    tagline: 'High-conversion business platform with modern responsive architecture',
    description:
      'A professional enterprise web platform built for high-performance service presentation, corporate client inquiry pipelines, and responsive cross-device usability.',
    isFlagship: false,
    liveUrl: 'https://ultimateesolution.vercel.app/',
    githubUrl: 'https://github.com/adity-a-IT/ultimate-e-solution',
    caseStudyAvailable: true,
    technologies: ['React', 'JavaScript', 'CSS3', 'Vite', 'Responsive Design'],
    highlights: [
      'Live deployed production web presence',
      'Mobile-first responsive layout with sub-second initial load',
      'Structured corporate service catalog and interactive quote request UI',
      'Clean component modularity and accessible UI landmarks',
      'Optimized asset delivery and clean typography',
    ],
    caseStudy: {
      id: 'ultimate-e-solution-case-study',
      title: 'Ultimate E Solution — Enterprise Business Platform Architecture',
      category: 'Enterprise Production Web Case Study',
      liveUrl: 'https://ultimateesolution.vercel.app/',
      githubUrl: 'https://github.com/adity-a-IT/ultimate-e-solution',
      overview:
        'Ultimate E Solution is a clean, production-oriented business web platform developed to communicate complex B2B services, establish brand authority, and capture qualified business inquiries through a friction-free responsive experience.',
      problem:
        'Business clients looking for technical enterprise services bounce quickly if websites have confusing navigation, slow mobile render speeds, or convoluted contact processes.',
      solution:
        'Engineered an ultra-fast, responsive web interface emphasizing content clarity, structured service breakdowns, and accessible conversion touchpoints optimized for corporate stakeholders.',
      architectureDescription:
        'Static single-page application built on Vite with modular component hierarchies, CSS layout grids, and optimized client bundle splitting for fast loading on all networks.',
      features: [
        'Interactive Service Showcase: Clear breakdown of offerings with expand/collapse specifications.',
        'Client Inquiry Flow: Step-by-step business intake form with validation.',
        'High-Performance Assets: Modern WebP image optimization and font-display swap strategies.',
        'Enterprise Visual Hierarchy: Polished aesthetic tailored for corporate decision-makers.',
      ],
      databaseDesign: {
        description: 'Lead generation and inquiry dispatch model.',
        entities: [
          'Inquiry (id, companyName, contactEmail, serviceType, message, submittedAt, status)',
        ],
      },
      apiDesign: {
        description: 'Stateless webhook & inquiry handling.',
        endpoints: [
          { method: 'POST', path: '/api/inquiries', purpose: 'Capture verified customer inquiry' },
        ],
      },
      authentication: 'Protected admin review endpoints with token-based access.',
      challenges: [
        'Achieving high lighthouse scores across both mobile and low-bandwidth connections.',
        'Crafting a modern corporate look that feels credible without visual fluff.',
      ],
      whatILearned: [
        'User psychology in B2B landing pages and conversion-focused layouts.',
        'CSS grid techniques for complex responsive corporate tables.',
      ],
      futureImprovements: [
        'Automated CRM integration (e.g., HubSpot / Salesforce webhook hooks).',
        'Multi-language localization (i18n).',
      ],
    },
  },
  {
    id: 'prasoft-technology',
    title: 'Pra-Soft Technology',
    category: 'Enterprise',
    categoryLabel: 'Professional Brand & Multi-Sector Solutions',
    tagline: 'Multi-sector technology solutions across food, enterprise & AI',
    description:
      'Brand and product development initiative showcasing technical capabilities spanning food & restaurant tech, enterprise business portals, and intelligent healthcare prototypes.',
    isSecondary: true,
    liveUrl: 'https://prasofttech.in/',
    technologies: ['Web Architecture', 'Product Development', 'Full-Stack', 'APIs'],
    highlights: [
      'Multi-domain engineering presence across Food, Enterprise & Healthcare',
      'Demonstrates product development lifecycle execution',
      'Real deployed web destination: prasofttech.in',
    ],
    brandContext:
      'Serves as professional development umbrella and portfolio company showcase.',
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'Backend',
    categoryLabel: 'Academic Operations Platform',
    tagline: 'Role-based student record, course allocation & grading backend',
    description:
      'A structured relational management backend designed for academic institutions to administer student records, faculty workloads, enrollment constraints, and transcript generation.',
    isSecondary: true,
    githubUrl: 'https://github.com/adity-a-IT/student-management-system',
    technologies: ['Java', 'SQL', 'PostgreSQL', 'REST API', 'OOP Architecture'],
    highlights: [
      'Strict relational database schema with ACID transaction guarantees',
      'Role-based access for Faculty, Students, and Administrators',
      'Automated prerequisite validation and semester credit cap enforcement',
      'Clean OOP design patterns: Repository, Service, and Controller separation',
    ],
  },
  {
    id: 'lost-and-found',
    title: 'Campus Lost & Found Portal',
    category: 'Full-Stack',
    categoryLabel: 'Campus Utility Application',
    tagline: 'Item reporting, claim verification & custody tracking',
    description:
      'A community utility platform enabling students and campus security to report, match, and safely claim misplaced personal belongings across campus facilities.',
    isSecondary: true,
    githubUrl: 'https://github.com/adity-a-IT/campus-lost-and-found',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: [
      'Categorized listing with image uploads and location tags',
      'Confidential claim submission with security verification questions',
      'Status tracking from Reported -> Claimed -> Returned',
    ],
  },
  {
    id: 'campus-chatbot',
    title: 'Campus Assistant Chatbot',
    category: 'AI / Healthcare',
    categoryLabel: 'Conversational Knowledge Assistant',
    tagline: 'Rule-assisted and intent-based student FAQ bot',
    description:
      'An automated conversational assistant designed to quickly resolve frequent student inquiries regarding academic calendars, exam schedules, and department contact info.',
    isSecondary: true,
    githubUrl: 'https://github.com/adity-a-IT/campus-faq-chatbot',
    technologies: ['JavaScript', 'Node.js', 'NLP / Intent Matching', 'Tailwind CSS'],
    highlights: [
      'Fast keyword & intent matching algorithm for high precision answers',
      'Interactive quick-reply suggestions for common queries',
      'Fallback escalation to human department coordinators',
    ],
  },
];
