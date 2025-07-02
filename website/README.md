# Website

This project is a Next.js (TypeScript) web application, set up with Tailwind CSS v3, Contentful CMS integration, and react-icons for icon support.

## Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Contentful Setup
1. Create a Contentful account and space.
2. Add your Contentful API keys to a `.env.local` file:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```
3. Use the Contentful SDK in your code to fetch content.

### Icons
Use `react-icons` for icon support. Example:
```tsx
import { FaBeer } from 'react-icons/fa';

<FaBeer />
```

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS v3
- Contentful CMS
- react-icons

---

For more details, see the documentation for each technology.
