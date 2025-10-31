// GitHub API Service
// Fetches activity from user's repositories

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

// Project repository mapping - Format: "owner/repo-name": "Display Name"
// Updated to use Enjoyweaver repos (migrated from old orgs)
const PROJECT_REPOS = {
  "Enjoyweaver/MyCalendy": "MY CALENDY",
  "Enjoyweaver/Prism": "PRISM MEDIA",
  "DAOveloped/DAOstination": "DAOstination",
  "Enjoyweaver/SafeMemeLabs": "SafeMemes",
  "Enjoyweaver/Collaborating.vercel.app": "Collaborating",
  "Enjoyweaver/daosigners": "DAOsigner Apparel",
  "Enjoyweaver/cartoonmill": "CartoonMill",
  "Enjoyweaver/indemnificrypto": "inDemniFi",
  "Enjoyweaver/cryptopolicy": "CryptoPolicy",
  "Enjoyweaver/notyourbot": "NotYourBot",
  "Enjoyweaver/buildcamp": "BuildCamp",
};

const PROJECT_COLORS = {
  "MY CALENDY": "cyan",
  "PRISM MEDIA": "purple",
  "DAOstination": "cyan",
  "SafeMemes": "magenta",
  "Collaborating": "purple",
  "DAOsigner Apparel": "cyan",
  "CartoonMill": "magenta",
  "inDemniFi": "purple",
  "CryptoPolicy": "cyan",
  "NotYourBot": "purple",
  "BuildCamp": "magenta",
};

/**
 * Fetch commits for a specific repository (full path: owner/repo)
 */
export async function fetchRepoCommits(repoPath, limit = 5) {
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoPath}/commits?per_page=${limit}`,
      { headers }
    );

    if (!response.ok) {
      if (response.status === 404) {
        // Repo not found or private without token
        console.warn(`Repo not found or inaccessible: ${repoPath}`);
        return [];
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const commits = await response.json();
    return commits;
  } catch (error) {
    console.error(`Error fetching commits for ${repoPath}:`, error);
    return [];
  }
}

/**
 * Fetch recent activity across all projects (last 5 commits per project)
 */
export async function fetchRecentActivity(commitsPerProject = 5) {
  // Fetch latest commits for each project repo
  const projectActivities = await Promise.all(
    Object.keys(PROJECT_REPOS).map(async (repoPath) => {
      const commits = await fetchRepoCommits(repoPath, commitsPerProject);

      if (commits.length === 0) return null;

      const projectName = PROJECT_REPOS[repoPath];

      // Map all commits for this project
      const projectCommits = commits.map((commit) => ({
        project: projectName,
        projectColor: PROJECT_COLORS[projectName],
        repoPath: repoPath,
        repoName: repoPath.split("/")[1],
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: commit.commit.author.date,
        sha: commit.sha,
        url: commit.html_url,
      }));

      return {
        project: projectName,
        projectColor: PROJECT_COLORS[projectName],
        repoPath: repoPath,
        commits: projectCommits,
        latestDate: projectCommits[0].date, // For sorting projects
      };
    })
  );

  // Filter out nulls and sort projects by latest commit date
  const validProjects = projectActivities
    .filter((p) => p !== null)
    .sort((a, b) => new Date(b.latestDate) - new Date(a.latestDate));

  return validProjects;
}

/**
 * Format time ago (e.g., "2 hours ago", "3 days ago")
 */
export function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    const years = Math.floor(interval);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    const months = Math.floor(interval);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 86400;
  if (interval > 1) {
    const days = Math.floor(interval);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 3600;
  if (interval > 1) {
    const hours = Math.floor(interval);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 60;
  if (interval > 1) {
    const minutes = Math.floor(interval);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

/**
 * Get activity summary stats
 */
export async function getActivityStats() {
  const activities = await fetchRecentActivity(1);

  return {
    totalProjects: Object.keys(PROJECT_REPOS).length,
    lastUpdated: activities.length > 0 ? activities[0].date : null,
  };
}
