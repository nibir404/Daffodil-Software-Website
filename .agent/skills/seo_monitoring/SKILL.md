---
name: SEO Content Monitoring Skill
description: Instructions and tools for auditing website content for SEO best practices, including meta tags, heading hierarchy, keyword density, and performance.
---

# SEO Content Monitoring Skill

This skill provides a comprehensive framework for auditing and monitoring SEO content on the Daffodil Software Ltd website.

## 🎯 Objectives

- Ensure every page Has a unique `<title>` and `<meta name="description">`.
- Verify clear `<h1>` to `<h3>` heading hierarchy.
- Audit image `alt` tags for accessibility and SEO.
- Monitor keyword distribution and content quality.
- Identify and fix broken internal links.
- Check page load performance and accessibility (Lighthouse standards).

## 🛠 Available Tools

- **Browser Subagent**: Use to render pages and audit the DOM for SEO tags.
- **grep_search**: Use to find semantic HTML issues (e.g., missing `alt` tags) in local source code.
- **Python Scanner**: Use the included `scripts/seo_scanner.py` to automate meta tag and heading checks.

## 📋 Standard SEO Audit Checklist

### 1. Meta Data

- [ ] **Title Tag**: 50-60 characters, includes primary keyword.
- [ ] **Meta Description**: 150-160 characters, includes call-to-action (CTA).
- [ ] **Robots Tag**: Ensure pages are indexable (unless intended otherwise).
- [ ] **Canonical Tag**: Point to the preferred version of the page.

### 2. Content & Structure

- [ ] **H1 Heading**: Exactly one per page, contains the main keyword.
- [ ] **H2-H4 Headings**: Logical flow, includes secondary keywords.
- [ ] **Content Length**: Minimum 300 words for informational pages.
- [ ] **Keyword Density**: 1-2% for primary keywords.
- [ ] **Internal Links**: Descriptive anchor text (avoid "click here").

### 3. Media & Assets

- [ ] **Image Alt Tags**: Descriptive, no keyword stuffing.
- [ ] **File Names**: Hyphenated keywords (e.g., `software-development-services.png`).
- [ ] **Schema Markup**: JSON-LD for Organization, Service, and Breadcrumbs.

## 🚀 Execution Instructions for the Agent

1. **Initial Audit**:
   - Run `grep_search` to find all components in `src/app/pages`.
   - Use the `scripts/seo_scanner.py` to check for basic semantic issues.
2. **Detailed Page Audit**:
   - For a specific URL, use the `browser_subagent` to view the page.
   - Extract the DOM and verify meta tags and heading structure.
3. **Reporting**:
   - Follow the template in `examples/audit_example.md`.
   - Provide a "Critical", "Warning", and "Optimized" status for each page.

## 📁 Skill Structure

- `SKILL.md`: Main instructions.
- `scripts/`: Automation scripts.
- `resources/`: Detailed checklists and keyword lists.
- `examples/`: Sample reports and templates.
