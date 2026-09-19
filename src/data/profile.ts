export const profile = {
  name: "Victor Solomon",
  shortName: "Victor",
  role: "Ph.D. Candidate in Computer Science",
  affiliation: "Georgia State University",
  location: "Atlanta, GA",
  center: "TReNDS Center",
  advisor: "Dr. Jingyu Liu",
  photo: "/images/profile-optimized.webp",
  email: "vsolomon3@student.gsu.edu",
  website: "https://sites.google.com/view/dmlab/team/victor-solomon",
  scholar: "https://scholar.google.com/citations?user=y6b1SQEAAAAJ&hl=en",
  github: "https://github.com/dasjar",
  linkedin: "https://www.linkedin.com/in/vicsol/",
  researchGate: "https://www.researchgate.net/profile/Victor-Solomon-4?ev=hdr_xprf",
  cv: "/cv.pdf",
  summary: [
    "Hi, I am Victor. I am a Ph.D. candidate in Computer Science at Georgia State University, advised by Dr. Jingyu Liu and affiliated with the Center for Translational Research in Neuroimaging and Data Science.",
    "My research focuses on multimodal learning, representation learning, machine learning, scientific AI, and biomedical imaging, with applications to neurodegenerative diseases and complex brain disorders. I build learning systems that integrate heterogeneous data sources, learn robust and interpretable representations, and support scientific discovery in high dimensional biomedical and scientific data."
  ],
  contactLine: "Email is the most reliable way to reach me."
};

export const news = [
  {
    date: "2026",
    text: "MSR-IVA was accepted to the IEEE International Workshop on Machine Learning for Signal Processing.",
    link: "https://arxiv.org/abs/2608.24978"
  },
  {
    date: "2025",
    text: "Published work on wavelet and Fourier transforms for enhanced solar flare forecasting in the FLAIRS Conference Proceedings.",
    link: "#"
  },
  {
    date: "2025",
    text: "Received the Martin D. Fraser Graduate Student Conference Travel Award at Georgia State University.",
    link: "#"
  },
  {
    date: "2024",
    text: "Continued research on multimodal fusion, representation learning, and neuroimaging at the TReNDS Center.",
    link: "#"
  }
];

export const publications = [
  {
    year: "2026",
    title: "MSR-IVA: Masked Structural Residual Multimodal Representation Learning for State-Aware Fusion of Structural MRI and Dynamic Functional Network Connectivity",
    authors: "Victor Solomon, Zening Fu, Rafal Angryk, Vince D. Calhoun, and Jingyu Liu",
    venue: "IEEE International Workshop on Machine Learning for Signal Processing, Atlanta, GA",
    status: "Accepted",
    image: "/images/msr-iva.png",
    placeholder: "MSR-IVA",
    tags: ["Multimodal Learning", "Representation Learning", "Biomedical Imaging"],
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2608.24978" },
      { label: "Code", url: "https://github.com/dasjar/MSRIVA" }
    ]
  },
  {
    year: "2025",
    title: "EdgeAttNet: Towards Barb-Aware Filament Segmentation",
    authors: "Victor Solomon, P. Martens, Jingyu Liu, and Rafal Angryk",
    venue: "2025 IEEE International Conference on Data Mining Workshops, 1913-1922",
    status: "Published",
    image: "/images/edgeattnet.png",
    placeholder: "EdgeAttNet",
    tags: ["Computer Vision", "Deep Learning", "Scientific AI"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=y6b1SQEAAAAJ&citation_for_view=y6b1SQEAAAAJ:WF5omc3nYNoC" },
      { label: "Code", url: "https://github.com/dasjar/EdgeAttNet" }
    ]
  },
  {
    year: "2025",
    title: "Time Series Decomposition Using Wavelet and Fourier Transforms for Enhanced Solar Flare Forecasting",
    authors: "Victor Solomon, Junzhi Wen, Rafal Angryk, Manya Rampuria, Omkar Rayala, and Abdul Afrid",
    venue: "The International FLAIRS Conference Proceedings, Vol. 38",
    status: "Published",
    image: "/images/time-series.png",
    placeholder: "Solar Flare",
    tags: ["Machine Learning", "Time Series", "Scientific AI"],
    links: [
      { label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=y6b1SQEAAAAJ&citation_for_view=y6b1SQEAAAAJ:YsMSGLbcyi4C" },
      { label: "Code", url: "https://github.com/dasjar/Time-Series-Decomposition-Using-Wavelet-and-Fourier-Transforms-for-Enhanced-Solar-Flare-Forecasting" }
    ]
  }
];

