# system-svelte
SystemJS plugin for compiling Svelte components

## Installation
```bash
jspm install sv=npm:system-svelte
jspm install npm:svelte -o "{format: 'global'}"
```

## Usage
index.js
```js
import App from './app.component.html!sv';

const app = new App({
	target: document.querySelector('#app'),
	data: {
		name: 'sweet dawg!!',
	}
});
```

app.component.html
```js
<h1>Hello {{name}}</h1>
```
