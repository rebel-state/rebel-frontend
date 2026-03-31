This Markdown file is optimized for an AI Agent (like Gemini in VS Code) to ingest as a **Technical Specification & Product Requirements Document (PRD)**. You can save this as `sovereign-voice-spec.md` in your project root.

---

# Project Specification: Sovereign Voice

**Parent Brand:** Rebel-State

**Technical Lead:** Brian Snopek

**Stack:** Astro, React, Tailwind CSS, Node.js, WebRTC

**Version:** 1.0.0 (Feb 2026)

---

## 1. Executive Summary

Sovereign Voice is a high-performance, privacy-first AI receptionist service designed to bridge the "Latency Gap" in conversational commerce. It targets high-stakes industries (Medical, Legal, Trades) by offering sub-800ms response times and absolute data sovereignty.

---

## 2. Technical Architecture

### 2.1 The Zero-Latency Voice Stack

- **STT (Speech-to-Text):** Deepgram Nova-3 (utilizing interim results for pre-processing).
- **Orchestration:** Custom Node.js layer on Vercel Edge Functions to minimize physical distance to the caller.
- **LLM (Logic):** GPT-4o Mini / Claude 3.5 Haiku (via tool-calling for CRM/Calendar).
- **TTS (Text-to-Speech):** ElevenLabs Flash v2.5 (streaming audio chunks).
- **Protocol:** Persistent Websockets / SIP Trunking (via Twilio/Telnyx).

### 2.2 Privacy & Compliance

- **HIPAA/PHIPA Ready:** Signed BAA support for medical clients.
- **PII Scrubbing:** NER (Named Entity Recognition) to redact sensitive data from transcripts.
- **Zero-Training Clause:** Enterprise API usage ensures no customer data is used for model training.
- **Data Residency:** Regional pinning (e.g., Canadian data stays on Canadian servers).

---

## 3. Core Features & Configuration

### 3.1 Agentic Capabilities

- **Real-time Scheduling:** Native OAuth integration with Google, Outlook, and Cal.com.
- **Barge-In Logic:** Instant silence upon user interruption via Voice Activity Detection (VAD).
- **Prosody Tuning:** Adjustable pitch, speed, and sentiment (Empathetic, Professional, Energetic).
- **RAG (Retrieval-Augmented Generation):** Direct ingestion of business URLs and PDFs for factual accuracy.

### 3.2 System Integrations

- **CRM:** Bi-directional write-back to HubSpot, Salesforce, and Zoho.
- **Payments:** Stripe integration for over-the-phone deposits/payments.
- **Notifications:** Real-time webhooks for Slack, Discord, and SMS continuity.

---

## 4. Business & White-Label Logic

### 4.1 Multi-Tenant Architecture

- **Agency Master:** Global dashboard for white-labeling and sub-account management.
- **Client Admin:** Individual business control over knowledge base and analytics.
- **White-Labeling:** Custom CSS/Theming (Tailwind), custom domains, and branded SIP trunks.

### 4.2 Unit Economics (Target)

- **Operating Cost:** ~$0.15/min (Base).
- **Retail Price:** ~$0.29/min or $99/mo (Early Adopter Tier).
- **Margins:** Targeted 50%+.

---

## 5. Market Strategy & Segments

| Industry           | Primary Use Case       | Key Value Proposition                      |
| ------------------ | ---------------------- | ------------------------------------------ |
| **Home Trades**    | Emergency Dispatch     | 24/7 coverage, instant lead capture.       |
| **Legal**          | Intake & Screening     | PII scrubbing, empathetic prosody.         |
| **Medical**        | Appointment Management | HIPAA compliance, Canadian data residency. |
| **B2B/Industrial** | Technical FAQ (RAG)    | Large catalog/SKU search capabilities.     |

---

## 6. Implementation Roadmap

### Phase 1: The "Instant Setup" Wizard (Current Focus)

1. **URL Ingestion:** Scrape client domain for knowledge base.
2. **Voice Mapping:** Select human-grade persona.
3. **Connection:** OAuth link for calendars.
4. **Go Live:** Provision number and test call.

### Phase 2: Revenue & Attribution

- Implement dashboard metrics for "Revenue Saved" and "Leads Qualified."

---

## 7. Developer Notes (VS Code Context)

- **Styles:** Strict Tailwind CSS usage for all UI components.
- **Framework:** Astro for SEO-optimized marketing pages; React for the heavy-lift dashboard/wizard.
- **Edge:** Deploy logic to `edge` runtime where possible to maintain the <800ms latency requirement.

---

**Next Step for AI Agent:** _Please analyze the "Instant Setup" logic and propose a React component structure for the URL Scraper and Voice Selection wizard._
