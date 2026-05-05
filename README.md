# SecOps Breach Containment And Impact Analysis System

An enterprise-style cloud security operations dashboard that analyzes suspicious breach signals across AWS, Azure, and GCP. The system ingests JSON and CSV event data, calculates breach risk, generates alerts, writes structured logs, and exports executive reports for incident response.

## Why This System Matters

Without this system, a company can miss the first signs of account takeover, public data exposure, disabled logging, or large data transfers. That delay can turn a small cloud incident into customer data loss, downtime, regulatory reporting failure, and expensive emergency response.

## Real-World Scenario

A cloud support and security operations team receives alerts from CloudTrail, GuardDuty, Azure Defender, Azure Identity Protection, and Google Security Command Center. The raw events are noisy. Engineers need one command center that scores risk, prioritizes alerts, identifies affected accounts, and produces incident-ready reports.

## Core Capabilities

- Cloud breach signal analysis across AWS, Azure, and GCP
- Risk classification using HIGH, MEDIUM, and LOW categories
- Alert generation with response SLA targets
- Structured JSON logging
- JSON and CSV ingest with event normalization
- Executive TXT report
- Machine-readable JSON report
- CSV event report for audit review
- Flask dashboard with command-center UI
- API-style endpoints for summary, alerts, events, and full report

## Folder Structure

```text
SecOps-Breach-Containment-And-Impact-Analysis-System/
├── app.py
├── run_analysis.py
├── requirements.txt
├── README.md
├── breach_analyzer/
│   ├── __init__.py
│   ├── analyzer.py
│   ├── data_loader.py
│   ├── logger_config.py
│   └── report_writer.py
├── data/
│   ├── sample_breach_events.json
│   └── sample_breach_events.csv
├── logs/
├── reports/
├── static/
│   └── css/
│       └── styles.css
└── templates/
    └── dashboard.html

