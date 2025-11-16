// src/services/editorAI.js
import Anthropic from "@anthropic-ai/sdk";
import { allArticles } from "../data/articles";

// Initialize Anthropic client
const getAnthropicClient = () => {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey || apiKey === "your_api_key_here") {
    throw new Error(
      "Anthropic API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env file"
    );
  }

  return new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true, // Required for browser usage
  });
};

// Build context from published articles to learn writing style
const buildStyleContext = () => {
  const publishedArticles = allArticles.slice(0, 5); // Get first 5 articles as examples

  const styleExamples = publishedArticles
    .map(
      (article) => `
TITLE: ${article.title}
CATEGORY: ${article.category}

${article.content}

---
`
    )
    .join("\n");

  return styleExamples;
};

// The Editor's system prompt - exactly as you specified
const EDITOR_SYSTEM_PROMPT = `Do not use hyphens anywhere, or other instances of AI involvement in the users writing. If you create content for the user, you need to create it only in their exact tone, authenticity, style, tempo, and how they just sound to keep the content genuine and the same as the user gave you. The goal is to extend their own language, vernacular, and style of writing as the content you are reviewing for them.

You are an expert editor with skills in creating content and aligning content with its purpose and intent and its audience. You are collaborating with an individual who is writing about AI, crypto, regulation, business, data, insurance and a few other topics so you need to be diverse with a strong backbone in creating your own opinion and defending it to support the mission and goal - which is to create content that connects and influences others to make more sound informed decisions through reading my content.

Your role is not to determine the exact content or to write, but to assist in defining the approach to each article and the topics, or paragraphs included.

You are to act as a journalist advisor and editor of a new kind who is an expert in every single topic in this project and your role is to assist in creating an approach to the content and how to design the content in a way that it is informative and deeply engaging and relevant.

You are to act as an editor to the highest degree but at the conceptual and idea level first and only at the paragraph and sentence layer and grammatical layer second.

Your role is to help define the mission of the article and how to approach it and write it to make it relatable, impactful, and informative.

All articles are to be concise first and informative afterwards. Being concise is the first priority while being engaging and informative and impactful is the second.

Your role is to help shape the article in a way that will keep the users attention and have them wanting more without using any call-to-actions. The point is to create engaging approach based on the topic and how to further enhance and bring out awareness others wouldnt see when reading about that topic elsewhere.

Here are some published articles to understand the writing style and approach:

${buildStyleContext()}

Make sure you understand this style and help shape future articles in the same authentic voice.`;

/**
 * Analyze article content using Claude
 * @param {string} title - Article title
 * @param {string} content - Article content
 * @returns {Promise<Object>} Analysis results with metrics and suggestions
 */
export const analyzeArticle = async (title, content) => {
  if (!content || content.trim().length < 50) {
    throw new Error("Article content is too short to analyze. Write at least 50 characters.");
  }

  const anthropic = getAnthropicClient();

  const userPrompt = `Please analyze this article draft and provide:

1. STRATEGIC ANALYSIS (Conceptual/Idea Level):
   - What is the core mission of this article?
   - How can the approach be improved to make it more relatable and impactful?
   - What perspective or awareness is missing that would make this stand out?
   - Rate the following on a scale of 1-5:
     * Topic Depth (how thoroughly the subject is explored)
     * Authority (credibility and expertise conveyed)
     * Engagement (ability to hold reader attention)
     * Conciseness (eliminating unnecessary words while keeping impact)
     * Voice Consistency (maintaining the authentic writing style)

2. TACTICAL FEEDBACK (Sentence/Grammar Level):
   - Specific suggestions to improve clarity
   - Areas where conciseness can be improved
   - Any grammatical issues (only if critical)

3. RESEARCH NEEDS:
   - What facts or claims need verification?
   - What sources or citations would strengthen this?

ARTICLE TITLE: ${title || "Untitled"}

ARTICLE CONTENT:
${content}

Please respond in this exact JSON format (no markdown, just valid JSON):
{
  "metrics": {
    "topicDepth": <number 1-5>,
    "authority": <number 1-5>,
    "engagement": <number 1-5>,
    "conciseness": <number 1-5>,
    "voiceConsistency": <number 1-5>
  },
  "strategicAnalysis": {
    "coreMission": "<brief statement>",
    "approachImprovements": ["<suggestion 1>", "<suggestion 2>"],
    "missingPerspective": "<what would make this stand out>"
  },
  "tacticalSuggestions": [
    {
      "type": "structure|clarity|conciseness",
      "text": "<specific suggestion>",
      "priority": "high|medium|low"
    }
  ],
  "researchNeeds": {
    "factsToVerify": ["<claim 1>", "<claim 2>"],
    "suggestedSources": ["<source type 1>", "<source type 2>"]
  }
}`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      system: EDITOR_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    const responseText = message.content[0].text;

    // Clean markdown code fences if present
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/```\s*$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\s*/, '').replace(/```\s*$/, '');
    }

    // Parse the JSON response
    const analysis = JSON.parse(cleanedText.trim());

    return {
      ...analysis,
      raw: responseText,
    };
  } catch (error) {
    console.error("Error analyzing article:", error);

    if (error.message.includes("API key")) {
      throw new Error("API key configuration error. Please check your .env file.");
    }

    throw new Error(`Analysis failed: ${error.message}`);
  }
};

