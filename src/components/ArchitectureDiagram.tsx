export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 960 540"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="plane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d6e6a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1a5f8a" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect
        x="48"
        y="40"
        width="864"
        height="460"
        rx="2"
        fill="url(#plane)"
        stroke="#b8c2ce"
        strokeOpacity="0.7"
      />

      {/* Control plane */}
      <rect x="80" y="68" width="200" height="72" stroke="#0c1219" strokeOpacity="0.35" />
      <text x="96" y="96" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        CONTROL PLANE
      </text>
      <text x="96" y="118" className="fill-ink-muted" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        Auth · Policy · Catalog
      </text>

      {/* Gateway */}
      <rect x="320" y="68" width="200" height="72" stroke="#0c1219" strokeOpacity="0.35" />
      <text x="336" y="96" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        API GATEWAY
      </text>
      <text x="336" y="118" className="fill-ink-muted" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        Routing · Quotas · Logs
      </text>

      {/* Observability */}
      <rect x="560" y="68" width="200" height="72" stroke="#0c1219" strokeOpacity="0.35" />
      <text x="576" y="96" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        OBSERVABILITY
      </text>
      <text x="576" y="118" className="fill-ink-muted" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        SLO · Cost · Traces
      </text>

      {/* Serving cluster */}
      <rect
        x="80"
        y="180"
        width="680"
        height="200"
        stroke="#0d6e6a"
        strokeOpacity="0.55"
        strokeWidth="1.25"
      />
      <text x="96" y="208" fill="#0d6e6a" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        SERVING CLUSTER · KUBERNETES / GPU
      </text>

      {/* Model nodes */}
      {[
        { x: 110, label: "LLM-A", sub: "Interactive" },
        { x: 280, label: "LLM-B", sub: "Batch" },
        { x: 450, label: "EMBED", sub: "Retrieval" },
        { x: 620, label: "RERANK", sub: "Quality" },
      ].map((node, i) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y="236"
            width="130"
            height="88"
            fill="#fafbfc"
            stroke="#0d6e6a"
            strokeOpacity="0.7"
            className="arch-node"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <text
            x={node.x + 16}
            y="270"
            fill="#0c1219"
            fontSize="13"
            fontFamily="IBM Plex Mono, monospace"
          >
            {node.label}
          </text>
          <text
            x={node.x + 16}
            y="292"
            fill="#4a5563"
            fontSize="11"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* Data plane */}
      <rect x="80" y="416" width="320" height="56" stroke="#0c1219" strokeOpacity="0.35" />
      <text x="96" y="440" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        DATA PLANE
      </text>
      <text x="96" y="458" className="fill-ink-muted" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        Vector · Docs · Warehouse
      </text>

      <rect x="440" y="416" width="320" height="56" stroke="#0c1219" strokeOpacity="0.35" />
      <text x="456" y="440" className="fill-ink" fontSize="12" fontFamily="IBM Plex Mono, monospace">
        ENTERPRISE SYSTEMS
      </text>
      <text x="456" y="458" className="fill-ink-muted" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        IAM · CI/CD · Ticketing
      </text>

      {/* Connecting lines */}
      <path
        d="M180 140 V180"
        stroke="#0d6e6a"
        strokeOpacity="0.45"
        className="arch-line"
      />
      <path
        d="M420 140 V180"
        stroke="#0d6e6a"
        strokeOpacity="0.45"
        className="arch-line"
        style={{ animationDelay: "0.2s" }}
      />
      <path
        d="M660 140 V180"
        stroke="#0d6e6a"
        strokeOpacity="0.45"
        className="arch-line"
        style={{ animationDelay: "0.4s" }}
      />
      <path
        d="M240 380 V416"
        stroke="#0d6e6a"
        strokeOpacity="0.45"
        className="arch-line"
        style={{ animationDelay: "0.6s" }}
      />
      <path
        d="M600 380 V416"
        stroke="#0d6e6a"
        strokeOpacity="0.45"
        className="arch-line"
        style={{ animationDelay: "0.8s" }}
      />
    </svg>
  );
}
