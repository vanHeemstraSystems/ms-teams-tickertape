एमएस-टीम-टिकरटेप

# एमएस टीमें टिकर टेप

> स्लगलाइन

-   [शब्दकोष](./GLOSSARY.md)
-   [संदर्भ](./REFERENCES.md)
-   [प्रलेखन](./DOCUMENTATION.md)
-   [टेलीमेटरी](./TELEMETRY.md)

**कार्यकारी सारांश**

अपना कोड तैयार करना और अपने सिस्टम पर चलाना।

**टिप्पणी**: सुनिश्चित करें कि आप इसे पूरा करते हैं[आवश्यकताएं](./200/README.md).

1.  **स्थापना प्रक्रिया:**

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

    **अपनी साइट को वेबपैक के साथ पैकेज करें:**एक बार जब आपके पास एक ऐसी वेबसाइट हो जो आपके उपयोग के लिए पर्याप्त हो, तो आपको एप्लिकेशन को वेबपैक के साथ पैकेज करना होगा। यह पैकेज फ़ोल्डर सूचीबद्ध है`.gitignore`इससे बचने के लिए गिट के प्रति प्रतिबद्ध होना होगा।

    अब तक सारा सेटअप तैयार हो जाना चाहिए, इसलिए आपको बस इतना करना है:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run build`

    यह बनायेगा`app.js`फ़ाइल - जिसमें सभी घटक शामिल हैं - in`/src/ticker_tape/static/js/`.

    **वेबपैक के साथ विकास:**यदि आप अभी भी अपनी वेबसाइट विकसित कर रहे हैं, तो a**अलग टर्मिनल सत्र**, उपरोक्त स्थापना प्रक्रिया का पालन करने के बाद, यह करें:
    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm run watch`

    यह होगा - अलग टर्मिनल सत्र में (अर्थात्`background`) - आपके द्वारा किए गए परिवर्तनों को उचित फ़ाइलों में लगातार लोड करें, जबकि आप उन परिवर्तनों को जारी रख सकते हैं - प्रारंभिक टर्मिनल सत्र में (यानी)`foreground`). इसलिए आपको प्रत्येक संपादन के बाद अपने स्रोत बनाने की ज़रूरत नहीं है, इसका स्वचालित रूप से ध्यान रखा जाता है!

    परिवर्तनों को देखने के लिए बस अपने नेविगेटर को सहेजें और पुनः लोड करें (आमतौर पर F5 के साथ)।

    सुनिश्चित करें कि बैकएंड फ़ंक्शंस के साथ परीक्षण करते समय अपना वेबपेज निम्नानुसार चलाएं:
    1)`(ticker-tape) $ cd src/ticker_tape`2)`(ticker-tape) $ python app.py`

    **परीक्षा**

    एप्लिकेशन (फ़्रंटएंड) का इस प्रकार परीक्षण करें:

    1)`$ hatch shell`2)`(ticker-tape) $ cd src/ticker_tape`3)`(ticker-tape) $ npm install`4)`(ticker-tape) $ npm test`
    5) `(ticker-tape) $ npm test -- --coverage`

    **दौड़ना:**

    यदि विकास नहीं हो रहा है, तो एप्लिकेशन को इस प्रकार चलाएं (बैकएंड और फ्रंटएंड एक साथ):

        $ hatch run python src/ticker_tape/app.py # starts the app 

2.  सॉफ़्टवेयर निर्भरताएँ

3.  नवीनतम रिलीज़

4.  एपीआई संदर्भ

5.  Build and Test:

    अपना कोड बनाने के लिए, इसका उपयोग करें:

    ```bash
    $ cd ticker-tape
    $ hatch build
    ```

    पुल अनुरोध समीक्षा के लिए AI का उपयोग करने के लिए, इसका उपयोग करें:

    <https://app.coderabbit.ai/dashboard>

    एप्लिकेशन चलाने के लिए, उपयोग करें:

    Linux:

    ```bash
    $ export SECRET_KEY="secret"
    ```

    खिड़कियाँ:

    ```bash
    $ setx SECRET_KEY secret
    ```

    तब:

    ```bash
    $ cd ticker-tape
    # Without hatch: $ python src/ticker_tape/app.py
    $ hatch run python src/ticker_tape/app.py
    ```

    फिर, नेविगेट करें`http://127.0.0.1:5000/`आपके वेब ब्राउज़र में.

    परीक्षण चलाने के लिए, उपयोग करें:

    ```bash
    $ cd ticker-tape
    $ pip install pytest # optional
    $ pytest tests/
    ```

# एपीआई दस्तावेज़ीकरण

पर नेविगेट करें`http://127.0.0.1:5000/docs`अपने वेब ब्राउज़र में, या openapi.json डाउनलोड करें`http://127.0.0.1:5000/openapi.json`.

# मेट्रिक्स

प्रोमेथियस जैसे उपकरण को परिमार्जन करने दें`http://127.0.0.1:9464/metrics`.

**_नया_**

**विषयसूची**

-   [इंस्टालेशन](#installation)
-   [संस्करण स्रोत](#version-source)
-   [वातावरण](#environments)
-   [निर्माण](#build)
-   [लाइसेंस](#license)

## इंस्टालेशन

```console
pip install ticker-tape
```

## संस्करण स्रोत

-   [हैच-वीसीएस](https://github.com/ofek/hatch-vcs)संस्करण स्रोत प्लगइन Git टैग का उपयोग करके प्रोजेक्ट संस्करण निर्धारित करता है

## वातावरण

-   एक स्टैंडअलोन में बड़े करीने से परिभाषित किया गया[`hatch.toml`](https://hatch.pypa.io/latest/intro/#configuration)
-   `test`मैट्रिक्स का उपयोग करता है[हैच-कंटेनर](https://github.com/ofek/hatch-containers)डॉकर कंटेनर के अंदर प्रत्येक वातावरण को चलाने के लिए प्लगइन; उपयोग में देखा जा सकता है[test](.github/workflows/test.yml)GitHub वर्कफ़्लो

## निर्माण

-   सभी निर्माण लक्ष्य इसका उपयोग करते हैं[हैच-वीसीएस](https://github.com/ofek/hatch-vcs)शिप करने के लिए हुक प्लगइन बनाएं`_version.py`फ़ाइल करें ताकि संस्करण का उपयोग रनटाइम पर किया जा सके
-   पहिये का उपयोग करते हैं[हैच-mypyc](https://github.com/ofek/hatch-mypyc)पहले सभी कोड संकलित करने के लिए हुक प्लगइन बनाएं[Mypyc](https://github.com/mypyc/mypyc)
-   [निर्माण](.github/workflows/build.yml)GitHub वर्कफ़्लो दिखाता है कि कैसे करें:
    -   उपयोग[सिबिल्डव्हील](https://github.com/pypa/cibuildwheel)प्रत्येक प्लेटफ़ॉर्म के लिए बाइनरी व्हील वितरित करना
    -   उपयोग[अनुप्रयोग](https://hatch.pypa.io/latest/plugins/builder/app/)प्रत्येक प्लेटफ़ॉर्म के लिए स्टैंडअलोन वितरण बनाने का लक्ष्य बनाएं

## लाइसेंस

`ticker-tape`की शर्तों के तहत वितरित किया जाता है[साथ](https://spdx.org/licenses/MIT.html)लाइसेंस.

## 100 - परिचय

देखना[README.md](./100/README.md)

## 200 - आवश्यकताएँ

देखना[README.md](./200/README.md)

## 300 - Building Our Application

देखना[README.md](./300/README.md)

## 400 - निष्कर्ष

देखना[README.md](./400/README.md)
