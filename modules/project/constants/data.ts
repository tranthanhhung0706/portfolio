export type ProjectType = "company" | "personal" | "demo" | "shopify";

export type ProjectItem = {
   slug: string;
   title: string;
   type: ProjectType[];
   company?: string;
   duration: string;
   description: string;
   stack: string[];
   highlights: string[];
   demoUrl?: string;
   githubUrl?: string;
};

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
   company: "Company",
   personal: "Personal",
   demo: "Demo",
   shopify: "Shopify",
};

export const PROJECTS: ProjectItem[] = [
   {
      slug: "headless-ecommerce-platform",
      title: "Headless E-Commerce Platform",
      type: ["company", "shopify"],
      company: "Beetech Solutions Technology Co., Ltd",
      duration: "9/2024 - Present",
      description:
         "Developed modern headless e-commerce platforms for Shopify and WooCommerce with a custom Next.js frontend, integrating GraphQL-based product sync, automated inventory management, SSR/SSG rendering, and full SEO optimization for improved search visibility.",
      stack: [
         "Next.js",
         "Shopify GraphQL API",
         "Shopify Admin API",
         "Tailwind CSS",
         "shadcn/ui",
         "TanStack Query",
         "Axios",
         "SEO",
      ],
      highlights: [
         "Built headless storefronts using Next.js integrated with Shopify backend via GraphQL API for real-time inventory sync.",
         "Implemented Shopify Admin API integration for automated product imports and multi-channel updates.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
      ],
   },
   {
      slug: "modular-house-landing-page",
      title: "Modular House Landing Page",
      type: ["demo", "shopify"],
      duration: "2025",
      description:
         "Developed a landing page for a modular house business integrated with Shopify CMS, enabling blog management, product information management, brochure download management, and a contact form with automated email delivery.",
      stack: [
         "Next.js",
         "Shopify GraphQL API",
         "Tailwind CSS",
         "shadcn/ui",
         "SEO",
      ],
      highlights: [
         "Built a headless landing page using Next.js integrated with Shopify backend via GraphQL API for real-time inventory sync.",
         "Implemented Shopify Admin API integration for automated product imports and multi-channel updates.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
         "Combined Shopify CMS to manage blog posts, product information, and brochure downloads, along with automated email delivery for contact form submissions.",
      ],
      demoUrl: "https://modular-teamplate-beetech.vercel.app",
   },
   {
      slug: "visa-document-management-system",
      title: "Visa Document Management System",
      type: ["company"],
      company: "Beetech Solutions Technology Co., Ltd",
      duration: "9/2024 - Present",
      description:
         "Built a comprehensive internal system for managing documents, user accounts, permissions, and notifications, with real-time messaging via SignalR and push notifications through Firebase, backed by Swagger-documented REST APIs.",
      stack: [
         "Angular",
         "PrimeNG",
         "Tailwind CSS",
         "Swagger API",
         "SignalR",
         "Firebase Cloud Messaging",
      ],
      highlights: [
         "Designed responsive UI for homepage, document list, user management, and comment modules.",
         "Integrated backend REST APIs (documented with Swagger) for full CRUD on documents, users, and comments.",
         "Implemented real-time messaging via SignalR, tracking online/offline status across connected clients.",
         "Configured Firebase Cloud Messaging with Service Workers for foreground/background push notifications.",
         "Implemented custom browser notifications using the Notification API with custom styling and actions.",
      ],
   },
   {
      slug: "crm-system",
      title: "Customer Relationship Management (CRM) System",
      type: ["company"],
      company: "Beetech Solutions Technology Co., Ltd",
      duration: "9/2024 - Present",
      description:
         "Developed a full CRM covering leads, customers, orders, tickets, tasks, and reports with multi-channel integration, rich-text email templates, and global state management via Zustand and Context API.",
      stack: [
         "Next.js",
         "Tailwind CSS",
         "shadcn/ui",
         "Zustand",
         "React Context API",
         "TanStack Query",
         "Axios",
         "Firebase Cloud Messaging",
         "Swagger API",
      ],
      highlights: [
         "Designed responsive and intuitive UI/UX for core modules (Lead, Pipeline, Customer, Order, Task, Ticket, Mail Template) using Tailwind CSS and shadcn/ui for consistent design across the platform.",
         "Integrated backend REST APIs (documented with Swagger) for comprehensive CRUD operations on all CRM modules including lead management, customer data, order processing, and ticket handling.",
         "Created custom React hooks for API data fetching and state management, abstracting complex logic and promoting code reusability.",
         "Implemented TanStack Query with Axios for efficient API data fetching, caching, and synchronization to minimize server requests and improve performance.",
         "Established global state management using Zustand for managing user authentication, application settings, and shared data across components.",
         "Implemented Context API for managing multi-language support and application configuration settings throughout the system.",
         "Developed reusable utility functions for common operations (data formatting, validation, date handling) to reduce code duplication and improve maintainability.",
         "Built modular and reusable components for frequently used elements (forms, tables, modals, buttons) to ensure consistency and streamline development.",
         "Implemented email template management with rich text editing capabilities (Tiptap) and integrated mail sending functionality for automated customer communications.",
         "Created dynamic sales pipeline management with configurable dynamic fields, allowing users to customize field structures for different stages and adapt to varying business requirements.",
      ],
   },
   {
      slug: "recruitment-resume-management-system",
      title: "Recruitment & Resume Management System",
      type: ["company"],
      company: "Beetech Solutions Technology Co., Ltd",
      duration: "9/2024 - Present",
      description:
         "Built a recruitment platform for managing job postings, candidates, and workflows with AI-powered resume analysis, drag-and-drop dynamic form templates, and automated email communication.",
      stack: [
         "Next.js",
         "Tailwind CSS",
         "shadcn/ui",
         "Zustand",
         "TanStack Query",
         "dnd-kit",
         "Tiptap",
         "OpenAI API",
         "Google Sheets API",
      ],
      highlights: [
         "Designed responsive UI/UX for Job Management, Candidate Management, and Resume Management modules.",
         "Created dynamic recruitment form templates configurable per hiring company.",
         "Implemented drag-and-drop form building using dnd-kit for non-technical users.",
         "Integrated TanStack Query with Axios for efficient data fetching and real-time sync.",
         "Built data export functionality to Excel for candidate and recruitment metrics.",
      ],
   },
   {
      slug: "personal-project-placeholder",
      title: "TODO: Personal Project Name",
      type: ["personal"],
      duration: "MM/YYYY - MM/YYYY",
      description: "TODO: short description of what this personal project does and why you built it.",
      stack: ["TODO"],
      highlights: ["TODO: key thing you built or learned"],
      // demoUrl: "https://...",
      // githubUrl: "https://github.com/...",
   },
];

export const getProjectBySlug = (slug: string) =>
   PROJECTS.find((project) => project.slug === slug);
