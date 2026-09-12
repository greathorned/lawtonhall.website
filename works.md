---
layout: default
title: Works
permalink: /works/
---

<h1>Works</h1>

<div class="works-grid">

  <section class="works-category">

    <div class="works-category-header">
        <h2>For Humans</h2>
    </div>
    
    {% assign human_works = site.works 
        | where: "category", "humans" 
        | sort: "date"
        | reverse %}
    {% for work in human_works %}
      <div class="work-index-item">
        <a class="work-index-title" href="{{ work.url | relative_url }}">
          {{ work.title }}
        </a>

        {% if work.brief_instrumentation %}
          <div class="work-index-instrumentation">
            {{ work.brief_instrumentation }}
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </section>

  <section class="works-category">
    <div class="works-category-header">
        <h2>For Humans + Machines</h2>
    </div>

    {% assign human_machine_works = site.works 
        | where: "category", "humans-machines" 
        | sort: "date"
        | reverse %}
    {% for work in human_machine_works %}
      <div class="work-index-item">
        <a class="work-index-title" href="{{ work.url | relative_url}}">
          {{ work.title }}
        </a>

        {% if work.brief_instrumentation %}
          <div class="work-index-instrumentation">
            {{ work.brief_instrumentation }}
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </section>

  <section class="works-category">
    <div class="works-category-header">
        <h2>For Machines</h2>
    </div>

    {% assign machine_works = site.works 
        | where: "category", "machines" 
        | sort: "date"
        | reverse %}
    {% for work in machine_works %}
      <div class="work-index-item">
        <a class="work-index-title" href="{{ work.url | relative_url }}">
          {{ work.title }}
        </a>

        {% if work.brief_instrumentation %}
          <div class="work-index-instrumentation">
            {{ work.brief_instrumentation }}
          </div>
        {% endif %}
      </div>
    {% endfor %}
  </section>

</div>
