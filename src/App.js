import ContentBlock from './components/ContentBlock'
import Layout from './components/Layout'
import Socials from './components/Socials'
import Climb from './components/Climb'

function App() {
  const socialUrls = [
    "https://www.linkedin.com/in/seanpwhitehurst",
    "https://github.com/seanpwhitehurst",
    "https://www.instagram.com/seanpwhitehurst",
    "https://twitter.com/seanpwhitehurst"
  ]

  return (
    <Layout>
      <div className="flex flex-col m-auto py-8 px-8 max-w-lg">
        <div className="flex flex-row justify-between">
          <div className="font-app font-light text-primary text-3xl cursor-default">Sean Whitehurst</div>
          <Socials urls={socialUrls} />
        </div>
        <br />

        <div className="font-app font-light text-primary text-sm cursor-default">Full-stack software engineer and alpine climber based in Seattle, WA.</div>
        <br />

        <div className="font-app font-light text-primary text-lg cursor-default pb-1">Experience</div>
        <div className="pl-4">
          <ContentBlock
            company="Truveta"
            link="https://www.truveta.com"
            time="2021-present"
            title="software engineer"
            description="Saving Lives with Data."
          />
          <ContentBlock 
            company="Microsoft"
            link="https://azure.microsoft.com/en-us/products/azure-stack/hub/"
            time="2018-2021"
            title="software engineer"
            description="Core service engineer on the Azure Stack Hub team."
          />
        </div>
        <br />

        <div className="font-app font-light text-primary text-lg cursor-default pb-1">Education</div>
        <div className="pl-4">
          <ContentBlock
            company="The Ohio State University"
            link="http://undergrad.osu.edu/majors-and-academics/majors/detail/39"
            time="2014-2018"
            title="BS Computer Science & Engineering"
            description="FEH, Mountaineers of Ohio State, Club Tennis."
          />
        </div>
        <br />

        <div className="font-app font-light text-primary text-lg cursor-default pb-1">Skills</div>
        <div className="pl-4 pb-4">
          <div className="text-sm pt-4 font-app font-light text-primary">C#, .NET, Java, React, node, TypeScript, Azure, Firebase, docker, K8S, PowerShell, git</div>
        </div>
        <br />

        <div className="font-app font-light text-primary text-lg cursor-default pb-1">Some Climbing</div>
        <div className="pl-4">
          <Climb 
            route="Redpoint: Redacted Route"
            year="2021"
            partner="Cocaine Gully"
            grade="5.12b"
          />
          <Climb 
            route="Redpoint: Bust the Rhythm"
            year="2021"
            partner="World Wall"
            grade="5.12c"
          />
          <Climb 
            route="Direct N Ridge, Mt. Stuart"
            year="2021"
            partner="w/ Galen Weld"
            grade="5.9"
          />
          <Climb 
            route="SE Buttress, Cathedral Peak"
            year="2021"
            partner="w/ Galen Weld"
            grade="5.9+"
          />
          <Climb 
            route="Pilgrimage to Mecca, Amphitheatre"
            year="2021"
            partner="w/ Galen Weld"
            grade="5.9"
          />
          <Climb 
            route="Middle Finger Buttress Left, Amphitheatre"
            year="2021"
            partner="w/ Galen Weld"
            grade="5.10"
          />
          <Climb 
            route="W Face, N Early Winter Spire"
            year="2021"
            partner="w/ Dave Gay"
            grade="5.11-"
          />
          <Climb 
            route="Mile High Club, Morningstar / Vega"
            year="2021"
            partner="w/ Galen Weld, Becca Vincent"
            grade="5.10a"
          />
          <Climb 
            route="Sisyphus, Goat Wall"
            year="2021"
            partner="w/ Galen Weld"
            grade="5.11a"
          />
          <Climb 
            route="E Ridge, Inspiration Peak"
            year="2020"
            partner="w/ Galen Weld"
            grade="5.9+"
          />
          <Climb 
            route="Clean Break, Juno Tower"
            year="2020"
            partner="w/ Jamie Sookprasong"
            grade="5.10b"
          />
          <Climb 
            route="Liberty Traverse, Liberty Bell Group"
            year="2020"
            partner="w/ Galen Weld"
            grade="5.9+"
          />
          <Climb 
            route="Emmons Glacier, Mt. Rainier"
            year="2019"
            partner="w/ Adam Weld, Addison Howenstine"
            grade="Easy Snow"
          />
          <Climb 
            route="Redpoint: Rainy Day Woman"
            year="2019"
            partner="World Wall"
            grade="5.12a"
          />
        </div>
        <br />
      </div>
    </Layout>
  );
}

export default App;
