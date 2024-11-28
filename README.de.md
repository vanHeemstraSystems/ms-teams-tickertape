ms-team-tickertape

# MS Teams-Tickerband

> Slugline

-   [Glossar](./GLOSSARY.md)
-   [References](./REFERENCES.md)
-   [Dokumentation](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)

**Zusammenfassung**

Bringen Sie Ihren Code auf Ihrem eigenen System zum Laufen.

**Notiz**: Stellen Sie sicher, dass Sie die erfüllen[Anforderungen](./200/README.md).

1.  **Installationsprozess:**

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

    **Verpacken Sie Ihre Website mit Webpack:**Sobald Sie eine Website haben, die für Sie gut genug ist, müssen Sie die Anwendung mit Webpack packen. Dieser Paketordner ist in aufgeführt`.gitignore`um zu vermeiden, dass man sich an Git bindet.

    All of the setup should be ready by now so all you have to do:
    1) `$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    Dadurch wird das erstellt`app.js`Datei - die alle Komponenten enthält - in`/src/ticker_tape/static/js/`.

    **Entwicklung mit Webpack:**Wenn Sie Ihre Website noch entwickeln, in a**separate Terminalsitzung**, nachdem Sie den oben genannten Installationsprozess befolgt haben, gehen Sie wie folgt vor:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    Dies wird - in der separaten Terminalsitzung (d. h.`background`) – lädt die von Ihnen vorgenommenen Änderungen ständig in die entsprechenden Dateien, während Sie diese Änderungen weiterhin vornehmen können – in der ersten Terminalsitzung (d. h.`foreground`). Sie müssen Ihre Quellen also nicht nach jeder Bearbeitung neu erstellen, dies geschieht automatisch!

    Um die Änderungen zu sehen, speichern Sie einfach Ihren Navigator und laden Sie ihn neu (normalerweise mit F5).

    Stellen Sie sicher, dass Sie Ihre Webseite beim Testen mit Backend-Funktionen wie folgt ausführen:
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **Prüfen**

    Testen Sie die Anwendung (Frontend) auf diese Weise:

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **Laufen:**

    Wenn Sie nicht entwickeln, führen Sie die Anwendung (Backend und Frontend gleichzeitig) auf diese Weise aus:

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  Softwareabhängigkeiten

3.  Neueste Veröffentlichungen

4.  API-Referenzen

5.  Erstellen und testen:

    Um Ihren Code zu erstellen, verwenden Sie:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    Um KI für Pull-Request-Reviews zu verwenden, verwenden Sie:

    <https://app.coderabbit.ai/dashboard>

    Um die Anwendung auszuführen, verwenden Sie:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Windows:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dann:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    Navigieren Sie dann zu`http://127.0.0.1:5000/`in Ihrem Webbrowser.

    Um Tests auszuführen, verwenden Sie:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API-Dokumentation

Navigieren Sie zu`http://127.0.0.1:5000/docs`in Ihrem Webbrowser oder laden Sie openapi.json herunter von`http://127.0.0.1:5000/openapi.json`.

# Metriken

Lassen Sie ein Werkzeug wie Prometheus kratzen`http://127.0.0.1:9464/metrics`.

**_NEU_**

**Inhaltsverzeichnis**

-   [Installation](#installation)
-   [Versionsquelle](#version-source)
-   [Umgebungen](#environments)
-   [Bauen](#build)
-   [Lizenz](#license)

## Installation

```console
pip install ticker-tape
```

## Versionsquelle

-   Der[hatch-vcs](https://github.com/ofek/hatch-vcs)Das Versionsquellen-Plugin bestimmt die Projektversion mithilfe von Git-Tags

## Umgebungen

-   Ordentlich in einem Standalone definiert[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Der`test`Matrix verwendet die[Lukencontainer](https://github.com/ofek/hatch-containers)Plugin zum Ausführen jeder Umgebung in Docker-Containern; Die Verwendung ist in der zu sehen[prüfen](.github/workflows/test.yml)GitHub-Workflow

## Bauen

-   Alle Build-Ziele verwenden die[hatch-vcs](https://github.com/ofek/hatch-vcs)Erstellen Sie ein Hook-Plugin, um ein zu versenden`_version.py`Datei, damit die Version zur Laufzeit verwendet werden kann
-   Räder verwenden die[hatch-mypyc](https://github.com/ofek/hatch-mypyc)Build-Hook-Plugin, mit dem zunächst der gesamte Code kompiliert werden soll[Mypyc](https://github.com/mypyc/mypyc)
-   Der[bauen](.github/workflows/build.yml)Der GitHub-Workflow zeigt, wie Sie:
    -   use [cibuildwheel](https://github.com/pypa/cibuildwheel)binäre Räder für jede Plattform zu verteilen
    -   Benutze die[App](https://hatch.pypa.io/latest/plugins/builder/app/)build target zum Erstellen eigenständiger Distributionen für jede Plattform

## Lizenz

`ticker-tape`wird gemäß den Bedingungen der verteilt[MIT](https://spdx.org/licenses/MIT.html)Lizenz.

## 100 - Einführung

Sehen[README.md](./100/README.md)

## 200 – Anforderungen

Sehen[README.md](./200/README.md)

## 300 – Erstellen unserer Anwendung

Sehen[README.md](./300/README.md)

## 400 – Fazit

Sehen[README.md](./400/README.md)
