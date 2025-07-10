// src/components/WritingDesk/DeskComponents/SourcesPanel.jsx
import { useState, useEffect } from "react";

export default function SourcesPanel() {
  const [sources, setSources] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSearching, setIsSearching] = useState(false);

  const categories = ["all", "AI", "Crypto", "Insurance", "Business", "Data"];

  useEffect(() => {
    // Load sources when component mounts
    loadSources();
  }, []);

  // Empty function for future Supabase integration
  const loadSources = async () => {
    try {
      // TODO: Replace with actual Supabase call
      // const { data, error } = await supabase
      //   .from('sources')
      //   .select('*')
      //   .order('created_at', { ascending: false });
      // if (error) throw error;
      // setSources(data || []);

      // For now, sources will be empty until backend is integrated
      setSources([]);
    } catch (error) {
      console.error("Error loading sources:", error);
    }
  };

  // Empty function for future AI-powered search
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      loadSources();
      return;
    }

    setIsSearching(true);
    try {
      // TODO: Implement AI-powered source searching
      // This will integrate with research APIs to find relevant sources
      // Based on the context of what the user is writing about

      // const searchResults = await aiSearchSources(query);
      // setSources(searchResults);

      // For now, just filter existing sources (which will be empty)
      const filteredSources = sources.filter(
        (source) =>
          source.title?.toLowerCase().includes(query.toLowerCase()) ||
          source.author?.toLowerCase().includes(query.toLowerCase()) ||
          source.abstract?.toLowerCase().includes(query.toLowerCase())
      );

      setSources(filteredSources);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // TODO: Filter sources by category when backend is integrated
  };

  // Empty function for future Supabase integration
  const addSource = async () => {
    try {
      // TODO: Save to Supabase
      // const { data, error } = await supabase
      //   .from('sources')
      //   .insert([sourceData]);

      // if (error) throw error;
      loadSources(); // Refresh the list
    } catch (error) {
      console.error("Error adding source:", error);
    }
  };

  // Empty function for future Supabase integration
  const removeSource = async (sourceId) => {
    try {
      // TODO: Delete from Supabase
      // const { error } = await supabase
      //   .from('sources')
      //   .delete()
      //   .eq('id', sourceId);

      // if (error) throw error;
      loadSources(); // Refresh the list
    } catch (error) {
      console.error("Error removing source:", error);
    }
  };

  return (
    <div className="sources-panel">
      <div className="sources-header">
        <h3>Research Library</h3>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search sources..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          {isSearching && <div className="search-spinner">🔍</div>}
        </div>
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="sources-list">
        {sources.length === 0 ? (
          <div className="empty-state">
            <p>
              No sources found. Start writing to get AI-powered source
              suggestions.
            </p>
          </div>
        ) : (
          sources.map((source) => (
            <div key={source.id} className="source-item">
              <div className="source-header">
                <h4>{source.title}</h4>
                <span className={`source-type ${source.type}`}>
                  {source.type}
                </span>
              </div>

              <div className="source-meta">
                <span className="author">{source.author}</span>
                <span className="year">{source.year}</span>
              </div>

              {source.abstract && (
                <p className="source-abstract">{source.abstract}</p>
              )}

              <div className="source-actions">
                <button
                  onClick={() => {
                    // TODO: Insert citation
                  }}
                  className="cite-btn"
                >
                  Cite
                </button>
                <button
                  onClick={() => window.open(source.url, "_blank")}
                  className="view-btn"
                >
                  View
                </button>
                <button
                  onClick={() => removeSource(source.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="sources-footer">
        <button onClick={() => addSource()} className="add-source-btn">
          Add Source Manually
        </button>
      </div>
    </div>
  );
}
