import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="section">
          <div className="container" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <Card>
              <div className="h2" style={{ color: "var(--aqua)" }}>Something went wrong</div>
              <div className="p" style={{ marginTop: 12 }}>
                We're sorry for the inconvenience. The page encountered an unexpected error.
              </div>
              <div className="p-sm" style={{ marginTop: 8 }}>
                Please try refreshing the page or contact support if the problem persists.
              </div>
              <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="solid" onClick={this.handleRefresh}>
                  Refresh Page
                </Button>
                <Button onClick={() => window.location.href = "/"}>
                  Go Home
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div style={{ 
                  marginTop: 20, 
                  padding: 12, 
                  background: "#f5f5f5", 
                  borderRadius: 8, 
                  textAlign: "left",
                  fontSize: 12,
                  fontFamily: "monospace",
                  overflow: "auto"
                }}>
                  <strong>Error Details:</strong>
                  <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    {this.state.error.toString()}
                  </pre>
                </div>
              )}
            </Card>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
