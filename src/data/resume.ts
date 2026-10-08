export const profile = {
  fname: 'Sandesh', 
  mname: 'Ram',
  lname: 'Kedari',
  role: 'Frontend Software Engineer',
  tagline:
    'Frontend engineer with 3+ years building React and Angular systems — from school ERPs to payroll consoles to e-commerce catalogs.',
  email: 'sandeshkedari05@gmail.com',
  phone: '8600759571',
  location: 'Pune, India',
};

export const stats = [
  { label: 'YEARS EXPERIENCE', value: '3' },
  { label: 'SHIPPED PROJECTS', value: '4' },
  { label: 'CORE STACK', value: 'React ' },
  { label: 'STATUS', value: 'OPEN TO WORK' },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  status: 'ACTIVE' | 'COMPLETE';
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'BTR Techchnologies',
    role: 'React Developer',
    period: 'Jun 2024 — Present',
    location: 'Pune',
    status: 'ACTIVE',
    points: [
      'Built responsive interfaces with React, managing state and server data through Tanstack Query and routing through Tanstack Router.',
      'Partnered with the team on client requirements, testing, debugging, and Git-based workflows tracked in Jira.',
      'Integrated Firebase for backend services, real-time data, authentication, and deployment support.',
      'Delivered a School Portal Management System centralizing academic and administrative operations for admins, teachers, students, and parents.',
    ],
  },
  {
    company: 'BTR Technologies',
    role: 'Intern',
    period: 'Oct 2023 — May 2024',
    location: 'Pune',
    status: 'COMPLETE',
    points: [
      'Ramped up on production React workflows ahead of converting to a full-time developer role.',
    ],
  },
  {
    company: 'Magic Software Enterprises',
    role: 'Intern',
    period: 'Dec 2022 — Sept 2023',
    location: 'Pune',
    status: 'COMPLETE',
    points: [
      'Worked on UI/UX design coordinated closely with the Magic XPA product team.',
      'Optimized interfaces across device sizes and screen resolutions, applying Magic xpa platform constraints to cohesive layouts.',
    ],
  },
];

export interface ProjectItem {
  name: string;
  stack: string;
  status: 'LIVE' | 'SHIPPED' | 'ARCHIVED';
  summary: string;
  points: string[];
}

export const projects: ProjectItem[] = [
  {
    name: 'School Portal',
    stack: 'React',
    status: 'LIVE',
    summary: 'Centralized management system for day-to-day school operations.',
    points: [
      'Built a centralized platform for schools to manage academic and administrative activities across administrator, teacher, student, and parent roles.',
      'Digitized day-to-day school operations, replacing manual processes with streamlined, role-based workflows.',
      'Designed and developed separate dashboards tailored to Admin, Teacher, and Parent functionalities.',
      'Enabled student admission, class management, subject allocation, and academic year configuration for administrators',
      'Improved operational efficiency by digitizing school administrative and academic workflows.'
    ],
  },
  {
    name: 'Mercaflux',
    stack: 'React',
    status: 'SHIPPED',
    summary: 'Web application for food services and account management.',
    points: [
      'Automated daily record keeping and payroll disbursement tracking.',
      'Managed employee schedules, leave records, and secure personal data storage.',
    ],
  },
  {
    name: 'Plant Nursery',
    stack: 'React',
    status: 'SHIPPED',
    summary: 'Marketplace connecting plant buyers with nursery owners.',
    points: [
      'Customers browse, select, and order plants; owners manage inventory and orders.',
      'Built for both small nurseries and large tree farms, encouraging sustainable gardening.',
    ],
  },
  {
    name: 'Report Admin Application',
    stack: 'Angular',
    status: 'SHIPPED',
    summary: 'Workspace management tool for streamlining administrative processes.',
    points: [
      'Automated recurring tasks to cut operational overhead.',
      'Integrated tools improved collaboration and resource management across teams.',
    ],
  },
];

export const skills = {
  Programming: ['JavaScript', 'TypeScript', 'SQL', 'Python','CSS', 'HTML'],
  'Libraries & Frameworks': ['React', 'Angular', 'Redux', 'Node.js', 'FastAPI', 'Express.js', 'Bootstrap', 'Next.js', 'Ant Design'],
  'Tools & Platforms': ['VS Code', 'Antigravity', 'Git', 'Postman', 'Jira', 'MySQL', 'MongoDB', 'Firebase'],
};

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  percentage: string;
}

export const education: EducationItem[] = [
  {
    school: 'Pratibha Institute of Business Management, Chinchwad',
    degree: "Master's in Computer Applications",
    period: '2021 — 2023',
    location: 'Pune',
    percentage: '75%',
  },
  {
    school: "VPS's College of Arts, Science and Commerce, Lonavala",
    degree: "Bachelor's in Computer Applications",
    period: '2015 — 2018',
    location: 'Pune',
    percentage: '58%',
  },
];
