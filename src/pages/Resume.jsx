import "../App.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      {/* PROFESSIONAL EXPERIENCE */}
      <section>
        <h2>Professional Experience</h2>

        {/* RELM Insurance */}
        <div className="job-block">
          <h3>RELM Insurance – Miami Beach, FL</h3>
          <p>
            <strong>Cyber Underwriter</strong> | October 2024 - Current
          </p>
          <p>
            <em>Website:</em>{" "}
            <a
              href="https://relminsurance.com"
              target="_blank"
              rel="noreferrer"
            >
              RELMinsurance.com
            </a>
          </p>
          <ul>
            <li>
              Created the cyber underwriting framework establishing a baseline
              risk review of cyber and web3 risks against insuring agreements.
            </li>
            <li>
              Developed a new insurance policy specifically for wallet coverage
              (more web3 policies forthcoming).
            </li>
            <li>
              Assisted the actuarial team in defining web3 exposures and rating
              them.
            </li>
            <li>
              Collaborating with the legal team to draft web3 legislation that
              protects the consumer while enabling innovative insurance
              solutions and providing a baseline judicial framework.
            </li>
          </ul>
        </div>

        {/* NOV 2022 – OCT 2024 PERIOD (Condensed) */}
        <div className="job-block">
          <h3>Independent Web3 & dApp Development – Remote</h3>
          <p>
            <strong>
              Full-Stack dApp Developer & Crypto Risk Management Specialist
            </strong>{" "}
            | November 2022 – October 2024
          </p>
          <ul>
            <li>
              Deepened expertise in identifying and mitigating crypto risks
              across centralized and decentralized platforms—expanding from
              first-party exposures (access controls, programming languages,
              etc.) to third-party vulnerabilities (protocol updates, bridges,
              etc.).
            </li>
            <li>
              Built full-stack dApps on multiple blockchains including Arweave,
              Sonic (Fantom), and Ethereum, with ongoing projects in Stacks,
              Sui, and Solana.
            </li>
            <li>
              Strengthened holistic Enterprise Risk Management (ERM) strategies
              for blockchain ecosystems, integrating operational, technical, and
              regulatory perspectives.
            </li>
            <li>
              Advanced personal proficiency in Vyper smart contracts and
              maintained a dedication to bridging the gap between traditional
              insurance frameworks and emerging crypto technologies.
            </li>
            <li>
              Cultivated a passion for contributing to an evolving regulatory
              framework that fosters safe and global crypto adoption.
            </li>
          </ul>
        </div>

        {/* Steady State */}
        <div className="job-block">
          <h3>Steady State – Austin, TX</h3>
          <p>
            <strong>Risk Analyst / Actuary</strong> | December 2021 – November
            2022
          </p>
          <p>
            <em>Website:</em>{" "}
            <a
              href="https://steadystatedefi.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://steadystatedefi.medium.com/
            </a>{" "}
            (original domain expired)
          </p>
          <p>
            Company Description: Funded by Yield App (
            <a href="https://yield.app/" target="_blank" rel="noreferrer">
              https://yield.app/
            </a>
            ) to create on-chain insurance for DeFi protocols. Lost funding in
            the FTX collapse.
          </p>
          <ul>
            <li>
              Developed an actuarial model from scratch to assess risk profiles
              of insurance applicants.
            </li>
            <li>
              Created a risk database with over 240 data points for the
              actuarial model.
            </li>
            <li>
              Produced a comprehensive insurance policy with multiple coverages
              across settlement, asset, protocol, and defi stack layers.
            </li>
            <li>
              Designed a model for crypto protocol risk rates of return to
              tailor our risk tolerance and portfolio weights for defi protocol
              investments—packaged for licensing as a financial investment
              product.
            </li>
            <li>
              Created and maintained a company-wide risk register, educating the
              team about risk and its role in every facet of the business.
            </li>
          </ul>
        </div>

        {/* eEmployers Solutions */}
        <div className="job-block">
          <h3>eEmployers Solutions, Inc – Austin, TX</h3>
          <p>
            <strong>Enterprise Risk Manager</strong> | October 2020 – December
            2021
          </p>
          <p>
            <em>Website:</em>{" "}
            <a href="https://www.eesipeo.com/" target="_blank" rel="noreferrer">
              https://www.eesipeo.com/
            </a>
          </p>
          <p>
            Company Description: PEO for over 300 clients and 6,000 employees,
            providing insurance, payroll, HR, and employee-related services.
          </p>
          <ul>
            <li>
              Defined and managed the Risk Department, writing its first Risk
              Management manual and scaling support for 6,000 employees.
            </li>
            <li>
              Reduced workers compensation losses from $2,600,000 to $514,000 in
              one year by implementing a scalable Safety Service Schedule.
            </li>
            <li>
              Underwrote all workers compensation, general liability, auto,
              property, and umbrella, holding pre-approval authority from
              Zurich.
            </li>
          </ul>
        </div>

        {/* National Safety Training & Consulting Services */}
        <div className="job-block">
          <h3>National Safety Training & Consulting Services – Dallas, TX</h3>
          <p>
            <strong>Insurance and Risk Manager</strong> | July 2018 – October
            2020
          </p>
          <p>
            <em>Website:</em>{" "}
            <a href="https://www.nstcs.org/" target="_blank" rel="noreferrer">
              https://www.nstcs.org/
            </a>
          </p>
          <ul>
            <li>
              Established risk management framework that decreased
              administrative burden by 200% while expediting new-client
              onboarding.
            </li>
            <li>
              Reduced workers comp incident rate by 38% through safety protocols
              and on-site equipment training.
            </li>
            <li>
              Implemented contractual risk transfer measures, improving
              insurance premium rates by ~21% for multinational retail
              corporations.
            </li>
          </ul>
        </div>

        {/* Parrish & Gwinn (VP role) */}
        <div className="job-block">
          <h3>Parrish & Gwinn Insurance Group, LLC – Columbia, SC</h3>
          <p>
            <strong>Vice President</strong> | January 2016 – June 2018
          </p>
          <p>
            <em>Website:</em>{" "}
            <a
              href="https://www.parrishandgwinn.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.parrishandgwinn.com/
            </a>
          </p>
          <ul>
            <li>
              Managed an 11-member office for a Captive Insurance exclusive
              agency with $90M in premiums.
            </li>
            <li>
              Instituted in-house producer education; licensed every staff
              member, boosting client satisfaction scores and retention.
            </li>
            <li>
              Increased agency revenue by $600,000 in the first year by
              renegotiating agency-appointment contracts.
            </li>
          </ul>
        </div>

        {/* Parrish & Gwinn (Captive Producer role) */}
        <div className="job-block">
          <h3>Parrish & Gwinn Insurance Group, LLC – Columbia, SC</h3>
          <p>
            <strong>Captive Producer</strong> | June 2014 – January 2016
          </p>
          <ul>
            <li>
              Pre-qualified and placed workers compensation, general liability,
              and auto insurance into relevant captives for referred clients.
            </li>
            <li>
              Created ERM frameworks for new clients, pairing the principles of
              captive insurance with their existing operations.
            </li>
            <li>
              Wrote $1.3M in captive premiums for 3 clients within my first year
              by mastering the owner’s processes and applying them in the field.
            </li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>
        <p>
          <strong>University of South Carolina – Columbia, SC</strong>
        </p>
        <ul>
          <li>Master of Business Administration (MBA), May 2021</li>
          <li>Post Graduate Business Data Analytics Certificate, May 2021</li>
          <li>Bachelor of Political Science, December 2018</li>
        </ul>
      </section>

      {/* PROFESSIONAL DESIGNATIONS */}
      <section>
        <h2>Professional Designations</h2>
        <ul>
          <li>
            Chartered Property Casualty Underwriter (CPCU), The Institutes,
            12/15/2021
          </li>
          <li>Certified Risk Manager (CRM), The National Alliance, 05/2020</li>
          <li>
            Associate in Risk Management (ARM), The Institutes, 05/12/2020
          </li>
          <li>
            Certified Insurance Counselor (CIC), The National Alliance, 08/2020
          </li>
          <li>OSHA 30 Certification</li>
        </ul>
      </section>

      {/* CORE COMPETENCIES */}
      <section>
        <h2>Core Competencies</h2>
        <ul>
          <li>COSO/ISO Proficient</li>
          <li>Employee Safety</li>
          <li>Business Continuity</li>
          <li>Enterprise Risk Management</li>
          <li>Microsoft Power BI</li>
          <li>Vyper Smart Contracts</li>
          <li>Legal Compliance</li>
          <li>Finance & Accounting (SAP)</li>
          <li>Contractual Risk Transfer</li>
          <li>Full-stack dApp Builder</li>
          <li>Blockchain Infrastructure</li>
          <li>Database Integration</li>
          <li>Risk Framework Integration</li>
          <li>Board Leadership</li>
          <li>Strategy & Sc</li>
        </ul>
      </section>
    </div>
  );
}
