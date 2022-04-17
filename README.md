This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Create next-js app from the scratch on vercel using a nextjs template
https://vercel.com/new/clone

### Create next-js app from the scratch
```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

cd nextjs-blog

npm install --save-dev sass

npm run dev

# for closing all node apps
killall -9 node
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
```bash
npm i eslint-config-prettier --save-dev
```

### setup type checker
```bash
npm i prop-types --save
```

## index
[01: Setup layout app](/_docs/01--setup-layout.md)
[02: Setup tailwind.css styles](/_docs/02--setup-tailwind.css.md)
