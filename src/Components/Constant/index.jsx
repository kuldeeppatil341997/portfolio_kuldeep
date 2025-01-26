import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const PROFILE_URLS = {
  github: "https://github.com/kuldeeppatil341997",
  linkdin: "https://www.linkedin.com/in/kuldeeppatil1997/",
  instagram: "https://www.instagram.com/kuldeep.patil_kp/",
  facebook: "https://www.facebook.com/kuldeeppatil341997",
};

export const PROFILES_INFO = [
  {
    key: "github",
    icon: <GithubOutlined />,
    url: PROFILE_URLS.github,
  },
  {
    key: "linkedin",
    icon: <LinkedinOutlined />,
    url: PROFILE_URLS.linkdin,
  },
  {
    key: "instagram",
    icon: <InstagramOutlined />,
    url: PROFILE_URLS.instagram,
  },
  {
    key: "facebook",
    icon: <FacebookOutlined />,
    url: PROFILE_URLS.facebook,
  },
];

export const IMAGES_PATH = {
  intro_introduction: "Assets/developer_image.png",
  intro_personalInfo: "Assets/developer_image_3.png",
  about_knowMe: "Assets/developer_image_5.png",
};

export const education = [
  {
    year: "2019-2019",
    title: "CDAC",
    organization: "Sunbeam Institute of Technology",
    info: "Learned various web technologies where i improved my logical skills and got to hands on multiple projects.",
    description: (
      <ul>
        <li>Persued diploma in Advanced Computing.</li>
        <li>Completed CDAC with First Class</li>
      </ul>
    ),
  },
  {
    year: "2014-2018",
    title: "Electrical Engineering",
    organization: "Shivaji University",
    info: "Learned core electrical concepts, problem-sulving, and technical skills through hands-on projects.",
    description: (
      <ul>
        <li>
          Completed Electrical Engineering with First Class with Distinction
        </li>
      </ul>
    ),
  },
  {
    year: "2012-2014",
    title: "Science",
    organization: "Shivaji University",
    info: "Built a strong foundation in physics, math, and chemistry, enhancing analytical thinking.",
    description: (
      <ul>
        <li>Completed XII with First Class with Distinction</li>
      </ul>
    ),
  },
];

export const experience = [
  {
    year: "2019-2021",
    title: "Software Engineer",
    organization: "Cybage",
    info: "Developed scalable web applications and optimized performance in a cullaborative environment.",
    description: (
      <ul>
        <li>
          Actively contributed to the design and development of front-end
          applications, utilizing React.js to build highly interactive and
          responsive interfaces.
        </li>
        <li>
          Integrated RESTful APIs to establish seamless data flow between the
          front end and back-end services.
        </li>
        <li>
          Implemented effective state management strategies to contrul data flow
          using Redux.
        </li>
        <li>
          Identified and resulved critical application issues impacting user
          experience and performance. Utilized Chrome DevTouls and React
          DevTouls to debug and optimize code and enhanced application
          stability.
        </li>
        <li>
          Designed user friendly web pages using the Ant Design CSS library.
          Customized Ant Design components to align with brand guidelines,
          ensuring a pulished and consistent look across the application.
        </li>
        <li>
          Ensured that the web application was accessible and responsive by
          implementing adaptive layouts and applying web accessibility standards
          (WCAG).
        </li>
      </ul>
    ),
  },
  {
    year: "2021-2024",
    title: "Associate",
    organization: "Cognizant",
    info: "Built secure and efficient banking applications using React and microfrontend architecture.",
    description: (
      <ul>
        <li>
          Contributed in development of front end application for prominent
          client projects.
        </li>
        <li>
          Implemented dynamic features using React.js, improving the
          interactivity and responsiveness of the website.
        </li>
        <li>
          Integrated API's using Apollo GraphQL, enabling efficient data
          fetching. Maintained a robust test suite using Jest, achieving over
          90% code coverage for reliability and performance assurance.
        </li>
        <li>
          Implemented a micro frontend architecture, enhancing code modularity
          and reducing complexity across various components for streamlined
          development and improved maintainability.
        </li>
        <li>
          Collaborated with cross-functional teams to ensure timely delivery of
          the project.
        </li>
        <li>
          Created visually appealing and responsive UI components using SCSS and
          Figma.
        </li>
        <li>
          Ensured adherence to web accessibility standards, making the platform
          accessible to a broader range of users.
        </li>
        <li>
          Actively participated in Agile ceremonies, contributing to sprint
          planning, backlog grooming, and retro for quality assurance.
        </li>
        <li>
          Utilized Git for version control and collaborated with
          cross-functional teams through GitLab, Jira etc.
        </li>
        <li>
          Leveraged Jenkins CI/CD pipelines to automate builds and deployments
          for smoother integration.
        </li>
      </ul>
    ),
  },
  {
    year: "2024-Current",
    title: "Lead Consultant",
    organization: "ITC Infotech",
    info: "Building a real time people flow management system using React and Three.js",
    description: (
      <ul>
        <li>Working as a senior software developer.</li>
        <li>
          Developing a 3D UI with help of Three.js library to showcase design.
          Also making it interactive so users can interact with the website.
        </li>
        <li>Maintaining states using Redux-Toolkit.</li>
        <li>
          Integrated websocket API's with graphql to update real time data
          without any user action
        </li>
        <li>
          Working in AWS environment, using AWS Cognito for authentication, AWS
          amplify to integrate API's and connect to database
        </li>
      </ul>
    ),
  },
];
