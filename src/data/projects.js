/**
 * Project Data Structure
 *
 * ALL PROJECTS IN ONE PLACE - Just change the "status" field to move between sections
 * status: "live" = appears in Live Projects
 * status: "wip" = appears in Work In Progress
 */

const allProjects = [
  // ========== LIVE PROJECTS ==========
  {
    status: "live",
    id: "mycalendy",
    name: "MY CALENDY",
    description:
      "Cognitive productivity scheduling aligned with your brain's natural peaks",
    link: "https://mycalendy.fun",
    color: "cyan",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [3, 4, 5],
    },
  },
  {
    status: "live",
    id: "prismmedia",
    name: "PRISM MEDIA",
    description: "Professional media solutions and content strategy",
    link: "https://prismmedia.pro",
    color: "purple",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },

  {
    status: "live",
    id: "daosigner",
    name: "DAOsigner Apparel",
    description:
      "Bridges designers with Web3 — earn royalties forever on every purchase",
    link: "https://daosignerapparel.com",
    color: "cyan",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "live",
    id: "cryptopolicy",
    name: "CryptoPolicy",
    description: "Web3-friendly regulation framework and policy research",
    link: "https://cryptopolicy.center",
    color: "cyan",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: ["cp1", "cp2", "cp3", "cp4", "cp5", 6, 7, 8, 9, 10],
    },
  },

  // ========== WORK IN PROGRESS ==========
  {
    status: "wip",
    id: "daostination",
    name: "DAOstination",
    description: "Airbnb killer with DAO governance and earnings distribution",
    link: "https://daostination.fun",
    color: "cyan",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "buildcamp",
    name: "BuildCamp",
    description:
      "Full-stack development through vibe-coding — learn by building",
    link: "https://buildcamp.pro",
    color: "magenta",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "safememes",
    name: "SafeMemes",
    description:
      "Rugproof tokens with sniper-resistant launches, insurance, and creator earnings",
    link: "https://safememes.fun",
    color: "magenta",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "collaborating",
    name: "Collaborating",
    description:
      "Connect, collaborate, collect — Web3 task marketplace paid in public tokens",
    link: "https://collaborating.fun",
    color: "purple",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "cartoonmill",
    name: "CartoonMill",
    description: "Script to animation in minutes — automated video production",
    link: "https://cartoonmill.com",
    color: "magenta",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "indemnifi",
    name: "inDemniFi",
    description: "DeFi risk management platform with wallet security tools",
    link: "https://indemnifi.me",
    color: "purple",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [11, 12],
    },
  },
  {
    status: "wip",
    id: "notyourbot",
    name: "NotYourBot",
    description:
      "Safe crypto trading on pump.fun & risk-based autonomous trading bots",
    link: "https://notyourbot.xyz",
    color: "purple",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "planetkeeper",
    name: "Planet Keeper",
    description: "Environmental impact tracking and carbon credit marketplace",
    link: null,
    color: "cyan",
    documents: {
      whitepaper: ["whitepaper.md"],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
  {
    status: "wip",
    id: "pollinator",
    name: "Pollinator",
    description:
      "Decentralized pollination data network for agricultural sustainability",
    link: null,
    color: "magenta",
    documents: {
      whitepaper: [],
      roadmap: [],
      pitchDeck: [],
      technicalDocs: [],
      articles: [],
    },
  },
];

// Auto-filter by status
export const liveProjects = allProjects.filter((p) => p.status === "live");
export const wipProjects = allProjects.filter((p) => p.status === "wip");

/**
 * Helper function to get document path
 * @param {string} projectId - The project ID
 * @param {string} type - live or wip
 * @param {string} docType - whitepaper, roadmap, pitch-deck, or technical-docs
 * @param {string} filename - The document filename
 * @returns {string} The full path to the document
 */
export function getDocumentPath(projectId, type, docType, filename) {
  return `/projects/${type}/${projectId}/${docType}/${filename}`;
}

/**
 * Helper function to check if project has any documents
 * @param {Object} project - The project object
 * @returns {boolean} True if project has any documents
 */
export function hasDocuments(project) {
  return Object.values(project.documents).some((docs) => docs.length > 0);
}
