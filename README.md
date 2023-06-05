# Animated-Image-Gallery
A performant image gallery site that can handle hundreds of large images and deliver a great user experience.
- I'll use the pexels Api and chakra-UI component library. I'll also use next.js component to optimize the images fetched from the pexels API
Run - (npx create-next-app image-gallery)


![2023-05-30 10_32_50-](https://github.com/Marx-wrld/Animated-Image-Gallery/assets/105711066/29118daf-5d4d-4995-88fe-45ae1d48ca43)

![2023-05-30 10_32_18-](https://github.com/Marx-wrld/Animated-Image-Gallery/assets/105711066/feb082dc-4f0d-4e09-8219-e57f5f29325f)

##### Image Info
![2023-06-05 12_41_00-](https://github.com/Marx-wrld/Animated-Image-Gallery/assets/105711066/5726bbba-98f5-45e6-935f-ce3decd46ab9)

Head over to https://www.pexels.com/api/new/ and create a new API key. Rename `.env.example` to `.env.local` and add the API key in it.

```
PEXELS_API_KEY = 
```
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies by running the following command.

```bash
npm install
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
