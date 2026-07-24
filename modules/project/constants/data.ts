export type ProjectType = "company" | "personal" | "demo" | "shopify" | "freelancer";

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
   freelancer: "Freelancer",
};
export const HIGHLIGHT_TERMS = [
   "Shopify Admin API",
   "Google Sheets API",
   "Firebase Cloud Messaging",
   "Notification API",
   "TanStack Query",
   "Next.js Image",
   "Google Analytics",
   "Shopify apps",
   "XML sitemaps",
   "Service Workers",
   "Context API",
   "GraphQL API",
   "Shopify CMS",
   "robots.txt",
   "OpenAI API",
   "SignalR",
   "WooCommerce",
   "Zustand",
   "Swagger",
   "SSR/SSG",
   "dnd-kit",
   "Tiptap",
   "Excel",
   "WebP",
   "SEO",
   "Shopify",
   "Tailwind CSS",
   "shadcn/ui",
   "Liquid",
   "Motion",
   "Swiper",
].sort((a, b) => b.length - a.length);
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
         "Motion",
         "Swiper",
         "SEO",
      ],
      highlights: [
         "Built headless storefronts using Next.js integrated with Shopify backend via GraphQL API for real-time inventory sync.",
         "Implemented Shopify Admin API integration for automated product imports and multi-channel updates.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Developed and customized Shopify themes (Liquid, HTML, CSS, JS) to match client branding and requirements.",
         "Used Motion for smooth page/section transitions and Swiper for product image and testimonial carousels.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
         "Created custom Shopify apps to extend storefront functionality beyond standard theme capabilities.",
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
         "Motion",
         "Swiper",
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
      githubUrl: "https://github.com/tranthanhhung0706/modular_house",
   },
   {
      slug: "website-e-commerce-shopify",
      title: "Website E-commerce Shopify",
      type: ["demo", "shopify"],
      duration: "2025",
      description:
         "Developed a full-featured Shopify e-commerce storefront integrated via GraphQL API, enabling customer authentication, order tracking, and secure online checkout and payment.",
      stack: [
         "Next.js",
         "Shopify GraphQL API",
         "Tailwind CSS",
         "shadcn/ui",
         "SEO",
         "Motion",
         "Swiper",
      ],
      highlights: [
         "Built a headless storefront using Next.js integrated with Shopify backend via GraphQL API for real-time product and inventory sync.",
         "Implemented Shopify Admin API integration for automated product imports and multi-channel updates.",
         "Integrated secure online payment and checkout flow, allowing customers to complete purchases directly on the storefront.",
         "Implemented customer login/authentication with order history and real-time order tracking.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
      ],
      demoUrl: "https://clientecommerce-pied.vercel.app/",
      githubUrl: "https://github.com/TogetherWeBuildWebsite/website_e_commerce",
   },
   {
      slug: "restaurant-online-ordering-website",
      title: "Restaurant Online Ordering Website",
      type: ["freelancer", "shopify"],
      duration: "2025",
      description:
         "Developed a restaurant ordering website built on Next.js integrated with Shopify via GraphQL API, allowing customers to order food by selecting location, delivery time, and product add-ons, with member login, order history, and discount code registration for new members.",
      stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Shopify GraphQL API"],
      highlights: [
         "Built a headless ordering website using Next.js integrated with Shopify backend via GraphQL API.",
         "Implemented location-based and delivery time selection at checkout, along with customizable product add-ons.",
         "Implemented customer login/authentication with order history and real-time order tracking.",
         "Built new member registration flow with automated discount code generation for first-time customers.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
      ],
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
      slug: "mualobster-seafood-store",
      title: "MuaLobster Seafood Store",
      type: ["freelancer", "shopify"],
      duration: "2025",
      description:
         "Customized and operated a live Shopify seafood e-commerce store, combining theme development with custom and third-party apps to manage promotions, shipping, and order fulfillment.",
      stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Shopify apps"],
      highlights: [
         "Customized the Shopify theme (Liquid, HTML, CSS, JS) to match branding and business requirements.",
         "Built a custom Shopify app to extend storefront functionality beyond standard theme capabilities.",
         "Integrated third-party Shopify apps to manage store operations and streamline day-to-day workflows.",
         "Implemented promotional popups to boost conversions and highlight offers.",
         "Configured dynamic shipping fee rules based on delivery location and order conditions.",
         "Added order tracking with tracking numbers and delivery scheduling for customers.",
      ],
      demoUrl: "https://www.mualobster.com/",
   },
];

export const getProjectBySlug = (slug: string) =>
   PROJECTS.find((project) => project.slug === slug);
