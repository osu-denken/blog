---
title: トップ
layout: default
---
# 電研ブログ

<ul>
  {% for post in site.posts limit:10 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>