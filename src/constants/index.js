import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  }
];

export const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "GreenTV DAO",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "2021 - Present",
    points: [
      "Developing NFT marketplace platform using Next.js and Web3 technologies",
      "Leading development of DEX sniping bot with real-time market analysis",
      "Managing cross-functional teams and implementing agile methodologies",
      "Expertise in smart contracts and blockchain integration",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Nimbus Network",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "2020 - 2021",
    points: [
      "Building DeFi platform with comprehensive blockchain solutions",
      "Developing with React.js, Next.js, and Web3 technologies",
      "Implementing backend solutions using Node.js and MongoDB",
      "Managing AWS infrastructure and cloud deployments",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Automatix Labs",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "2019 - 2020",
    points: [
      "Leading development teams in blockchain and web3 projects",
      "Overseeing technical architecture and project timelines",
      "Implementing agile methodologies and best practices",
      "Managing client relationships and project deliverables",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Singapore Institution of Technology",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "2013 - 2017",
    points: [
      "Bachelor's Degree in Computer Science",
      "Focus on blockchain technology and distributed systems",
      "Research in smart contract development and security",
      "Academic projects in DeFi and cryptocurrency",
    ],
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "GreenTV DAO NFT Marketplace",
    description: "Developed a comprehensive NFT marketplace platform with Next.js and Web3 integration, enabling users to trade digital assets securely.",
    link: "https://gtvnft.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Tracker AI Bot",
    description: "Created an advanced trading bot with real-time market analysis and automated trading strategies for cryptocurrency markets.",
    link: "https://dev-app.trackerai.bot/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Nimbus Network DApp",
    description: "Built a DeFi platform with comprehensive blockchain solutions, including staking, farming, and cross-chain functionality.",
    link: "https://nimbusnetwork.io/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Minion NFT Marketplace",
    description: "Developed an NFT marketplace focused on unique digital collectibles, featuring secure wallet integration and auction functionality.",
    link: "https://minion-nft-marketplace.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "OneClick DeFi",
    description: "Created a user-friendly DeFi platform with automated yield farming strategies and portfolio management tools.",
    link: "https://defi.oneclick.fi/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Automatix Labs Platform",
    description: "Led the development of a blockchain development platform with integrated tools for smart contract deployment and testing.",
    link: "https://automatixlabs.io/",
  },
];