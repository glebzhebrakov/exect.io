# Exect Website — Architecture & Messaging

## Product positioning

**Category:** Enterprise AI Infrastructure Engineering  
**Brand:** Exect  
**Primary claim:** We design, build and optimize enterprise AI platforms.

Exect is positioned as an infrastructure company adjacent to Databricks, Snowflake, NVIDIA AI Enterprise, and private inference platforms—not as a ChatGPT wrapper, local-LLM hobby shop, or staff-augmentation consultancy.

### Audience

Medium and large enterprises that need AI deployed **inside** their security, network, and data perimeter: VPC, on-prem, hybrid, or sovereign cloud.

### Jobs to be done

- Design private, production-ready AI platforms
- Size and operate GPU infrastructure
- Optimize inference economics and latency
- Integrate AI into existing enterprise systems
- Establish governance, security, and operational ownership

### Competitive frame

| Peer set | What we borrow | What we reject |
| --- | --- | --- |
| Databricks / Snowflake | Platform gravity, enterprise trust, technical tone | Commodity warehouse messaging |
| Together / Baseten / Fireworks | Inference & serving depth | Pure hosted API product surface |
| HF / NVIDIA AI Enterprise | Stack credibility | License/reseller posture |
| OpenAI / Anthropic Enterprise | Ambition of production AI | Public-model-first narrative |

### Messaging pillars

1. **Architecture before models** — control plane, serving, data boundaries first  
2. **Private by default** — residency and access as design constraints  
3. **Production economics** — cost, latency, utilization as first-class metrics  
4. **Operable platforms** — ownership transfer, SLOs, runbooks  

### Tone

Enterprise, engineering-first, trustworthy, modern. No hype. No “AI will change the world.” Confident and technical.

---

## Site information architecture

```
/ (single-page marketing site)
├── Header (sticky-absolute nav)
├── Hero — brand + claim + CTAs + topology visual
├── Positioning / value proposition
├── Capabilities (services)
├── Industries
├── Technology stack
├── Why Exect
├── Delivery process
├── Selected work (case study placeholders)
├── FAQ
├── CTA / contact form
└── Footer
```

### Design system

| Token | Role |
| --- | --- |
| Cool gray wash `#f3f5f7` | Page atmosphere |
| Ink `#0c1219` | Primary type / CTA fills |
| Accent teal `#0d6e6a` | Technical signal (not purple SaaS) |
| IBM Plex Sans / Mono | Enterprise-technical typography |
| Hairline dividers | Structure without card chrome |
| Full-bleed topology SVG | Hero visual anchor |

### Motion

1. Hero text reveal (staggered fade/translate)  
2. Architecture diagram line draw + node pulse  
3. FAQ accordion + CTA/hover state transitions  

### Technical stack

- Next.js App Router  
- Tailwind CSS v4 design tokens in `globals.css`  
- Content sourced from `src/lib/content.ts`  
- Client islands: FAQ accordion, contact form  

---

## Section copy map

| Section | Purpose |
| --- | --- |
| Hero | Brand-first; one claim; private platform promise |
| Value | Reframe from “LLM deploy” to platform engineering |
| Capabilities | Full service catalog as engineering surface |
| Industries | Regulated / high-stakes buyers |
| Stack | Prove technical depth without vendor lock-in |
| Why | Differentiation vs model access / consulting |
| Process | Delivery as platform program |
| Work | Production metrics language |
| FAQ | Objection handling for infrastructure buyers |
| CTA | Architecture review as next step |

---

## Implementation notes

- Contact form is UI-only; wire to CRM/calendar before launch.  
- Case studies are anonymized placeholders; replace with approved metrics.  
- Email `platform@exect.io` is a brand placeholder—confirm before go-live.
