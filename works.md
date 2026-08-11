---
layout: default
title: Works
permalink: /works/
---

# Works

{% for work in site.works %}
- [{{ work.title }}]({{ work.url }})
{% endfor %}
