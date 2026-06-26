/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Mattia Palano",
  description:
    "AI Engineer with 3+ years taking projects from prototype to production — RAG systems, computer vision pipelines, LLM backends on Azure. MSc in Computer Science (110/110). Available remotely, worldwide.",
  og: {
    title: "Mattia Palano — AI Engineer",
    type: "website",
    url: "http://mattiapalano.com/",
  },
};

//Home Page
const greeting = {
  title: "Mattia Palano",
  logo_name: "MattiaPalano",
  nickname: "AI Engineer",
  subTitle:
    "AI Engineer with 3+ years taking projects from prototype to production — RAG systems, computer vision pipelines, LLM backends on Azure. MSc in Computer Science (110/110). I work well autonomously, move fast, and own what I build. Open to remote & freelance.",
  resumeLink: "",
  portfolio_repository: "https://github.com/huecraft143",
  githubProfile: "https://github.com/huecraft143",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/huecraft143",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mattia-palano/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:mattiapalano11@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building RAG pipelines and LLM-powered backends for enterprise applications using LangChain, LlamaIndex, and Azure OpenAI",
        "⚡ Designing and deploying computer vision systems for real-time inference on production camera networks",
        "⚡ Audio/signal processing for ML tasks — thesis on COVID-19 detection via cough analysis using deep learning",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Cloud & Backend",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing and deploying LLM backends on Azure OpenAI, Azure Functions, and App Services",
        "⚡ Building production FastAPI services with clean OOP architecture as the AI layer between models and frontend",
        "⚡ Automated document intelligence pipelines using Azure AI Document Intelligence and NLP at scale",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
    {
      title: "Linux & System Administration",
      fileName: "FullStackImg",
      skills: [
        "⚡ Self-hosted services, networking, and system administration on Linux (Fedora)",
        "⚡ Bash scripting for automation and infrastructure management",
        "⚡ Deploying and maintaining 24/7 production AI systems on remote infrastructure",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Università degli Studi di Milano",
      subtitle: "MSc in Computer Science",
      logo_path: "",
      alt_name: "UniMi",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Graduated with 110/110 (maximum grade).",
        "⚡ Thesis: Audio-Based COVID-19 Detection via Cough Analysis — applied signal processing and deep learning to medical audio classification.",
        "⚡ Advanced coursework in machine learning, computer vision, distributed systems, and software engineering.",
      ],
      website_link: "https://www.unimi.it/",
    },
    {
      title: "Università degli Studi di Bari Aldo Moro",
      subtitle: "BSc in Computer Science",
      logo_path: "",
      alt_name: "UniBa",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Graduated with 105/110.",
        "⚡ Strong foundations in algorithms, data structures, databases, operating systems, and programming.",
        "⚡ Core programming experience in C++, Java, and Python alongside theoretical computer science.",
      ],
      website_link: "https://www.uniba.it/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Teaching",
  description:
    "AI Engineer with experience across consulting, product companies, and education. I build production systems — RAG pipelines, computer vision, LLM backends — and take ownership from design to deployment.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Lab Specialist I",
          company: "BIP AI Lab",
          company_url: "https://www.bip-group.com/",
          logo_path: "",
          duration: "Jun 2025 – Present",
          location: "Bari, Italy · Remote",
          description:
            "Leading applied AI research and LLM system design within BIP's AI Lab, focusing on enterprise-grade generative AI. Architecting and evaluating next-gen LLM pipelines; translating research into production-ready solutions. Cross-functional ownership: from problem scoping to deployment, across NLP, document intelligence, and multimodal AI.",
          color: "#1A1A2E",
        },
        {
          title: "AI Engineer",
          company: "Intellera Consulting",
          company_url: "https://www.intelleraconsulting.com/",
          logo_path: "",
          duration: "Jun 2025",
          location: "Rome, Italy",
          description:
            "Designed RAG architectures from scratch (LangChain, LlamaIndex, Azure OpenAI) — enabling chatbots to reason over private corporate knowledge bases with measurable accuracy gains. Engineered automated document intelligence pipelines (Azure AI Document Intelligence + NLP) processing PDFs, images, and reports at scale. Built and maintained production FastAPI backends deployed on Azure Functions and App Services.",
          color: "#0078D4",
        },
        {
          title: "AI Developer",
          company: "TR2 S.R.L.",
          company_url: "https://www.talkingroad.it/",
          logo_path: "",
          duration: "Oct 2024 – Feb 2025",
          location: "Aosta, Italy · Remote",
          description:
            "Sole developer: designed, trained, and deployed computer vision models now running on camera networks across Italy — full system design ownership from data pipeline to production. Built robust Python backends integrating real-time sensor and camera streams; ensured reliability in 24/7 production environments.",
          color: "#E63946",
        },
        {
          title: "Secondary School Teacher — ICT & C++",
          company: "IIS Galvani",
          company_url: "https://iisgalvanimi.edu.it/",
          logo_path: "",
          duration: "Oct 2023 – Aug 2024",
          location: "Brindisi, Italy",
          description:
            "Taught C++ and OOP principles (classes, inheritance, polymorphism, data structures) alongside Web Design and Systems & Networks. Introduced AI/ML concepts to students with zero prior exposure.",
          color: "#2D6A4F",
        },
        {
          title: "Sound Operator",
          company: "LKT Entertainment",
          company_url: "https://www.facebook.com/LKTEntertainment/",
          logo_path: "",
          duration: "Jul 2022 – Sep 2022",
          location: "Chioggia, Italy",
          description:
            "Managed audio/multimedia systems for live events; handled AV sync, digital mixing, and on-site troubleshooting under pressure.",
          color: "#6A0572",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects spanning RAG systems, computer vision, audio ML, and production backend services. Most work is in Python with cloud deployment on Azure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research and technical writing.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "developer.png",
    description:
      "Available for remote and freelance opportunities worldwide. Reach out via email or LinkedIn — I typically respond within 24 hours.",
  },
  blogSection: {
    title: "GitHub",
    subtitle:
      "Check out my projects and open-source contributions on GitHub.",
    link: "https://github.com/huecraft143",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Milan, Italy",
    locality: "Milan",
    country: "IT",
    region: "Lombardy",
    postalCode: "20100",
    streetAddress: "Milan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Milan,+Italy/",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+39 393 506 2140",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
