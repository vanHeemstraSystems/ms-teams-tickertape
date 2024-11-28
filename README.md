ms-team-tickertape
# MS Teams Ticker Tape

> Slugline

- [Glossary](./GLOSSARY.md)
- [References](./REFERENCES.md)
- [Documentation](./DOCUMENTATION.md)
- [Telemetry](./TELEMETRY.md)

**Executive Summary**

Getting your code up and running on your own system.

**Note**: Make sure you fulfill the [requirements](./200/README.md).
1.	**Installation process:** 
    ```bash 
    $ cd ticker-tape
    $ hatch --version # optional, will print the version of our package to the terminal without modifying the source directory (e.g. `0.0.1`).
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch env create # optional, if the default env already exists you will be told
    $ hatch shell # spawn a shell within an environment
    (ticker-tape) $ pip show ticker-tape # optional, shows the project details, here 'ticker-tape', from `pyproject.toml`
    # Name: ticker-tape
    # Version: 0.0.1 # it takes this from src/ticker_tape/__about__.py
    # ...
    (ticker-tape) $ python -c "import sys;print(sys.executable)" # optional, see where your environment's python is located
    (ticker-tape) $ pip install --upgrade pip # optional, the `run` command allows you to execute commands in an environment as if you had already entered it.
    (ticker-tape) $ pip install -r requirements.txt # pipx won't do this
    (ticker-tape) $ python -m setuptools_scm # optional, display the version of our package and perform any side-effects like writing to a file. (here: `_version.py`)
    (ticker-tape) $ exit # optional, type `exit` to leave the environment
    ```

    **Package your site with webpack:**
    Once you have a website that is good enough for you to use, you have to package the application with webpack. This package folder is listed in ```.gitignore``` to avoid it to be committed to git.

    All of the setup should be ready by now so all you have to do:
    1) ```$ hatch shell```
    2) ```(ticker-tape) $ cd src/ticker_tape```
    3) ```(ticker-tape) $ npm install```
    4) ```(ticker-tape) $ npm run build```

    This will create the ```app.js``` file - which contains all components - in ```/src/ticker_tape/static/js/```.

    **Development with webpack:**
    If you are still developing your website, in a **separate terminal session**, after having followed the above installation process, do this:
    1) ```$ hatch shell```
    2) ```(ticker-tape) $ cd src/ticker_tape```
    3) ```(ticker-tape) $ npm install```
    4) ```(ticker-tape) $ npm run watch```

    This will - in the separate terminal session (i.e. ```background```) - constantly load the changes you make into the appropriate files, whilst you can can continue make those changes - in the initial terminal session (i.e. ```foreground```). So you do not have to build your sources after each edit, it is taken care of automatically!

    To see the changes just save and reload your navigator (usually with F5). 
    
    Make sure, to run your webpage when testing with backend functions, as follows:
    1) ```(ticker-tape) $ cd src/ticker_tape```
    2) ```(ticker-tape) $ python app.py```

    **Test**

    Test the application (frontend) this way:

    1) ```$ hatch shell```
    2) ```(ticker-tape) $ cd src/ticker_tape```
    3) ```(ticker-tape) $ npm install```
    4) ```(ticker-tape) $ npm test```
    5) ```(ticker-tape) $ npm test -- --coverage```

    **Run:**

    If not developing, run the application (backend and frontend simultaneously) this way: 

    ```
    $ hatch run python src/ticker_tape/app.py # starts the app 
    ```

2.	Software dependencies
3.	Latest releases
4.	API references
5.  Build and Test:

    To build your code, use:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    To use AI for pull request reviews, use:

    https://app.coderabbit.ai/dashboard

    To run the application, use:

    Linux:
    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:
    ```bash
    $ setx SECRET_KEY secret
    ```

    Then:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    Then, navigate to `http://127.0.0.1:5000/` in your web browser.

    To run tests, use:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API Documentation

Navigate to `http://127.0.0.1:5000/docs` in your web browser, or download the openapi.json from `http://127.0.0.1:5000/openapi.json`.

# Metrics

Let a tool like Prometheus scrape `http://127.0.0.1:9464/metrics`.

___ NEW ___

**Table of Contents**

- [Installation](#installation)
- [Version source](#version-source)
- [Environments](#environments)
- [Build](#build)
- [License](#license)

## Installation

```console
pip install ticker-tape
```

## Version source

- The [hatch-vcs](https://github.com/ofek/hatch-vcs) version source plugin determines the project version using Git tags

## Environments

- Defined neatly in a standalone [`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
- The `test` matrix uses the [hatch-containers](https://github.com/ofek/hatch-containers) plugin to run each environment inside Docker containers; usage can be seen in the [test](.github/workflows/test.yml) GitHub workflow

## Build

- All build targets use the [hatch-vcs](https://github.com/ofek/hatch-vcs) build hook plugin to ship a `_version.py` file so the version can be used at runtime
- Wheels use the [hatch-mypyc](https://github.com/ofek/hatch-mypyc) build hook plugin to first compile all code with [Mypyc](https://github.com/mypyc/mypyc)
- The [build](.github/workflows/build.yml) GitHub workflow shows how to:
  - use [cibuildwheel](https://github.com/pypa/cibuildwheel) to distribute binary wheels for every platform
  - use the [app](https://hatch.pypa.io/latest/plugins/builder/app/) build target to build standalone distributions for every platform

## License

`ticker-tape` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.

## 100 - Introduction

See [README.md](./100/README.md)

## 200 - Requirements

See [README.md](./200/README.md)

## 300 - Building Our Application

See [README.md](./300/README.md)

## 400 - Conclusion

See [README.md](./400/README.md)
