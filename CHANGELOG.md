## [3.1.1](https://github.com/xobotyi/await-of/compare/v3.1.0...v3.1.1) (2021-07-21)


### Bug Fixes

* update README.md and gha config ([98d78e2](https://github.com/xobotyi/await-of/commit/98d78e265f0836128450f54c363217efc575d36a))

# [3.1.0](https://github.com/xobotyi/await-of/compare/v3.0.0...v3.1.0) (2020-05-21)


### Features

* add patreon funding link ([747d970](https://github.com/xobotyi/await-of/commit/747d970004e66be588a335d85db982c000194a03))

# [3.0.0](https://github.com/xobotyi/await-of/compare/v2.1.0...v3.0.0) (2020-03-18)


### chore

* re-create yarn.lock file; ([017dda0](https://github.com/xobotyi/await-of/commit/017dda006868b5b020387246f158a14deb7a954a))


### BREAKING CHANGES

* the function now name exported!

# [2.1.0](https://github.com/xobotyi/await-of/compare/v2.0.0...v2.1.0) (2020-03-04)


### Features

* update readme badges and header; ([8fca26b](https://github.com/xobotyi/await-of/commit/8fca26bc528c32138b26f674ba0ace7f74556250))

# [2.0.0](https://github.com/xobotyi/await-of/compare/v1.3.1...v2.0.0) (2020-03-04)


### Bug Fixes

* fix build; ([9ec99fa](https://github.com/xobotyi/await-of/commit/9ec99fa505dbd65d0a91b9186f26d716d067eb52))
* fix throw error in readme example; ([2eedd47](https://github.com/xobotyi/await-of/commit/2eedd4753043aea78bdebcf9f66edb8e590e33c3))


### Features

* rework the module. ([bf947c3](https://github.com/xobotyi/await-of/commit/bf947c38485fa0a3e773cfeda1515bd535cef2a5)), closes [#9](https://github.com/xobotyi/await-of/issues/9) [#15](https://github.com/xobotyi/await-of/issues/15)
* specify minimal node version as requested in [#7](https://github.com/xobotyi/await-of/issues/7) ([56e8fab](https://github.com/xobotyi/await-of/commit/56e8fab3cb0b30aef9fe1d41ac58e65a705c7c88))


### BREAKING CHANGES

* now module has default export only.

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
