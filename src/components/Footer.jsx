import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Windie Victoria Speed | All rights reserved
      </div>
    </footer>
  );
}
