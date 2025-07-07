# Next.js Routing Demonstration

This is a [Next.js](https://nextjs.org) project that demonstrates key App Router concepts through interactive examples. It shows what's working behind the scenes in Next.js routing, particularly the differences between layouts and templates.

## 🎯 What This Demo Shows

- **Layout vs Template behavior**: How layouts persist state while templates re-render
- **Nested routing**: How layouts compose and wrap child components
- **Route groups**: Organization without affecting URL structure
- **State persistence**: How component state behaves during navigation

## 🚀 Quick Start

Run the development server and explore the routing examples:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the standard Next.js homepage.

**To see the routing demonstrations**, navigate to:
- [http://localhost:3000/nesting-layout](http://localhost:3000/nesting-layout) - Basic layout demo
- [http://localhost:3000/nesting-layout/child](http://localhost:3000/nesting-layout/child) - Nested layouts
- [http://localhost:3000/nesting-layout/template](http://localhost:3000/nesting-layout/template) - Layout vs Template comparison

## 📚 Understanding the Demo

See [ROUTING_EXPLAINED.md](./ROUTING_EXPLAINED.md) for a detailed explanation of what's happening behind the scenes.

### Key Concepts Demonstrated

1. **Layouts persist state** - Form inputs maintain values during navigation
2. **Templates reset state** - Components re-render completely on navigation
3. **Visual boundaries** - Color-coded borders show the layout hierarchy
4. **File-based routing** - How the folder structure maps to URLs

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
