// Site content, from public/Kanyisola_Fagbayi_CV.pdf

import sentinnelImage from './assets/projects/sentinnel.svg'
import sabilensImage from './assets/projects/sabilens.svg'
import taxpyreImage from './assets/projects/taxpyre.svg'
import mamadeyImage from './assets/projects/mamadey.svg'
import kollectorsImage from './assets/projects/kollectors.svg'
import agroussdImage from './assets/projects/agroussd.svg'

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const about = {
  name: 'Kanyisola Fagbayi',
  role: 'AI & Machine Learning Engineer, Data Scientist',
  bio: [
    'I build RAG systems, multi-agent applications and machine learning models, with seven years of experience in the Ogun State Government.',
    'I work with Python, FastAPI, LangGraph, PostgreSQL and Docker. I am also co-founder and lead engineer of Kollectors, a levy and dues collection platform.',
  ],
  story: [
    'I build machine learning models, AI applications and data platforms, from a maternal health risk model to retrieval-based assistants, fraud and complaint routing systems, and payment infrastructure.',
    'For seven years I have worked inside the Ogun State Government, designing monitoring for social programmes and turning programme data into decisions for senior officials.',
    'I studied Mechanical Engineering at the University of Lagos, then completed my MSc Data Science dissertation at the University of East London and joined the first cohort of the Bosun Tijani Foundation AI Engineering Fellowship with the Nigerian Communications Commission.',
    'For my MSc dissertation, MamaDey AI, I engaged with the Ogun State Ministry of Health on why maternal deaths remain high despite free antenatal care.',
    'My work sits where data, AI and public service meet: using evidence and technology to help programmes reach the people they are meant for.',
  ],
  facts: [
    { label: 'Based in', value: 'Abeokuta, Ogun State, Nigeria' },
    { label: 'Working on', value: 'AI engineering, data science and public sector digital transformation' },
    { label: 'Languages', value: 'English and Yoruba' },
  ],
  // Served from public/; replace that file to update the CV
  resume: '/Kanyisola_Fagbayi_CV.pdf',
  social: {
    github: 'https://github.com/Cunyie08',
    linkedin: 'https://www.linkedin.com/in/kanyisola-fagbayi',
  },
}

const skills = [
  {
    title: 'AI engineering',
    items: ['RAG', 'LangGraph', 'OpenAI API', 'Gemini API', 'Prompt Engineering', 'LLM Evaluation', 'ResNet50', 'PaddleOCR'],
  },
  {
    title: 'Data science and machine learning',
    items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'R', 'SQL', 'Random Forest', 'XGBoost', 'Logistic Regression', 'Feature Engineering', 'Cross-validation', 'SMOTE', 'Calibration', 'SHAP'],
  },
  {
    title: 'Engineering and deployment',
    items: ['FastAPI', 'REST APIs', 'Webhooks', 'PostgreSQL', 'Docker', 'Google Cloud', 'Git / GitHub', 'Automated Testing', 'Next.js'],
  },
  {
    title: 'Monitoring, evaluation and learning',
    items: ['Indicator Frameworks', 'Monitoring Plans', 'Beneficiary Tracking', 'Disaggregated Reporting', 'Data Quality Checks', 'Power BI', 'Donor Reporting'],
  },
  {
    title: 'Public sector delivery',
    items: ['Evidence Packs', 'Executive Briefings', 'Multi-agency Coordination', 'Training Field Teams', 'Programme Oversight'],
  },
]

