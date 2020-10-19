# My CRM Frontend

Frontend of **my-crm-api** uses router-vue for routing, axios for requests, vuex for user data and token (on dev)

## Project setup

- Change `axios.defaults.baseURL = 'http://your-url/api/';` to your domain url in `src/store/index.js` (will change later)
- `npm install`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
##ToDo

- Split each asset from button, links to input fields, reusable components
- Salt or hash password

## Drawbacks

- Did not split inputs,buttons,textarea etc. to separate assets just to save some time
- Password need to be salted
- Lacks reactivity in some places

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
