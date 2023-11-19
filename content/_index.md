---
title: ""
date: 2022-10-24
type: landing
sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      username: admin
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ""
      text: ""
      count: 5
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: desc
    design:
      view: compact
      columns: "2"
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle: null
      text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam,
        venenatis ut magna et, vehicula efficitur enim.
      email: bob@channelmotions.com
      phone: 617 470 7713
      appointment_url: https://calendly.com
      office_hours:
        - Weekdays from 09:00 am to 05:00 pm
        - Saturdays and Sundays closed
        - "*All times are Eastern Standard (US Boston)*"
      autolink: true
      form:
        provider: netlify
        formspree:
          id: null
        netlify:
          captcha: false
    design:
      columns: "2"
---
