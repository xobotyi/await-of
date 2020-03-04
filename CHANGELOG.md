## [1.3.1](https://github.com/xobotyi/await-of/compare/v1.3.0...v1.3.1) (2020-03-04)


### Bug Fixes

* move code coverage push to separate job. ([1b24503](https://github.com/xobotyi/await-of/commit/1b24503810e0b65bcc70d397c7be0bbff4a00793))
* move semantic release to separate job; ([d11d674](https://github.com/xobotyi/await-of/commit/d11d674879de88952e3ceda28a91d14b74c50d66))

# [1.3.0](https://github.com/xobotyi/await-of/compare/v1.2.0...v1.3.0) (2020-03-04)


### Features

* versions now managed by semantic release; ([0c2f516](https://github.com/xobotyi/await-of/commit/0c2f516fd69eff9d592e0143e10b191b7dc5b6a3))

# CHANGELOG

### v1.2

- Lib is now written in TypeScript;
- Added ESM build;
- Now in case of empty value rejection (`undefined` or `null`) actual rejection result returned as 1st parameter and pure `Error` instance as second.  
  No more `originalValue` prop on error instance;
