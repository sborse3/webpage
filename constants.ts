import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Shubhankar Borse",
  role: "Staff AI Research Scientist",
  contact: {
    phone: "470 343 3652",
    email: "shubhankar8@gmail.com",
    linkedin: "shubhankarborse",
    scholar: "GoogleScholar"
  },
  education: [
    {
      degree: "Master of Science in Electrical and Computer Engineering",
      institution: "Georgia Institute of Technology, Atlanta",
      year: "December 2018",
      gpa: "4.0",
      details: ["Specialization in Computer Vision and Machine Learning"]
    },
    {
      degree: "Bachelor of Tech. in Electronics and Telecomm Engineering",
      institution: "Veermata Jijabai Technological Institute, Mumbai",
      year: "May 2017",
      gpa: "9.1/10",
      details: ["Specialization in Image and Signal Processing"]
    }
  ],
  experience: [
    {
      role: "Staff AI Research Scientist",
      company: "Qualcomm AI Research",
      location: "San Diego",
      period: "November 2023 – Current",
      achievements: [
        "Lead the research efforts on Multi-Concept Personalized Image Generation and PEFT methods using Unified Multi-Modal models.",
        "Drove the implementation of Qualcomm’s zero-shot personalization running on smartphones.",
        "Drove the implementation of Qualcomm’s custom Low-Rank Adapters (LoRA) for Generative models running on smartphones.",
        "Developed an open-vocabulary panoptic segmentation labeling pipeline showcased at the Consumer Electronics Show 2024."
      ]
    },
    {
      role: "Sr. Deep Learning Research Engineer",
      company: "Qualcomm AI",
      location: "San Diego",
      period: "November 2021 – November 2023",
      achievements: [
        "Developed and demoed the fastest stable diffusion running on a mobile device so far (at 0.5 seconds).",
        "Lead the research effort on Panoptic and Semantic segmentation for Camera, Autonomous Driving and XR.",
        "Drove the research on Birds-eye-view perception by developing novel methods for Multi-Modal (Camera, Radar, LiDAR) 3D Perception.",
        "Devised a method running segmentation models real time on a Mobile device at 4K resolution."
      ]
    },
    {
      role: "Deep Learning Research Engineer",
      company: "Qualcomm AI",
      location: "San Diego",
      period: "February 2019 - November 2021",
      achievements: [
        "Spearheaded the research efforts on semantic segmentation, monocular depth estimation and multi-task learning for Autonomous Driving/XR.",
        "Developed a novel metric to measure temporal consistency and used it to train perceptually consistent CNNs.",
        "Executed demos at NeurIPS 2020 and ICIP 2021 for efficient video segmentation running real-time on a smartphone.",
        "Designed a reliable and efficient CNN-based Fingerprint anti-spoofing solution for smartphones."
      ]
    },
    {
      role: "Machine Learning Algorithms Intern",
      company: "KLA-Tencor",
      location: "Milpitas",
      period: "May 2018 – August 2018",
      achievements: [
        "Developed a Metric to Interpret each layer of a Deep Network by Visualization.",
        "Included the metric in the product.",
        "Improved performance of the current Deep Network using inferences from the metric."
      ]
    }
  ],
  publications: [
    // First Authored
    {
      title: "Ar2Can: An Architect and an Artist Leveraging a Canvas for Multi-Human Generation",
      authors: "Shubhankar Borse, et al.",
      venue: "Preprint",
      year: "2025",
      category: "First Author"
    },
    {
      title: "DisCo: Reinforcement with Diversity Constraints for Multi-Human Generation",
      authors: "Shubhankar Borse, et al.",
      venue: "Under review",
      year: "2025",
      status: "Under Review",
      category: "First Author"
    },
    {
      title: "MultiHuman-Testbench: Benchmarking Image Generation for Multiple Humans",
      authors: "Shubhankar Borse, et al.",
      venue: "NeurIPS",
      year: "2025",
      category: "First Author"
    },
    {
      title: "SubZero: Composing Subject, Style, and Action via Zero-Shot Personalization",
      authors: "Shubhankar Borse et al.",
      venue: "Under review",
      year: "2025",
      status: "Under Review",
      category: "First Author"
    },
    {
      title: "FouRA: Fourier Low-Rank Adaptation",
      authors: "Shubhankar Borse et al.",
      venue: "NeurIPS",
      year: "2024",
      category: "First Author"
    },
    {
      title: "DejaVu: Conditional Regenerative Learning to Enhance Dense Prediction",
      authors: "Shubhankar Borse, et al.",
      venue: "CVPR",
      year: "2023",
      category: "First Author"
    },
    {
      title: "X3KD: Knowledge Distillation Across Modalities, Tasks and Stages for Multi-Camera 3D Object Detection",
      authors: "Shubhankar Borse*, Marvin Klingner*, Varun Ravi* et al.",
      venue: "CVPR",
      year: "2023",
      category: "First Author"
    },
    {
      title: "X-Align: Cross-Modal Cross-View Alignment for Bird's-Eye-View Segmentation",
      authors: "Borse, Shubhankar, et al.",
      venue: "WACV",
      year: "2023",
      category: "First Author"
    },
    {
      title: "X-Align++: Cross-Modal Cross-View Alignment for Bird's-Eye-View Segmentation",
      authors: "Borse, Shubhankar, et al.",
      venue: "Springer Nature MVA Journal",
      year: "2023",
      category: "First Author"
    },
    {
      title: "Panoptic, instance and semantic relations: A relational context encoder to enhance panoptic segmentation",
      authors: "Shubhankar Borse, et al.",
      venue: "CVPR",
      year: "2022",
      category: "First Author"
    },
    {
      title: "HS3: Learning with Proper Task Complexity in Hierarchically Supervised Semantic Segmentation",
      authors: "Shubhankar Borse, Herbert Cai, Yizhe Zhang, Fatih Porikli",
      venue: "BMVC",
      year: "2021",
      category: "First Author"
    },
    {
      title: "InverseForm: A Loss Function for Structured Boundary-Aware Segmentation",
      authors: "Borse, Shubhankar, et al.",
      venue: "CVPR (Oral)",
      year: "2021",
      category: "First Author"
    },
    {
      title: "A novel approach to image edge detection using Kalman filtering",
      authors: "S. Borse and P. K. Bora",
      venue: "IEMCON",
      year: "2016",
      category: "First Author"
    },

    // Co-Authored / Other Papers
    {
      title: "Zero-Shot Adaptation of Parameter-Efficient Fine-Tuning in Diffusion Models",
      authors: "Farhadzadeh, F., Das, D., Borse, S. and Porikli, F.",
      venue: "ICML",
      year: "2025",
      category: "Co-Author"
    },
    {
      title: "Personalized OVSS: Understanding Personal Concept in Open-Vocabulary Semantic Segmentation",
      authors: "Park, S., Lee, J., Borse, S., Hayat, M., Choi, S., Hwang, K. and Porikli, F.",
      venue: "ICCV",
      year: "2025",
      category: "Co-Author"
    },
    {
      title: "DuoLoRA: Cycle-consistent and Rank-disentangled Content-Style Personalization",
      authors: "Roy, A., Borse, S., Kadambi, S., Das, D., Mahajan, S., Garrepalli, R., ... & Porikli, F.",
      venue: "ICCV",
      year: "2025",
      category: "Co-Author"
    },
    {
      title: "LoRA-X: Bridging Foundation Models with Training-Free Cross-Model Adaptation",
      authors: "Farhadzadeh, F., Das, D., Borse, S. and Porikli, F.",
      venue: "ICLR",
      year: "2025",
      category: "Co-Author"
    },
    {
      title: "Sparse High Rank Adapters",
      authors: "Bhardwaj, K., Pandey, N.P., Priyadarshi, S., Ganapathy, V., Esteves, R., Kadambi, S., Borse, S., et al.",
      venue: "NeurIPS",
      year: "2024",
      category: "Co-Author"
    },
    {
      title: "PosSAM: Open-vocabulary Panoptic Segment Anything",
      authors: "Vibashan VS*, Shubhankar Borse*, et al.",
      venue: "Under review",
      year: "2024",
      status: "Under Review",
      category: "Co-Author"
    },
    {
      title: "TransAdapt: A Transformative Framework for Online Test Time Adaptive Semantic Segmentation",
      authors: "Das, D., Borse, S., Park, H., Azarian, K., Cai, H., Garrepalli, R., & Porikli, F.",
      venue: "ICASSP",
      year: "2023",
      category: "Co-Author"
    },
    {
      title: "Self-Supervised Geometric Correspondence for Category-Level 6D Object Pose Estimation in the Wild",
      authors: "Zhang, K., Fu, Y., Borse, S., Cai, H., Porikli, F., & Wang, X.",
      venue: "ICLR",
      year: "2023",
      category: "Co-Author"
    },
    {
      title: "Learning implicit feature alignment function for semantic segmentation",
      authors: "Hu, H., Chen, Y., Xu, J., Borse, S., Cai, H., Porikli, F., & Wang, X.",
      venue: "ECCV",
      year: "2022",
      category: "Co-Author"
    },
    {
      title: "AuxAdapt: Efficient Online Test-Time Adaptation for Temporally Consistent Video Semantic Segmentation",
      authors: "Y. Zhang, S. Borse, H. Cai, F. Porikli",
      venue: "WACV",
      year: "2022",
      category: "Co-Author"
    },
    {
      title: "Perceptual Consistency in Video Segmentation",
      authors: "Y. Zhang, S. Borse*, H. Cai*, F. Porikli",
      venue: "WACV",
      year: "2022",
      category: "Co-Author"
    },
    {
      title: "Simple and Efficient Architectures for Semantic Segmentation",
      authors: "Mehta, D., Skliar, A., Ben Yahia, H., Borse, S., Porikli, F., Habibian, A., & Blankevoort, T.",
      venue: "CVPRW",
      year: "2022",
      category: "Co-Author"
    },
    {
      title: "Real-Time, Accurate, and Consistent Video Semantic Segmentation via Unsupervised Adaptation",
      authors: "Park, H., Yessenbayev, A., Singhal, T., Adhikari, N.K., Zhang, Y., Borse, S.M., et al.",
      venue: "CVPRD",
      year: "2022",
      category: "Co-Author"
    },
    {
      title: "X-Distill: Improving Self-Supervised Monocular Depth via Cross-Task Distillation",
      authors: "Herbert Cai, Janarbek Matai*, Shubhankar Borse*, Yizhe Zhang, Amin Ansari, Fatih Porikli",
      venue: "BMVC",
      year: "2021",
      category: "Co-Author"
    },
    
    // Book Chapters
    {
      title: "Multi-camera Bird's Eye View Perception for Autonomous Driving",
      authors: "Unger, David, Nikhil Gosala, Varun Ravi Kumar, Shubhankar Borse, Abhinav Valada, and Senthil Yogamani",
      venue: "Computer Vision: Challenges, Trends, and Opportunities",
      year: "2023",
      category: "Book Chapter"
    }
  ],
  patents: [
    { title: "Generative Models for Handling Occlusions", status: "Filed" },
    { title: "Training-Free Machine Learning Model Adapter Transfer", status: "Filed" },
    { title: "Localized Watermarking of Video Data", status: "Filed" },
    { title: "Text-Assisted Localized Image Watermarking", status: "Filed" },
    { title: "Sensor-Aware Tokenization for Multi-Modal End-To-End Vehicle Architecture", status: "Filed" },
    { title: "Generalized Zero-Shot Content-Style Composition", status: "Filed" },
    { title: "Multi-Subject Image Generation with Subject Regional Information", status: "Filed" },
    { title: "Composite Continuous Discrete Diffusion", status: "Filed" },
    { title: "In-Context Inference Time Scaling for Image Generation and Editing", status: "Filed" },
    { title: "Guided Training of Machine Learning Models with Convolution Layer Feature Data Fusion", status: "Granted" },
    { title: "Efficient Test-Time Adaptation for Improved Temporal Consistency in Video Processing", status: "Granted" },
    { title: "Apparatus And Methods for Image Segmentation Using Machine Learning Processes", status: "Granted" },
    { title: "Panoptic Segmentation with Panoptic, Instance, And Semantic Relations", status: "Granted" }
  ],
  projects: [
    {
      title: "Preventing Adversarial Machine Learning by using Anisotropic Diffusion",
      period: "January 2018 – May 2018",
      description: [
        "Constructed a Partial Differential Equation which can preserve images but also remove Adversarial Structure for an attacked image.",
        "Simulated this Equation on attacked images to remove the Adversarial structure and retrieved original Image labels with 85.3% accuracy."
      ]
    },
    {
      title: "Calculating Passengers in Georgia Tech Stinger Buses",
      period: "August 2017 – December 2017",
      description: [
        "Trained two self-labelled CNN’s for precisely classifying and detecting people getting on buses.",
        "Created an algorithm for tracking the people and counting them using KLT optical Flow.",
        "Featured in an article from Georgia Tech."
      ]
    },
    {
      title: "Prediction of Breast Cancer Clinical Endpoints using weakly supervised Machine Learning",
      period: "August 2017 – December 2017",
      description: [
        "Developed a model for feature extraction using Key-point Detectors on MATLAB.",
        "Implemented Multiple Instance Machine Learning on the images and applied the Ada-boost algorithm to classify the images.",
        "Creating a novel classifier Network on PyTorch."
      ]
    }
  ],
  recognition: [
    {
      title: "Qualcomm Distinguished Invention Award",
      issuer: "Qualcomm",
      year: "2025",
      description: "For submitting an invention titled 'Regional Island Attention in Multi-Human Generation'"
    },
    {
      title: "Best Demo Award Honorable mention",
      issuer: "CVPR 2022 Demo Track",
      year: "2022",
      description: "For the demo: Real-Time, Accurate, and Consistent Video Semantic Segmentation via Unsupervised Adaptation and Cross-Unit Deployment on Mobile Device"
    },
    {
      title: "Qualcomm CTO Award",
      issuer: "Qualcomm",
      year: "2022",
      description: "For the expertise and impact in development of Qualcomm’s technology"
    },
    {
      title: "Qualstar Award",
      issuer: "Qualcomm",
      year: "2019",
      description: "For the development of Quantizable Fingerprint Anti-spoofing algorithm on device"
    }
  ],
  skills: [
    {
      category: "Visual Object Understanding",
      skills: ["Panoptic and Semantic Segmentation", "3D object detection", "Birds-Eye-View (BEV) Perception", "Open-Vocabulary Segmentation"]
    },
    {
      category: "Generative AI",
      skills: ["Text-to-Image", "Image-to-Image", "Multimodal Understanding", "Multimodal Generation"]
    },
    {
      category: "Languages",
      skills: ["Python", "C++"]
    }
  ],
  academicActivities: [
    "Workshop Chair, 2023 Omnidirectional Computer Vision Workshop (OmniCV 2023) at CVPR2023",
    "Workshop Chair, 2023 Omnidirectional Computer Vision Workshop (OmniCV 2022) at CVPR2022",
    "Keynote Talk: Detection and segmentation in BEV using near-field surround cameras at the 2023 Omnidirectional Computer Vision Workshop",
    "Reviewed 50+ manuscripts submitted to top tier conferences such as CVPR, ICCV, ECCV, NeurIPS and WACV."
  ]
};