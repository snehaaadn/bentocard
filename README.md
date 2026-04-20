# Customer Insights Dashboard

A pixel-perfect, responsive "Bento Box" style dashboard built with modern web technologies. This project demonstrates complex, macro-and-micro CSS grid layouts, precise absolute positioning, and clean component-driven architecture.

## 🚀 Live Demo
[View Live Demo](#)

## ✨ Features

- **Bento Box Architecture:** Utilizes advanced CSS Grid (`auto-rows-fr`) to create a fluid, staggered layout that naturally adapts to content height.
- **Micro-Interactions & Positioning:** Features complex overlapping UI elements, "floating" notification pills, and custom SVG integration using precise relative/absolute positioning.
- **Fully Responsive:** Seamlessly stacks into a single column on mobile devices and expands into a multi-column grid on desktop screens without breaking the layout.
- **High-Contrast Professional UI:** A clean, data-dense aesthetic utilizing crisp whites, subtle grays, and vibrant orange accent colors.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) - For lightning-fast Hot Module Replacement (HMR).
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) - Utility-first CSS for rapid UI development.
- **Icons:** Custom inline SVGs for maximum performance and styling control.

## 📂 Project Structure

```text
src/
├── components/
│   ├── CompanyActivation.jsx     # Top-left large card with overlapping stat box
│   ├── AutomaticEnrichment.jsx   # Top-right AI enrichment data grid
│   ├── CelebrateMilestone.jsx    # Bottom-left Slack notification mockup
│   └── CRMIntegration.jsx        # Bottom-right CRM list with floating pill badges
├── App.jsx                       # Main application entry point
├── Homepage.jsx                  # The "Brain" component managing the CSS Grid
└── index.css                     # Global Tailwind imports