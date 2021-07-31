# Installation

Install pnpm

```
npm i -g pnpm
pnpm install
```

# Reproduce Go to Implementation(s) results with No implementations found issue

* Open `libs/child/src/src_item_1.ts`
* Put cursor over `assign` in `import { assign } from '@ctx-core/object'`
* Run the **Go to Implementation(s)** command
* **No implementations found**
* Run the **Go to Declarations or Usages** command
* Jumps to `dist/assign.d.ts` in the `@ctx-core/object` package
