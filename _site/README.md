# lawtonhall.website

# Jekyll Stuff
- make sure only one terminal is running
- use Ctrl+C to stop the running server
- Build site in terminal w/ Jekyll and start server: ```bundle exec jekyll serve```
- Jekyll handles page navigation, etc. but is more lightweight than WP
- Jekyll themes handle different types of pages, styling, header footer, etc.
- LAYOUTS define types of pages (templates)
    - a layout includes header footer info, variables that I define
    - then, these variables are filled out in the MD file as the content, e.g.:
        ```
        ---
        layout: work
        title: Evenweave
        instrumentation: ...
        ---
        (Content Goes Here)
        ```
- INCLUDES are reuseable bits of code
    - e.g. navigation bar
    - LAYOUTS contain INCLUDES

# Style

- Colors: `#D9E8E3 #F7B1AB #A36691 #DDB169`
- UTF-8 icons: https://www.utf8icons.com/
- use variables for fonts and dotted lines: `var(--rule);`

# Future things to add

Once your site matures, you'll likely add things like:
favicon.ico
site.webmanifest
robots.txt
sitemap.xml

# Home Page

"frontispiece" image, like cover of a book

or images that lead to sub-sections of the site (works, practice, about, contact)

definitely NOT a news feed

# Works Pages

## Study Scores

- make sure permissions prohibit downloads
- from google drive: right click > open in new tab
- change `/view` in url to `/preview`
- add to iframe

## Score Store

- use `purchase_link` for url to gumroad
- `purchase_text:` is the displayed text

## media container on works pages

media container can use different types of media (e.g. images)
multi-line YAML fields:

```
media: |
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Air Lines"
    allowfullscreen>
  </iframe>
```

use div class full-width-media for embeds in main-content that should be full width

## multi-line text in heading right section:

```
brief_instrumentation: |
  for solo flute<br>
  addition text<br>
  more text
```

# Contact page

look at email forwarding, so I could have lawton@lawtonhall.com go to my gmail

# Analytics

consider Umami (no cookies, free plan)

Repohistory: https://repohistory.com/

# Site Structure
```
_layouts/
  default.html
  work.html
  practice.html
```
- default.html: shell (navigation, page width, content area, footer)
- work: inherits from default but adds structure for portfolio pages
- practice: notebook-type entries


```
default.html
├── sidebar/navigation
└── main content

work.html
└── uses default.html
    ├── work metadata
    └── work content

practice.html
└── uses default.html
    ├── date/tags
    └── practice content
```
# Text Ornaments

```
·

⠂

◦

⸱
```
