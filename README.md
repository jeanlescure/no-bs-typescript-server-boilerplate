![Typescript](https://assets.jeanlescure.io/f8mvuN.svg)
![plus](https://assets.jeanlescure.io/gxaoy.svg)
![Express](https://assets.jeanlescure.io/4qCHvECk.svg)

# No BS Typescript (Express) Server Boilerplate

This boilerplate focuses on keeping configuration to a minimum yet supporting all latest Typescript
features for making it as easy and worry-free as possible to get started building a performance
optimized API server using Express.js.

This project is open to updates by its users, I ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing).

:rotating_light: **Before continuing:**

- If you're creating a React.js app consider looking at my [No BS React Boilerplate]()
- If you're creating a Javascript/Typescript module consider looking at my [No BS Typescript Boilerplate]()
- If you're creating a Lambda function for AWS consider looking at my [No BS Typescript Lambda Boilerplate]()

## Like this project? :heart:

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) :coffee:
- Supporting me on [Patreon](https://www.patreon.com/jeanlescure) :trophy:
- Starring this repo on [Github](https://github.com/jeanlescure/string-crypto) :star2:

## How to get started using this boilerplate

The logic of the code is structured in such a way that all you need to worry about is:

- Creating Routes under the `./src/routes/` directory
- Creating middlewares (if needed) under the `./src` directory

The easiest way to understand how this structure works is to simply open the route defined in
`./src/routes/hello-world/index.ts` and start traversing up the directory structure until you reach
the `server.ts` file at the root of this repo.

Similarly, with the middlewares in mind, open the `./src/auth/index.ts` file and then the
`server.ts` file at the root of this repo.

## Running the server

I chose Rollup to handle the transpiling, compression, and any other transformations needed to get
your Typescript code running as quickly and performant as possible.

There's two ways of running the server:

**Development**

```
yarn dev
```

Runs Rollup in watch mode which means it will hot-reload the server as you modify your source! This
includes running node with the `--inspect` flag so you can inspect your code using [Google Chrome Dev Tools](https://nodejs.org/en/docs/guides/debugging-getting-started/)
(by opening `chrome://inspect` in your browser), you're welcome ;)

**Production**

```
yarn start
```

This command will first build the `dist/server.js` file then run it using Node. The `dist` file is
uglified and tree-shaken so it loads/runs faster.

If you just want to build the production server without running it then run:

```
yarn build
```

## What about tests?

The ethos of this boilerplate is to provide a solid foundation, from there on you are owner of your
project and get to decide on the rest of the stack to build upon.

And if you're looking for a suggestion, I recommend [Jest](https://jestjs.io/) :thumbsup:

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
