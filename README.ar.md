مللي-فريق-شريط التذاكر

# شريط شريط MS Teams

> سلوجلاين

-   [مسرد](./GLOSSARY.md)
-   [مراجع](./REFERENCES.md)
-   [التوثيق](./DOCUMENTATION.md)
-   [القياس عن بعد](./TELEMETRY.md)

**ملخص تنفيذي**

الحصول على التعليمات البرمجية الخاصة بك وتشغيلها على النظام الخاص بك.

**ملحوظة**: تأكد من الوفاء[متطلبات](./200/README.md).

1.  **عملية التثبيت:**

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

    **حزم موقعك باستخدام حزمة الويب:**بمجرد أن يكون لديك موقع ويب جيد بما يكفي لاستخدامه، يجب عليك حزم التطبيق مع حزمة الويب. تم إدراج مجلد الحزمة هذا في`.gitignore`لتجنب ذلك يجب الالتزام بـ git.

    يجب أن تكون جميع الإعدادات جاهزة الآن، لذا كل ما عليك فعله:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    سيؤدي هذا إلى إنشاء`app.js`الملف - الذي يحتوي على جميع المكونات - في`/src/ticker_tape/static/js/`.

    **التطوير باستخدام حزمة الويب:**إذا كنت لا تزال تقوم بتطوير موقع الويب الخاص بك، في**جلسة طرفية منفصلة**، بعد اتباع عملية التثبيت المذكورة أعلاه، قم بما يلي:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    سيؤدي هذا - في الجلسة الطرفية المنفصلة (أي`background`) - قم بتحميل التغييرات التي تجريها باستمرار على الملفات المناسبة، بينما يمكنك الاستمرار في إجراء هذه التغييرات - في الجلسة الطرفية الأولية (أي:`foreground`). So you do not have to build your sources after each edit, it is taken care of automatically!

    لرؤية التغييرات، ما عليك سوى حفظ متصفحك وإعادة تحميله (عادةً باستخدام F5).

    تأكد من تشغيل صفحة الويب الخاصة بك عند الاختبار باستخدام وظائف الواجهة الخلفية، كما يلي:
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **امتحان**

    اختبر التطبيق (الواجهة الأمامية) بهذه الطريقة:

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`5)`(ticker-tape) $ npm test -- --coverage`

    **يجري:**

    إذا لم يكن قيد التطوير، قم بتشغيل التطبيق (الواجهة الخلفية والواجهة الأمامية في وقت واحد) بهذه الطريقة:

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  تبعيات البرمجيات

3.  أحدث الإصدارات

4.  مراجع واجهة برمجة التطبيقات

5.  البناء والاختبار:

    لبناء الكود الخاص بك، استخدم:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    لاستخدام الذكاء الاصطناعي لمراجعات طلبات السحب، استخدم:

    <https://app.coderabbit.ai/dashboard>

    لتشغيل التطبيق استخدم:

    لينكس:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    ويندوز:

    ```bash
    $ setx SECRET_KEY secret
    ```

    ثم:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    ثم انتقل إلى`http://127.0.0.1:5000/`في متصفح الويب الخاص بك.

    لتشغيل الاختبارات استخدم:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# وثائق واجهة برمجة التطبيقات

انتقل إلى`http://127.0.0.1:5000/docs`في متصفح الويب الخاص بك، أو قم بتنزيل openapi.json من`http://127.0.0.1:5000/openapi.json`.

# المقاييس

دع أداة مثل بروميثيوس تتخلص`http://127.0.0.1:9464/metrics`.

**_جديد_**

**جدول المحتويات**

-   [تثبيت](#installation)
-   [مصدر النسخة](#version-source)
-   [البيئات](#environments)
-   [يبني](#build)
-   [رخصة](#license)

## تثبيت

```console
pip install ticker-tape
```

## مصدر النسخة

-   ال[Hatch-vcs](https://github.com/ofek/hatch-vcs)يحدد البرنامج المساعد لمصدر الإصدار إصدار المشروع باستخدام علامات Git

## البيئات

-   تم تعريفها بدقة في قائمة بذاتها[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   ال`test`تستخدم المصفوفة[حاويات الفتحة](https://github.com/ofek/hatch-containers)مكون إضافي لتشغيل كل بيئة داخل حاويات Docker؛ يمكن رؤية الاستخدام في[امتحان](.github/workflows/test.yml)سير عمل جيثب

## يبني

-   تستخدم جميع أهداف البناء[Hatch-vcs](https://github.com/ofek/hatch-vcs)بناء البرنامج المساعد هوك لشحن أ`_version.py`ملف بحيث يمكن استخدام الإصدار في وقت التشغيل
-   تستخدم العجلات[Hatch-mypyc](https://github.com/ofek/hatch-mypyc)أنشئ ملحقًا ربطًا لتجميع جميع التعليمات البرمجية أولاً[Mypyc](https://github.com/mypyc/mypyc)
-   ال[يبني](.github/workflows/build.yml)يوضح سير عمل GitHub كيفية:
    -   يستخدم[cibuildwheel](https://github.com/pypa/cibuildwheel)لتوزيع العجلات الثنائية لكل منصة
    -   استخدم[برنامج](https://hatch.pypa.io/latest/plugins/builder/app/)بناء الهدف لبناء توزيعات مستقلة لكل منصة

## رخصة

`ticker-tape`يتم توزيعها بموجب شروط[مع](https://spdx.org/licenses/MIT.html)رخصة.

## 100- مقدمة

يرى[README.md](./100/README.md)

## 200 - المتطلبات

يرى[README.md](./200/README.md)

## 300 – بناء تطبيقنا

يرى[README.md](./300/README.md)

## 400 - الخاتمة

يرى[README.md](./400/README.md)
