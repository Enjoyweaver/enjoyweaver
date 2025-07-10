File Structure

-/public
-/src
--/assets
--/components
---Footer.jsx
---Navbar.jsx
--/data
---articles.js
--/pages
---About.jsx
---Articles.jsx
---Data.jsx
---Home.jsx
---Resume.jsx
---Showcase.jsx
--App.css
--App.jsx
--main.jsx
-index.html

/src
├── /components
│ ├── /WritingDesk
│ │ ├── WritingDesk.jsx # Main desk container
│ │ ├── DeskSurface.jsx # Writing pad/screen area
│ │ ├── LeftShelf.jsx # Sources, research, citations
│ │ ├── RightShelf.jsx # Tools, settings, progress
│ │ ├── ScenicView.jsx # Top background view
│ │ └── /DeskComponents
│ │ ├── WritingPad.jsx # Main writing interface
│ │ ├── SourcesPanel.jsx # Research & citations
│ │ ├── ToolsPanel.jsx # Writing tools
│ │ ├── ProgressTracker.jsx # Writing progress
│ │ ├── AmbientControls.jsx # Sound, lighting, theme
│ │ └── TheEditor.jsx # AI editorial assistant
│ ├── /UI
│ │ ├── DeskDrawer.jsx # Slide-out panels
│ │ ├── DeskLamp.jsx # Lighting controls
│ │ ├── DeskAccessories.jsx # Pens, notebooks, etc.
│ │ └── ViewSelector.jsx # Scenic view chooser
│ └── /Writing
│ ├── TextEditor.jsx # Core writing engine
│ ├── CitationEngine.jsx # Smart citation system
│ ├── VoiceAnalyzer.jsx # Voice consistency
│ └── ResearchAssistant.jsx # AI research helper
├── /pages
│ └── Writer.jsx # Main writing room page
├── /assets
│ ├── /desk-textures # Wood, leather, metal textures
│ ├── /scenic-views # Background environments
│ ├── /desk-accessories # Pens, books, lamp images
│ └── /ambient-sounds # Environmental audio
├── /styles
│ ├── writing-desk.css # Main desk styling
│ ├── desk-animations.css # Interaction animations
│ └── responsive-desk.css # Mobile adaptations
└── /utils
├── deskPresets.js # Desk configuration presets
├── ambientManager.js # Sound and lighting management
└── writingAnalytics.js # Writing session tracking