export const projects = [
  {
    title: "Progressive Multimodal Subspace Fusion",
    status: "active research",
    description: "A staged multimodal fusion framework for learning from incomplete and heterogeneous scientific modalities.",
    tags: ["multimodal fusion", "representation learning", "incomplete data"],
    link: "/projects"
  },
  {
    title: "MSR-IVA",
    status: "accepted paper",
    description: "Masked structural residual independent vector analysis for state-aware fusion of structural MRI and dynamic functional connectivity.",
    tags: ["IVA", "neuroimaging", "state-aware fusion"],
    link: "https://arxiv.org/abs/2608.24978"
  },
  {
    title: "Time Series Decomposition for Solar Flare Forecasting",
    status: "published",
    description: "Wavelet and Fourier transform based representation learning for scientific time series forecasting.",
    tags: ["time series", "signal processing", "scientific AI"],
    link: "/projects"
  },
  {
    title: "Adaptive Multimodal Recommendation",
    status: "research prototype",
    description: "Interaction-level multimodal fusion and routing for recommender systems with noisy visual and textual content.",
    tags: ["recommender systems", "multimodal fusion", "deep learning"],
    link: "/projects"
  }
];

export const researchAreas = [
  {
    title: "Multimodal Learning",
    text: "Methods for integrating heterogeneous data sources such as imaging, time series, graphs, text, and tabular data."
  },
  {
    title: "Representation Learning",
    text: "Learning robust, transferable, and interpretable representations for complex scientific and biomedical data."
  },
  {
    title: "Biomedical Imaging",
    text: "Machine learning for neuroimaging, brain connectivity, disease modeling, and neurodegenerative disease applications."
  },
  {
    title: "Scientific AI",
    text: "Learning systems designed for noisy, structured, high dimensional, and limited label scientific domains."
  }
];
export const education = [
  {
    period: "Aug 2023 - Present",
    degree: "Ph.D. in Computer Science",
    institution: "Georgia State University",
    location: "Atlanta, GA",
    details: "Focus: Multimodal Machine Learning, Representation Learning, Neuroimaging, and Scientific AI"
  },
  {
    period: "Sep 2019 - Feb 2021",
    degree: "M.Sc. in Computer Science",
    institution: "African University of Science and Technology",
    location: "Abuja, Nigeria",
    details: "Focus: Machine Learning, Deep Learning, and Recommender Systems"
  },
  {
    period: "Jan 2014 - Feb 2018",
    degree: "B.Sc. in Computer Science",
    institution: "Kaduna State University",
    location: "Kaduna, Nigeria",
    details: "Focus: Computer Science, Algorithms, Programming, and Data Analysis"
  }
];

export const experience = [
  {
    period: "2025 - Present",
    title: "Multimodal Machine Learning for Neuroimaging",
    place: "TReNDS Center, Georgia State University",
    text: "Developing multimodal machine learning methods for structural and functional neuroimaging, incomplete multimodal observations, and high dimensional biomedical data."
  },
  {
    period: "2024 - 2025",
    title: "Time Series Decomposition for Solar Flare Forecasting",
    place: "Data Mining Lab, Georgia State University",
    text: "Developed signal decomposition methods using wavelet and Fourier transforms for scientific time series forecasting."
  },
  {
    period: "2022 - 2023",
    title: "Data Analyst",
    place: "United Bank for Africa",
    text: "Built data pipelines, analytical workflows, dashboards, and data driven reporting systems using Python and SQL."
  },
  {
    period: "2021",
    title: "QA Engineer",
    place: "Field Technologies and Development Partners",
    text: "Designed automated test scripts, REST API validation workflows, and user interface test cases."
  }
];

export const awards = [
  "Martin D. Fraser Graduate Student Conference Travel Award, Georgia State University, 2025",
  "AUST Merit Scholarship, African University of Science and Technology, 2019",
  "World Bank Pan-African Undergraduate Scholarship, 2017"
];

export const skills = {
  Programming: ["Python", "C/C++", "R", "Java", "SQL"],
  Tools: ["PyTorch", "TensorFlow", "Linux", "Git", "Apache Kafka", "REST APIs", "Selenium"],
  Research: ["Multimodal Learning", "Representation Learning", "Deep Learning", "Graph Learning", "Neuroimaging", "Recommender Systems", "Scientific AI", "Time Series Modeling", "Signal Processing"]
};

export const notes = [
  {
    label: "Paper notes",
    title: "Multimodal learning reading list",
    text: "A future home for short summaries of important papers in multimodal fusion, representation learning, and scientific AI."
  },
  {
    label: "Methods",
    title: "Independent vector analysis",
    text: "A future technical note explaining IVA, source dependence, multimodal coupling, and scientific applications."
  },
  {
    label: "Research log",
    title: "Project updates",
    text: "A clean public record of selected project progress, experiments, and implementation decisions."
  }
];