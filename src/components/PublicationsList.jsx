"use client";

import { useState, useEffect } from "react";
import PublicationDetails from "./PublicationDetails";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicationsList({ searchTerm = "" }) {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPub, setSelectedPub] = useState(null);
  const [summaries, setSummaries] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const limit = 12; // publications per page

  // Fetch publications
  const fetchPublications = async (search = "", currentPage = 1, append = false) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      params.append("limit", limit);
      params.append("offset", (currentPage - 1) * limit);

      const response = await fetch(`/api/publications?${params}`);
      if (!response.ok) throw new Error("Failed to fetch publications");

      const data = await response.json();
      const newPubs = data.publications || [];

      setPublications((prev) => (append ? [...prev, ...newPubs] : newPubs));
      setHasMore(newPubs.length === limit);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount or when searchTerm changes
  useEffect(() => {
    setPage(1);
    fetchPublications(searchTerm, 1);
  }, [searchTerm]);

  // Load more
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPublications(searchTerm, nextPage, true);
  };

  // Scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Loading state for first page
  if (loading && page === 1) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-cyan-400 text-lg animate-pulse">
        🚀 Fetching space biology data...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
      </h1>

      {error && <div className="text-red-500 text-center mb-6">{error}</div>}

      <AnimatePresence mode="wait">
        {selectedPub ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => {
                setSelectedPub(null);
                scrollToTop();
              }}
              className="mb-6 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              ← Back to Publications
            </button>
            <PublicationDetails publication={selectedPub} />
          </motion.div>
        ) : (
          <>
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {publications.map((pub, index) => (
                <motion.div
                  key={`${pub._additional?.id || "no-id"}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-cyan-900 rounded-2xl shadow-xl p-5 hover:shadow-cyan-700/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <h2 className="text-lg font-semibold text-cyan-300 mb-2 line-clamp-2">
                    {pub.title || "Untitled Publication"}
                  </h2>
                  {pub.abstract && (
                    <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                      {pub.abstract}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button
                      onClick={() => {
                        setSelectedPub(pub);
                        scrollToTop();
                      }}
                      className="px-4 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
                    >
                      🧠 Summarize
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPub(pub);
                        scrollToTop();
                      }}
                      className="px-4 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
                    >
                      📘 View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPub(pub);
                        scrollToTop();
                      }}
                      className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:opacity-90 transition"
                    >
                      🌌 Visualize
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPub(pub);
                        scrollToTop();
                      }}
                      className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:opacity-90 transition"
                    >
                      🌌 Mind Map
                    </button>
                  </div>

                  {/* Inline AI Summary */}
                  {summaries[pub.title] && (
                    <div className="mt-3 p-3 bg-black/40 border border-cyan-800 rounded-lg text-gray-300 text-sm">
                      <p>{summaries[pub.title]}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {hasMore && !loading && (
              <div className="text-center mt-10">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 shadow-lg transition"
                >
                  🔽 Load More
                </button>
              </div>
            )}

            {loading && page > 1 && (
              <div className="text-center text-cyan-400 mt-4 animate-pulse">
                Loading more publications...
              </div>
            )}

            {!hasMore && !loading && publications.length > 0 && (
              <div className="text-center text-gray-500 mt-8">
                🚀 You’ve reached the end of the list!
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
