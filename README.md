# README

## Getting started

This project is a monorepo managed with `yarn workspace`. To install dependencies run in the root directory :

```bash
yarn install
```

> If you make use of VS Code, you can directly open the `js-under-pressure.code-workspace` in order to have a better developper experience

To start the project you can lauch from ROOT :

```bash
yarn backend:start:dev
yarn frontend:start:dev
```

> Both commands are "sugar npm scripts" making use of the dedicated lauch dev scripts of both back and front projects
