import React from "react";

export function CardSkeleton() {
  return (
    <div className="card skeleton">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-button"></div>
    </div>
  );
}

export function TextSkeleton({ lines = 3 }) {
  return (
    <div className="skeleton">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeleton-text" style={{ marginBottom: 8 }}></div>
      ))}
    </div>
  );
}
