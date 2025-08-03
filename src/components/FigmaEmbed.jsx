// src/components/FigmaEmbed.jsx
import React from 'react';

function FigmaEmbed() {
    return (
        <div className="figma-embed-container">
            <iframe 
            style="border: 1px solid rgba(0, 0, 0, 0.1);" 
            width="800" 
            height="450" 
            src="https://embed.figma.com/proto/YECKxuTSE7mV7yZblbYwMw/Windie-Speed---UI-UX-Photo-App?node-id=9818-3975&p=f&scaling=scale-down&content-scaling=fixed&page-id=6301%3A57&starting-point-node-id=9818%3A3975&embed-host=share" allowfullscreen></iframe>
        </div>
    );
}

export default FigmaEmbed;