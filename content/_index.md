---
title: ""
date: 2022-10-24
type: landing
sections:
  - block: hero
    id: hero
    content:
      title: |
        Empowering ISVs  for Channel Partnership Success
        {style="color: white; font-size: 4rem;"}
      text: |
        Channel Strategy - Enablement - Operation
        {style="color: white; font-size: 1.5rem;"}
      cta:
        url: "#contact"
        label: Let's talk
      cta_alt:
        url: "#services"
        label: '<span style="color: white">View services</span>'
    design:
      background:
        image:
          filename: cover-image.png
          position: top
        color: gray
      columns: "1"
      css_class: d-flex align-items-end fullscreen
  - block: about.biography
    id: about
    content:
      title: Biography
      username: admin
  - block: features
    id: services
    design:
      columns: "2"
    content:
      title: Services and Capabilities
      subtitle: What I accomplish for you
      text: >+
        Through Channel Motions Consulting, I help small to mid-size Independent
        Software Vendors (ISVs) drive partner contribution to 30-50% without the
        chaos and forecast misalignments that most channel operations suffer
        from. 

      items:
        - name: Channel Strategy Development
          description: We collaborate with you and your team to craft effective channel
            strategies, aligning routes to market with your unique business
            objectives. We analyze market dynamics, competitive landscapes, and
            potential partner types and ecosystems to create a roadmap that
            maximizes revenue growth and market penetration.
          icon: chess
          icon_pack: fas
        - name: Partner-Centric Readiness Assessment
          description: Ensuring effective engagement with partners begins with conducting
            thorough assessments of your organizational and operational
            readiness. We meticulously analyze your existing resources,
            processes, support structures, and partnering culture to guarantee
            alignment with partner-centric approaches and objectives.
          icon: arrows-to-eye
          icon_pack: fas
        - name: Partner Targeting & Acquisition
          description: We'll help you define, identify, and target ideal channel partners.
            Through extensive market research and segmentation, we enable you
            and your team to acquire partners whose strengths, expertise, and
            customer base align with your offering.
          icon: arrows-down-to-people
          icon_pack: fas
        - name: Partner Program Development
          description: Incentivize and empower your channel partners with cohesive,
            flexible frameworks that provide them with the necessary tools,
            resources, and motivation to succeed while ensuring alignment with
            your goals.
          icon: hand-holding-droplet
          icon_pack: fas
        - name: Channel Operations
          description: Operational efficiency in a Channel Operation refers to the
            streamlined and optimized processes, resource allocation, and
            collaboration within a network of partners. It enables businesses to
            maximize productivity, reduce costs, and deliver products or
            services to the market more effectively. The outcome is improved
            profitability, faster time-to-market, and stronger partner
            relationships, ultimately leading to increased revenue, market
            competitiveness, and sustainable growth.
          icon: compass
          icon_pack: fas
        - name: Partner Enablement
          description: Equip your channel partners with the knowledge and resources they
            need to effectively sell and support your products. From
            relationship building to goals and expectation alignment to
            co-selling, training, and support, Channel Motions will produce an
            actionable multi-pronged enablement plan ensuring partners are
            well-prepared to engage with customers and drive mutual success in
            the market.
          icon: person-chalkboard
          icon_pack: fas
  - block: collection
    id: posts
    content:
      title: Current Posts
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
  - block: testimonials
    id: testimonials
    content:
      title: Testimonials
      subtitle: What our customers have to say about us
      items:
        - name: Petr Klouda, VP of Global Sales
          text: Bob's distinctive quality was his dedication to the complete lifecycle of
            our partnerships and deep knowledge of building a channel business.
            He engineered an efficient and effective onboarding process,
            guaranteeing a top-notch experience for our partners. His guidance
            on roles and responsibilities played a pivotal role in successfully
            implementing these changes within our organization.
        - name: Don Schroeder CTO, Senior Payments Architect
          text: What Bob brought to the team was an exceptional level of both strategic
            and tactical business expertise. By combining these and leveraging
            his deep understanding of our partner’s needs he was able to produce
            significant growth throughout the Partner Sales Channel.   real
            value to a company.  Bob is one of these few.
        - name: Flavio Lebrao, CEO
          text: I’ve worked with channel sales all my life and I know that only a few
            individuals have what it takes to build a solid partner network that
            can add real value to a company.  Bob is one of these few.
        - name: Derek Langone Serial CEO
          text: >
            Bob was able to help Sitefinity raise its profile in the marketplace
            and help to not only attract new clients but also gather the
            attention of key industry analysts. Bob is a results-driven leader
            with a pragmatic approach and an awareness of the importance of
            cultural development. If your company has a channel that needs
            improvement or you need to build a channel from the ground up, Bob
            is an executive that can deliver in either scenario. 
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle: null
      text: "Let's talk about your channel objectives and how we can get you there. "
      email: bob@channelmotions.com
      phone: 617 470 7713
      appointment_url: https://calendly.com
      office_hours:
        - Weekdays from 08:00 am to 05:00 pm
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
