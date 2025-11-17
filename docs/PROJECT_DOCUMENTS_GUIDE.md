# Project Documents Guide

This guide explains how to add and manage project documents (whitepapers, roadmaps, pitch decks, etc.) for your portfolio.

## Folder Structure

All project documents are stored in:
```
public/projects/
├── live/           # For live, deployed projects
│   ├── mycalendy/
│   ├── prismmedia/
│   ├── daostination/
│   ├── daosigner/
│   ├── cryptopolicy/
│   └── buildcamp/
└── wip/            # For work-in-progress projects
    ├── safememes/
    ├── collaborating/
    ├── cartoonmill/
    ├── indemnifi/
    └── notyourbot/
```

Each project folder contains 4 subfolders:
- `whitepaper/` - Whitepapers and research documents
- `roadmap/` - Project roadmaps and timelines
- `pitch-deck/` - Pitch decks and presentations
- `technical-docs/` - Technical documentation, architecture docs

## How to Add Documents

### Step 1: Add Your Files

Place your document files in the appropriate project folder:

**Example:** Adding a whitepaper for SafeMemes:
```
public/projects/wip/safememes/whitepaper/safememes-whitepaper.pdf
```

### Step 2: Update the Data File

Open `src/data/projects.js` and find your project. Update the `documents` object:

```javascript
{
  id: "safememes",
  name: "SafeMemes",
  description: "Rugproof tokens with sniper-resistant launches...",
  link: "https://safememes.fun",
  color: "magenta",
  documents: {
    whitepaper: ["safememes-whitepaper.pdf"],  // ✅ Add filename here
    roadmap: ["safememes-roadmap-2025.pdf"],   // Can add multiple files
    pitchDeck: [],
    technicalDocs: []
  }
}
```

### Step 3: That's It!

The documents will automatically appear on your website. Users can click on the project to see available documents.

## Supported File Formats

- PDF (`.pdf`) - Best for whitepapers, pitch decks
- Markdown (`.md`) - Good for technical docs, roadmaps
- Images (`.jpg`, `.png`) - For visual roadmaps, diagrams
- PowerPoint (`.pptx`) - For pitch decks

## Example: Full Project with Documents

```javascript
{
  id: "mycalendy",
  name: "MY CALENDY",
  description: "Cognitive productivity scheduling...",
  link: "https://mycalendy.fun",
  color: "cyan",
  documents: {
    whitepaper: [
      "mycalendy-whitepaper-v1.pdf",
      "cognitive-scheduling-research.pdf"
    ],
    roadmap: [
      "2025-roadmap.pdf",
      "development-timeline.png"
    ],
    pitchDeck: [
      "mycalendy-pitch-deck.pdf"
    ],
    technicalDocs: [
      "api-documentation.md",
      "architecture-overview.pdf"
    ]
  }
}
```

## Adding New Projects

To add a completely new project:

1. **Create folder structure:**
   ```bash
   mkdir -p public/projects/wip/yourproject/{whitepaper,roadmap,pitch-deck,technical-docs}
   ```

2. **Add to projects.js:**
   ```javascript
   // Add to wipProjects array
   {
     id: "yourproject",
     name: "Your Project Name",
     description: "Brief description",
     link: "https://yourproject.com",
     color: "cyan", // or "purple", "magenta"
     documents: {
       whitepaper: [],
       roadmap: [],
       pitchDeck: [],
       technicalDocs: []
     }
   }
   ```

3. **Add your documents and update the arrays**

## Tips

- **Naming Convention:** Use descriptive filenames (e.g., `safememes-whitepaper-v2.pdf` instead of `wp.pdf`)
- **File Sizes:** Keep PDFs under 10MB for better loading times
- **Multiple Versions:** You can add multiple versions of documents (e.g., v1, v2)
- **No Documents?** If a project has no documents, leave the arrays empty `[]` - nothing will display

## Current Projects

### Live Projects (6)
- MY CALENDY
- PRISM MEDIA
- DAOstination
- DAOsigner Apparel
- CryptoPolicy
- BuildCamp

### WIP Projects (5)
- SafeMemes
- Collaborating
- CartoonMill
- inDemniFi
- NotYourBot

All are ready to accept documents!
