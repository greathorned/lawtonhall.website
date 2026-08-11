# lawtonhall.website

# Jekyll Stuff
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
