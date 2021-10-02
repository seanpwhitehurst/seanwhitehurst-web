import ContentBlock from './components/ContentBlock';
import Layout from './components/Layout';
import Socials from './components/Socials';

function App() {
  const socialUrls = ["https://www.linkedin.com/in/seanpwhitehurst/", "https://github.com/seanpwhitehurst", "https://twitter.com/seanpwhitehurst"]

  return (
    <Layout>
      <div className="flex flex-col m-auto py-8 px-8 max-w-lg">
        <div className="flex flex-row justify-between">
          <div className="font-app font-light text-primary text-3xl cursor-default">Sean Whitehurst</div>
          <Socials urls={socialUrls} />
        </div>
        <div className="font-app font-light text-primary text-sm cursor-default">engineer, climber based in Seattle</div>
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
        <div className="pl-4">
          <div className="text-sm pt-4 font-app font-light text-primary">C#, .NET, React, node, Azure, Firebase, git</div>
        </div>
        <br />
      </div>
    </Layout>
  );
}

export default App;
