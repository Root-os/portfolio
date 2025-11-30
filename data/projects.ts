import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Healthcare Service Platform",
    description: "A comprehensive healthcare management solution for hospitals and clinics with online appointment scheduling and patient management.",
    details: [
      "Integrated electronic health records (EHRs) for secure patient data management",
      "Implemented online appointment scheduling with automated reminders and notifications",
      "Automated billing and insurance claims processing with support for multiple payment gateways",
      "Real-time patient engagement platform with secure messaging and video consultations",
      "Integrated laboratory and radiology ordering with automated results delivery",
      "Secure document sharing for medical records and test results with email notifications"
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "WebSockets", "Stripe API"],
    // demoUrl: "#",
    // codeUrl: "#",
    gradientFrom: "from-teal-500",
    gradientTo: "to-emerald-600"
  },
  {
    id: 2,
    title: "Inventory & Booking Management System",
    description: "A comprehensive property management solution for various building types with direct online booking capabilities.",
    details: [
      "Integrated multiple payment gateways (Stripe, PayPal, and local bank transfers) for seamless transactions",
      "Implemented wallet system allowing users to store funds and make instant payments",
      "Automated email notifications using Nodemailer for booking confirmations, reminders, and receipts",
      "SMS notifications via Twilio for important alerts and OTP verifications",
      "Real-time booking updates using WebSockets to prevent double bookings",
      "Secure payment processing with PCI-DSS compliance and 3D Secure authentication"
    ],
    tags: ["Node.js", "Express", "MySQL", "React", "Redux", "JWT", "Redis"],
    // demoUrl: "#",
    // codeUrl: "#",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600"
  },
  {
    id: 3,
    title: "E-Learning Platform - Admin Dashboard",
    description: "Feature-rich admin panel for managing courses, users, and content in an e-learning system.",
    details: [
      "Implemented subscription management with automated billing cycles and email notifications",
      "Integrated payment processing for course purchases and subscription renewals",
      "Automated email campaigns using SendGrid for user onboarding and course updates",
      "SMS notifications for important account activities and payment receipts",
      "Real-time progress tracking and certificate generation upon course completion",
      "Secure file storage for course materials with AWS S3 integration"
    ],
    tags: ["React", "Tailwind CSS", "Chart.js", "WebSockets", "React Query"],
    // demoUrl: "#",
    // codeUrl: "#",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600"
  },
  {
    id: 4,
    title: "Retail Management System",
    description: "Comprehensive POS and inventory solution for fruit shops with multi-location sales tracking.",
    details: [
      "Integrated mobile money and card payment processing for seamless transactions",
      "Automated SMS notifications for order confirmations and delivery updates",
      "Email receipts and invoices with branded templates using Handlebars",
      "Real-time inventory tracking across multiple locations with automated reordering",
      "Bulk SMS integration for marketing campaigns and promotions",
      "Custom reporting with data export to Excel/PDF for business analysis"
    ],
    tags: ["Node.js", "Express", "MySQL", "React", "Tailwind CSS", "REST API"],
    // demoUrl: "#",
    // codeUrl: "#",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600"
  },
  {
    id: 5,
    title: "Wholesale E-commerce Platform",
    description: "B2B e-commerce solution enabling wholesalers to manage inventory and process orders online.",
    details: [
      "Integrated multiple payment options including bank transfers, mobile money, and card payments",
      "Automated email and SMS notifications for order confirmations and status updates",
      "Bulk ordering system with custom pricing based on customer tier and order volume",
      "Automated invoice generation with support for partial payments and credit terms",
      "Real-time inventory management with low-stock alerts via email/SMS",
      "Multi-warehouse inventory synchronization with conflict resolution",
      "Secure document sharing for purchase orders and invoices with email notifications"
    ],
    tags: ["Next.js", "Node.js", "Express", "MySQL", "Elasticsearch", "Stripe API"],
    // demoUrl: "#",
    // codeUrl: "#",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600"
  }
];

export default projects;
