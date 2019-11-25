# Snapshot report for `packages/build/tests/plugins/load/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Can override plugins

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin from netlify-plugin-example␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    > OVERRIDE: "init" method in "netlify-plugin-example" has been overriden by "netlify-plugin-override"␊
    ┌────────────────────────────────────────────────────────┐␊
    │ 1. Running init lifecycle from netlify-plugin-override │␊
    └────────────────────────────────────────────────────────┘␊
    ␊
    Overridden init␊
    ␊
     √  netlify-plugin-override.init completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Can use Node module plugins

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin from netlify-plugin-test␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running init lifecycle from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  netlify-plugin-test.init completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Can use local plugins

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running init lifecycle from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  netlify-plugin-test.init completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Plugin.id is optional

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running init lifecycle from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  netlify-plugin-test.init completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Reports missing plugins

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error: 'does-not-exist' plugin not installed or found␊
    Cannot find module 'does-not-exist' from '/file/path'␊
    STACK TRACE␊
    `