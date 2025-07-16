---
title: トップ
layout: default
---
# 電研ブログ

<ul class="cardlist">
  {% for post in site.posts limit:10 %}
    <li class="carditem">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <p class="card-excerpt">{{ post.excerpt | truncate: 150 }}</p>
      <span class="card-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>