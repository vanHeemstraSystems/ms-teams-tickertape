MS-团队-tickertape

# MS Teams 自动收报机磁带

> 斯拉格莱恩

-   [词汇表](./GLOSSARY.md)
-   [参考](./REFERENCES.md)
-   [文档](./DOCUMENTATION.md)
-   [遥测](./TELEMETRY.md)

**执行摘要**

在您自己的系统上启动并运行您的代码。

**笔记**: 确保您满足[要求](./200/README.md).

1.  **安装过程：**

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

    **使用 webpack 打包您的网站：**一旦你有了一个足够好的网站可供你使用，你就必须使用 webpack 打包应用程序。该包文件夹列于`.gitignore`以避免它被提交给 git。

    现在所有设置都应该准备就绪，因此您需要做的就是：
    1）`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    这将创建`app.js`文件 - 包含所有组件 - 在`/src/ticker_tape/static/js/`.

    **使用webpack开发：**如果您仍在开发您的网站，**单独的终端会话**, after having followed the above installation process, do this:
    1) `$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    这将 - 在单独的终端会话中（即`background`) - 不断地将您所做的更改加载到适当的文件中，同时您可以在初始终端会话中继续进行这些更改（即`foreground`）。因此，您不必在每次编辑后构建源代码，它会自动处理！

    要查看更改，只需保存并重新加载导航器（通常使用 F5）。

    确保在使用后端功能进行测试时运行您的网页，如下所示：
    1）`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **测试**

    以这种方式测试应用程序（前端）：

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **跑步：**

    如果不进行开发，请按以下方式运行应用程序（同时后端和前端）：

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  软件依赖性

3.  最新版本

4.  API参考

5.  构建和测试：

    要构建您的代码，请使用：

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    要使用 AI 进行拉取请求审查，请使用：

    <https://app.coderabbit.ai/dashboard>

    要运行该应用程序，请使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    视窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然后：

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    然后，导航至`http://127.0.0.1:5000/`在您的网络浏览器中。

    要运行测试，请使用：

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API文档

导航至`http://127.0.0.1:5000/docs`在您的网络浏览器中，或从以下位置下载 openapi.json`http://127.0.0.1:5000/openapi.json`.

# 指标

Let a tool like Prometheus scrape `http://127.0.0.1:9464/metrics`.

**_新的_**

**目录**

-   [安装](#installation)
-   [版本来源](#version-source)
-   [环境](#environments)
-   [建造](#build)
-   [执照](#license)

## 安装

```console
pip install ticker-tape
```

## 版本来源

-   这[孵化VCS](https://github.com/ofek/hatch-vcs)版本源插件使用 Git 标签确定项目版本

## 环境

-   整齐地定义在一个独立的[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   这`test`矩阵使用[孵化集装箱](https://github.com/ofek/hatch-containers)用于运行 Docker 容器内每个环境的插件；用法可以在[测试](.github/workflows/test.yml)GitHub 工作流程

## 建造

-   所有构建目标都使用[孵化VCS](https://github.com/ofek/hatch-vcs)构建钩子插件来发送`_version.py`文件，以便可以在运行时使用该版本
-   轮子使用[孵化 mypyc](https://github.com/ofek/hatch-mypyc)构建钩子插件以首先编译所有代码[Mypyc](https://github.com/mypyc/mypyc)
-   这[建造](.github/workflows/build.yml)GitHub 工作流程展示了如何：
    -   使用[cibuildwheel](https://github.com/pypa/cibuildwheel)为每个平台分发二进制轮子
    -   使用[应用程序](https://hatch.pypa.io/latest/plugins/builder/app/)构建目标为每个平台构建独立发行版

## 执照

`ticker-tape`是根据以下条款分发的[和](https://spdx.org/licenses/MIT.html)执照。

## 100 - 简介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 构建我们的应用程序

看[README.md](./300/README.md)

## 400 - 结论

看[README.md](./400/README.md)
