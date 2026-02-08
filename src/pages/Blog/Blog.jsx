import React, { useState, useEffect } from "react";
import Card from "../../components/ui/Card.jsx";
import SEO from "../../components/seo/SEO.jsx";
import { CardSkeleton } from "../../components/ui/Skeleton.jsx";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulate API call - replace with actual API later
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "AI and the Future of Teaching",
          excerpt: "How intelligent systems can assist lesson design, provide formative assessment insights, and help teachers personalize learning at scale.",
          category: "AI in Education",
          author: "Prashanth Kubsad",
          date: "2024-02-01",
          readTime: "5 min read",
        },
        {
          id: 2,
          title: "Designing Adaptive Curricula",
          excerpt: "Principles for building curriculum that adapts to learners - from knowledge point dependencies to mastery-based progression.",
          category: "Pedagogy",
          author: "Vrushabh Rajaghatta",
          date: "2024-01-28",
          readTime: "7 min read",
        },
        {
          id: 3,
          title: "Item Response Theory in Practice",
          excerpt: "Implementing IRT for better student assessment and profiling. Understanding difficulty parameters and adaptive question selection.",
          category: "EdTech",
          author: "Prashanth Kubsad",
          date: "2024-01-20",
          readTime: "10 min read",
        },
        {
          id: 4,
          title: "The Intelligence Layer Concept",
          excerpt: "Why modern education needs an intelligence layer - helping learners and institutions make better learning decisions through data and AI.",
          category: "AI in Education",
          author: "Prashanth Kubsad",
          date: "2024-01-15",
          readTime: "6 min read",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const filteredPosts = filter === "all" 
    ? posts 
    : posts.filter(p => p.category === filter);

  const categories = ["all", ...new Set(posts.map(p => p.category))];

  return (
    <>
      <SEO
        title="Blog | Thought Leadership in AI Education"
        description="Insights on AI in education, adaptive learning systems, and educational technology from the Bhuviona team."
        url="https://www.bhuviona.com/blog"
      />

      <section className="section">
        <div className="container">
          <div className="h2">Thought Leadership</div>
          <div className="p-sm" style={{ marginTop: 6 }}>
            Insights on AI in education, adaptive learning systems, and the future of EdTech
          </div>

          {/* Category Filters */}
          <div className="tagRow" style={{ marginTop: 18 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`tag ${filter === cat ? 'tag-active' : ''}`}
                onClick={() => setFilter(cat)}
                style={{ cursor: "pointer" }}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div style={{ marginTop: 18 }} className="grid-2">
            {loading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              filteredPosts.map((post) => (
                <Card key={post.id}>
                  <div className="p-sm" style={{ color: "var(--aqua)", fontWeight: 600 }}>
                    {post.category}
                  </div>
                  <div className="h3" style={{ marginTop: 8 }}>{post.title}</div>
                  <div className="p-sm" style={{ marginTop: 8 }}>
                    {post.excerpt}
                  </div>
                  <div className="p-sm" style={{ 
                    marginTop: 12, 
                    display: "flex", 
                    gap: 12, 
                    flexWrap: "wrap",
                    color: "var(--muted)" 
                  }}>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div style={{ 
                    marginTop: 12, 
                    fontWeight: 700, 
                    color: "var(--aqua)", 
                    cursor: "pointer" 
                  }}>
                    Read more →
                  </div>
                </Card>
              ))
            )}
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center" style={{ marginTop: 40 }}>
              <div className="p">No posts found in this category.</div>
            </div>
          )}

          {/* Newsletter Signup */}
          {!loading && (
            <div style={{ marginTop: 32 }}>
              <Card style={{ textAlign: "center" }}>
                <div className="h3">Subscribe to Our Newsletter</div>
                <div className="p" style={{ marginTop: 8, maxWidth: 500, margin: "8px auto 0" }}>
                  Get the latest insights on AI in education delivered to your inbox monthly.
                </div>
                <div style={{ 
                  marginTop: 16, 
                  display: "flex", 
                  gap: 8, 
                  maxWidth: 400, 
                  margin: "16px auto 0",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="formInput"
                    style={{ flex: "1 1 250px" }}
                  />
                  <button className="btn btn-solid">
                    Subscribe
                  </button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
