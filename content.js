window.CONTENT = {
  'banner': `
<div style="background-color: #ff9800; color: #000; text-align: center; padding: 15px; font-weight: bold; font-family: var(--font); position: sticky; top: 0; z-index: 9999;"> 
  🚧 https://hire.alectronic.co/ is under construction. Please visit my <a href="https://www.linkedin.com/in/alectronic0" style="color: #000; text-decoration: underline;">LinkedIn</a> for now. 🚧 
</div> 

<a class="skip-link" href="#main">Skip to content</a>
`,
  'header': `
<header class="site-nav">
  <div class="container nav-inner">
    <a class="logo" href="#hero">Alec<span>.</span>Dev</a>
    <nav class="nav-links" aria-label="Section navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#beyond">Beyond Code</a>
      <a href="#volunteering">Volunteering</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
`,
  'hero': `
<section class="hero" id="hero">
    <div class="container hero-inner">
      <img class="hero-avatar" src="assets/avatar.png" alt="Alec Doran-Twyford">
      <div class="hero-content">
        <div class="hero-wave" aria-hidden="true">👋</div>
        <h1>Alec Doran-Twyford</h1>
        <div class="role">Senior Software Engineer</div>
        <div class="location">📍 Welwyn Garden City, Hertfordshire</div>
        <p class="pitch">I build reliable, high-scale software and enjoy turning tricky problems into simple, well-tested systems. Currently at Deliveroo.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">View my work</a>
          <a class="btn btn-secondary" href="mailto:alec@alectronic.co">Email me</a>
        </div>
      </div>
    </div>
  </section>
`,
  'about': `
<section id="about">
    <div class="container">
      <div class="eyebrow">🙋 About</div>
      <h2 class="section-title">A bit about me</h2>
      <div class="title-underline" aria-hidden="true"></div>
      <div class="about-card">
        <p>I'm a Senior Software Engineer at Deliveroo, working on high-scale backend systems. I care about clean, well-tested code, and about the people I build it with — I've picked up a Scrum Master certification along the way and enjoy the team side of engineering as much as the code.</p>
        <p>My route in was a little unconventional — a First-class Computer Science degree, a year in Sydney working on VoIP software, and a spell in London food-tech before settling into engineering across public-sector (HMCTS, HMPPS via Solirius), Rightmove and now Deliveroo. It left me with a product mindset I still bring to every system I build.</p>
      </div>
    </div>
  </section>
`,
  'skills': `
<section id="skills">
    <div class="container">
      <div class="eyebrow">🛠️ Skills</div>
      <h2 class="section-title">What I work with</h2>
      <div class="title-underline" aria-hidden="true"></div>

      <div class="skills-legend">
        <span class="tag tag-love">💚 Love it</span>
        <span class="tag tag-like">👍 Like it</span>
        <span class="tag tag-avoid">💔 Prefer to avoid</span>
      </div>

      <div class="skills-grid">

        <div class="skill-card">
          <h3><span aria-hidden="true">💻</span> Languages</h3>
          <div class="tags">
            <span class="tag">Java</span>
            <span class="tag">Go</span>
            <span class="tag">Ruby</span>
            <span class="tag">TypeScript</span>
          </div>
        </div>

        <div class="skill-card">
          <h3><span aria-hidden="true">🧩</span> Backend &amp; Microservices</h3>
          <div class="tags">
            <span class="tag">Spring Boot</span>
            <span class="tag">Ruby on Rails</span>
            <span class="tag">gRPC</span>
            <span class="tag">Kafka</span>
            <span class="tag">Postgres</span>
            <span class="tag">Redis</span>
          </div>
        </div>

        <div class="skill-card">
          <h3><span aria-hidden="true">☁️</span> Cloud &amp; Infra</h3>
          <div class="tags">
            <span class="tag">AWS</span>
            <span class="tag">Docker</span>
            <span class="tag">Terraform</span>
          </div>
        </div>

        <div class="skill-card">
          <h3><span aria-hidden="true">🤝</span> Ways of Working</h3>
          <div class="tags">
            <span class="tag">Agile / Scrum</span>
            <span class="tag">TDD</span>
            <span class="tag">Code Review</span>
            <span class="tag">Mentoring</span>
            <span class="tag">Cross-team Collaboration</span>
          </div>
        </div>

      </div>
    </div>
  </section>
`,
  'experience': `
<section id="experience">
    <div class="container">
      <div class="eyebrow">📈 Experience</div>
      <h2 class="section-title">Where I've worked</h2>
      <div class="title-underline" aria-hidden="true"></div>

      <ol class="timeline">

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/deliveroo.jpg" alt="Deliveroo logo" loading="lazy">
                <img class="timeline-logo" src="assets/logo/doordash.jpg" alt="DoorDash logo" loading="lazy">
                <span class="timeline-company">Deliveroo</span>
              </div>
              <span class="timeline-dates">Mar 2021 – Present</span>
            </div>
            <div class="timeline-role">Senior Software Engineer (since May 2023) · previously Software Engineer</div>
            <ul class="timeline-bullets">
              <li>5+ years on the Consumer Pricing team — from IPO through profitability to DoorDash acquisition — the go-to domain expert for fees across the organisation</li>
              <li>Built internal tooling that cut fee configuration from days of careful manual checking to minutes, saving significant engineering hours</li>
              <li>Designed and coordinated co-pricing, a core microservice managing fees, benefits &amp; pricing across the consumer journey (home, menu, basket, checkout)</li>
              <li>Now supporting the migration of pricing systems to the unified Wolt / DoorDash / Deliveroo platform, bringing Deliveroo's pricing framework to the wider organisation</li>
              <li>Cross-functional partner to Product, DS, Strategy, MLE &amp; Engineering — stewards the backlog, PR reviews and on-call rota (Rootly) while keeping core repos on the latest libraries</li>
            </ul>
            <p class="timeline-note">Deliveroo joined the DoorDash group in 2025, following DoorDash's acquisition of Deliveroo.</p>
            <img class="acq-banner" src="assets/logo/deliveroo-x-doordash.webp" alt="Deliveroo and DoorDash combined branding" loading="lazy">
            <div class="tags card-tech">
              <span class="tag">Go</span>
              <span class="tag">TypeScript</span>
              <span class="tag">gRPC</span>
              <span class="tag">GraphQL</span>
              <span class="tag">REST</span>
              <span class="tag">AWS</span>
              <span class="tag">Terraform</span>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/rightmove.jpg" alt="Rightmove logo" loading="lazy">
                <span class="timeline-company">Rightmove</span>
              </div>
              <span class="timeline-dates">Nov 2018 – Mar 2021</span>
            </div>
            <div class="timeline-role">Software Engineer — Vendor &amp; Evaluate teams</div>
            <ul class="timeline-bullets">
              <li>Migrated code from the monolith into microservices</li>
              <li>Upgraded services to Spring Boot 2 and Elasticsearch 6 &amp; 7</li>
              <li>Full-stack work across Java 11, Node.js and React, with Kafka, Docker and Jenkins</li>
            </ul>
            <div class="tags card-tech">
              <span class="tag">Java 11</span>
              <span class="tag">Spring Boot 2</span>
              <span class="tag">Elasticsearch</span>
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">Kafka</span>
              <span class="tag">Docker</span>
              <span class="tag">Jenkins</span>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/solirius.avif" alt="Solirius Consulting logo" loading="lazy">
                <span class="timeline-company">Solirius Consulting</span>
              </div>
              <span class="timeline-dates">Sep 2016 – Nov 2018</span>
            </div>
            <div class="timeline-role">Junior Software Engineer — contracted to HMCTS &amp; HMPPS</div>
            <ul class="timeline-bullets">
              <li>HMCTS Reform: built common components for Document &amp; Evidence Management, also acting as Scrum Master. <a href="https://github.com/search?q=org%3Ahmcts+author%3Aalectronic0&amp;type=pullrequests" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">View my 30+ open-source PRs</a></li>
              <li>HMPPS: delivered the Strategic Partner Gateway on Java 8, ServiceMix, ELK and AWS</li>
              <li>Java 8, Spring Boot, Postgres, Docker, Terraform, Jenkins and REST APIs</li>
            </ul>
            <div class="tags card-tech">
              <span class="tag">Java 8</span>
              <span class="tag">Spring Boot</span>
              <span class="tag">Postgres</span>
              <span class="tag">Docker</span>
              <span class="tag">Terraform</span>
              <span class="tag">Jenkins</span>
              <span class="tag">ServiceMix</span>
              <span class="tag">ELK</span>
              <span class="tag">AWS</span>
            </div>
          </div>
        </li>

      </ol>

      <details class="past-work">
        <summary>Past work experience (2009–2016)</summary>
        <p class="past-work-intro">Before I moved into engineering full-time: startups, a year in Australia, and the retail and hospitality roles that built my work ethic, organisation and customer focus.</p>

        <ol class="timeline">

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <img class="timeline-logo" src="assets/logo/sky.jpg" alt="Sky logo" loading="lazy">
                  <span class="timeline-company">Sky</span>
                </div>
                <span class="timeline-dates">Feb 2016 – Aug 2016</span>
              </div>
              <div class="timeline-role">VB Analyst</div>
              <ul class="timeline-bullets">
                <li>Gathered requirements and worked with stakeholders to refine processes</li>
                <li>Designed and built scalable VBA solutions, introducing better team practices</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">VBA</span>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <img class="timeline-logo" src="assets/logo/gleat.png" alt="GLEAT logo" loading="lazy">
                  <span class="timeline-company">GLEAT</span>
                </div>
                <span class="timeline-dates">Nov 2015 – Jan 2016</span>
              </div>
              <div class="timeline-role">Product &amp; Mobile Developer</div>
              <ul class="timeline-bullets">
                <li>Picked up the codebase in days and shipped first features within two, learning JavaScript and Meteor on the job</li>
                <li>Applied lean-startup principles and drove UI/UX improvements</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">JavaScript</span>
                <span class="tag">Meteor</span>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <img class="timeline-logo" src="assets/logo/welcome-break.jpg" alt="Welcome Break logo" loading="lazy">
                  <img class="timeline-logo" src="assets/logo/waitrose.jpg" alt="Waitrose logo" loading="lazy">
                  <span class="timeline-company">Welcome Break × Waitrose</span>
                </div>
                <span class="timeline-dates">Mar 2015 – Feb 2016</span>
              </div>
              <div class="timeline-role">Waitrose Team Leader (Operations)</div>
              <ul class="timeline-bullets">
                <li>Ran the shop floor on shift — planning tasks and breaks, mentoring staff and coordinating product launches</li>
                <li>Owned a store sub-section, analysing sales trends to drive ordering and reduce wastage</li>
                <li>Represented the store at Partnership Council to shape future business plans</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">Team Leadership</span>
                <span class="tag">Operations</span>
                <span class="tag">Customer Service</span>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <span class="timeline-company">Food Startup School</span>
                </div>
                <span class="timeline-dates">Feb 2015 – Aug 2015</span>
              </div>
              <div class="timeline-role">Social Marketing Intern</div>
              <ul class="timeline-bullets">
                <li>Generated leads and partnerships for a London food-tech events startup, running market research and social campaigns</li>
                <li>Oversaw on-the-day operations for events</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">Marketing</span>
                <span class="tag">Market Research</span>
                <span class="tag">Events</span>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <img class="timeline-logo" src="assets/logo/ivestel.jpg" alt="IVSTEL logo" loading="lazy">
                  <span class="timeline-company">IVSTEL — Sydney, Australia</span>
                </div>
                <span class="timeline-dates">Sep 2013 – Dec 2014</span>
              </div>
              <div class="timeline-role">Technical Product Manager &amp; Support Engineer</div>
              <ul class="timeline-bullets">
                <li>Owned features for Adaptiv, a Java EE VoIP routing platform (Linux, MySQL, OpenSIPS, Radius)</li>
                <li>Rebuilt the OS image, cutting setup from hours to minutes and removing 98% of human error</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">Java EE</span>
                <span class="tag">Linux</span>
                <span class="tag">MySQL</span>
                <span class="tag">OpenSIPS</span>
                <span class="tag">Radius</span>
              </div>
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-company-wrap">
                  <img class="timeline-logo" src="assets/logo/waitrose.jpg" alt="Waitrose logo" loading="lazy">
                  <span class="timeline-company">Waitrose</span>
                </div>
                <span class="timeline-dates">May 2009 – Feb 2013</span>
              </div>
              <div class="timeline-role">Senior Customer Sales Assistant</div>
              <ul class="timeline-bullets">
                <li>Nearly four years as a customer-facing partner — the foundation of my work ethic and a lasting commitment to superior, customer-focused service</li>
                <li>Trained partners and managed shifts, planning tasks and breaks for the team</li>
                <li>Full accountability for a store sub-section: analysed sales trends to drive ordering strategy, stock management and reduced wastage</li>
                <li>Represented the store at Partnership Council meetings on future business plans</li>
              </ul>
              <div class="tags card-tech">
                <span class="tag">Customer Service</span>
                <span class="tag">Organisation</span>
                <span class="tag">Strategy</span>
                <span class="tag">Training</span>
              </div>
            </div>
          </li>

        </ol>
      </details>
    </div>
  </section>
`,
  'education': `
<section id="education">
    <div class="container">
      <div class="eyebrow">🎓 Education</div>
      <h2 class="section-title">Where I studied</h2>
      <div class="title-underline" aria-hidden="true"></div>

      <ol class="timeline">

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/general-assembly.jpg" alt="General Assembly logo" loading="lazy">
                <span class="timeline-company">General Assembly</span>
              </div>
              <span class="timeline-dates">2014</span>
            </div>
            <div class="timeline-role">Product Management (part-time course)</div>
            <ul class="timeline-bullets">
              <li>Product discovery, roadmapping, user research, MVPs and stakeholder communication</li>
            </ul>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/university-of-hertfordshire.jpg" alt="University of Hertfordshire logo" loading="lazy">
                <span class="timeline-company">University of Hertfordshire</span>
              </div>
              <span class="timeline-dates">2009 – 2012</span>
            </div>
            <div class="timeline-role">BSc (Hons) Computer Science — First Class</div>
            <ul class="timeline-bullets">
              <li>Specialised in system architecture and networking; also covered AI/ML, databases and quantum computing</li>
              <li>Cisco CCNA certified through the course</li>
            </ul>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/oaklands.svg" alt="Oaklands College logo" loading="lazy">
                <span class="timeline-company">Oaklands College</span>
              </div>
              <span class="timeline-dates">2007 – 2009</span>
            </div>
            <div class="timeline-role">BTEC National Diploma — IT &amp; Business Practitioner (DMM)</div>
            <ul class="timeline-bullets">
              <li>Foundational IT and business skills</li>
            </ul>
          </div>
        </li>

      </ol>

      <p style="margin-top: 28px;"><strong style="color: var(--text);">Certifications:</strong> Certified ScrumMaster® (Scrum Alliance, 2020) · Cisco CCNA (2012)</p>
    </div>
  </section>
`,
  'projects': `
<section id="projects">
    <div class="container">
      <div class="eyebrow">🚀 Projects</div>
      <h2 class="section-title">Things I've built</h2>
      <div class="title-underline" aria-hidden="true"></div>

      <div class="project-grid">

        <div class="project-card">
          <img class="project-thumb" src="assets/project/deliveroo-fees.png" alt="Deliveroo consumer fees breakdown showing delivery fee, small order fee, service fee, bag charge and priority delivery" loading="lazy">
          <h3>Consumer Pricing &amp; Fees Platform</h3>
          <p class="project-field-label">Problem</p>
          <p class="project-field-value">Deliveroo's fee configuration required days of careful manual work, and the pricing system needed a scalable architecture to serve fees, benefits &amp; pricing across multiple surfaces.</p>
          <p class="project-field-label">What I built</p>
          <p class="project-field-value">Internal tooling that reduced fee configuration to minutes, and co-pricing — a core microservice managing fees, benefits &amp; pricing across home, menu, basket and checkout. Now leading migration to the unified Wolt / DoorDash / Deliveroo platform.</p>
          <p class="project-field-label">Tech used</p>
          <div class="tags">
            <span class="tag">Go</span>
            <span class="tag">gRPC</span>
            <span class="tag">GraphQL</span>
            <span class="tag">AWS</span>
            <span class="tag">Terraform</span>
          </div>
          <span class="project-impact">Deliveroo · 2021–Present</span>
        </div>

        <div class="project-card">
          <div class="before-after">
            <figure>
              <img src="assets/project/old-propty-details-page-web.jpg" alt="The legacy Rightmove property details page" loading="lazy">
              <figcaption>Before — legacy page</figcaption>
            </figure>
            <figure>
              <img src="assets/project/new-propty-details-page-web.jpg" alt="The replatformed Rightmove property details page" loading="lazy">
              <figcaption>After — replatformed microservice</figcaption>
            </figure>
          </div>
          <h3>Sold Property Page replatform</h3>
          <p class="project-field-label">Problem</p>
          <p class="project-field-value">Rightmove's Sold Property Page lived in an ageing legacy codebase.</p>
          <p class="project-field-label">What I built</p>
          <p class="project-field-value">Replatformed the page into a standalone microservice, with refactoring, UI work and load testing. This involved building and migrating across several microservices including sold property search, sold property web, property details app, and property details web.</p>
          <p class="project-field-label">Tech used</p>
          <div class="tags">
            <span class="tag">Spring Boot</span>
            <span class="tag">Java</span>
            <span class="tag">React</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Jest</span>
            <span class="tag">JUnit</span>
          </div>
          <span class="project-impact">Rightmove · 2019–2020</span>
        </div>

        <div class="project-card">
          <img class="project-thumb" src="assets/project/hmcts.png" alt="HMCTS Architecture" loading="lazy">
          <h3>HMCTS Reform — Document &amp; Evidence Management</h3>
          <p class="project-field-label">Problem</p>
          <p class="project-field-value">Courts &amp; Tribunals digital services needed shared, reusable components for handling case documents and evidence.</p>
          <p class="project-field-label">What I built</p>
          <p class="project-field-value">As a junior engineer on the Reform programme, I built common components for the platform and acted as Scrum Master. <br><a href="https://github.com/search?q=org%3Ahmcts+author%3Aalectronic0&amp;type=pullrequests" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline; display: inline-block; margin-top: 4px;">View my 30+ open-source PRs for HMCTS on GitHub</a></p>
          <p class="project-field-label">Tech used</p>
          <div class="tags">
            <span class="tag">Java 8</span>
            <span class="tag">Spring Boot</span>
            <span class="tag">Postgres</span>
            <span class="tag">Liquibase</span>
            <span class="tag">Docker</span>
            <span class="tag">JUnit</span>
            <span class="tag">Mockito</span>
          </div>
          <span class="project-impact">HMCTS via Solirius · 2017–2018</span>
        </div>


        <div class="project-card github">
          <h3><span aria-hidden="true">🐙</span> More on GitHub</h3>
          <p class="project-field-value">Check out my personal and open-source projects, experiments, and code samples.</p>
          <a class="btn btn-secondary" href="https://github.com/alectronic0" target="_blank" rel="noopener">
            github.com/alectronic0
          </a>
        </div>

      </div>
    </div>
  </section>
`,
  'volunteering': `
<section id="volunteering">
    <div class="container">
      <div class="eyebrow">🤝 Volunteering</div>
      <h2 class="section-title">Giving back</h2>
      <div class="title-underline" aria-hidden="true"></div>

      <ol class="timeline">

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/likegoblins.jpg" alt="Goblins logo" loading="lazy">
                <span class="timeline-company">Goblins</span>
              </div>
              <span class="timeline-dates">May 2025 – Present</span>
            </div>
            <div class="timeline-role">Community Volunteer</div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-company-wrap">
                <img class="timeline-logo" src="assets/logo/good-for-nothing.jpg" alt="Good for Nothing logo" loading="lazy">
                <span class="timeline-company">Good for Nothing</span>
              </div>
              <span class="timeline-dates">Mar 2014 – Dec 2014</span>
            </div>
            <div class="timeline-role">Project Manager · Business &amp; Technical Consultant</div>
            <ul class="timeline-bullets">
              <li>Ran hackathon-style social-enterprise projects, providing technical consulting and branding for cause-led founders</li>
            </ul>
          </div>
        </li>

      </ol>
    </div>
  </section>
`,
  'next': `
<section id="next">
    <div class="container">
      <div class="eyebrow">🚀 Next Steps</div>
      <h2 class="section-title">What I'm looking for next</h2>
      <div class="title-underline" aria-hidden="true"></div>
      
      <div class="about-card" style="margin-bottom: 24px;">
        <h3>The Mission</h3>
        <p>I want to get involved in consumer-focused technology that makes everyday people's lives better. Whether it's helping people buy houses (Rightmove), get food delivered (Deliveroo), or navigate the public sector (HMCTS), impact matters to me.</p>
        <p>Areas I'd love to try next: <strong>smart home &amp; hardware</strong>, <strong>consumer or geo-based data</strong> (like rendering data onto maps to improve lives), and <strong>health tech</strong> to help people make better choices and understand their own data.</p>
        <p><em>Hard no:</em> Insurtech, Big Banks, Big Oil, or Gambling.</p>
      </div>

      <div class="about-card" style="margin-bottom: 24px;">
        <h3>The Setup &amp; Benefits</h3>
        <p>I work best in a <strong>Remote-first environment</strong> (no hybrid or mandated office days). If you are London-based, I'm happy to visit once a month and stay long if hotel accommodation is included — I just don't want to go back to 7am–9pm commutes.</p>
        <p>Flexible working is crucial. It allows me to support my team to the best of my ability. I am not a 'quit at 5pm' person; I'm happy to be available to support the team beyond standard hours when needed, but that requires true two-way flexibility.</p>
        <p>Must-haves: competitive holiday &amp; bonus, health insurance, and a dedicated fund for training or AI software subscriptions (e.g. Claude Code, which isn't cheap!). I actively use Antigravity, Gemini, and Claude Code for my daily work.</p>
        <p><strong>Compensation expectations:</strong> I am targeting a base salary of <strong>£125,000</strong>. My current compensation package includes a recent equity grant of <strong>~£110k GBP in RSUs</strong>. I am looking for roles that offer a competitive overall package in line with this.</p>
      </div>

      <div class="skills-grid">
        <div class="skill-card" style="grid-column: span 2;">
          <h3><span aria-hidden="true">🎯</span> Target Companies</h3>
          <p style="font-size: 0.9rem; margin-bottom: 15px; color: var(--text-muted)">The kind of places I'd love to work (just to get the vibe):</p>
          <div class="tags">
            <span class="tag"><img src="assets/logo/target-companies/monzo.svg" alt="" width="16" height="16">Monzo</span>
            <span class="tag"><img src="assets/logo/target-companies/octopusenergy.jpg" alt="" width="16" height="16" style="border-radius: 50%">Octopus Energy</span>
            <span class="tag"><img src="assets/logo/target-companies/googlemaps.svg" alt="" width="16" height="16">Google Maps</span>
            <span class="tag"><img src="assets/logo/target-companies/bumble.jpg" alt="" width="16" height="16" style="border-radius: 50%">Bumble</span>
            <span class="tag"><img src="assets/logo/target-companies/life360.jpg" alt="" width="16" height="16" style="border-radius: 50%">Life 360</span>
            <span class="tag"><img src="assets/logo/target-companies/bookingcom.svg" alt="" width="16" height="16">Booking.com</span>
            <span class="tag"><img src="assets/logo/target-companies/skyscanner.jpg" alt="" width="16" height="16" style="border-radius: 50%">Skyscanner</span>
            <span class="tag"><img src="assets/logo/target-companies/opentable.jpg" alt="" width="16" height="16" style="border-radius: 50%">OpenTable</span>
            <span class="tag"><img src="assets/logo/target-companies/citymapper.jpg" alt="" width="16" height="16" style="border-radius: 50%">Citymapper</span>
            <span class="tag"><img src="assets/logo/target-companies/strava.svg" alt="" width="16" height="16">Strava</span>
            <span class="tag"><img src="assets/logo/target-companies/lego.jpg" alt="" width="16" height="16" style="border-radius: 50%">Lego</span>
            <span class="tag"><img src="assets/logo/target-companies/nintendo.jpg" alt="" width="16" height="16" style="border-radius: 50%">Nintendo</span>
            <span class="tag"><img src="assets/logo/target-companies/crunchyroll.svg" alt="" width="16" height="16">Crunchyroll</span>
            <span class="tag">Health Tech</span>
          </div>
        </div>

        <div class="skill-card" style="grid-column: span 2;">
          <h3><span aria-hidden="true">💡</span> Tech I'm interested in</h3>
          <p style="font-size: 0.9rem; margin-bottom: 15px; color: var(--text-muted)">I still love Go, but want to do more with:</p>
          <div class="tags">
            <span class="tag">Android Mobile</span>
            <span class="tag">Kotlin</span>
            <span class="tag">Bun</span>
            <span class="tag">Deno</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Cloudflare</span>
            <span class="tag">AWS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
  'contact': `
<section id="contact">
    <div class="container">
      <div class="eyebrow">📬 Contact</div>
      <h2 class="section-title">Let's talk</h2>
      <div class="title-underline" aria-hidden="true"></div>
      <div class="contact-box">
        <p>I'm open to hearing about new opportunities. The quickest way to reach me is by email — I'll get back to you as soon as I can.</p>
        <a class="btn btn-primary btn-large" href="mailto:alec@alectronic.co">✉️ alec@alectronic.co</a>
        <div class="contact-links">
          <a href="https://github.com/alectronic0" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/alectronic0" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </div>
    </div>
  </section>
`,
  'footer': `
<footer>
  <div class="container">
    <p>&copy; 2026 Alec Doran-Twyford · Welwyn Garden City, Hertfordshire · <a href="mailto:alec@alectronic.co">alec@alectronic.co</a></p>
  </div>
</footer>
`,
};
