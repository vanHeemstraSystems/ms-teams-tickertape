ms-team-tickertape

# MS Teams-tickertape

> Slaklijn

-   [Glossarium](./GLOSSARY.md)
-   [Referenties](./REFERENCES.md)
-   [Documentatie](./DOCUMENTATION.md)
-   [Telemetrie](./TELEMETRY.md)

**Samenvatting**

Uw code op uw eigen systeem operationeel krijgen.

**Opmerking**: Zorg ervoor dat u voldoet aan de[vereisten](./200/README.md).

1.  **Installatieproces:**

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

    **Verpak uw site met webpack:**Zodra u een website heeft die goed genoeg is om te gebruiken, moet u de applicatie verpakken met webpack. Deze pakketmap wordt vermeld in`.gitignore`om te voorkomen dat het aan git wordt vastgelegd.

    Alle instellingen zouden nu klaar moeten zijn, dus alles wat je hoeft te doen:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    Hierdoor ontstaat de`app.js`bestand - dat alle componenten bevat - in`/src/ticker_tape/static/js/`.

    **Ontwikkeling met webpack:**Als u uw website nog aan het ontwikkelen bent, in a**afzonderlijke terminalsessie**, nadat u het bovenstaande installatieproces heeft gevolgd, doet u het volgende:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    Dit zal - in de afzonderlijke terminalsessie (d.w.z.`background`) - laad voortdurend de wijzigingen die u aanbrengt in de juiste bestanden, terwijl u door kunt gaan met het aanbrengen van die wijzigingen - in de initiële terminalsessie (d.w.z.`foreground`). Je hoeft dus niet na elke bewerking je bronnen opnieuw op te bouwen, dit gebeurt automatisch!

    Om de wijzigingen te zien, hoeft u alleen maar uw navigator op te slaan en opnieuw te laden (meestal met F5).

    Zorg ervoor dat u uw webpagina als volgt uitvoert tijdens het testen met backend-functies:
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **Test**

    Test de applicatie (frontend) op deze manier:

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **Loop:**

    Als u niet aan het ontwikkelen bent, voert u de applicatie (backend en frontend tegelijkertijd) op deze manier uit:

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  Software-afhankelijkheden

3.  Nieuwste releases

4.  API-referenties

5.  Bouwen en testen:

    Om uw code samen te stellen, gebruikt u:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    Om AI te gebruiken voor beoordelingen van pull-aanvragen, gebruikt u:

    <https://app.coderabbit.ai/dashboard>

    Om de applicatie uit te voeren, gebruikt u:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Ramen:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Dan:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    Navigeer vervolgens naar`http://127.0.0.1:5000/`in uw webbrowser.

    Om tests uit te voeren, gebruikt u:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# API-documentatie

Navigeer naar`http://127.0.0.1:5000/docs`in uw webbrowser, of download de openapi.json van`http://127.0.0.1:5000/openapi.json`.

# Statistieken

Laat een stuk gereedschap als Prometheus schrapen`http://127.0.0.1:9464/metrics`.

**_NIEUW_**

**Inhoudsopgave**

-   [Installatie](#installation)
-   [Versiebron](#version-source)
-   [Omgevingen](#environments)
-   [Bouwen](#build)
-   [Licentie](#license)

## Installatie

```console
pip install ticker-tape
```

## Versiebron

-   De[hatch-vcs](https://github.com/ofek/hatch-vcs)versiebronplug-in bepaalt de projectversie met behulp van Git-tags

## Omgevingen

-   Netjes gedefinieerd in een standalone[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   De`test`matrix maakt gebruik van de[luikcontainers](https://github.com/ofek/hatch-containers)plug-in om elke omgeving binnen Docker-containers uit te voeren; gebruik is te zien in de[test](.github/workflows/test.yml)GitHub-workflow

## Bouwen

-   Alle bouwdoelen gebruiken de[hatch-vcs](https://github.com/ofek/hatch-vcs)bouw een hook-plug-in om een`_version.py`bestand zodat de versie tijdens runtime kan worden gebruikt
-   Wielen gebruiken de[hatch-mypyc](https://github.com/ofek/hatch-mypyc)bouw hook-plug-in om eerst alle code mee te compileren[Mijnpyc](https://github.com/mypyc/mypyc)
-   De[bouwen](.github/workflows/build.yml)De GitHub-workflow laat zien hoe u:
    -   gebruik[cibuildwiel](https://github.com/pypa/cibuildwheel)om binaire wielen voor elk platform te distribueren
    -   gebruik de[app](https://hatch.pypa.io/latest/plugins/builder/app/)build target om zelfstandige distributies voor elk platform te bouwen

## Licentie

`ticker-tape`wordt verspreid onder de voorwaarden van de[MET](https://spdx.org/licenses/MIT.html)licentie.

## 100 - Inleiding

Zien[README.md](./100/README.md)

## 200 - Vereisten

Zien[README.md](./200/README.md)

## 300 - Onze applicatie bouwen

Zien[README.md](./300/README.md)

## 400 - Conclusie

Zien[README.md](./400/README.md)
