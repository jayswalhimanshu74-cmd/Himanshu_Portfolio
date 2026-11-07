import { useState } from 'react';

const Blueprint = () => {
  const [activeNode, setActiveNode] = useState('');

  const nodeDescriptions = {
    user: {
      title: "CLIENT REQUEST",
      tech: "HTTP/2 / WebSockets",
      desc: "Incoming traffic initiated by users. Requests are processed over optimized HTTP/2 connections or long-lived bidirectional WebSockets for real-time interactivity."
    },
    frontend: {
      title: "CLIENT & USER INTERFACE",
      tech: "React / Vite / Tailwind v4",
      desc: "Single Page Application (SPA) designed with atomic components, state containers, and high-performance styling. Compiles into optimized static bundles."
    },
    springboot: {
      title: "SPRING BOOT GATEWAY",
      tech: "Spring Security / Routing",
      desc: "Monolith entry point handling request routing, thread management, CORS policies, and basic payload filters before hitting core logic."
    },
    auth: {
      title: "STATELESS SECURITY LAYER",
      tech: "JWT / OAuth2",
      desc: "Secures downstream domain services. Validates tokens, checks user authorizations, handles session expiration, and applies security filters."
    },
    logic: {
      title: "CORE DOMAIN SERVICES",
      tech: "Java 21 / Spring Boot Core",
      desc: "Houses the business workflows, asynchronous event handlers, scheduled tasks, and integrations with external intelligence engines."
    },
    db: {
      title: "PERSISTENCE ENGINE",
      tech: "PostgreSQL / MySQL",
      desc: "Relational database utilizing connection pooling, transaction isolation, indexed query paths, and automated backups for data resilience."
    },
    ai: {
      title: "AI & SEMANTIC SEARCH ENGINE",
      tech: "Gemini API / ChromaDB RAG",
      desc: "Processes unstructured document text, generates vector embeddings, runs similarity searches, and performs conversational reasoning."
    }
  };

  const getPathStyle = (pathGroup) => {
    const isActive = activeNode === pathGroup;
    return {
      stroke: isActive ? '#d6b77a' : '#38342f',
      strokeWidth: isActive ? 2.5 : 1.5,
      opacity: isActive ? 1 : 0.35,
      filter: isActive ? 'url(#glow)' : 'none',
      transition: 'all 0.4s ease'
    };
  };

  // Multiple groups can activate a shared pathway (e.g. frontend -> gateway)
  const getSharedPathStyle = (pathGroups) => {
    const isActive = pathGroups.includes(activeNode);
    return {
      stroke: isActive ? '#d6b77a' : '#38342f',
      strokeWidth: isActive ? 2.5 : 1.5,
      opacity: isActive ? 1 : 0.35,
      filter: isActive ? 'url(#glow)' : 'none',
      transition: 'all 0.4s ease'
    };
  };

  const getRectStyle = (nodeId) => {
    const isActive = activeNode === nodeId;
    return {
      stroke: isActive ? '#d6b77a' : '#38342f',
      strokeWidth: isActive ? 1.5 : 1,
      fill: isActive ? '#1e1b17' : '#15130f',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    };
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* SVG Container */}
      <div className="w-full bg-surface-container-lowest rounded-xl p-6 md:p-12 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
        {/* Blueprint background grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <svg 
          className="w-full h-auto overflow-visible select-none" 
          viewBox="0 0 1000 360"
        >
          <defs>
            <filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
              <feGaussianBlur result="blur" stdDeviation="4" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <style>{`
              .data-flow {
                stroke-dasharray: 6 6;
                animation: flow-anim 20s linear infinite;
              }
              @keyframes flow-anim { to { stroke-dashoffset: -200; } }
            `}</style>
          </defs>

          {/* Connective Paths */}
          {/* User -> Frontend */}
          <path 
            className="data-flow" 
            d="M 120 180 L 220 180" 
            fill="none" 
            style={getSharedPathStyle(['user', 'frontend'])}
          />
          {/* Frontend -> Spring Boot */}
          <path 
            className="data-flow" 
            d="M 380 180 L 480 180" 
            fill="none" 
            style={getSharedPathStyle(['frontend', 'springboot', 'logic', 'auth'])}
          />
          {/* Spring Boot -> Auth */}
          <path 
            className="data-flow" 
            d="M 640 180 L 680 180 L 680 110 L 730 110" 
            fill="none" 
            style={getSharedPathStyle(['springboot', 'auth'])}
          />
          {/* Spring Boot -> Logic */}
          <path 
            className="data-flow" 
            d="M 640 180 L 730 180" 
            fill="none" 
            style={getSharedPathStyle(['springboot', 'logic'])}
          />
          {/* Logic -> DB */}
          <path 
            className="data-flow" 
            d="M 890 180 L 930 180 L 930 110 L 950 110" 
            fill="none" 
            style={getSharedPathStyle(['logic', 'db'])}
          />
          {/* Logic -> AI */}
          <path 
            className="data-flow" 
            d="M 890 180 L 930 180 L 930 250 L 950 250" 
            fill="none" 
            style={getSharedPathStyle(['logic', 'ai'])}
          />

          {/* Interactive Nodes */}
          {/* USER */}
          <g 
            onMouseEnter={() => setActiveNode('user')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(20, 140)"
          >
            <rect className="node-rect" height="80" rx="8" width="100" style={getRectStyle('user')} />
            <text fill={activeNode === 'user' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="50" y="45">USER</text>
          </g>

          {/* FRONTEND */}
          <g 
            onMouseEnter={() => setActiveNode('frontend')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(220, 130)"
          >
            <rect className="node-rect" height="100" rx="8" width="160" style={getRectStyle('frontend')} />
            <text fill="#d6b77a" fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="45">FRONTEND</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="70">React / Next.js</text>
          </g>

          {/* SPRING BOOT GATEWAY */}
          <g 
            onMouseEnter={() => setActiveNode('springboot')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(480, 110)"
          >
            <rect className="node-rect" height="140" rx="8" width="160" style={getRectStyle('springboot')} />
            <text fill="#d6b77a" fontFamily="Syne" fontSize="14" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="60">SPRING BOOT</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="85">API Gateway</text>
          </g>

          {/* AUTH */}
          <g 
            onMouseEnter={() => setActiveNode('auth')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(730, 70)"
          >
            <rect className="node-rect" height="80" rx="8" width="160" style={getRectStyle('auth')} />
            <text fill={activeNode === 'auth' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="40">AUTH</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="60">OAuth2 / JWT</text>
          </g>

          {/* CORE LOGIC */}
          <g 
            onMouseEnter={() => setActiveNode('logic')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(730, 170)"
          >
            <rect className="node-rect" height="80" rx="8" width="160" style={getRectStyle('logic')} />
            <text fill={activeNode === 'logic' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="40">CORE LOGIC</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="60">Domain Services</text>
          </g>

          {/* DATABASE (DB) */}
          <g 
            onMouseEnter={() => setActiveNode('db')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(930, 70)"
          >
            <rect className="node-rect" height="80" rx="40" width="80" style={getRectStyle('db')} />
            <text fill={activeNode === 'db' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="40" y="45">DB</text>
          </g>

          {/* AI ENGINE */}
          <g 
            onMouseEnter={() => setActiveNode('ai')} 
            onMouseLeave={() => setActiveNode('')} 
            transform="translate(930, 210)"
          >
            <rect className="node-rect" height="80" rx="8" width="80" style={getRectStyle('ai')} />
            <text fill={activeNode === 'ai' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="40" y="45">AI</text>
          </g>
        </svg>
      </div>

      {/* Details Box */}
      <div className="h-28 bg-surface-container border border-outline-variant/10 rounded-xl p-5 flex flex-col justify-center transition-all duration-300">
        {activeNode ? (
          <div className="flex flex-col gap-1.5 animate-fade-in">
            <div className="flex justify-between items-center">
              <span className="font-headline-md text-sm text-primary-container tracking-wider font-bold">
                {nodeDescriptions[activeNode].title}
              </span>
              <span className="font-technical text-[11px] text-outline">
                {nodeDescriptions[activeNode].tech}
              </span>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant">
              {nodeDescriptions[activeNode].desc}
            </p>
          </div>
        ) : (
          <p className="font-technical text-sm text-outline text-center">
            HOVER OVER ARCHITECTURAL NODES TO INSPECT THE DATA FLOW INFRASTRUCTURE
          </p>
        )}
      </div>
    </div>
  );
};

export default Blueprint;
