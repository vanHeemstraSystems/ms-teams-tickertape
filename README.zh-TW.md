MS-團隊-tickertape

# MS Teams 自動收報機磁帶

> 斯拉格萊恩

-   [詞彙表](./GLOSSARY.md)
-   [參考](./REFERENCES.md)
-   [文件](./DOCUMENTATION.md)
-   [遙測](./TELEMETRY.md)

**執行摘要**

在您自己的系統上啟動並運行您的程式碼。

**筆記**: 確保您滿足[要求](./200/README.md).

1.  **安裝過程：**

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

    **使用 webpack 打包您的網站：**一旦你有了一個足夠好的網站可供你使用，你就必須使用 webpack 打包該應用程式。該包資料夾列於`.gitignore`以避免它被提交給 git。

    現在所有設定都應該準備就緒，因此您需要做的就是：
    1）`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    這將創建`app.js`文件 - 包含所有組件 - 在`/src/ticker_tape/static/js/`.

    **使用webpack開發：**如果您仍在開發您的網站，**單獨的終端會話**，按照上述安裝程序後，執行以下操作：
    1）`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    這將 - 在單獨的終端會話中（即`background`) - 不斷地將您所做的更改載入到適當的文件中，同時您可以在初始終端會話中繼續進行這些更改（即`foreground`）。因此，您不必在每次編輯後建立原始程式碼，它會自動處理！

    要查看更改，只需儲存並重新載入導航器（通常使用 F5）。

    確保在使用後端功能進行測試時運行您的網頁，如下所示：
    1）`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **測試**

    以這種方式測試應用程式（前端）：

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **跑步：**

    如果不進行開發，請按以下方式運行應用程式（同時後端和前端）：

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  軟體依賴性

3.  最新版本

4.  API參考

5.  建置和測試：

    要建立您的程式碼，請使用：

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    若要使用 AI 進行拉取請求審查，請使用：

    <https://app.coderabbit.ai/dashboard>

    要運行該應用程序，請使用：

    Linux：

    ```bash
    $ export SECRET_KEY="secret"
    ```

    視窗：

    ```bash
    $ setx SECRET_KEY secret
    ```

    然後：

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    然後，導航至`http://127.0.0.1:5000/`在您的網頁瀏覽器中。

    若要執行測試，請使用：

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API文件

導航至`http://127.0.0.1:5000/docs`在您的網頁瀏覽器中，或從下列位置下載 openapi.json`http://127.0.0.1:5000/openapi.json`.

# 指標

讓 Prometheus 這樣的工具刮擦`http://127.0.0.1:9464/metrics`.

**_新的_**

**目錄**

-   [安裝](#installation)
-   [版本來源](#version-source)
-   [環境](#environments)
-   [建造](#build)
-   [執照](#license)

## 安裝

```console
pip install ticker-tape
```

## 版本來源

-   這[孵化VCS](https://github.com/ofek/hatch-vcs)版本來源外掛程式使用 Git 標籤來確定專案版本

## 環境

-   整齊地定義在一個獨立的[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   這`test`矩陣使用[孵化貨櫃](https://github.com/ofek/hatch-containers)用於運行 Docker 容器內每個環境的插件；用法可以在[測試](.github/workflows/test.yml)GitHub 工作流程

## 建造

-   所有建置目標都使用[孵化VCS](https://github.com/ofek/hatch-vcs)建立鉤子插件來發送`_version.py`文件，以便可以在運行時使用該版本
-   輪子使用[孵化 mypyc](https://github.com/ofek/hatch-mypyc)建立鉤子插件以首先編譯所有程式碼[Mypyc](https://github.com/mypyc/mypyc)
-   這[建造](.github/workflows/build.yml)GitHub 工作流程展示如何：
    -   使用[cibuildwheel](https://github.com/pypa/cibuildwheel)為每個平台分發二進制輪子
    -   使用[應用程式](https://hatch.pypa.io/latest/plugins/builder/app/)建構目標為每個平台建立獨立發行版

## 執照

`ticker-tape`是根據以下條款分發的[和](https://spdx.org/licenses/MIT.html)執照。

## 100 - 簡介

看[README.md](./100/README.md)

## 200 - 要求

看[README.md](./200/README.md)

## 300 - 建立我們的應用程式

看[README.md](./300/README.md)

## 400 - 結論

看[README.md](./400/README.md)
