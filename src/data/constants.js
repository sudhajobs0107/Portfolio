const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// Import all images from the images folder
const images = importAll(require.context('../images', false, /\.(gif|jpe?g|png)$/));
export const Bio = {
  name: "Sudha Yadav",
  roles: [
    "Cloud Engineer",
    "DevOps Engineer",
  ],
  description:
    "As a DevOps engineer, I bring a robust background in cloud technologies and a passion for process optimization and automation. Proficient in cloud platforms, CI/CD pipelines, IaC, containerization and monitoring tools. I ensure streamlined workflows and scalable deployments. I'm good at tools like Docker, GitHub, Jenkins, Kubernetes, Bash scripting, Linux, Python, Grafana, Prometheus, Terraform and Ansible. Outside work,  I enjoy playing the guitar to relax and express my creativity. If you're interested in learning more about my projects or collaborating, feel free to connect!!!",
  github: "https://github.com/sudhajobs0107",
  resume: "https://drive.google.com/file/d/1OOvb9AvnhHS564VhFeD9VTMUnzgSwFQx/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
  twitter: "https://twitter.com/SudhaYadav0107",
  hashnode: "https://sudhayadav.hashnode.dev/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "HashiCorp",
        image: "https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Cloud Computing",
    skills: [
      {
        name: "AWS (Amazon Web Services)",
        image:
          "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      },
      {
        name: "GCP (Google Cloud Platform)",
        image:
          "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      },
      {
        name: "Azure",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
    ],
  },
  {
    title: "Containerization & Orchestration",
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      },
    ],
  },
  {
    title: "CI/CD",
    skills: [
      {
        name: "Jenkins",
        image: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      },
      {
        name: "GitHub Actions",
        image: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      },
    ],
  },
  {
    title: "IaC",
    skills: [
      {
        name: "Terraform",
        image:
          "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
      },
      {
        name: "Ansible",
        image: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      },
    ],
  },
  {
    title: "Version Control",
    skills: [
      {
        name: "Git",
        image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "GitHub",
        image: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      {
        name: "Grafana",
        image: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
      },
      {
        name: "Prometheus",
        image: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "YAML",
        image: "https://www.vectorlogo.zone/logos/yaml/yaml-icon.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "",
    role: "",
    company: "",
    date: "",
    desc: "",
    desc2: "",
    desc3: "",
    skills: ["", "", ""],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: images["Subharti.jpg"],
    school: "S V Subharti University",
    date: "Jun 2021 - Mar 2023",
    grade: "7.17 CGPA",
    desc: "I hold a dual Master of Business Administration's degree in HR and O&P MGMT.",
    degree: "MBA",
  },
  {
    id: 1,
    img: images["kalinga.jpg"],
    school: "Kalinga University",
    date: "July 2015 - Jun 2018",
    grade: "6.93 CGPA",
    desc: "I hold a Bachelor of Commerce's degree. With studies college also help us learn new skills, meet new peoples and prepare for the future. Debate activity improved skills like communication and leadership. Volunteering taught us responsibility, while sports keep us healthy and teach teamwork. Balancing studies with activities makes college fun and prepares us for the future.",
    degree: "B.Com",
  },
  {
    id: 2,
    img: images["sonai.jpg"],
    school: "Sona'i' Science Junior College",
    date: "Mar 2014 - Feb 2015",
    grade: "66.46%",
    desc: "I completed my class 12th high school education from Sona'i' Science Junior College.",
    degree: "HSSC",
  },
  {
    id: 3,
    img: images["sadhana.jpg"],
    school: "Sadhana English Medium School",
    date: "Mar 2012 - Mar 2013",
    grade: "75.09%",
    desc: "I completed my class 10th school education from Sadhana English Medium School.",
    degree: "SSC",
  },
];

export const projects = [
  {
    id: 0,
    title: "DEPLOYMENT OF A 3-TIER APPLICATION ON AWS EKS",
    date: "Apr 2024",
    description:
      "• Successfully deployed a language voting app on AWS using EKS, showcasing proficiency in cloud services like EC2 for computing, ECR for storing Docker images and EKS for managing Kubernetes clusters.",
    description2:
      "• Skilled in creating virtual machines and managing Kubernetes clusters ensuring smooth integration of various AWS services to streamline application deployment.",
    description3:
      "• Implemented CI/CD pipelines with Git, Docker and Kubernetes to automate the deployment process, resulting in improved efficiency and reliability in software delivery.",

    image: images["Kubernetes.png"],
    tags: ["Kubernetes"],
    category: "Kubernetes",
    github: "https://github.com/sudhajobs0107/EKS-voting-app-3-tier",
    dashboard: "https://sudhayadav.hashnode.dev/",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  },
  {
    id: 1,
    title: "DEVSECOPS JENKINS CL/CD PIPELINE FOR A NODE.JS APPLICATION",
    date: "Mar 2024",
    description:
      "• Orchestrated the development of a secure Node.js application with Jenkins, SonarQube, OWASP and Trivy ensuring robust security measures throughout the project.",
    description2:
      "• Automated build, test and deployment processes using Docker, Docker Compose and Jenkins streamlining development workflows and enhancing efficiency.",
    description3:
      "•  Implemented email notification integration in Jenkins for real-time updates on build statuses, fostering seamless collaboration and communication within the team.",

    image: images["DevSecOps-ToDo-App.gif"],
    tags: ["Jenkins"],
    category: "Jenkins",
    github: "https://github.com/sudhajobs0107/DevSecOps_ToDo_App",
    dashboard: "https://sudhayadav.hashnode.dev/project3devsecopsjenkinscicdpipelinefor-anodejsapplication-a-full-guide",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  },
  {
    id: 2,
    title:
      "CONTAINERIZATION OF A TWO-TIER APPLICATION USING DOCKER, DOCKER COMPOSE AND IMAGE SCANNING WITH DOCKER SCOUT",
    date: "Feb 2024",
    description:
      "•  Led the setup of a two-tier app using Docker making it easy to deploy and manage. Handled Flask app and MySQL DB setup within Docker containers.",
    description2:
      "• Automated app setup on AWS EC2 with Docker and Docker Compose making deployment hassle-free. Reduced manual work and improved efficiency.",
    description3:
      "• Implemented Docker image scanning with Docker Scout, ensuring app security. Proactively managed vulnerabilities for a safer application.",

    image: images["2-tier.gif"],
    tags: ["Docker"],
    category: "Docker",
    github: "https://github.com/sudhajobs0107/2-Tier-Flask-App-and-MYSQL",
    dashboard: "https://sudhayadav.hashnode.dev/project2containerizationofatwotierapplicationusingdockerdocker-composeandimagescanningwithdocker-scout-a-full-guide",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  },
  {
    id: 3,
    title:
      "Terraform",
    date: "Apr 2024",
    description:
      "• Used Terraform to automatically set up and manage cloud infrastructure on AWS, making it easier to deploy applications.",
    description2:
      "• Employed Ansible to quickly and consistently configure servers and cloud instances ensuring they all have the right software and settings.",
      description3:
      "•  Integrated Terraform and Ansible into our workflow to automate both infrastructure setup and application deployment making the whole process faster and more reliable.",

    image: images["Terraform-Ansible.jpg"],
    tags: ["Terraform"],
    category: "Terraform",
    github: "https://github.com/sudhajobs0107/Terraform",
    dashboard: "https://sudhayadav.hashnode.dev/",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  },
  {
    id: 4,
    title:
      "SHELL SCRIPT PROJECT FOR USER MANAGEMENT AND BACKUP IN LINUX",
    date: "Jan 2024",
    description:
      "• Developed a Linux shell script for efficient user management and directory backup.",
    description2:
      "• This project honed my skills in shell scripting, Linux system administration and version control using Git and Github.",
    description3:
      "• I implemented features for user account manipulation, group management and automated backups, enhancing my understanding of Linux system security and file handling.",

    image: images["shell-script.jpg"],
    tags: ["Shell Scripting"],
    category: "Shell Scripting",
    github: "https://github.com/sudhajobs0107/Project_on_Shell_Script",
    dashboard: "https://sudhayadav.hashnode.dev/projectonshellscript-a-full-guide",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  },
  {
    id: 5,
    title:
      "SECURED CI/CD PIPELINE : AUTOMATED DOCKER IMAGE SCANNING, CVE ANALYSIS, EMAIL NOTIFICATIONS AND PUSHING IMAGE TO DOCKER HUB FOR ENHANCED CONTAINER SECURITY",
    date: "Mar 2024",
    description:
      "• Automated Docker image scanning pipeline using GitHub Actions for CI/CD.",
    description2:
      "• Implemented CVE scanning and vulnerability analysis of Docker images using Docker Scout and Trivy ensuring security compliance.",
    description3:
      "• Orchestrated email notifications for CVE reports and scan summaries enhancing visibility and response to potential threats in containerized environments followed by pushing the scanned image to Docker Hub for distribution.",

    image: images["github-actions.jpg"],
    tags: ["GitHub Actions"],
    category: "GitHub Actions",
    github: "https://github.com/sudhajobs0107/GitHub-Actions-CiCd",
    dashboard: "https://sudhayadav.hashnode.dev/",
    member: [
      {
        name: "Sudha Yadav",
        img: images["Hero.png"],
        linkedin: "https://www.linkedin.com/in/sudha-yadav-devops-engineer/",
        github: "https://github.com/sudhajobs0107",
      },
    ],
  }
];