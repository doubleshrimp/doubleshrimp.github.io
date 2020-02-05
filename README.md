<a href="https://doubleshrimp.com"><img src="https://avatars1.githubusercontent.com/u/60178380?v=3&s=100" title="doubleshrimp" alt="double shrimp agency"></a>

# double shrimp agency

**Repository of the [double shrimp](https://doubleshrimp.com) static website.**

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Deploy](#deploy)
- [License](#license)

## About

To learn more about the type of projects we can help you with, do visit the live version of this website on **[doubleshrimp.com](https://doubleshrimp.com)**

## Installation

### Node

You will need Node js, which you should install through [asdf](https://github.com/asdf-vm).

Then install NPM dependencies by running:
```shell
npm install
```

### Gulp

You should now be able to use Gulp. Have a look at `gulpfile.js` to see what's available. The most interesting tasks are `compile`, `serve` (with livereload), and `deploy`.

## Deploy

Since this is hosted on Github Pages with an Org repository, the branch containing the compiled assets needs to be `master`, so the protected source branch is `src`.

To compile and deploy on `master`, run:
```
gulp deploy
```

## License

**Feel free to reuse this repository but be careful as a few elements have proprietary licenses.**

- The **[Front Bootstrap Theme](https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/)** is on a paid license. You will need one to use the theme.
- Some of the icons require a paid license. **Check [FlatIcon](https://www.flaticon.com/)**.
