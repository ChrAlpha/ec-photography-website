## Introduction

Home page from https://vercel.com/templates/next.js/photo-blog

## Installation

Clone & create this repo locally with the following command:

```bash
git clone -b dev https://github.com/ECarry/photography-website-nextjs14-full-stack.git
```

1. Install dependencies using pnpm:

```sh
npm i
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
cp .env.example .env
```

3. Input everything you need for the env.

`NEXTAUTH_SECRET` is a random string used by the library to encrypt tokens and email verification hashes, and it's mandatory to keep things secure! 🔥 🔐 . You can use:

```sh
openssl rand -base64 32
```

or https://generate-secret.vercel.app/32 to generate a random value for it.

## Tech Stack + Features

- Photo upload with EXIF extraction
- Built-in auth
- Light/dark mode

## Database

This project uses MySQL database on PlanetScale. To setup a DB for your local dev:

1. Create a free account and a [new Database](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide#create-a-database)
2. From the dashboard, create a branch and click "Connect" button.
3. Hit `Create password` and select `Prisma` in `Connect with` dropdown
4. Copy the url to `.env` `DATABASE_URL` file
5. run `npx prisma generate` & `npx prisma db push`

## Init user

you can set up the username, password and email in advance in the .env file.

```
# init user
USER_EMAIL = test@test.com
USERNAME = test
USER_PASSWORD = test
in the .env.example file
```

just `/login`

## Upload images

1. login `http://localhost:3000/dashboard`, and switch `gallery`, Upload your images

### Frameworks

- ▲[Next.js](https://nextjs.org/)(using App Directory and React Server Components) – React framework for building performant apps with the best developer experience
- 🔒[Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- 📀[Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- ▲[Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [PlanetScale](https://planetscale.com/) – A cutting-edge database platform for seamless, scalable data management
- [Uploadthing](https://uploadthing.com/) - File Uploads For Next.js Developers

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge
