# Angular ESLint

Source code used in the article [Configure ESLint with Angular](https://blouppy.com/blog/2023-04-03-configure-eslint-with-angular/) on the [Blouppy](https://blouppy.com) website.

It is a new Angular 22 application (`ng new`) with [ESLint](https://eslint.org/) added by `ng add angular-eslint`:

- `eslint.config.js`: the ESLint flat config (ESLint and typescript-eslint recommended rules, Angular's rules for TypeScript files and for templates, accessibility included).
- `angular.json`: a `lint` target, so `ng lint` runs ESLint on `src/**/*.ts` and `src/**/*.html`.
- `.vscode/extensions.json`: recommends the ESLint extension for VS Code.

## Project version

- Angular 22. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.
- Node.js 22 (an active or maintenance LTS version supported by Angular 22).

## NPM packages included

- **angular-eslint**: 22.6.0 (the Angular CLI builder, schematics, ESLint plugins and template parser in one package)
- **eslint**: 10.14.0
- **@eslint/js**: 10.0.1 (ESLint's recommended rules)
- **typescript-eslint**: 8.71.0 (the TypeScript parser and rules)

## Run it

```bash
npm ci
npm run lint           # ng lint
npx ng lint --fix      # fix what can be fixed automatically
npm start              # ng serve on http://localhost:4200
npm run build          # production build in dist/
```

## Give a Star! :star:

If you like or are using this project please give it a star. Thanks!

## Support this project! :pray:

If you want to help me to maintain this project or add improvements, it would be a pleasure!