/**
 * Get improvement suggestion for a specific section
 * @param {string} section - The text section to improve
 * @param {string} feedback - The type of feedback needed
 * @returns {Promise<string>} Improved version
 */
export const improveParagraph = async (section, feedback) => {
  const anthropic = getAnthropicClient();

  const userPrompt = `Please improve this section based on the following feedback: ${feedback}

IMPORTANT: Maintain the exact same tone, authenticity, and style as the original. Only enhance clarity and impact, do not rewrite in a different voice.

ORIGINAL SECTION:
${section}

Please respond with ONLY the improved version, no explanations or meta-commentary.`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 2048,
      system: EDITOR_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    return message.content[0].text.trim();
  } catch (error) {
    console.error("Error improving paragraph:", error);
    throw new Error(`Improvement failed: ${error.message}`);
  }
};

/**
 * Find relevant sources for article claims
 * @param {string} topic - The topic or claim to research
 * @returns {Promise<Array>} List of suggested sources
 */
export const findSources = async (topic) => {
  const anthropic = getAnthropicClient();

  const userPrompt = `Suggest authoritative sources for the following topic or claim: "${topic}"

Please respond in this exact JSON format:
{
  "sources": [
    {
      "type": "academic|news|data|industry",
      "title": "<source name>",
      "description": "<why this source is credible>",
      "searchQuery": "<what to search for>"
    }
  ]
}`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: EDITOR_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    const responseText = message.content[0].text;

    // Clean markdown code fences if present
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/```\s*$/, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/^```\s*/, '').replace(/```\s*$/, '');
    }

    const result = JSON.parse(cleanedText.trim());

    return result.sources || [];
  } catch (error) {
    console.error("Error finding sources:", error);
    throw new Error(`Source search failed: ${error.message}`);
  }
};

/**
 * Quick content check
 * @param {string} content - Content to check
 * @returns {Promise<Object>} Quick metrics
 */
export const quickCheck = async (content) => {
  if (!content || content.trim().length < 20) {
    return {
      wordCount: 0,
      readingTime: 0,
      conciseness: 0,
      engagement: 0,
    };
  }

  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // 200 words per minute

  return {
    wordCount: words,
    readingTime,
    conciseness: words < 500 ? 5 : words < 1000 ? 4 : words < 2000 ? 3 : 2,
    engagement: 0, // Will be calculated by full analysis
  };
};

/**
 * Chat with The Editor about your article
 * @param {Array} messages - Array of message objects with {role, content}
 * @param {string} articleTitle - Current article title
 * @param {string} articleContent - Current article content
 * @returns {Promise<string>} AI response
 */
export const chatWithEditor = async (messages, articleTitle, articleContent) => {
  const anthropic = getAnthropicClient();

  // Prepend article context to the first user message
  const contextualMessages = messages.map((msg, idx) => {
    if (idx === 0 && msg.role === 'user') {
      return {
        role: 'user',
        content: `ARTICLE CONTEXT:
Title: ${articleTitle || 'Untitled'}
Content: ${articleContent || 'No content yet'}

---

${msg.content}`
      };
    }
    return msg;
  });

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      system: EDITOR_SYSTEM_PROMPT,
      messages: contextualMessages,
    });

    return message.content[0].text;
  } catch (error) {
    console.error("Error in editor chat:", error);
    throw new Error(`Chat failed: ${error.message}`);
  }
};
