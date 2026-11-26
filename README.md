# Yue Qiu — Academic Homepage

A lightweight, responsive academic homepage for [Yue Qiu](https://yueqiu0.github.io/), hosted on GitHub Pages.

## Edit the site

- `index.html`: biography, MS/PhD applicant notice, publications, experience, education, and honors.
- `style.css`: typography, spacing, responsive layouts, and print styles.
- `contacts.js`: contact icon selection, inline information disclosure, and keyboard dismissal.
- `assets/portrait.png`: the supplied portrait.
- `assets/Yue_Qiu_CV.pdf`: downloadable public CV.

The site uses plain HTML, CSS, and a small JavaScript file for the contact icons. Publication summaries use native HTML disclosure controls and work without JavaScript.

## Local preview

```sh
python3 -m http.server 8765 --directory /Users/grimes/Desktop/tool/cv/yueqiu0.github.io
```

Open `http://localhost:8765/`.

## GitHub Pages

Use the repository `yueqiu0/yueqiu0.github.io`. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. The public URL is `https://yueqiu0.github.io/`.

## References

The presentation is inspired by [Gan Luo’s academic homepage](https://luoxiaogan.github.io/GanLuo.github.io/). The applicant introduction also takes inspiration from [Yuyang Peng’s homepage](https://p-y-y.github.io/). All biography, publication, and experience information belongs to Yue Qiu.
