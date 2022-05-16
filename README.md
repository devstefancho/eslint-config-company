## Install

1. CRA
```bash
npx create-react-app my-app
```

2. Intall package
```bash
npm i -D @stevencho/eslint-config-fitpet
```

3. Create .eslintrc
```json
{
  "extends": ["@stevencho/eslint-config-fitpet"]
}
```

4. Add lint script to package.json
```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

## Override prettier settings
Add rules in .eslintrc to override @devstefancho/eslint-config-react rules  
```json
{
  "extends": ["@stevencho/eslint-config-fitpet"],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2,
      }
    ]
  }
}
```

## Ref
### Youtube
- https://www.youtube.com/watch?v=tsPXN4mJGSc

### Docs
- https://eslint.org/docs/developer-guide/shareable-configs

### Github
- https://github.com/mryechkin/eslint-config-acme
- https://github.com/Kamigami55/eslint-config-eason
- https://github.com/viclafouch/eslint-config-viclafouch
