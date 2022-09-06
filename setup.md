1. Create a folder `mkdir eth-scripts && cd eth-scripts`
2. Create example JS file `echo "console.log('hello')" > example.js`
3. Run it `node example.js` 
4. Create example TS file `echo "const a: number = 1; console.log(a)" > example.ts`
5. Try running it `node example.ts`
6. Install typescript with package manager (Yarn) `yarn add typescript`
   1. `node_modules`
   2. `package.json`
   3. `yarn.lock` 
7. Run `yarn tsc example.ts`
   1. `example.js` - TypeScript compiler generates JS file
8. Run `node example.js`
9. Create file `getContractCreationTimestamp.ts`
   1. Install ethers [link](https://docs.ethers.io/v5/getting-started/#installing)
   2. Insert the code and try running it
    ```typescript
    import { ethers } from "ethers";
    const provider = new ethers.providers.JsonRpcProvider();

    const bn = await provider.getBlockNumber();

    console.log(bn);
    ```
    3. ```  Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022'...```
       1. Node concatanates the files, in a string-like way and puts it inside function body. So all your top-level code ends up in a function which is no async [answe](https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level/56590390#56590390)
       2. Workaround: put async code inside async function and invoke it later


10. erorrs with module or commonJS, node-fetch wanted modules but later sth needed commonjs, `esbuild-register` solved it
