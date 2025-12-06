# Currency Converter App

A simple currency converter built using **React + Vite**, designed as a small practice project to understand hooks, custom hooks, API fetching, and Tailwind styling.

**Live Demo:** https://arisha-currency-converter.netlify.app/

---

## Features

- Convert any amount between currencies
- Real-time exchange rates using API
- Swap `From` and `To` currencies with one click
- Clean UI with Tailwind CSS
- Responsive layout for all screens
- Custom hook for currency data (`useCurrencyInfo`)

---

## Tech Stack

| Technology | Use |
|----------|------|
| React | UI + Components |
| Vite | Development environment |
| Tailwind CSS | Styling |
| Custom Hooks | Logic separation |

---


## The app fetches data from:  
> `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json`  
> Fallback endpoint (recommended): `https://latest.currency-api.pages.dev/v1/currencies/{from}.json`

---

## 🔧 Run Locally

```bash
# Clone this repository
git clone https://github.com/your-username/currency-converter.git

# Navigate to project
cd currency-converter

# Install dependencies
npm install

# Start the development server
npm run dev```
```
---

## What I Practiced
- State management with useState
- Side effects with useEffect
- Building reusable components (InputBox)
- Creating a custom hook for data fetching (useCurrencyInfo)
- Handling loading states
- Responsive UI design with Tailwind
