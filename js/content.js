const CV_DOC = 'https://docs.google.com/document/d/16hYXhtY2CBdwjQpA6dj5gnDKi_yFCQS3c0NxfGC1zIo';
const HMCTS_PRS = 'https://github.com/search?q=org%3Ahmcts+author%3Aalectronic0&amp;type=pullrequests';

window.CONTENT = {
  'banner': `
<a class="skip-link" href="#main-content">Skip to content</a>
`,
  'header': `
<header class="site-nav">
  <div class="container nav-inner">
    <a class="logo" href="#hero">Alec Doran-Twyford</a>
    <nav class="nav-links" aria-label="Section navigation">
      <a href="#timeline">Timeline</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#next">Next</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="nav-cv" href="${CV_DOC}/preview" target="_blank" rel="noopener noreferrer">Open CV</a>
  </div>
</header>
`,
  'hero': `
<section class="hero" id="hero">
    <div class="container">
      <h1>Alec Doran-Twyford</h1>
      <div class="hero-inner">
        <img class="hero-avatar" src="assets/avatar.webp" alt="Alec Doran-Twyford" width="180" height="180" fetchpriority="high">
        <div class="hero-content">
          <p class="role">Senior Software Engineer at Deliveroo</p>
          <p class="pitch">For more than five years I've worked on the systems that decide what a Deliveroo customer pays: fees, benefits and pricing, from the home page to checkout. I'm happy where I am, and something serious would still get my attention.</p>
          <div class="hero-actions">
            <div class="cv-split">
              <a class="btn btn-primary cv-open" href="${CV_DOC}/preview" target="_blank" rel="noopener noreferrer">Open CV</a>
              <button type="button" class="btn btn-primary cv-toggle" aria-expanded="false" aria-controls="cv-downloads" aria-label="Download CV">
                <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>
              </button>
              <ul class="cv-menu" id="cv-downloads" hidden>
                <li><a href="${CV_DOC}/export?format=pdf">Download PDF</a></li>
                <li><a href="${CV_DOC}/export?format=docx">Download Word (.docx)</a></li>
              </ul>
            </div>
            <a class="btn btn-secondary" href="#pay">Pay and availability</a>
            <a class="btn btn-secondary" href="mailto:alec@alectronic.co">Email me</a>
          </div>
        </div>
      </div>
      <dl class="glance">
        <div><dt>Role</dt><dd>Senior Software Engineer, Level 5</dd></div>
        <div><dt>Location</dt><dd>Welwyn Garden City, Hertfordshire. Fully remote preferred.</dd></div>
        <div><dt>Right to work</dt><dd>British and New Zealand citizen. No sponsorship needed.</dd></div>
        <div><dt>Notice</dt><dd>5 weeks, rising to 6 on 15 March 2027</dd></div>
        <div><dt>Open to</dt><dd>A serious move, ideally permanent. Not actively searching.</dd></div>
      </dl>
    </div>
  </section>
`,
  'about': `
<section id="about">
    <div class="container">
      <h2 class="section-title">About</h2>
      <p>I'm a backend-leaning full-stack engineer who likes turning tricky problems into simple, well-tested systems. At Deliveroo I've been through the IPO, the push to profitability and the DoorDash acquisition, and I'm often the person teams ask about how fees really work. These days I'm known as the caretaker of our fee services, keeping them fast, efficient and reliable.</p>
      <p>My route here wasn't a straight line. I started on the shop floor at Waitrose, where I learned to run a shift, train people and look after customers. After a First in Computer Science I went to Sydney to work on VoIP software, then tried London startups before moving into engineering for HMCTS and HMPPS, then Rightmove, then Deliveroo. I still bring that product and customer view to everything I build.</p>
    </div>
  </section>
`,
  'timeline': `
<section id="timeline">
    <div class="container">
      <h2 class="section-title">Timeline</h2>
      <p class="section-intro">From college to Deliveroo. A dashed line marks time between jobs.</p>

      <ol class="career">

        <li class="career-item career-major">
          <span class="career-year">2021</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/deliveroo.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Deliveroo, Consumer Pricing</h3>
            </div>
            <p class="career-meta"><time datetime="2021-03">Mar 2021</time> to now. Work.</p>
            <p class="career-role">Senior Software Engineer since May 2023, Software Engineer before that</p>
            <ul>
              <li>Built internal tools that cut fee configuration from days of careful manual checking to minutes</li>
              <li>Halved latency in a core fee service, from 80ms to 40ms, using caching and parallelism</li>
              <li>Designed and coordinated a core microservice for fees, benefits and pricing across home, menu, basket and checkout</li>
              <li>Supporting the migration of pricing systems to the shared Wolt, DoorDash and Deliveroo platform, advising the team and working on small order fees</li>
              <li>Work with Product, Data Science, Strategy and Machine Learning, and look after the backlog, PR reviews and on-call training</li>
            </ul>
            <p class="career-tech">Go, TypeScript, Ruby, gRPC, GraphQL, Postgres, Redis, Kafka, AWS, Terraform</p>
            <p class="career-note">Deliveroo joined the DoorDash group in 2025. Alongside this I've been a volunteer advocate with Goblins, a Discord community for meeting friends and playing games, since <time datetime="2025-05">May 2025</time>. I welcome new members, give people a safe place to talk when something's wrong, and run in-person meet-ups.</p>
          </div>
        </li>

        <li class="career-item career-major">
          <span class="career-year">2018</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/rightmove.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Rightmove</h3>
            </div>
            <p class="career-meta"><time datetime="2018-11">Nov 2018</time> to <time datetime="2021-03">Mar 2021</time>. Work.</p>
            <p class="career-role">Software Engineer, Vendor and Evaluate teams</p>
            <ul>
              <li>Worked with the Vendor team on the Sold Property web, API and search services, then built the Property Details page, front end and API, with the Evaluate team</li>
              <li>Upgraded services to Spring Boot 2 and Elasticsearch 6 and 7</li>
              <li>Helped build Kanso, Rightmove's frontend component library, and sat on the committee that prioritised it</li>
              <li>Mentored and pair programmed with engineers to broaden their full-stack skills</li>
            </ul>
            <p class="career-tech">Java 11, Spring Boot, Elasticsearch, React, GraphQL, Node.js, Kafka, Docker, Jenkins</p>
          </div>
        </li>

        <li class="career-item career-major">
          <span class="career-year">2016</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/solirius.avif" alt="" width="36" height="36" loading="lazy">
              <h3>Solirius Consulting, for HMCTS and HMPPS</h3>
            </div>
            <p class="career-meta"><time datetime="2016-09">Sep 2016</time> to <time datetime="2018-11">Nov 2018</time>. Work.</p>
            <p class="career-role">Software Developer, junior level</p>
            <ul>
              <li>HMCTS Reform: helped build common components for document and evidence management and acted as Scrum Master. <a href="${HMCTS_PRS}" target="_blank" rel="noopener noreferrer">176 merged open-source PRs</a></li>
              <li>HMPPS: delivered the Strategic Partner Gateway on Java 8, ServiceMix, ELK and AWS</li>
            </ul>
            <p class="career-tech">Java 8, Spring Boot, Postgres, Docker, Terraform, Jenkins, Ansible, AWS</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/sky.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Sky, VB Analyst</h3>
            </div>
            <p class="career-meta"><time datetime="2016-02">Feb 2016</time> to <time datetime="2016-08">Aug 2016</time>. Work.</p>
            <p>Gathered requirements with stakeholders and built scalable VBA tools, bringing better engineering practices to the team.</p>
          </div>
        </li>

        <li class="career-item">
          <span class="career-year">2015</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/gleat.webp" alt="" width="36" height="36" loading="lazy">
              <h3>GLEAT, Product and Mobile Developer</h3>
            </div>
            <p class="career-meta"><time datetime="2015-11">Nov 2015</time> to <time datetime="2016-01">Jan 2016</time>. Work.</p>
            <p>Learned JavaScript and Meteor on the job and shipped first features within two days.</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/welcome-break.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Welcome Break and Waitrose, Team Leader</h3>
            </div>
            <p class="career-meta"><time datetime="2015-03">Mar 2015</time> to <time datetime="2016-02">Feb 2016</time>. Work.</p>
            <p>Ran the shop floor on shift, mentored staff and owned a store section's sales analysis and ordering. Taught myself VBA to automate the store's stock macros.</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <div class="career-title">
              <h3>Food Startup School, Social Marketing Intern</h3>
            </div>
            <p class="career-meta"><time datetime="2015-02">Feb 2015</time> to <time datetime="2015-08">Aug 2015</time>. Work.</p>
            <p>Generated leads and partnerships for a London food-tech events startup and ran events on the day.</p>
          </div>
        </li>

        <li class="career-item career-gap">
          <div class="career-body">
            <h3>Back to the UK from Sydney</h3>
            <p class="career-meta"><time datetime="2014-12">Dec 2014</time> to <time datetime="2015-02">Feb 2015</time>. Between jobs.</p>
          </div>
        </li>

        <li class="career-item">
          <span class="career-year">2014</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/general-assembly.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>General Assembly, Sydney</h3>
            </div>
            <p class="career-meta"><time datetime="2014-04">Apr 2014</time> to <time datetime="2014-06">Jun 2014</time>. Education.</p>
            <p>Part-time Product Management course.</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/good-for-nothing.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Good for Nothing, Sydney</h3>
            </div>
            <p class="career-meta"><time datetime="2014-03">Mar 2014</time> to <time datetime="2014-12">Dec 2014</time>. Volunteering.</p>
            <p>Project manager and technical consultant on hackathon-style projects for social enterprises.</p>
          </div>
        </li>

        <li class="career-item">
          <span class="career-year">2013</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/ivestel.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>IVSTEL, Sydney</h3>
            </div>
            <p class="career-meta"><time datetime="2013-09">Sep 2013</time> to <time datetime="2014-12">Dec 2014</time>. Work.</p>
            <p class="career-role">Technical Product Manager and Support Engineer</p>
            <p>Owned features for a Java EE VoIP routing platform and rebuilt its OS image, cutting setup from hours to minutes. Also ran the Glebe backpacker community as a volunteer, from <time datetime="2013-12">Dec 2013</time> to <time datetime="2014-08">Aug 2014</time>.</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <h3>Glebe Computer Project, Sydney</h3>
            <p class="career-meta"><time datetime="2013-07">Jul 2013</time> to <time datetime="2013-09">Sep 2013</time>. Volunteering.</p>
            <p>Repaired community centre computers and explained technical problems in plain terms to older users.</p>
          </div>
        </li>

        <li class="career-item career-gap">
          <div class="career-body">
            <h3>Travelling in South East Asia, Australia and New Zealand</h3>
            <p class="career-meta"><time datetime="2013-02">Feb 2013</time> to <time datetime="2013-09">Sep 2013</time>. Travel.</p>
          </div>
        </li>

        <li class="career-item">
          <span class="career-year">2009</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/waitrose.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>Waitrose, Senior Customer Sales Assistant</h3>
            </div>
            <p class="career-meta"><time datetime="2009-05">May 2009</time> to <time datetime="2013-02">Feb 2013</time>. Work.</p>
            <p>Nearly four years of customer service, training partners, managing shifts and owning a store section's ordering, stock and wastage. Represented the store at Partnership Council.</p>
          </div>
        </li>

        <li class="career-item">
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/university-of-hertfordshire.jpg" alt="" width="36" height="36" loading="lazy">
              <h3>University of Hertfordshire</h3>
            </div>
            <p class="career-meta"><time datetime="2009-09">Sep 2009</time> to <time datetime="2012-07">Jul 2012</time>. Education.</p>
            <p>BSc (Hons) Computer Science, First Class. Specialised in system architecture and networking. Cisco CCNA, 2012.</p>
          </div>
        </li>

        <li class="career-item">
          <span class="career-year">2007</span>
          <div class="career-body">
            <div class="career-title">
              <img class="career-logo" src="assets/logo/oaklands.svg" alt="" width="36" height="36" loading="lazy">
              <h3>Oaklands College</h3>
            </div>
            <p class="career-meta"><time datetime="2007">2007</time> to <time datetime="2009">2009</time>. Education.</p>
            <p>BTEC National Diploma for IT Practitioners, IT and Business (DMM).</p>
          </div>
        </li>

      </ol>

      <p class="career-certs">Certifications: Certified ScrumMaster, Scrum Alliance (<time datetime="2020-03">Mar 2020</time> to <time datetime="2022-03">Mar 2022</time>). Cisco CCNA (2012).</p>
    </div>
  </section>
`,
  'skills': `
<section id="skills">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <dl class="skill-rows">
        <div><dt>Languages</dt><dd>Go, Java, Ruby, TypeScript</dd></div>
        <div><dt>Backend</dt><dd>Spring Boot, Ruby on Rails, gRPC, GraphQL, Kafka, Postgres, Redis</dd></div>
        <div><dt>Frontend</dt><dd>React, Next.js, Node.js</dd></div>
        <div><dt>Cloud and infrastructure</dt><dd>AWS, Docker, Terraform</dd></div>
        <div><dt>Ways of working</dt><dd>Agile and Scrum, TDD, code review, mentoring, cross-team collaboration, on-call</dd></div>
      </dl>
    </div>
  </section>
`,
  'projects': `
<section id="projects">
    <div class="container">
      <h2 class="section-title">Projects</h2>

      <article class="project-row">
        <div class="before-after shots">
          <figure>
            <img src="assets/project/deliveroo-basket.webp" alt="Deliveroo basket on a test order listing small order, delivery, service, bag and premium delivery fees" width="390" height="584" loading="lazy">
            <figcaption>Every fee on one test order</figcaption>
          </figure>
          <figure>
            <img src="assets/project/deliveroo-service-fee.webp" alt="Deliveroo app sheet explaining that the service fee is a fixed amount or a percentage of the basket" width="425" height="170" loading="lazy">
            <figcaption>How the app explains the service fee</figcaption>
          </figure>
        </div>
        <div>
          <h3>Consumer pricing and fees</h3>
          <p class="project-meta">Deliveroo, 2021 to now</p>
          <p>Changing a fee took days of careful manual work, and pricing needed to scale across every step of an order. I built internal tools that cut configuration to minutes, helped design the core service behind fees, benefits and pricing, and now support its move to the shared Wolt, DoorDash and Deliveroo platform.</p>
          <p class="project-meta">Go, gRPC, GraphQL, AWS, Terraform</p>
        </div>
      </article>

      <article class="project-row">
        <div class="before-after">
          <figure>
            <img src="assets/project/old-propty-details-page-web.jpg" alt="The legacy Rightmove property details page" width="1280" height="646" loading="lazy">
            <figcaption>Before: legacy page</figcaption>
          </figure>
          <figure>
            <img src="assets/project/new-propty-details-page-web.jpg" alt="The replatformed Rightmove property details page" width="1280" height="647" loading="lazy">
            <figcaption>After: live by December 2020</figcaption>
          </figure>
        </div>
        <div>
          <h3>Property Details page</h3>
          <p class="project-meta">Rightmove, Evaluate team, 2020 to 2021</p>
          <p>The page people read before booking a viewing lived in an ageing legacy codebase. With the Evaluate team I built its replacement, front end and API, using Spring Boot, React and GraphQL.</p>
          <p class="project-meta">Java, Spring Boot, Kafka, React, GraphQL</p>
        </div>
      </article>

      <article class="project-row">
        <div class="before-after shots shots-stacked">
          <figure>
            <img src="assets/project/rightmove-sold-legacy.webp" alt="The legacy Rightmove house prices search page" width="1000" height="378" loading="lazy">
            <figcaption>Before: legacy page</figcaption>
          </figure>
          <figure>
            <img src="assets/project/rightmove-sold-after.webp" alt="The replatformed Rightmove house prices page with a map and filters" width="985" height="552" loading="lazy">
            <figcaption>After: live by April 2020</figcaption>
          </figure>
        </div>
        <div>
          <h3>Sold Property pages</h3>
          <p class="project-meta">Rightmove, Vendor team, 2019 to 2020</p>
          <p>Sold prices lived in the same legacy codebase. I worked on the web, API and search services that replaced it, using Spring Boot and React: refactoring, load testing, UI work and the Elasticsearch upgrades behind sold property search.</p>
          <p class="project-meta">Java, Spring Boot, Elasticsearch, React</p>
        </div>
      </article>

      <article class="project-row">
        <img class="project-thumb" src="assets/project/rightmove-valuation-panel.webp" alt="Two versions of the Rightmove request agent valuation panel" width="640" height="392" loading="lazy">
        <div>
          <h3>Agent valuation panel</h3>
          <p class="project-meta">Rightmove, Vendor team</p>
          <p>I worked on the panel that invites homeowners to ask local estate agents for a free valuation, shown alongside sold prices.</p>
        </div>
      </article>

      <article class="project-row">
        <img class="project-thumb" src="assets/project/hmcts.webp" alt="HMCTS document and evidence management architecture diagram" width="900" height="505" loading="lazy">
        <div>
          <h3>HMCTS Reform, document and evidence management</h3>
          <p class="project-meta">HMCTS via Solirius, 2017 to 2018</p>
          <p>Courts and tribunals services needed shared components for handling case documents and evidence. I helped build common components for the platform and acted as Scrum Master, in the open. <a href="${HMCTS_PRS}" target="_blank" rel="noopener noreferrer">See 176 merged PRs on GitHub</a>.</p>
          <p class="project-meta">Java 8, Spring Boot, Postgres, Liquibase, Docker, Terraform, Jenkins</p>
        </div>
      </article>

      <article class="project-row project-row-text">
        <div>
          <h3>HMPPS Strategic Partner Gateway</h3>
          <p class="project-meta">HMPPS via Solirius, 2016 to 2017</p>
          <p>A secure gateway for partner data exchange, built with Java and ServiceMix on AWS, with ELK monitoring and Ansible automation.</p>
          <p class="project-meta">Java 8, ServiceMix, AWS, ELK, Ansible</p>
        </div>
      </article>

      <p class="project-more">Personal projects and experiments are on <a href="https://github.com/alectronic0" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  </section>
`,
  'next': `
<section id="next">
    <div class="container">
      <h2 class="section-title">What I want next</h2>
      <p>I want to work on consumer technology that makes everyday life better. Helping people buy a home at Rightmove, get dinner from Deliveroo and deal with the courts through HMCTS all mattered to me for that reason.</p>
      <p>I'd love to try smart home and hardware, consumer or geo-based data such as putting useful data on maps, and health tech that helps people understand their own data.</p>
      <p>I work best fully remote, without weekly office days or a two or three day pattern. I'm happy to visit occasionally or on request, and stay over if a hotel is included. I'd prefer a permanent role, and I'd consider contract work for the right project. Flexibility matters to me in both directions: I'll be there for the team outside normal hours when it counts.</p>

      <dl class="skill-rows">
        <div>
          <dt>Companies I admire</dt>
          <dd>Monzo, Octopus Energy, Google Maps, Bumble, Life360, Booking.com, Skyscanner, OpenTable, Citymapper, Strava, Lego, Nintendo, Crunchyroll</dd>
        </div>
        <div><dt>Tech I want to use more</dt><dd>Android, Kotlin, Bun, Deno, TypeScript, Cloudflare, AWS, alongside Go</dd></div>
      </dl>

      <a class="btn btn-secondary" href="#pay">See pay and availability</a>
    </div>
  </section>
`,
  'contact': `
<section id="contact">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <p>Email is the quickest way to reach me.</p>
      <a class="contact-email" href="mailto:alec@alectronic.co">alec@alectronic.co</a>
      <p class="contact-links">
        <a href="https://github.com/alectronic0" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alectronic0" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  </section>
`,
  'footer': `
<footer id="footer">
  <div class="container">
    <p>&copy; <span class="year"></span> Alec Doran-Twyford. <a href="https://alec.today/" target="_blank" rel="noopener noreferrer">alec.today</a></p>
  </div>
</footer>
`,
  'compensation': {
    updated: '31 October 2026',
    intro: 'Figures first, so nobody loses time. Rounded, and all gross per year.',
    target_rows: [
      ['Base salary', '£130k to £140k'],
      ['Total package', '£160k or more']
    ],
    current_rows: [
      ['Base salary', '£106k'],
      ['Annual cash bonus', 'None'],
      ['Employer pension', '5%'],
      ['Total for 2026/27', 'About £157k']
    ],
    current_note: 'The total is my employer\'s compensation statement for April 2026 to March 2027: base, equity and a one-off payment. It excludes pension. The bonus scheme ended in April 2026.',
    equity_line: 'A move also needs to account for unvested equity I\'d leave behind.',
    benefits: ['5% employer pension', 'Private medical insurance', 'Life assurance at 6 times salary'],
    must_haves: ['Fully remote, with occasional visits on request', 'Real two-way flexibility', 'Competitive holiday and health insurance', 'A budget for training and AI tools'],
    hard_nos: ['Insurtech', 'Big banks', 'Big oil', 'Gambling'],
    availability: 'Notice is 5 weeks, rising to 6 on 15 March 2027.',
    chart_summary: 'Base salary rose from £25k in 2016 to £106k in 2026. The target is £130k to £140k, inside the £115k to £150k range of a public UK Staff Engineer posting.',
    chart_note: 'Starting salaries at Solirius and Rightmove, then every change at Deliveroo. The shaded band is',
    chart_now: 2026.83,
    market: { year: 2025.5, low: 115, high: 150, text: 'one public UK Staff Engineer posting, £115k to £150k', url: 'https://builtinlondon.uk/job/staff-software-engineer-quality-product-integrity/8480632' },
    target: { year: 2027.2, low: 130, high: 140, text: '£130k to £140k' },
    employers: [
      { name: 'Solirius', year: 2016.72 },
      { name: 'Rightmove', year: 2018.9 },
      { name: 'Deliveroo', year: 2021.2 }
    ],
    history: [
      { year: 2016.72, value: 25, label: 'Sep 2016', employer: 'Solirius', direct_label: true },
      { year: 2018.9, value: 50, label: 'Nov 2018', employer: 'Rightmove', direct_label: true },
      { year: 2021.2, value: 62, label: 'Mar 2021', employer: 'Deliveroo', direct_label: true },
      { year: 2022.25, value: 86, label: 'Apr 2022', employer: 'Deliveroo', direct_label: true },
      { year: 2023.25, value: 99, label: 'Apr 2023', employer: 'Deliveroo', direct_label: false },
      { year: 2024.25, value: 100, label: 'Apr 2024', employer: 'Deliveroo', direct_label: false },
      { year: 2025.25, value: 103, label: 'Apr 2025', employer: 'Deliveroo', direct_label: false },
      { year: 2026.25, value: 106, label: 'Apr 2026', employer: 'Deliveroo', direct_label: true }
    ]
  },
  'not_found': `
  <section class="container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh;">
    <div class="card-404">
      <div class="gif-wrap">
        <img id="gif" src="" alt="404 illustration">
      </div>
      <h1 class="title-404" id="title"></h1>
      <p class="message-404" id="message"></p>
      <a href="/" class="btn-home">← Return to Portfolio</a>
    </div>
    <p class="footer-404">You've found a page that doesn't exist on Hire Alec Today.</p>
  </section>
  `,
  'not_found_data': [
      {
        gif:     "https://date.alec.today/img/gifs/xUStFKHmuFPYk.gif",
        title:   "404 — Nothing to See Here",
        message: "Yeah… you weren't meant to see this. Please disperse."
      },
      {
        gif:     "https://date.alec.today/img/gifs/SRx5tBBrTQOBi.gif",
        title:   "404 — Lost in Space",
        message: "I have absolutely no idea how you got here. But honestly? Same."
      },
      {
        gif:     "https://date.alec.today/img/gifs/9PAIhJvcQ35hdZPUir.gif",
        title:   "404 — It's a Trap!",
        message: "Admiral Ackbar tried to warn you. This page doesn't exist."
      },
      {
        gif:     "https://date.alec.today/img/gifs/E87jjnSCANThe.gif",
        title:   "404 — What Do You Want?!",
        message: "I don't know what you're looking for, but it's not here. Dramatic, I know."
      },
      {
        gif:     "https://date.alec.today/img/gifs/eoFJSruUWf7qq1zNHD.gif",
        title:   "404 — Unauthorised Access",
        message: "Not sure Knuckles should have approved this… because this page doesn't exist."
      },
      {
        gif:     "https://date.alec.today/img/gifs/SmoCFhZCi1kzu.gif",
        title:   "404 — I'll Allow It",
        message: "Not sure how you got here, but I'll allow it. You should probably head back though."
      },
      {
        gif:     "https://date.alec.today/img/gifs/NTur7XlVDUdqM.gif",
        title:   "404 — This Is Fine",
        message: "Everything is fine. This page is just… not here. But it's fine. Totally fine."
      },
      {
        gif:     "https://date.alec.today/img/gifs/maNB0qAiRVAty.gif",
        title:   "404 — Fixing Bugs",
        message: "Our best engineer is on it. Probably. She's definitely typing something."
      }
  ]
};
window.CONTENT.structured_data = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": "https://hire.alec.today/",
    "dateModified": "2026-10-31",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://alec.today/#person",
      "name": "Alec Doran-Twyford",
      "givenName": "Alec",
      "familyName": "Doran-Twyford",
      "alternateName": ["Alectronic", "alectronic0"],
      "jobTitle": "Senior Software Engineer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Welwyn Garden City",
        "addressRegion": "Hertfordshire",
        "addressCountry": "GB"
      },
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        }
      ],
      "description": "Senior Software Engineer at Deliveroo, based in Welwyn Garden City. Previously at Rightmove, Solirius, HMPPS and Sky.",
      "url": "https://hire.alec.today/",
      "image": "https://hire.alec.today/assets/avatar.webp",
      "email": "alec@alectronic.co",
      "nationality": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "New Zealand" }
      ],
      "homeLocation": {
        "@type": "Place",
        "name": "Welwyn Garden City, Hertfordshire, England"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Deliveroo",
        "sameAs": "https://en.wikipedia.org/wiki/Deliveroo"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "University of Hertfordshire",
          "sameAs": "https://en.wikipedia.org/wiki/University_of_Hertfordshire"
        },
        { "@type": "Organization", "name": "Rightmove", "sameAs": "https://en.wikipedia.org/wiki/Rightmove" },
        { "@type": "Organization", "name": "Solirius Consulting" },
        { "@type": "Organization", "name": "Sky", "sameAs": "https://en.wikipedia.org/wiki/Sky_Group" },
        { "@type": "Organization", "name": "GLEAT" },
        { "@type": "Organization", "name": "Welcome Break Waitrose" },
        { "@type": "Organization", "name": "IVSTEL" },
        { "@type": "EducationalOrganization", "name": "Oaklands College" }
      ],
      "knowsAbout": [
        "Software Engineering", "Backend Development", "Full Stack Engineering",
        "Go", "Java", "Ruby on Rails", "TypeScript", "React",
        "gRPC", "Kafka", "Postgres", "Redis", "AWS",
        "Docker", "Terraform", "Distributed Systems", "Microservices"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "BSc Computer Science (First Class Honours)",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "University of Hertfordshire",
            "sameAs": "https://en.wikipedia.org/wiki/University_of_Hertfordshire"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Certified ScrumMaster (2020 to 2022)",
          "credentialCategory": "certification"
        }
      ],
      "sameAs": [
        "https://alec.today/",
        "https://hire.alec.today/",
        "https://date.alec.today/",
        "https://gift.alec.today/",
        "https://github.com/alectronic0",
        "https://www.linkedin.com/in/alectronic0/",
        "https://www.instagram.com/alectronic0/",
        "https://www.tiktok.com/@alectronic0",
        "https://www.pinterest.com/alectronic0/",
        "https://t.me/alectronic0"
      ]
    }
  }
  </script>
`;
