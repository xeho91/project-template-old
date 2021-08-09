# Contributing

This document shows the development setup and how to start contributing
_(developing)_ for this project.

## 🔗 Table of Content

-   [Coding style guidelines](#coding-style-guidelines)
-   [Developing steps](#developing-steps)
-   [Git setup](#git-setup)

---

## 📔 Coding style guidelines

1. **Please don't write short syntax and abbreviations**.\
   Make the code easy to read, understandable, and very communicative, even if
   that will be more verbose and take more time/effort to write. Put yourself
   in the shoes of other contributors, especially when they just began their
   journey as a developer.

    - **It also regards to file(s) and directory(ies) naming!**

1. **Write functions with declarative names** _(non-anonymous)_.\
   If your function is complex, then instead of arrow functions _(unless you
   need to use lexical `this` or have other good reason)_, declare it as
   a standard function with a descriptive name.

1. **Try to follow the good practices of the JavaScript naming conventions.**\
   Credits to [the article about the naming convention best practices].

    - **Constants** - Capital letters _(UPPERCASE)_

    ```js
    const SECONDS = 60;
    const MINUTES = 60;
    const HOURS = 24;
    const DAY = SECONDS * MINUTES * HOURS;
    ```

    - **Variable** - camelCase

    ```js
    const firstName = "Matt";
    ```

    - **Boolean** - camelCase and with one of the following prefix: `is`,
      `are`, `has`

    ```js
    const isVisible = true;
    const areEqual = false;
    const hasEncryption = true;
    ```

    - **Function** - camelCase

    ```js
    function getName(firstName, lastName) {
    	return `${firstName} ${lastName}`;
    }
    ```

    - **Class** - PascalCase

    ```js
    class SoftwareDeveloper {
    	constructor(firstName, lastName) {
    		this.firstName = firstName;
    		this.lastName = lastName;
    	}
    }
    ```

    - **Methods** - camelCase

    ```js
     class SoftwareDeveloper {
         getName() {
             return ( ... );
         };
     }
    ```

    - **Private** - camelCase and with an underscore (`_`) prefix

    ```js
     class SoftwareDeveloper {
         constructor(firstName, lastName) {
             this.name = _getName(firstName, lastName);
         }

         _getName(firstName, lastName) {
             return `${firstName ${lastName}`;
         }
     }
    ```

    - **Components** _(in any framework)_ - PascalCase

    ```js
     const UserProfile = (props) {
         return ( ... );
     }
    ```

1. **Make your commit messages descriptive and ordered.**\
   Don't be afraid to edit the commit history during the Pull Request.
   Please ensure it's explaining pretty straightforward with what's going on
   and the changes it relates to.

    - It is preferable to see changes be split into small commits, so they
      explain step by step. Quantity is not essential, but the quality of
      communication and educating/informing contributors will help a lot.

1. **Organize imported modules in the code.**\
   This way, we can visually see which modules are ours from this project and
   which one has been imported from `node_modules` or Node.js packages /
   built-in modules.

[the article about the naming convention best practices]: https://javascript.plainenglish.io/javascript-naming-convention-best-practices-b2065694b7d

---

## 👣 Developing steps

1. **Create a new branch - off from the `develop` branch** for your work with
   the following git command:

    ```sh
    git checkout -b feature/#<short_name>
    ```

    where you replace the tag `#<short_name>` with the name of the feature, or
    with a unique id if you use any advanced Git flow integrations _(e.g.
    [Jira] or [GitHub])_.

1. **Code your modifications/new features**, and commit them along the way.

1. When your changes are ready, **push the branch to a remote repo** with the
   following git command:

    ```sh
    git push origin feature/#<short_name>
    ```

1. **Merge it to `develop` branch**, whenever you decide during your process.

1. Lastly, **merge it to the production branch - `main`**, when you are sure that
   your code is ready and has no bugs. Writing tests helps to build confidence.

[jira]: https://www.atlassian.com/software/jira
[github]: https://github.com/

---

## 🛠️ Git setup

This section explains the configured Git flow for this project.
