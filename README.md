# Yue Qiu — Academic Homepage

A responsive academic homepage for [Yue Qiu](https://yueqiu0.github.io/), hosted on GitHub Pages, with a three-column profile header and a single column of content sections.

## Edit the site

- `index.html`: biography, MS/PhD applicant notice, publications, education, and honors.
- `style.css`: Georgia headings, responsive section layouts, and print styles.
- `contacts.js`: contact icon selection, information popovers, and keyboard dismissal.
- `assets/portrait-2026.jpg`: the supplied portrait; its circular crop is set in `style.css`.
- `assets/Yue_Qiu_CV.pdf`: downloadable public CV.
- `assets/fonts/name-kai.woff2`: a four-character Kai-style subset for the Chinese name, derived from LXGW WenKai Mono and distributed with its SIL Open Font License.

The site uses plain HTML and CSS. Email, LinkedIn, and GitHub icons link directly to their destinations; a small JavaScript file toggles the WeChat, QQ, and phone details. Publication summaries use native HTML disclosure controls and work without JavaScript.

## Local preview

```sh
python3 -m http.server 8765 --directory /Users/grimes/Desktop/tool/cv/yueqiu0.github.io
```

Open `http://localhost:8765/`.

## GitHub Pages

Use the repository `yueqiu0/yueqiu0.github.io`. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. The public URL is `https://yueqiu0.github.io/`.

## References

The content sections follow the serif headings and light panels of [Valerie Chen’s homepage](https://valeriechen.github.io/). The profile header follows the supplied horizontal reference: portrait on the left, names and contact icons in the middle, affiliation on the right, and section navigation below. All biography and publication information belongs to Yue Qiu.

The Chinese-name font is subsetted from [LXGW WenKai](https://github.com/lxgw/LxgwWenKai). Its copyright and license are included in `assets/fonts/OFL-LXGW-WenKai.txt`.
