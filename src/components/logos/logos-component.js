import React from 'react';

const Logos = ({ logos }) => {
  return logos && logos.length ? (
    <div className="fixed bottom-0 right-0 z-10 m-3 flex items-center">
      {logos.map((logo, i) => (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a title={logo.name} alt={logo.name} href={logo.href} target="_blank" rel="noopener">
          <img
            src={logo.src}
            title={`${logo.name} logo`}
            alt={`${logo.name} logo`}
            className="ml-3"
            style={logo.width ? { width: `${logo.width}px` } : undefined }
          />
        </a>
      ))
    }
    </div>
  ) : null;
}

export default Logos;