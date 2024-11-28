ms-team-tickertape

# Cinta teletipo de equipos MS

> línea de bala

-   [Glosario](./GLOSSARY.md)
-   [Referencias](./REFERENCES.md)
-   [Documentación](./DOCUMENTATION.md)
-   [Telemetria](./TELEMETRY.md)

**Resumen ejecutivo**

Cómo poner en marcha su código en su propio sistema.

**Nota**: Asegúrese de cumplir con los[requisitos](./200/README.md).

1.  **Proceso de instalación:**

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

    **Empaqueta tu sitio con webpack:**Una vez que tenga un sitio web que sea lo suficientemente bueno para su uso, deberá empaquetar la aplicación con webpack. Esta carpeta de paquete aparece en`.gitignore`para evitar que se comprometa con git.

    Toda la configuración ya debería estar lista, así que todo lo que tienes que hacer:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    Esto creará el`app.js`archivo, que contiene todos los componentes, en`/src/ticker_tape/static/js/`.

    **Desarrollo con paquete web:**Si todavía estás desarrollando tu sitio web, en un**sesión terminal separada**, después de haber seguido el proceso de instalación anterior, haga esto:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    Esto, en la sesión de terminal separada (es decir,`background`) - cargue constantemente los cambios que realice en los archivos apropiados, mientras puede continuar realizando esos cambios - en la sesión inicial del terminal (es decir,`foreground`). Así que no tienes que crear tus fuentes después de cada edición, ¡se encargan automáticamente!

    Para ver los cambios simplemente guarda y recarga tu navegador (normalmente con F5).

    Asegúrese de ejecutar su página web cuando pruebe con funciones de backend, de la siguiente manera:
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **Prueba**

    Pruebe la aplicación (frontend) de esta manera:

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **Correr:**

    Si no está en desarrollo, ejecute la aplicación (backend y frontend simultáneamente) de esta manera:

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  Dependencias de software

3.  Últimos lanzamientos

4.  Referencias API

5.  Construir y probar:

    Para construir su código, use:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    Para usar IA para revisiones de solicitudes de extracción, use:

    <https://app.coderabbit.ai/dashboard>

    Para ejecutar la aplicación, utilice:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    Ventanas:

    ```bash
    $ setx SECRET_KEY secret
    ```

    Entonces:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    Luego, navegue hasta`http://127.0.0.1:5000/`en su navegador web.

    Para ejecutar pruebas, utilice:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# Documentación API

Navegar a`http://127.0.0.1:5000/docs`en su navegador web, o descargue openapi.json desde`http://127.0.0.1:5000/openapi.json`.

# Métrica

Dejemos que una herramienta como Prometeo raspe`http://127.0.0.1:9464/metrics`.

**_NUEVO_**

**Tabla de contenido**

-   [Instalación](#installation)
-   [Fuente de la versión](#version-source)
-   [Ambientes](#environments)
-   [Construir](#build)
-   [Licencia](#license)

## Instalación

```console
pip install ticker-tape
```

## Fuente de la versión

-   El[escotilla-vcs](https://github.com/ofek/hatch-vcs)El complemento fuente de la versión determina la versión del proyecto usando etiquetas Git.

## Ambientes

-   Definido claramente de forma independiente[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   El`test`La matriz utiliza el[contenedores-escotilla](https://github.com/ofek/hatch-containers)complemento para ejecutar cada entorno dentro de contenedores Docker; El uso se puede ver en el[prueba](.github/workflows/test.yml)flujo de trabajo de GitHub

## Construir

-   Todos los objetivos de construcción utilizan el[escotilla-vcs](https://github.com/ofek/hatch-vcs)construir complemento de gancho para enviar un`_version.py`archivo para que la versión pueda usarse en tiempo de ejecución
-   Las ruedas utilizan el[hatch-mypyc](https://github.com/ofek/hatch-mypyc)complemento de enlace de compilación para compilar primero todo el código[mipyc](https://github.com/mypyc/mypyc)
-   El[construir](.github/workflows/build.yml)El flujo de trabajo de GitHub muestra cómo:
    -   usar[cibuildwheel](https://github.com/pypa/cibuildwheel)distribuir ruedas binarias para cada plataforma
    -   utilizar el[aplicación](https://hatch.pypa.io/latest/plugins/builder/app/)construir objetivo para crear distribuciones independientes para cada plataforma

## Licencia

`ticker-tape`se distribuye bajo los términos del[MIT](https://spdx.org/licenses/MIT.html)licencia.

## 100 - Introducción

Ver[README.md](./100/README.md)

## 200 - Requisitos

Ver[README.md](./200/README.md)

## 300 - Construyendo nuestra aplicación

Ver[README.md](./300/README.md)

## 400 - Conclusión

Ver[README.md](./400/README.md)
