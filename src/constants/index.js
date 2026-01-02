const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Certifications", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Stanford Online",
    title:
      "Supervised Machine Learning: Regression and Classification",
    image: "/images/deep.png",
    link: "https://www.coursera.org/account/accomplishments/verify/IQD6TYVLKD71",
  },
  {
    id: 2,
    date: "GeeksforGeeks",
    title: "Mastering Generative AI",
    image: "/images/gfg.png",
    link: "https://media.geeksforgeeks.org/courses/certificates/d143e5ccb5d56ea52740841a87c6329e.pdf",
  },
  {
    id: 3,
    date: "Udemy",
    title: "The Complete SQL Bootcamp",
    image: "/images/udemy.png",
    link: "https://www.udemy.com/certificate/UC-4b4de403-baf1-432c-8d38-a97464ebaecf/",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "Java", "HTML", "CSS"],
  },
  {
    category: "AI & ML",
    items: ["Sci-Kit", "NLTK", "LangChain", "Pandas", "NumPy"],
  },
  {
    category: "AWS",
    items: ["S3", "Athena", "Glue", "Quicksight", "EC2"],
  },
  {
    category: "Data Analysis",
    items: ["Excel", "PowerBI", "Tableau", "DataBricks"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/morbidflames",
  },

  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/mrbdflames",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/tarunskumar11/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/fluidic.png",
  },
  {
    id: 2,
    img: "/images/tahoe.png",
  },
  {
    id: 3,
    img: "/images/purple.png",
  },
  {
    id: 4,
    img: "/images/RB.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Luxsole: E-commerce store for Sneakers",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-10 left-10", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Luxsole.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Luxsole E-Commerce website design is a clean UI and a modern shoe-shopping experience designed in Figma for browsing premium footwear.",
            "Instead of plain product listings, it offers category-based pages with interactive elements like size selection, wishlist, share icons, and a responsive “Buy Now” button.",
            "It feels like moving through a well-organized footwear showroom, where each shoe type has its own dedicated space.",
            "A central home page with clickable shoe silhouette icons and logo-based navigation ensures smooth, intuitive movement across the entire site.",
          ],
        },
        {
          id: 2,
          name: "Luxsole.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/project-2.png",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Luxsole1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/V0EipYwo7zvBBJzudOlJC2/Luxsole?node-id=0-1&t=ujhlRxsefHbtwTyL-1",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Semantic Book Recommender",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-44 left-10",
      children: [
        {
          id: 1,
          name: "Semantic Book Recommender.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Semantic Book Recommender project is an AI-driven system built to help users find books they’ll love using advanced language understanding.",
            "Instead of a basic search tool, it uses large language models to interpret book content and deliver smart, meaningful recommendations.",
            "Think of it as a digital librarian that understands the meaning behind each book, making discovery intuitive and personal.",
            "It’s built with Python, LangChain, OpenAI models, and Gradio for a fast, interactive, and visually clean user experience.",
          ],
        },
        {
          id: 2,
          name: "semantic_book_recommender.ipynb",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/morbidflames/semantic_book_recommender",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Recommendation.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/project-4.png",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Airbnb Analytics Dashboard ",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-80 left-10",
      children: [
        {
          id: 1,
          name: "Airbnb Analytics Dashboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Airbnb Analytics Dashboard is an interactive Tableau project that visualizes key rental trends like price by zip code, yearly revenue, bedroom pricing, and competitor performance.",
            "Instead of static charts, it delivers a rich business insight experience with layered maps, joined tables, and clear story-telling visuals.",
            "Think of it like a live data explorer that helps users find the best location and strategy to launch or optimize an Airbnb rental",
            "It’s built using multi-table joins and advanced Tableau features to create a clean, responsive, and decision-ready dashboard.",
          ],
        },
        {
          id: 2,
          name: "airbnb_analysis.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://public.tableau.com/views/AirBnB_Full_Project_17654792060380/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-5.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me-2.png",
    },
    {
      id: 3,
      name: "suit-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me-3.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Introduction",
      image: "/images/me.png",
      description: [
        "Hey! I’m Tarun ✌️, a Computer Science Engineer who enjoys transforming complex data into real, usable insights and strong machine learning solutions",
        "I focus on careful data analysis, building advanced models, and improving performance, using solid programming and database skills.",
        "I take pleasure in breaking down difficult problems into smaller pieces and creating a reliable and efficient system.",
        "My motivation comes from bringing technical ideas to life and helping others with clear processes and data-driven innovation.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };