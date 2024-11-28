ms-team-tickertape

# Ruban téléscripteur MS Teams

> Slugline

-   [Glossaire](./GLOSSARY.md)
-   [Références](./REFERENCES.md)
-   [Documentation](./DOCUMENTATION.md)
-   [Télémétrie](./TELEMETRY.md)

**Résumé exécutif**

Faire en sorte que votre code soit opérationnel sur votre propre système.

**Note**: Assurez-vous de remplir les[exigences](./200/README.md).

1.  **Processus d'installation :**

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

    **Packagez votre site avec webpack :**Une fois que vous disposez d’un site Web suffisamment performant pour que vous puissiez l’utiliser, vous devez empaqueter l’application avec webpack. Ce dossier de package est répertorié dans`.gitignore`pour éviter qu'il soit engagé dans git.

    Toute la configuration devrait être prête maintenant, il vous suffit donc de :
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    Cela créera le`app.js`fichier - qui contient tous les composants - dans`/src/ticker_tape/static/js/`.

    **Développement avec webpack :**Si vous développez encore votre site Web, dans un**session terminale séparée**, après avoir suivi le processus d'installation ci-dessus, faites ceci :
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    Cela sera - dans la session de terminal séparée (c'est-à-dire`background`) - chargez constamment les modifications que vous apportez dans les fichiers appropriés, tandis que vous pouvez continuer à apporter ces modifications - lors de la session initiale du terminal (c'est-à-dire`foreground`). Vous n’avez donc pas besoin de construire vos sources après chaque édition, cela est pris en charge automatiquement !

    Pour voir les modifications, enregistrez et rechargez simplement votre navigateur (généralement avec F5).

    Assurez-vous d'exécuter votre page Web lors des tests avec les fonctions backend, comme suit :
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **Test**

    Testez l'application (frontend) de cette façon :

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **Courir:**

    Si vous ne développez pas, exécutez l'application (backend et frontend simultanément) de cette façon :

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  Dépendances logicielles

3.  Dernières versions

4.  Références API

5.  Construire et tester :

    Pour construire votre code, utilisez :

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    Pour utiliser l'IA pour les révisions de demandes d'extraction, utilisez :

    <https://app.coderabbit.ai/dashboard>

    Pour exécuter l'application, utilisez :

    Linux :

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Fenêtres :

    ```bash
    $ setx SECRET_KEY secret
    ```

    Alors:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    Ensuite, accédez à`http://127.0.0.1:5000/`dans votre navigateur Internet.

    Pour exécuter des tests, utilisez :

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentation API

Accédez à`http://127.0.0.1:5000/docs`dans votre navigateur Web, ou téléchargez le fichier openapi.json depuis`http://127.0.0.1:5000/openapi.json`.

# Métrique

Laissez un outil comme Prometheus gratter`http://127.0.0.1:9464/metrics`.

**_NOUVEAU_**

**Table des matières**

-   [Installation](#installation)
-   [Source de la version](#version-source)
-   [Environnements](#environments)
-   [Construire](#build)
-   [Licence](#license)

## Installation

```console
pip install ticker-tape
```

## Source de la version

-   Le[trappe-vcs](https://github.com/ofek/hatch-vcs)Le plugin source de version détermine la version du projet à l'aide des balises Git

## Environnements

-   Bien défini dans un environnement autonome[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   Le`test`la matrice utilise le[conteneurs à écoutille](https://github.com/ofek/hatch-containers)plugin pour exécuter chaque environnement dans les conteneurs Docker ; l'utilisation peut être vue dans le[test](.github/workflows/test.yml)Flux de travail GitHub

## Construire

-   Toutes les cibles de build utilisent le[trappe-vcs](https://github.com/ofek/hatch-vcs)construire un plugin hook pour expédier un`_version.py`fichier afin que la version puisse être utilisée au moment de l'exécution
-   Les roues utilisent le[trappe-mypyc](https://github.com/ofek/hatch-mypyc)construire un plugin hook pour compiler d'abord tout le code avec[Monpyc](https://github.com/mypyc/mypyc)
-   Le[construire](.github/workflows/build.yml)Le workflow GitHub montre comment :
    -   utiliser[roue cibuild](https://github.com/pypa/cibuildwheel)distribuer des roues binaires pour chaque plateforme
    -   utiliser le[application](https://hatch.pypa.io/latest/plugins/builder/app/)construire une cible pour créer des distributions autonomes pour chaque plate-forme

## Licence

`ticker-tape`est distribué selon les termes du[AVEC](https://spdx.org/licenses/MIT.html)licence.

## 100 - Introduction

Voir[README.md](./100/README.md)

## 200 - Exigences

Voir[README.md](./200/README.md)

## 300 - Construire notre application

Voir[README.md](./300/README.md)

## 400 - Conclusion

Voir[README.md](./400/README.md)
