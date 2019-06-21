<h1 align="center">MobX React Lite Context</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/oknoorap">
    <img alt="Twitter: oknoorap" src="https://img.shields.io/twitter/follow/oknoorap.svg?style=social" target="_blank" />
  </a>
</p>

> Simple MobX React Lite with Context

## Install

```sh
# yarn
yarn add mobx mobx-react-lite mobx-react-lite-context

# npm
npm install mobx mobx-react-lite mobx-react-lite-context --save
```

## Example
More example via [codesandbox.io](https://codesandbox.io/s/mobx-react-lite-context-3iwcu)

```tsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './page'
import Store from './store'

const App = () => {
  return (
    <Store.Provider>
      <Page />
    </Store.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// page.tsx
import React from 'react'
import Store, { IStore } from './store'

export default () => {
  const { counter }: IStore = useStore<IStore>()

  return (
    <Store.Consumer>
      <button onClick={() => counter.add()}>Increment {counter.value}</button>
    </Store.Consumer>
  )
}

// store.ts
import { createContext } from "mobx-react-lite-context";
import Counter, { IStore as ICounterStore } from "./counter";

export interface IStore {
  counter: ICounterStore;
}

export default createContext<IStore>({
  counter: new Counter()
});


// counter.ts
import { observable, action } from 'mobx'

interface IStore {
  value: number;
  add(): void;
}

export default class Store implements IStore {
  @observable value = 0;
  @action add() {
    this.value++;
  }
}
```

## 💰 Donate
Send me ETH to this address `0xab1c4e446900ad20bf5fae1be67f87d54dacd2f0`

## Author

👤 **Ribhararnus Pracutian &lt;oknoorap@gmail.com&gt;**

* Twitter: [@oknoorap](https://twitter.com/oknoorap)
* Github: [@oknoorap](https://github.com/oknoorap)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/oknoorap/mobx-react-lite-context/issues).

## Show your support

Give a ⭐️ if this project helped you!

## License
MIT © oknoorap
