import { useState } from 'react';

const Blueprint = () => {
  const [activeNode, setActiveNode] = useState('');

  const nodeDescriptions = {
    user: {
      title: "CLIENT REQUEST",
      tech: "HTTP/2 / WebSockets",
      desc: "Incoming user interactions initiated from browser sessions over secure HTTPS and bidirectional STOMP WebSockets."
    },
    frontend: {
      title: "CLIENT & USER INTERFACE",
      tech: "React / Vite",
      desc: "Single Page Application (SPA) designed with component state management, responsive Tailwind styles, and fast client-side routing."
    },
    springboot: {
      title: "SPRING BOOT - REST API",
      tech: "Spring Boot / REST Controllers",
      desc: "Core backend API gateway handling endpoint routing, JSON payload validation, CORS policies, and rate limiting with Bucket4j."
    },
    auth: {
      title: "AUTH & ACCESS CONTROL",
      tech: "JWT / Spring Security",
      desc: "HttpOnly refresh cookies, stateless access tokens, password hashing with BCrypt, and role-based URL authorization filters."
    },
    logic: {
      title: "CORE DOMAIN SERVICES",
      tech: "Spring Data JPA / STOMP WebSockets",
      desc: "Transactional service layer executing business workflows, asynchronous event queues, and real-time push broadcasts."
    },
    db: {
      title: "PERSISTENCE ENGINE",
      tech: "PostgreSQL",
      desc: "Primary relational database utilizing connection pooling with HikariCP, transaction isolation, and versioned schema migrations via Flyway."
    },
    ai: {
      title: "AI & SEMANTIC SEARCH ENGINE",
      tech: "FastAPI + Gemini ",
      desc: "Python FastAPI microservice performing document text extraction, vector embeddings in ChromaDB, and conversational RAG reasoning."
    }
  };

  const getSharedPathStyle = (pathGroups) => {
    const isActive = pathGroups.includes(activeNode);
    return {
      stroke: isActive ? '#d6b77a' : 'rgba(214, 183, 122, 0.45)',
      strokeWidth: isActive ? 2.5 : 1.5,
      opacity: isActive ? 1 : 0.7,
      filter: isActive ? 'url(#glow)' : 'none',
      transition: 'all 0.3s ease'
    };
  };

  const getRectStyle = (nodeId) => {
    const isActive = activeNode === nodeId;
    return {
      stroke: isActive ? '#d6b77a' : 'rgba(255, 255, 255, 0.15)',
      strokeWidth: isActive ? 2 : 1,
      fill: isActive ? '#221f1b' : '#15130f',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    };
  };

  const handleKeyDown = (e, nodeId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveNode(activeNode === nodeId ? '' : nodeId);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">

      {/* Topology Frame Container */}
      <div className="w-full bg-surface-container-lowest rounded-xl p-6 md:p-8 lg:p-10 border border-surface-variant shadow-2xl relative overflow-hidden">
        {/* Subtle dot matrix background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d6b77a 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        {/* Caption */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 relative z-10">
          <span className="font-technical text-xs text-primary-container font-semibold tracking-wider">

          </span>
          <span className="font-technical text-[11px] text-on-surface-variant/70">
            Tap or hover a node to see its role
          </span>
        </div>

        {/* SVG Diagram Canvas */}
        <svg
          className="w-full h-auto overflow-visible select-none"
          viewBox="0 0 1020 360"
        >
          <defs>
            <filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
              <feGaussianBlur result="blur" stdDeviation="3.5" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <style>{`
              .data-flow {
                stroke-dasharray: 6 6;
                animation: flow-anim 25s linear infinite;
              }
              @keyframes flow-anim { to { stroke-dashoffset: -200; } }
              .topology-node:focus-visible rect {
                stroke: #d6b77a !important;
                stroke-width: 2.5px !important;
                filter: url(#glow);
              }
            `}</style>
          </defs>

          {/* Connective Paths */}
          {/* User -> Frontend */}
          <path
            className="data-flow"
            d="M 115 180 L 180 180"
            fill="none"
            style={getSharedPathStyle(['user', 'frontend'])}
          />
          {/* Frontend -> Spring Boot */}
          <path
            className="data-flow"
            d="M 330 180 L 390 180"
            fill="none"
            style={getSharedPathStyle(['frontend', 'springboot', 'logic', 'auth'])}
          />
          {/* Spring Boot -> Auth */}
          <path
            className="data-flow"
            d="M 550 180 L 585 180 L 585 105 L 620 105"
            fill="none"
            style={getSharedPathStyle(['springboot', 'auth'])}
          />
          {/* Spring Boot -> Logic */}
          <path
            className="data-flow"
            d="M 550 180 L 620 180"
            fill="none"
            style={getSharedPathStyle(['springboot', 'logic'])}
          />
          {/* Auth & Logic -> DB */}
          <path
            className="data-flow"
            d="M 780 105 L 825 105"
            fill="none"
            style={getSharedPathStyle(['auth', 'db'])}
          />
          {/* Logic -> DB */}
          <path
            className="data-flow"
            d="M 780 180 L 805 180 L 805 105 L 825 105"
            fill="none"
            style={getSharedPathStyle(['logic', 'db'])}
          />
          {/* Logic -> AI */}
          <path
            className="data-flow"
            d="M 780 180 L 805 180 L 805 240 L 825 240"
            fill="none"
            style={getSharedPathStyle(['logic', 'ai'])}
          />

          {/* Nodes */}
          {/* USER */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: Client Request"
            onMouseEnter={() => setActiveNode('user')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('user')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'user')}
            transform="translate(20, 140)"
          >
            <rect height="80" rx="8" width="95" style={getRectStyle('user')} />
            <text fill={activeNode === 'user' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="47.5" y="45">USER</text>
          </g>

          {/* FRONTEND */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: Frontend Client"
            onMouseEnter={() => setActiveNode('frontend')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('frontend')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'frontend')}
            transform="translate(180, 130)"
          >
            <rect height="100" rx="8" width="150" style={getRectStyle('frontend')} />
            <text fill="#d6b77a" fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="75" y="45">FRONTEND</text>
            <text fill="#d0c5b5" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="75" y="70">React / Vite</text>
          </g>

          {/* SPRING BOOT - REST API */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: Spring Boot REST API"
            onMouseEnter={() => setActiveNode('springboot')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('springboot')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'springboot')}
            transform="translate(390, 110)"
          >
            <rect height="140" rx="8" width="160" style={getRectStyle('springboot')} />
            <text fill="#d6b77a" fontFamily="Syne" fontSize="13" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="55">SPRING BOOT</text>
            <text fill="#d0c5b5" fontFamily="JetBrains Mono" fontSize="10.5" textAnchor="middle" x="80" y="80">REST API</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="9.5" textAnchor="middle" x="80" y="105">Controller Layer</text>
          </g>

          {/* AUTH */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: JWT and Spring Security"
            onMouseEnter={() => setActiveNode('auth')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('auth')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'auth')}
            transform="translate(620, 65)"
          >
            <rect height="75" rx="8" width="160" style={getRectStyle('auth')} />
            <text fill={activeNode === 'auth' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="38">AUTH</text>
            <text fill="#d0c5b5" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="58">JWT / Spring Security</text>
          </g>

          {/* CORE LOGIC */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: Core Domain Logic"
            onMouseEnter={() => setActiveNode('logic')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('logic')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'logic')}
            transform="translate(620, 160)"
          >
            <rect height="75" rx="8" width="160" style={getRectStyle('logic')} />
            <text fill={activeNode === 'logic' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="80" y="38">CORE LOGIC</text>
            <text fill="#d0c5b5" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="80" y="58">Domain Services</text>
          </g>

          {/* DATABASE (DB: PostgreSQL) - Has plenty of margin from right edge */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: PostgreSQL Database"
            onMouseEnter={() => setActiveNode('db')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('db')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'db')}
            transform="translate(825, 65)"
          >
            <rect height="75" rx="8" width="150" style={getRectStyle('db')} />
            <text fill={activeNode === 'db' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="75" y="36">DB</text>
            <text fill="#d6b77a" fontFamily="JetBrains Mono" fontSize="10.5" fontWeight="600" textAnchor="middle" x="75" y="56">PostgreSQL</text>
          </g>

          {/* AI ENGINE (FastAPI + Gemini) - Has plenty of margin from right edge */}
          <g
            className="topology-node cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-label="Node: FastAPI and Gemini AI"
            onMouseEnter={() => setActiveNode('ai')}
            onMouseLeave={() => setActiveNode('')}
            onFocus={() => setActiveNode('ai')}
            onBlur={() => setActiveNode('')}
            onKeyDown={(e) => handleKeyDown(e, 'ai')}
            transform="translate(825, 200)"
          >
            <rect height="80" rx="8" width="150" style={getRectStyle('ai')} />
            <text fill={activeNode === 'ai' ? '#d6b77a' : '#e8e1da'} fontFamily="Syne" fontSize="12" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="75" y="30">AI ENGINE</text>
            <text fill="#d0c5b5" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="75" y="50">FastAPI + Gemini</text>
            <text fill="#998f81" fontFamily="JetBrains Mono" fontSize="8.5" textAnchor="middle" x="75" y="68">(DocuMind AI)</text>
          </g>
        </svg>
      </div>

      {/* Details Box */}
      <div className="min-h-24 bg-surface-container border border-surface-variant rounded-xl p-5 flex flex-col justify-center transition-all duration-300">
        {activeNode ? (
          <div className="flex flex-col gap-1.5 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="font-headline-md text-sm text-primary-container tracking-wider font-bold">
                {nodeDescriptions[activeNode].title}
              </span>
              <span className="font-technical text-xs text-on-surface-variant font-medium">
                {nodeDescriptions[activeNode].tech}
              </span>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant max-w-[60ch] leading-relaxed">
              {nodeDescriptions[activeNode].desc}
            </p>
          </div>
        ) : (
          <p className="font-technical text-xs text-on-surface-variant/80 text-center">
            Tap or hover a node to see its role
          </p>
        )}
      </div>

    </div>
  );
};

export default Blueprint;
