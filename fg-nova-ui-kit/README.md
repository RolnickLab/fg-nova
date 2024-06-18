# Fg Nova UI Kit

This is the start of the code version of Fg Nova UI Kit. We use [shadcn/ui](https://ui.shadcn.com/) as a component reference. Components are built using [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Run the workshop app

First, make sure you have Node and NPM installed on your machine. Checkout `.nvmrc` file for recommended Node version. Then, run the following commands:

```bash
# Install dependencies
npm install

# Run app in development mode
npm run dev
```

The workshop app is now running on the following URL: http://localhost:5173/

## Add a new component

First, checkout the list of [available components](https://ui.shadcn.com/docs/components). Then use the CLI to add a component to the project. This will create a new component in folder `/src/components/ui` and install any dependencies it might have. Since the component is copied to the project, not installed as a dependency, it can be tweaked as needed.

```bash
npx shadcn-ui@latest add [component-name]
```