const projects = [
  {
    name: 'SENTINNEL Banking',
    label: 'Capstone, nine-person team',
    overview: 'Multi-agent complaint and fraud intelligence for banking.',
    problem: 'Customer complaints need routing, potential fraud needs flagging, and each decision needs to stand on bank policy.',
    contribution: 'Architect and orchestrator of the system.',
    features: [
      'LangGraph system that routes customer complaints',
      'Random Forest classifier, trained on synthetic Nigerian banking data, flags potential fraud',
      'Decisions grounded in bank policy through retrieval',
      'PostgreSQL audit trail and an evaluation harness with an LLM judge',
    ],
    stack: ['LangGraph', 'Random Forest', 'RAG', 'PostgreSQL'],
    image: sentinnelImage,
  },
  {
    name: 'SabiLens',
    label: 'Team capstone',
    overview: 'Counterfeit product detection for regulators, deployed on Google Cloud.',
    problem: 'Regulators such as NAFDAC need to identify counterfeit products and hold evidence they can rely on.',
    contribution: 'Member of the capstone team.',
    features: [
      'Decision engine combining ResNet50 image analysis, PaddleOCR label reading and regulatory database checks',
      'FastAPI backend with 94 automated tests',
      'Tamper-evident evidence packages for regulators',
    ],
    stack: ['ResNet50', 'PaddleOCR', 'FastAPI', 'Google Cloud'],
    image: sabilensImage,
    live: 'https://sabi-lens.vercel.app/',
    repo: 'https://github.com/Cunyie08/genai_sabilens_national_product_integrity',
  },
  {
    name: 'TaxPyre Nigeria',
    label: 'Team project',
    overview: 'A plain-language tax law assistant.',
    problem: 'Nigerian tax reform legislation runs to more than 500 pages, which is hard to search for a plain answer.',
    contribution: 'Member of the project team.',
    features: [
      'Agentic RAG system with conditional retrieval',
      'Multi-turn memory',
      'Mandatory citations to document, section and page',
    ],
    stack: ['RAG', 'Python'],
    image: taxpyreImage,
  },
  {
    name: 'MamaDey AI',
    label: 'MSc dissertation',
    overview: 'Early maternal risk prediction.',
    problem: 'Maternal deaths remain high despite free antenatal care, BHCPF and MAMII. Interventions are largely facility-based, many women leave care early, and paper records leave home births out of the data.',
    contribution: 'My dissertation: engaged with the Ogun State Ministry of Health, then built and evaluated the models.',
    features: [
      'Compared Logistic Regression, Random Forest and XGBoost on Nigeria DHS 2018 data for 2,563 women (AUC-ROC 0.81 to 0.86)',
      'Recommended the model that identified the most high-risk women, with SHAP to explain the main risk drivers',
      'Proof-of-concept framework linking community health worker data to alerts and to facility and ministry dashboards connected to DHIS2',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP'],
    image: mamadeyImage,
    repo: 'https://github.com/Cunyie08/mamadey_ai',
  },
  {
    name: 'Kollectors',
    label: 'Co-founder and lead engineer',
    overview: 'A levy and dues collection platform for residential estates and cooperative societies, in pre-launch testing.',
    problem: 'Estates and cooperatives need to collect payments and reconcile them to the right household.',
    contribution: 'Co-founded the platform and lead its engineering.',
    features: [
      'Each household gets a dedicated virtual account, for automatic reconciliation',
      'Payments confirmed only after a signed webhook and server-side verification',
      'Treasurer dashboard, transparency reports and WhatsApp payment reminders',
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Supabase', 'Nomba APIs'],
    image: kollectorsImage,
  },
  {
    name: 'AgroUSSD',
    label: 'AI Engineering Fellowship prototype',
    overview: 'Connecting farmers directly to buyers.',
    problem: 'Farmers on basic phones need a way to reach market prices and buyers.',
    contribution: 'Built during the AI Engineering Fellowship.',
    features: [
      'Python prototype simulating a USSD service for basic phones',
      'Farmers register, record harvests, compare market prices and connect directly with buyers',
      'Designed for local-language support and a live short code',
    ],
    stack: ['Python', 'USSD'],
    image: agroussdImage,
  },
]

const experience = [
  {
    when: 'Oct 2019 – Present',
    title: 'Special Assistant to the Governor',
    org: 'Office of the Deputy Governor, Ogun State Government, Abeokuta',
    points: [
      "Designed and run monitoring and evaluation for the Oko'wo Dapo interest-free loan scheme for women: indicators for eligibility, disbursement, follow-up and outcomes, beneficiary records, and disaggregated reports across local government areas.",
      'Supported the Deputy Governor as Chair of the Nigeria for Women Project State Steering Committee (World Bank-assisted): prepared meeting briefs, tracked action points and reviewed progress reports from the implementation unit.',
      'Led production and distribution for a five-month COVID-19 food relief programme (2020) and relief during the fuel subsidy removal, managing logistics and relief budgets, with impact monitoring and beneficiary feedback reported to government and NGO partners; coordinated information flow for the State COVID-19 Task Force.',
      'Produce dashboards, evidence packs and briefings that turn programme data into decisions for senior officials, including briefing notes for national meetings such as the National Economic Council.',
      'Supported a state-wide review of the roles of government agencies, compiling submissions and identifying overlapping mandates.',
      'Introduced data and digital tools in the office to strengthen programme oversight and reporting; train and coordinate field teams for data collection.',
    ],
  },
  {
    when: 'Jul 2026 – Present',
    title: 'Co-founder & Lead Engineer',
    org: 'Kollectors (levy and dues collection platform, in pre-launch testing)',
    points: [
      'Co-founded and lead engineering of a payments platform for residential estates and cooperative societies, built with FastAPI, Next.js and PostgreSQL (Supabase) on Nomba payment APIs.',
      'Designed automatic reconciliation: each household gets a dedicated virtual account, and payments are confirmed only after a signed webhook and server-side verification.',
      'Ran end-to-end testing and fixed data-integrity defects so removed members drop out of billing, reminders and reports; built a treasurer dashboard, transparency reports and WhatsApp payment reminders.',
    ],
    tools: ['FastAPI', 'Next.js', 'PostgreSQL', 'Supabase'],
  },
  {
    when: '2016 – 2019',
    title: 'Technical Assistant to the MD/CEO',
    org: 'Glenwood Property Development Co. Ltd., Lagos',
    points: [
      'Ran feasibility studies, competitor analysis and financial assessments for real estate investments; validated payment requests against Bills of Quantities; liaised with government officials and regulators.',
    ],
  },
  {
    when: '2015 – 2016',
    title: 'Polio Vaccination Monitor',
    org: 'Hanwa, Zaria, Kaduna State (with the Kaduna State Government, Gates Foundation and UNICEF)',
    points: [
      'Monitored house-to-house oral polio vaccination rounds, collected field data, verified coverage and reported programme reach.',
    ],
  },
]

const education = [
  { when: '2025 – 2026', title: 'AI Engineering Fellowship', org: 'Bosun Tijani Foundation and Nigerian Communications Commission (first cohort)' },
  { when: '2024 – 2026', title: 'MSc Data Science', org: 'University of East London (dissertation completed; award pending conferment)' },
  { when: '2008 – 2014', title: 'BSc Mechanical Engineering', org: 'University of Lagos' },
]

const focus = [
  { title: 'RAG and agentic systems', text: 'Retrieval pipelines and LangGraph multi-agent systems with citations, evaluation and audit trails.' },
  { title: 'Machine learning models', text: 'Classification and regression models, with calibration and SHAP explanations.' },
  { title: 'APIs and data platforms', text: 'FastAPI services, PostgreSQL, webhooks and automated tests, deployed with Docker on Google Cloud.' },
  { title: 'Monitoring and evaluation', text: 'Indicator frameworks, beneficiary tracking, dashboards and evidence packs for social programmes.' },
]

const highlights = [
  { title: 'Seven years in government', text: 'Designing monitoring and evidence for senior officials in the Ogun State Government.' },
  { title: 'AUC-ROC 0.81 to 0.86', text: 'Maternal risk models on Nigeria DHS 2018 data for 2,563 women.' },
  { title: '94 automated tests', text: 'Behind the SabiLens FastAPI backend, deployed on Google Cloud.' },
  { title: 'First cohort', text: 'Bosun Tijani Foundation AI Engineering Fellowship with the Nigerian Communications Commission.' },
  { title: 'Nine-person capstone', text: 'Architect and orchestrator of SENTINNEL Banking.' },
  { title: 'World Bank-assisted', text: 'Supported the Chair of the Nigeria for Women Project State Steering Committee.' },
]

const contact = {
  email: 'kanyinsola.fagbayi@gmail.com',
}

export { about, nav, skills, projects, experience, education, focus, highlights, contact }
