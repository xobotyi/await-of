# CHANGELOG

### v1.2

- Lib is now written in TypeScript;
- Added ESM build;
- Now in case of empty value rejection (`undefined` or `null`) actual rejection result returned as 1st parameter and pure `Error` instance as second.  
  No more `originalValue` prop on error instance;
