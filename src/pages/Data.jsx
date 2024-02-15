export default function About() {
  return (
    <div className="pt-20 flex items-center justify-center">
      <div className="text-center" style={{ maxWidth: "900px" }}>
        <p
          className="text-center header1"
          style={{
            color: "var(--header-color)",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Examples of my data analysis
        </p>
        <p
          className="text-center header2"
          style={{ color: "var(--description-color)" }}
        >
          All of the Power BI reports below are best viewed on a desktop
        </p>
        <br />

        <div className="text-center justify-center">
          <p
            className="text-center header3"
            style={{ color: "var(--header-color)" }}
          >
            State of Cryptocurrency Underwriting
          </p>
          <br />
          <p
            className="text-center "
            style={{ color: "var(--description-color)" }}
          >
            Below is the State of Cryptocurrency Underwriting report, though it
            is a live report and will be updated as exploit and auditor data is
            added to the database. The report is built in Power BI and is
            connected to google sheets so as the data is updated in the google
            sheets, the report will update as well. The report is built to be
            interactive and you can click on it anywhere to filter the data.
          </p>
          <br />
          <section>
            <center>
              <iframe
                title="Report Section"
                width="800"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDJmYmQ2NmItYmRkYi00M2QyLWJmMWUtNDUwODNlY2I5M2MxIiwidCI6ImNkMjEzNjNiLWNmMDMtNDcwMi1iOTliLWUxZDJlNThhZTk2ZiIsImMiOjZ9"
                allowFullScreen="true"
              ></iframe>
            </center>
          </section>
          <br />
          <br />
          <br />
          <p
            className="text-center header3"
            style={{ color: "var(--header-color)" }}
          >
            Crypto Auditor Dashboard
          </p>
          <br />
          <p
            className="text-center"
            style={{ color: "var(--description-color)" }}
          >
            This is the start of the Auditor Ranking Dashboard, though we are
            working on continually expanding it. We are also working on a way to
            make it more interactive, so that you can sort and filter the data
            even more. Currently, we take eight public data points and then rank
            the auditors based on those, those as more data is entered, and more
            audits are gathered, then the rankings will continually fluctuate,
            though this report will always be here. Soon enough, we'll open up
            our github to let others contribute to this project.
          </p>
          <br />
          <section>
            <center>
              <iframe
                title="Report Section"
                width="800"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiZWMxZGM5NTgtOGFhMS00ZjliLWI4NTMtNjAwYjc4YTc3YzQ4IiwidCI6ImNkMjEzNjNiLWNmMDMtNDcwMi1iOTliLWUxZDJlNThhZTk2ZiIsImMiOjZ9&pageName=ReportSection29b208b81918bc1e3da4"
                allowFullScreen="true"
              ></iframe>
            </center>
          </section>
          <br />
          <br />
          <br />
          <p
            className="text-center header3"
            style={{ color: "var(--header-color)" }}
          >
            Just Brew It DAO - NFT Tokenomics and Brewery Funding Model
          </p>
          <br />
          <p
            className="text-center "
            style={{ color: "var(--description-color)" }}
          >
            This model illustrates the NFT funding scenarios and how that will
            affect the design and construction of the brewery. Based on how much
            Fantom is raised and when we sell it, we will be able to determine
            how much we can spend on the brewery, and how much future revenue
            that will potentially earn us and the NFT holders. This is a very
            interactive model meaning what you select on the first page will
            affect the rest of the model.
          </p>
          <br />
          <section>
            <center>
              <iframe
                title="Just Brew It DAO Dashboard"
                width="800"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiOTAzZmFjY2EtMWY5ZS00NTc4LTg4MTItZDI5MmY2MjM3MzczIiwidCI6IjRiMmE0YjE5LWQxMzUtNDIwZS04YmIyLWIxY2QyMzg5OThjYyIsImMiOjF9&pageName=ReportSection1d4c14bfcc63d48c0ad0"
                allowFullScreen="true"
              ></iframe>
            </center>
          </section>
          <br />
          <br />
          <br />
          <p
            className="text-center header3"
            style={{ color: "var(--header-color)" }}
          >
            Gitcoin Grants
          </p>
          <br />
          <p
            className="text-center header3"
            style={{ color: "var(--description-color)" }}
          >
            This model illustrates the funding sent to Gitcoin and the funding
            Gitcoin has given out over time. The money sent to Gitcoin is mostly
            inflated due to memecoins and incorrect pricing of a few tokens,
            though all funding given from Gitcoin is correct.
          </p>
          <br />
          <section>
            <center>
              <iframe
                title="Gitcoin"
                width="800"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDE2NjU4YjItMzk5NS00MzcyLWJjNzctMTI3ZjUxZDI5MTQ4IiwidCI6ImNkMjEzNjNiLWNmMDMtNDcwMi1iOTliLWUxZDJlNThhZTk2ZiIsImMiOjZ9&embedImagePlaceholder=true&pageName=ReportSection6bcd8f48098809949820"
                allowFullScreen="true"
              ></iframe>
            </center>
          </section>
          <br />
          <br />
        </div>
      </div>
      <style>
        {`

        .header2 {
           font-size: 1.7rem ;
        }

        .header3 {
          font-size: 1.5rem;
        }

          @media only screen and (max-width: 768px) {
            .header1 {
              font-size: 1.5rem;
            }
            .header2 {
              font-size: 1.3rem;
              max-width: 600px;
            }
            .header3 {
              font-size: 1.1rem;
              max-width: 600px;
            }
          }

                    @media only screen and (max-width: 600px) {
            .header1 {
              font-size: 1.5rem;
            }
            .header2 {
              font-size: 1.3rem;
              max-width: 600px;
            }
            .header3 {
              font-size: 1.1rem;
              max-width: 600px;
            }
          }

        `}
      </style>
    </div>
  );
}
