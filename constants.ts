import type { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  "name": "Shubhankar Borse",
  "role": "Staff AI Research Scientist",
  "avatarUrl": "./profile.jpeg",
  "contact": {
    "phone": "470 343 3652",
    "email": "shubhankar8@gmail.com",
    "linkedin": "shubhankarborse",
    "scholar": "https://scholar.google.com/citations?user=ZsgWCyMAAAAJ&hl=en",
    "website": "https://sborse3.github.io/webpage/"
  },
  "education": [
    {
      "degree": "Master of Science in Electrical and Computer Engineering",
      "institution": "Georgia Institute of Technology, Atlanta",
      "year": "Dec 2018",
      "gpa": "4.0/4.0",
      "details": [
        "Specialization in Computer Vision and Machine Learning"
      ]
    },
    {
      "degree": "Bachelor of Technology in Electronics and Telecommunication Engineering",
      "institution": "Veermata Jijabai Technological Institute, Mumbai",
      "year": "May 2017",
      "gpa": "9.1/10",
      "details": [
        "Specialization in Image and Signal Processing"
      ]
    }
  ],
  "experience": [
    {
      "role": "Staff AI Researcher",
      "company": "Qualcomm AI Research",
      "location": "Santa Clara",
      "period": "Nov 2023 – Present",
      "achievements": [
        "Headed the vision-token compression project for multimodal models, directing research and commercialization efforts across multiple teams, with demonstrations on Snapdragon phones.",
        "Directed a year-long, cross-functional research initiative in multi-concept personalization using Reinforcement Learning, resulting in papers at NeurIPS 2025, CVPR 2026 and a live demo at NeurIPS 2025.",
        "Mentored research teams working on physically grounded video generation, motion-aware video retrieval, and relighting with video diffusion.",
        "Lead research on parameter-efficient finetuning and drove commercial efforts for zero-shot personalization and LoRA adapters."
      ],
      "level": "STAFF",
      "scope": "Heading and Directing Research & Commercial Projects"
    },
    {
      "role": "Sr. AI Researcher",
      "company": "Qualcomm AI Research",
      "location": "Santa Clara",
      "period": "Nov 2021 – Nov 2023",
      "achievements": [
        "Built and demonstrated the 0.5-second Stable Diffusion running on phones.",
        "Led panoptic and semantic segmentation for camera, autonomous driving, and XR; built open-vocabulary panoptic segmentation showcased at CES 2024.",
        "Led a cross-team effort on multimodal camera–radar–LiDAR research for BEV and 3D perception presented at CVPR23 and WACV23."
      ],
      "level": "SENIOR",
      "scope": "Cross-domain research & mobile demonstrations"
    },
    {
      "role": "Deep Learning Researcher",
      "company": "Qualcomm AI Research",
      "location": "Santa Clara",
      "period": "Feb 2019 – Nov 2021",
      "achievements": [
        "Owned segmentation, depth estimation, and multi-task learning projects for autonomous driving and XR, presented at CVPR21, WACV21, BMVC21.",
        "Demonstrated an efficient real-time 4K mobile video segmentation running on a smartphone at NeurIPS 2020 and ICIP 2021.",
        "Designed an on-device CNN fingerprint anti-spoofing algorithm used in commercial smartphones."
      ],
      "level": "ENGINEER",
      "scope": "Individual project ownership & algorithm development"
    },
    {
      "role": "Machine Learning Algorithms Intern",
      "company": "KLA-Tencor",
      "location": "Milpitas",
      "period": "May – Aug 2018",
      "achievements": [
        "Developed a layer-wise interpretability metric for CNNs, integrated it into a product, and used it to improve model performance."
      ],
      "scope": "Model interpretability & product integration"
    }
  ],
  "publications": [
    {
      "title": "Ar2Can: An Architect and an Artist Leveraging a Canvas for Multi-Human Generation",
      "authors": "Shubhankar Borse, Phuc Pham, Farzad Farhadzadeh, Seokeon Choi, Phong Ha Nguyen, et al.",
      "venue": "CVPR",
      "year": "2026",
      "link": "https://arxiv.org/abs/2511.22690",
      "category": "First Author",
      "id": "ar2can",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AblknAaTinKkC"
    },
    {
      "title": "Resolving the Identity Crisis in Text-to-Image Generation",
      "authors": "Shubhankar Borse, Farzad Farhadzadeh, Munawar Hayat, Fatih Porikli",
      "venue": "CVPR",
      "year": "2026",
      "link": "https://arxiv.org/abs/2510.01399",
      "category": "First Author",
      "id": "disco",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A2P1L_qKh6hAC"
    },
    {
      "id": "hiphy",
      "year": "2026",
      "venue": "arXiv",
      "status": "Preprint",
      "summary": "Reinforcement learning for physically plausible video generation across interacting physical principles.",
      "title": "HiPhy: Hierarchical Alignment for Physically-Plausible Multi-Principle Video Generation",
      "authors": "Tahira Kazimi, Shubhankar Borse, Munawar Hayat, Fatih Porikli, Pinar Yanardag",
      "category": "Co-Author",
      "link": "https://arxiv.org/abs/2610.02197",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3ApqnbT2bcN3wC"
    },
    {
      "title": "MultiHuman-Testbench: Benchmarking Image Generation for Multiple Humans",
      "authors": "Shubhankar Borse, Seokeon Choi, Sunghyun Park, Jeongho Kim, Shreya Kadambi, et al.",
      "venue": "NeurIPS · Datasets & Benchmarks",
      "year": "2025",
      "link": "https://proceedings.neurips.cc/paper_files/paper/2025/file/96bc329285d3f028dc5972d7146c7e2f-Paper-Datasets_and_Benchmarks_Track.pdf",
      "category": "First Author",
      "id": "multihuman",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AbEWYMUwI8FkC"
    },
    {
      "title": "SubZero: Composing Subject, Style, and Action via Zero-Shot Personalization",
      "authors": "Shubhankar Borse, Kartikeya Bhardwaj, Mohammad Reza Karimi Dastjerdi, Hyojin Park, Shreya Kadambi, et al.",
      "venue": "arXiv",
      "year": "2025",
      "status": "Preprint",
      "category": "First Author",
      "id": "subzero",
      "link": "https://arxiv.org/abs/2502.19673",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AHDshCWvjkbEC"
    },
    {
      "title": "Zero-Shot Adaptation of Parameter-Efficient Fine-Tuning in Diffusion Models",
      "authors": "Farzad Farhadzadeh, Debasmit Das, Shubhankar Borse, Fatih Porikli",
      "venue": "ICML",
      "year": "2025",
      "category": "Co-Author",
      "id": "zero-shot-peft",
      "link": "https://arxiv.org/abs/2506.04244",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3ARGFaLdJalmkC"
    },
    {
      "title": "Understanding Personal Concept in Open-Vocabulary Semantic Segmentation",
      "authors": "Sunghyun Park, Jungsoo Lee, Shubhankar Borse, Munawar Hayat, Sungha Choi, et al.",
      "venue": "ICCV",
      "year": "2025",
      "category": "Co-Author",
      "id": "personalized-ovss",
      "link": "https://openaccess.thecvf.com/content/ICCV2025/html/Park_Understanding_Personal_Concept_in_Open-Vocabulary_Semantic_Segmentation_ICCV_2025_paper.html",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AM3NEmzRMIkIC"
    },
    {
      "title": "DuoLoRA: Cycle-consistent and Rank-disentangled Content-Style Personalization",
      "authors": "Aniket Roy, Shubhankar Borse, Shreya Kadambi, Debasmit Das, Shweta Mahajan, et al.",
      "venue": "ICCV",
      "year": "2025",
      "category": "Co-Author",
      "id": "duolora",
      "link": "https://arxiv.org/abs/2504.13206",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AR3hNpaxXUhUC"
    },
    {
      "title": "LoRA-X: Bridging Foundation Models with Training-Free Cross-Model Adaptation",
      "authors": "Farzad Farhadzadeh, Debasmit Das, Shubhankar Borse, Fatih Porikli",
      "venue": "ICLR",
      "year": "2025",
      "link": "https://arxiv.org/abs/2501.16559",
      "category": "Co-Author",
      "id": "lora-x",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AhFOr9nPyWt4C"
    },
    {
      "id": "madi",
      "year": "2025",
      "venue": "arXiv",
      "status": "Preprint",
      "summary": "Masking-augmented diffusion and inference-time scaling for structured visual editing.",
      "title": "MADI: Masking-Augmented Diffusion with Inference-Time Scaling for Visual Editing",
      "authors": "Shreya Kadambi, Risheek Garrepalli, Shubhankar Borse, Munawar Hyatt, Fatih Porikli",
      "category": "Co-Author",
      "link": "https://arxiv.org/abs/2507.13401",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AisC4tDSrTZIC"
    },
    {
      "title": "FouRA: Fourier Low-Rank Adaptation",
      "authors": "Shubhankar Borse, Shreya Kadambi, Nilesh Prasad Pandey, Kartikeya Bhardwaj, Viswanath Ganapathy, et al.",
      "venue": "NeurIPS",
      "year": "2024",
      "link": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/83960718b4d12f799985206f1b1cf00f-Abstract-Conference.html",
      "category": "First Author",
      "id": "foura",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A9ZlFYXVOiuMC"
    },
    {
      "title": "Sparse High Rank Adapters",
      "authors": "Kartikeya Bhardwaj, Nilesh Prasad Pandey, Sweta Priyadarshi, Viswanath Ganapathy, Shreya Kadambi, Rafael Esteves, Shubhankar Borse, et al.",
      "venue": "NeurIPS",
      "year": "2024",
      "link": "https://arxiv.org/abs/2406.13175",
      "category": "Co-Author",
      "id": "sparse-adapters",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AM05iB0D1s5AC"
    },
    {
      "title": "PosSAM: Panoptic Open-vocabulary Segment Anything",
      "authors": "Vibashan VS*, Shubhankar Borse*, Hyojin Park, Debasmit Das, et al.",
      "venue": "arXiv",
      "year": "2024",
      "status": "Preprint",
      "link": "https://arxiv.org/abs/2403.09620",
      "category": "Co-First Author",
      "id": "possam",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AaqlVkmm33-oC"
    },
    {
      "title": "Multi-camera Bird's Eye View Perception for Autonomous Driving",
      "authors": "David Unger, Nikhil Gosala, Varun Ravi Kumar, Shubhankar Borse, Abhinav Valada, et al.",
      "venue": "Computer Vision: Challenges, Trends, and Opportunities",
      "year": "2024",
      "link": "https://arxiv.org/abs/2309.09080",
      "category": "Book Chapter",
      "id": "bev-chapter",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AZph67rFs4hoC"
    },
    {
      "id": "rapid-adapters",
      "year": "2024",
      "venue": "ICML Workshop · Foundation Models in the Wild",
      "title": "Rapid Switching and Multi-Adapter Fusion via Sparse High Rank Adapters",
      "authors": "Kartikeya Bhardwaj, Nilesh Prasad Pandey, Sweta Priyadarshi, Viswanath Ganapathy, Rafael Esteves, Shreya Kadambi, Shubhankar Borse, et al.",
      "category": "Co-Author",
      "link": "https://arxiv.org/abs/2407.16712",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AmB3voiENLucC"
    },
    {
      "title": "DejaVu: Conditional Regenerative Learning to Enhance Dense Prediction",
      "authors": "Shubhankar Borse, Debasmit Das, Hyojin Park, Hong Cai, Risheek Garrepalli, et al.",
      "venue": "CVPR",
      "year": "2023",
      "link": "https://openaccess.thecvf.com/content/CVPR2023/papers/Borse_DejaVu_Conditional_Regenerative_Learning_To_Enhance_Dense_Prediction_CVPR_2023_paper.pdf",
      "category": "First Author",
      "id": "dejavu",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A5nxA0vEk-isC"
    },
    {
      "title": "X3KD: Knowledge Distillation Across Modalities, Tasks and Stages for Multi-Camera 3D Object Detection",
      "authors": "Marvin Klingner*, Shubhankar Borse*, Varun Ravi Kumar*, et al.",
      "venue": "CVPR",
      "year": "2023",
      "link": "https://openaccess.thecvf.com/content/CVPR2023/papers/Klingner_X3KD_Knowledge_Distillation_Across_Modalities_Tasks_and_Stages_for_Multi-Camera_CVPR_2023_paper.pdf",
      "category": "Co-First Author",
      "id": "x3kd",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A8k81kl-MbHgC"
    },
    {
      "title": "X-Align: Cross-Modal Cross-View Alignment for Bird's-Eye-View Segmentation",
      "authors": "Shubhankar Borse, Marvin Klingner, Varun Ravi Kumar, Hong Cai, Abdulaziz Almuzairee, et al.",
      "venue": "WACV",
      "year": "2023",
      "link": "https://openaccess.thecvf.com/content/WACV2023/papers/Borse_X-Align_Cross-Modal_Cross-View_Alignment_for_Birds-Eye-View_Segmentation_WACV_2023_paper.pdf",
      "category": "First Author",
      "id": "x-align",
      "scholarLink": "https://scholar.google.com/scholar?hl=en&q=%22X-Align%3A+Cross-Modal+Cross-View+Alignment+for+Bird%27s-Eye-View+Segmentation%22"
    },
    {
      "title": "X-Align++: Cross-Modal Cross-View Alignment for Bird's-Eye-View Segmentation",
      "authors": "Shubhankar Borse, Senthil Yogamani, Marvin Klingner, Varun Ravi, Hong Cai, et al.",
      "venue": "Machine Vision and Applications",
      "year": "2023",
      "category": "First Author",
      "id": "x-align-plus",
      "link": "https://doi.org/10.1007/s00138-023-01400-7",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AufrVoPGSRksC"
    },
    {
      "title": "TransAdapt: A Transformative Framework for Online Test Time Adaptive Semantic Segmentation",
      "authors": "Debasmit Das, Shubhankar Borse, Hyojin Park, Kambiz Azarian, Hong Cai, et al.",
      "venue": "ICASSP",
      "year": "2023",
      "category": "Co-Author",
      "id": "transadapt",
      "link": "https://arxiv.org/abs/2302.14611",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AhqOjcs7Dif8C"
    },
    {
      "title": "Self-Supervised Geometric Correspondence for Category-Level 6D Object Pose Estimation in the Wild",
      "authors": "Kaifeng Zhang, Yang Fu, Shubhankar Borse, Hong Cai, Fatih Porikli, et al.",
      "venue": "ICLR",
      "year": "2023",
      "link": "https://arxiv.org/abs/2210.07199",
      "category": "Co-Author",
      "id": "pose6d",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A_FxGoFyzp5QC"
    },
    {
      "id": "4d-panoptic",
      "year": "2023",
      "venue": "ICCV",
      "title": "4D Panoptic Segmentation as Invariant and Equivariant Field Prediction",
      "authors": "Minghan Zhu, Shizhong Han, Hong Cai, Shubhankar Borse, Maani Ghaffari, et al.",
      "category": "Co-Author",
      "link": "https://arxiv.org/abs/2303.15651",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A3fE2CSJIrl8C"
    },
    {
      "title": "Panoptic, instance and semantic relations: A relational context encoder to enhance panoptic segmentation",
      "authors": "Shubhankar Borse, Hyojin Park, Hong Cai, Debasmit Das, Risheek Garrepalli, et al.",
      "venue": "CVPR",
      "year": "2022",
      "link": "https://openaccess.thecvf.com/content/CVPR2022/papers/Borse_Panoptic_Instance_and_Semantic_Relations_A_Relational_Context_Encoder_To_CVPR_2022_paper.pdf",
      "category": "First Author",
      "id": "panoptic-relations",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AIjCSPb-OGe4C"
    },
    {
      "title": "Learning implicit feature alignment function for semantic segmentation",
      "authors": "Hanzhe Hu, Yinbo Chen, Jiarui Xu, Shubhankar Borse, Hong Cai, et al.",
      "venue": "ECCV",
      "year": "2022",
      "link": "https://arxiv.org/abs/2206.08655",
      "category": "Co-Author",
      "id": "implicit-alignment",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AYsMSGLbcyi4C"
    },
    {
      "title": "AuxAdapt: Stable and Efficient Test-Time Adaptation for Temporally Consistent Video Semantic Segmentation",
      "authors": "Yizhe Zhang, Shubhankar Borse, Hong Cai, Fatih Porikli",
      "venue": "WACV",
      "year": "2022",
      "link": "https://openaccess.thecvf.com/content/WACV2022/papers/Zhang_AuxAdapt_Stable_and_Efficient_Test-Time_Adaptation_for_Temporally_Consistent_Video_WACV_2022_paper.pdf",
      "category": "Co-Author",
      "id": "auxadapt",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A2osOgNQ5qMEC"
    },
    {
      "title": "Perceptual Consistency in Video Segmentation",
      "authors": "Yizhe Zhang, Shubhankar Borse, Hong Cai, Ying Wang, Ning Bi, et al.",
      "venue": "WACV",
      "year": "2022",
      "link": "https://openaccess.thecvf.com/content/WACV2022/papers/Zhang_Perceptual_Consistency_in_Video_Segmentation_WACV_2022_paper.pdf",
      "category": "Co-Author",
      "id": "perceptual-consistency",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3Ad1gkVwhDpl0C"
    },
    {
      "title": "Simple and Efficient Architectures for Semantic Segmentation",
      "authors": "Dushyant Mehta, Andrii Skliar, Haitam Ben Yahia, Shubhankar Borse, Fatih Porikli, et al.",
      "venue": "CVPRW",
      "year": "2022",
      "link": "https://openaccess.thecvf.com/content/CVPR2022W/ECV/papers/Mehta_Simple_and_Efficient_Architectures_for_Semantic_Segmentation_CVPRW_2022_paper.pdf",
      "category": "Co-Author",
      "id": "efficient-segmentation",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AW7OEmFMy1HYC"
    },
    {
      "title": "Real-Time, Accurate, and Consistent Video Semantic Segmentation via Unsupervised Adaptation",
      "authors": "Park, H., Yessenbayev, A., Singhal, T., Adhikari, N.K., Zhang, Y., Borse, S.M., et al.",
      "venue": "CVPR Demo Track",
      "year": "2022",
      "link": "https://openaccess.thecvf.com/content/CVPR2022/papers/Park_Real-Time_Accurate_and_Consistent_Video_Semantic_Segmentation_via_Unsupervised_Adaptation_CVPR_2022_paper.pdf",
      "category": "Co-Author",
      "id": "mobile-segmentation",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3AY0pCki6q_DkC"
    },
    {
      "title": "HS3: Learning with Proper Task Complexity in Hierarchically Supervised Semantic Segmentation",
      "authors": "Shubhankar Borse, Hong Cai, Yizhe Zhang, Fatih Porikli",
      "venue": "BMVC",
      "year": "2021",
      "link": "https://arxiv.org/abs/2111.02333",
      "category": "First Author",
      "id": "hs3",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3ALkGwnXOMwfcC"
    },
    {
      "title": "InverseForm: A Loss Function for Structured Boundary-Aware Segmentation",
      "authors": "Shubhankar Borse, Ying Wang, Yizhe Zhang, Fatih Porikli",
      "venue": "CVPR (Oral)",
      "year": "2021",
      "link": "https://openaccess.thecvf.com/content/CVPR2021/papers/Borse_InverseForm_A_Loss_Function_for_Structured_Boundary-Aware_Segmentation_CVPR_2021_paper.pdf",
      "category": "First Author",
      "id": "inverseform",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3Au-x6o8ySG0sC"
    },
    {
      "title": "X-Distill: Improving Self-Supervised Monocular Depth via Cross-Task Distillation",
      "authors": "Hong Cai, Janarbek Matai, Shubhankar Borse, Yizhe Zhang, Amin Ansari, et al.",
      "venue": "BMVC",
      "year": "2021",
      "link": "https://arxiv.org/abs/2110.12516",
      "category": "Co-Author",
      "id": "x-distill",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3A9yKSN-GCB0IC"
    },
    {
      "title": "A novel approach to image edge detection using Kalman filtering",
      "authors": "S. Borse and P. K. Bora",
      "venue": "IEMCON",
      "year": "2016",
      "link": "https://ieeexplore.ieee.org/abstract/document/7746258/",
      "category": "First Author",
      "id": "kalman-edges",
      "scholarLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZsgWCyMAAAAJ&citation_for_view=ZsgWCyMAAAAJ%3Au5HHmVD_uO8C"
    }
  ],
  "patents": [
    {
      "title": "Occlusion resolving gated mechanism for sensor fusion",
      "status": "Granted",
      "link": "https://patents.google.com/patent/US12597265B2/en"
    },
    {
      "title": "Adaptive human instance segmentation with stereo view consistency",
      "status": "Granted",
      "link": "https://patents.google.com/patent/US12573185B2/en"
    },
    {
      "title": "Panoptic segmentation with panoptic, instance, and semantic relations",
      "status": "Granted",
      "link": "https://patents.google.com/patent/US12488464B2/en"
    },
    {
      "title": "Apparatus and methods for image segmentation using machine learning processes",
      "status": "Granted",
      "link": "https://patents.google.com/patent/US12293521B2/en"
    },
    {
      "title": "Guided training of machine learning models with convolution layer feature data fusion",
      "status": "Granted",
      "link": "https://patents.google.com/patent/US12236349B2/en"
    },
    {
      "title": "Efficient test-time adaptation for improved temporal consistency in video processing",
      "status": "Granted"
    },
    {
      "title": "Blended output generation in generative artificial intelligence models",
      "status": "Filed"
    },
    {
      "title": "Processing point-cloud data",
      "status": "Filed"
    },
    {
      "title": "Training-free machine learning model adapter transfer",
      "status": "Filed"
    },
    {
      "title": "Contextually consistent depth map",
      "status": "Filed"
    },
    {
      "title": "Polyline estimation",
      "status": "Filed"
    },
    {
      "title": "Generative models for handling occlusions",
      "status": "Filed"
    },
    {
      "title": "Sparse high rank adapters and their hardware-software co-design",
      "status": "Filed"
    },
    {
      "title": "Personalized open-vocabulary semantic segmentation for images",
      "status": "Filed"
    },
    {
      "title": "Distributing prompt processing in generative artificial intelligence models",
      "status": "Filed"
    },
    {
      "title": "Low-rank adapters for weather conditions in 3d object tracking",
      "status": "Filed"
    },
    {
      "title": "Frequency-domain machine learning model adapters",
      "status": "Filed"
    },
    {
      "title": "Open vocabulary image segmentation",
      "status": "Filed"
    },
    {
      "title": "Distillation for guided diffusion models",
      "status": "Filed"
    },
    {
      "title": "Hardware-aware efficient architectures for text-to-image diffusion models",
      "status": "Filed"
    },
    {
      "title": "Training objectives for distilling guided diffusion models",
      "status": "Filed"
    },
    {
      "title": "Control neural network inference and training based on distilled guided diffusion models",
      "status": "Filed"
    },
    {
      "title": "Test-time self-supervised guidance for diffusion models",
      "status": "Filed"
    },
    {
      "title": "Instance segmentation with depth and boundary losses",
      "status": "Filed"
    },
    {
      "title": "Depth completion using image and sparse depth inputs",
      "status": "Filed"
    },
    {
      "title": "Dynamic delta transformations for segmentation",
      "status": "Filed"
    },
    {
      "title": "Regenerative learning to enhance dense prediction",
      "status": "Filed"
    },
    {
      "title": "Intermodal sensor training",
      "status": "Filed"
    },
    {
      "title": "Modeling consistency in modalities of data for semantic segmentation",
      "status": "Filed"
    },
    {
      "title": "Feature conditioned output transformer for generalizable semantic segmentation",
      "status": "Filed"
    },
    {
      "title": "Online test time adaptive semantic segmentation with augmentation consistency",
      "status": "Filed"
    },
    {
      "title": "Cross-task distillation to improve depth estimation",
      "status": "Filed"
    },
    {
      "title": "Hierarchical supervised training for neural networks",
      "status": "Filed"
    },
    {
      "title": "Distance-based boundary aware semantic segmentation",
      "status": "Filed"
    },
    {
      "title": "Generalized zero-shot content-style composition",
      "status": "Filed",
      "link": "https://patents.google.com/patent/US20260154856A1/en"
    },
    {
      "title": "Adaptive confidence thresholding with saliency-driven refinement",
      "status": "Filed",
      "link": "https://patents.google.com/patent/US20260154933A1/en"
    }
  ],
  "projects": [
    {
      "title": "Preventing Adversarial Machine Learning by using Anisotropic Diffusion",
      "period": "January 2018 – May 2018",
      "description": [
        "Constructed a Partial Differential Equation which can preserve images but also remove Adversarial Structure for an attacked image.",
        "Simulated this Equation on attacked images to remove the Adversarial structure and retrieved original Image labels with 85.3% accuracy."
      ]
    },
    {
      "title": "Calculating Passengers in Georgia Tech Stinger Buses",
      "period": "August 2017 – December 2017",
      "description": [
        "Trained two self-labelled CNN’s for precisely classifying and detecting people getting on buses.",
        "Created an algorithm for tracking the people and counting them using KLT optical Flow.",
        "Featured in an article from Georgia Tech."
      ]
    },
    {
      "title": "Prediction of Breast Cancer Clinical Endpoints using weakly supervised Machine Learning",
      "period": "August 2017 – December 2017",
      "description": [
        "Developed a model for feature extraction using Key-point Detectors on MATLAB.",
        "Implemented Multiple Instance Machine Learning on the images and applied the Ada-boost algorithm to classify the images.",
        "Creating a novel classifier Network on PyTorch."
      ]
    }
  ],
  "recognition": [
    {
      "title": "Top Reviewer",
      "issuer": "NeurIPS 2026",
      "year": "2026",
      "description": "Recognized for reviewing contributions to NeurIPS 2026."
    },
    {
      "title": "Qualcomm Distinguished Invention Award",
      "issuer": "Qualcomm",
      "year": "2025",
      "description": "Recognized for the invention “Regional Island Attention in Multi-Human Generation.”"
    },
    {
      "title": "Best Demo Award — Honorable Mention",
      "issuer": "CVPR 2022 Demo Track",
      "year": "2022",
      "description": "Real-time, accurate, and consistent video semantic segmentation on a mobile device."
    },
    {
      "title": "Qualcomm CTO Award",
      "issuer": "Qualcomm",
      "year": "2022",
      "description": "Recognized for expertise and impact in developing Qualcomm technology."
    },
    {
      "title": "Qualstar Award",
      "issuer": "Qualcomm",
      "year": "2019",
      "description": "On-device quantizable fingerprint anti-spoofing algorithm."
    }
  ],
  "skills": [
    {
      "category": "Generative & Multimodal AI",
      "skills": [
        "Diffusion models",
        "Video generation",
        "Reinforcement learning",
        "Multi-concept personalization",
        "Multimodal understanding & generation"
      ]
    },
    {
      "category": "Efficient AI",
      "skills": [
        "Vision token compression",
        "Parameter-efficient fine-tuning (PEFT)",
        "LoRA & adapter transfer",
        "Knowledge distillation",
        "On-device inference"
      ]
    },
    {
      "category": "Visual Perception",
      "skills": [
        "Open-vocabulary & panoptic segmentation",
        "3D detection & BEV perception",
        "Camera / radar / LiDAR fusion",
        "Depth estimation",
        "Test-time adaptation"
      ]
    },
    {
      "category": "Programming",
      "skills": [
        "Python",
        "C++"
      ]
    }
  ],
  "academicActivities": [
    "Workshop Chair, Omnidirectional Computer Vision (OmniCV), CVPR 2022 and 2023.",
    "Keynote speaker, OmniCV 2023: Detection and segmentation in BEV using near-field surround cameras."
  ],
  "summary": "Staff AI Research Scientist at Qualcomm, advancing generative and multimodal AI from research to on-device demonstrations and commercialization. Nearly eight years of progression from individual project ownership to leading research and commercial efforts across visual perception, model efficiency, personalization, and video generation.",
  "researchFocus": "Generative & multimodal AI · Video generation · Model efficiency · Visual perception",
  "portfolio": {
    "papers": "30+",
    "citations": "~1,000",
    "filings": "120+",
    "grants": "13+",
    "updated": "October 2026",
    "patentUrl": "https://patents.google.com/?inventor=Shubhankar+Borse"
  },
  "reviewing": [
    {
      "role": "Reviewer",
      "organization": "NeurIPS",
      "period": "2022–2026"
    },
    {
      "role": "Reviewer",
      "organization": "CVPR",
      "period": "2022–2026"
    },
    {
      "role": "Reviewer",
      "organization": "ICLR",
      "period": "2025–2026"
    },
    {
      "role": "Committee member",
      "organization": "AAAI",
      "period": "2024–2026"
    },
    {
      "role": "Reviewer",
      "organization": "WACV",
      "period": "2022–2025"
    },
    {
      "role": "Reviewer",
      "organization": "Multiple journals",
      "period": ""
    }
  ]
};
