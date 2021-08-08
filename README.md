# Project template

Project description TBA...

## 🔗 Table of Content

-   [Technology stack](#-technology-stack)
-   [Prerequisites](#-prerequisites)
-   [Getting started](#-getting-started)
-   [Contributing](#-contributing)
-   [Feedback](#-feedback)
-   [Security Policy](#-security-policy)
-   [License](#-license)
-   [Contact](#-contact)

---

## 💻 Technology stack

This project uses the following technology stack, and there's short reasoning
as to why these choices.

### ![Git logomark] [Git]

As a core version control tool, because it can be used with [GitHub] or
[GitLab].

[git]: https://git-scm.com/
[git logomark]: https://api.iconify.design/simple-icons:git.svg "Git logomark"
[github]: https://github.com/
[gitlab]: https://gitlab.com/

### ![Node.js logomark] [Node.js]

As JavaScript runtime for this project development.

[node.js]: https://nodejs.org/en/
[node.js logomark]: https://api.iconify.design/simple-icons:nodejs.svg "Node.js logomark"

### ![TypeScript logomark] [TypeScript]

As the primary programming language because it offers fantastic developer
experience thanks to its toolings, typings and helps find possible bugs.

[typescript]: https://www.typescriptlang.org/
[typescript logomark]: https://api.iconify.design/simple-icons:typescript.svg "TypeScript logomark"

### ![Vite logomark] [Vite]

As a JavaScript bundler, because it is speedy for local development and
supports modern technologies.

[vite]: https://vitejs.dev/
[vite logomark]: https://api.iconify.design/simple-icons:vite.svg "Vite logomark"

### ![PostCSS logomark] [PostCSS]

For using the modern CSS features and plugins to improve the development flow,
such as autoprefixer.

[postcss]: https://postcss.org/
[postcss logomark]: https://api.iconify.design/simple-icons:postcss.svg "PostCSS logomark"

### ![Sass logomark] [Sass]

As the primary CSS language, for improving the development experience with
advanced syntax.

[sass]: https://sass-lang.com/
[sass logomark]: https://api.iconify.design/simple-icons:sass.svg "Sass logomark"

### ![Jest logomark] [Jest] & ![Testing Library logomark] [Testing Library]

As a JavaScript Testing Framework because it focuses on simplicity, also it is
utilized with Testing Library for the good testing practices.

[jest]: https://jestjs.io/
[testing library]: https://testing-library.com/
[jest logomark]: https://api.iconify.design/simple-icons:jest.svg "Jest logomark"
[testing library logomark]: https://api.iconify.design/simple-icons:testinglibrary.svg "Testing Library logomark"

---

## ⚓ Prerequisites

[![Dependencies shield]][dependencies url]

This project requires these tools to be able to run it locally on your device
and develop.

1. [Git] version control tool to be installed.

1. Latest [Node.js] LTS _(Long-Term Support)_ version.

1. [pnpm] - as Node.js package manager.\
   Other package managers such as [npm] or [yarn] may work; however this
   project setup is optimized for `pnpm`.

[dependencies shield]: https://img.shields.io/librariesio/github/xeho91/personal-website?style=for-the-badge
[dependencies url]: https://libraries.io/github/xeho91/personal-website "Dependencies status"
[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/

---

## 🏁 Getting started

![Repository size][repository size shield]

The following steps are supposed to help you run this project locally _(on
your current device on your network)_.

[repository size shield]: https://img.shields.io/github/repo-size/xeho91/personal-website?style=for-the-badge

1. **Clone this project** with [Git] using the following command:

    ```sh
    git clone https://github.com/xeho91/project-template.git
    ```

1. **Install all of the dependencies** _([Node.js] packages)_ by typing in your
   terminal:

    ```sh
    pnpm install
    ```

1. **Configure the [Environment Variables]** based on the
   [`.env.example`](./.env.example) file.

    📝 **NOTE:** You can either create a local `.env` file or use [Doppler].

1. **Build the output and preview it** using the command:

    ```sh
    pnpm start
    ```

1. **Go to [`http://localhost:5000/`](http://localhost:5000/) page** in your
   browser.

    **NOTE:** If you want to open it on other devices on your network, use the
    IP address provided in the terminal output after running the script.

[environment variables]: https://en.wikipedia.org/wiki/Environment_variable
[doppler]: https://www.doppler.com/

---

## ⚙️ Contributing

Please take a look at the [CONTRIBUTING.md](./CONTRIBUTING.md) file, where the
development flow is explained and thoroughly described.

---

## 🔄 Feedback

**Have you found a bug?**\
Would you mind not hesitating to [open an issue] if you have time?

**Did you notice bad UX practice(s)?**\
Please [get in touch with me](#contact) or [open an issue]. I am constantly
learning, and I treat it seriously. So I would appreciate the effort. To save
your time, you can also provide a link to a resource to learn more about it.

**Have you noticed any [a11y] issue(s)?**\
Please let me know immediately! I care a lot about it.

[open an issue]: https://github.com/xeho91/project-template/issues/new
[a11y]: https://www.a11yproject.com/

---

## 🔒 Security Policy

For more information about the Security Policy, take a look at the
[SECURITY.md](./SECURITY.md) file.

---

## ⚖️ License

[![License shield]](./LICENSE "Project's license")

**The code** is licensed under the [MIT license](./LICENSE).

The **graphical assets** created by me are licensed under [CC BY-SA
4.0](./CC_BY-SA_4.0).\
There's a more [human-readable summary] of this license.

[license shield]: https://img.shields.io/github/license/xeho91/personal-website?style=for-the-badge
[human-readable summary]: https://creativecommons.org/licenses/by-sa/4.0/

---

## ✉️ Contact

[![PGP shield]][pgp url]

[![Twitter shield]][twitter]

You can contact me through:

-   [my website] contact subpage
-   [Twitter] DM _(Direct Messages)_
-   [Polywork]
-   [Keybase]

[pgp shield]: https://img.shields.io/keybase/pgp/xeho91?color=purple&style=for-the-badge
[pgp url]: https://pgp.key-server.io/0x4B166D6B2C00D8CB "Get my PGP public key"
[twitter shield]: https://img.shields.io/twitter/follow/xeho91?style=social
[twitter]: https://twitter.com/xeho91
[my website]: https://xeho91.com/contact
[polywork]: https://polywork.com/xeho91
[keybase]: https://keybase.io/xeho91
