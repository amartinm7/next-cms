This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Create next-js app from the scratch
```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

cd nextjs-blog

npm install --save-dev sass

npm run dev
```

### Setup scripts on the package.json 
````json
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}
````

### Setup linter
run `npm run lint` or `npm lint` to generate the .eslintrc.json config file. Choose default options.

## index
[01: Setup layout app](/_docs/01--setup-layout.md)
