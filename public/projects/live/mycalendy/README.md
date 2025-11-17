# MY CALENDY - Project Documents

Add your project documents to the appropriate folders:

## Available Folders

- `whitepaper/` - Add whitepapers, research documents
- `roadmap/` - Add roadmaps, timeline documents
- `pitch-deck/` - Add pitch decks, presentations
- `technical-docs/` - Add technical documentation, API docs

## How to Add Documents

1. Place your files in the appropriate folder
2. Update `/src/data/projects.js` to reference your files
3. Documents will automatically appear on the website

### Example:

If you add `mycalendy-whitepaper.pdf` to the `whitepaper/` folder, update the project in `projects.js`:

```javascript
{
  id: "mycalendy",
  name: "MY CALENDY",
  // ... other fields
  documents: {
    whitepaper: ["mycalendy-whitepaper.pdf"],
    roadmap: [],
    pitchDeck: [],
    technicalDocs: []
  }
}
```
