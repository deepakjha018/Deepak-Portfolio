import smart from "../assets/projects/smart-assessment.png";
import garbage from "../assets/projects/garbage-classifier.png";
import salary from "../assets/projects/employee-salary-prediction.png";
import churn from "../assets/projects/customer-churn-prediction.png";
import fake from "../assets/projects/fake-news-detection.png";
import interview from "../assets/projects/interviewace-ai.png";


export const projects = [
  {
    title: "Smart Assessment & Question Generation System",
    image: smart,
    category: "AI + Full Stack",
    description:
"AI-powered assessment platform using Generative AI for automatic question generation with quiz management, authentication, dashboards, and performance analytics.",
    tech:[
      "Python",
      "Django",
      "MySQL",
      "Generative AI",
      "HTML",
      "CSS"
    ],
    github:
      "https://github.com/deepakjha018/smart-assessment",
    demo:
      "https://smart-assessment.onrender.com/",
  },


  {
    title:"InterviewAce AI",
    image: interview,
    category:"Agentic AI",
    description:
      "AI-powered interview preparation agent using IBM Watsonx Orchestrate, IBM Granite, and RAG to generate personalized interview strategies and questions.",
    tech:[
      "Agentic AI",
      "IBM Watsonx",
      "IBM Granite",
      "RAG",
      "JavaScript"
    ],
    github:
      "https://github.com/deepakjha018/InterviewAce-AI",
    demo:
      "https://deepakjha018.github.io/InterviewAce-AI/",
  },


  {
    title:"Garbage Classification System",
    image: garbage,
    category:"Computer Vision",
    description:
      "Computer vision application using deep learning and transfer learning to classify waste images with real-time predictions.",
    tech:[
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "Streamlit"
    ],
    github:
      "https://github.com/deepakjha018/Garbage_Classifier_Project",
    demo:
      "https://garbage-classifier-vk18.streamlit.app/",
  },


  {
    title:"TruthGuard AI - Fake News Detection",
    image: fake,
    category:"NLP",
    description:
      "Machine Learning system that detects fake news articles using NLP preprocessing, TF-IDF vectorization, and classification models.",
    tech:[
      "Python",
      "NLP",
      "Scikit-Learn",
      "Streamlit"
    ],
    github:
      "https://github.com/deepakjha018/Fake-News-Detection",
    demo:
      "https://fake-news-detection-vk18.streamlit.app/",
  },


  {
    title:"Customer Churn Prediction",
    image: churn,
    category:"Machine Learning",
    description:
      "Predictive analytics dashboard that identifies potential customer churn using machine learning models and customer behavior analysis.",
    tech:[
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Streamlit"
    ],
    github:
      "https://github.com/deepakjha018/Customer-Churn-Prediction",
    demo:
      "https://customer-churn-predictor-vk18.streamlit.app/",
  },


  {
    title:"Employee Salary Prediction",
    image: salary,
    category:"Data Science",
    description:
      "Machine Learning classification system that predicts employee income categories using demographic and professional features.",
    tech:[
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Streamlit"
    ],
    github:
      "https://github.com/deepakjha018/employee-salary-prediction",
    demo:
      "https://employee-salary-prediction-vk18.streamlit.app/",
  },
];