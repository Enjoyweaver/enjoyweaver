// src/pages/Articles.jsx
import { useState } from "react";

export default function Articles() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "AI is so far from replacing your job it's hilarious",
      date: "April 2025",
      preview:
        "AI is still in its infancy as far as being a tool is concerned, let alone stealing your job.",
      content: `AI is so far from replacing your job its hilarious. AI is still in its infancy as far as being a tool is concerned, let alone stealing your job.`,
    },
    {
      id: 2,
      title: "AI is a tool, not the solution",
      date: "March 2025",
      preview:
        "AI is not the solution, it is the tool to help YOU get to the solution faster.",
      content: `AI is not the solution, it is the tool to help YOU get to the solution faster.

AI is going to expediate the human revolution, not create its own.

Way back in time, as we understood metal better, our swords got stronger and our hammers stopped breaking. AI is no different, its a tool and if you have someone on your team who understands how to build and strategize using AI, then your company will advance and can strategically outpace those who dont.

In 1965, Moore's Law stated that computer chip capacity would double approximately every two years, leading to exponential growth in computing power. According to a 2023 study from Stanford University's Human-Centered AI Institute, AI models' capabilities are doubling in performance metrics every 6-9 months on key reasoning and language tasks, far outpacing the historical growth rate of traditional computing power.

The companies treating AI as their solution rather than their tool are already falling behind—and they don't even know it.

Copying your content and pasting it into AI and copying the results and pasting it in to your email/newsletter/Teams or Slack message is not how you utilize AI. If you are doing that then you are treating AI as the solution and not as a tool. AI needs to help you get to the solution faster, not create the solution.

One of the benefits of AI is that it can be used in an unbiased manner if you understand that AI is not meant to be your source of reason and decision-making. I've seen too many managers and Chiefs copy the results directly from AI and paste it believing that was a solution, when in fact its not the solution at all - its intellectual fraud because you just defrauded yourself and your company. And not to mention you just got lazier, decreased your expectations, and certainly didnt proof-read because you left the "and what else can I do for you?" at the bottom of the email/newsletter/Teams or Slack message.

While everyone debates AI replacing humans, the quiet revolution is happening in forward-thinking companies who are not too afraid to strategize, to innovate, and to utilize their employees talent to build, scale, and create value.

AI needs to be used as a tool to index, to combine, to resource, to be a 24/7 unbiased-employee that can be multiplied in an instant and used concurrently to manage many many many tasks at once, but never as the source of your solution.

If you've got someone on your team who can build AI-driven processes to help your company increase efficiency then good for you. But, if you've got someone on your team who can build full-stack autonomous processes equivalent to an organization and that can scale with every customer, then lucky you because they can take your company to the next realm.`,
    },
    {
      id: 3,
      title: "My Calendy: Marketing at the Wrong Time",
      date: "February 2025",
      preview:
        "Sunday night, 11:32 PM: Staring at a blank social media editor while launching My Calendy...",
      content: `Sunday night, 11:32 PM: Staring at a blank social media editor while launching My Calendy, I realized the irony... I built a productivity tool based on cognitive science that helps people work at their optimal times, yet here I was, creating marketing content when my brain was least equipped for creative work! 🤦‍♂️ My first post on My Calendy feels like it was written by someone desperately trying to fit "all the science and passion" into one post. Sorry for the wall of text! This is what happens when you try to do marketing after hours.

This experience made me realize: If I struggle with this as someone devoted to productivity optimization, others must too. So I'm excited to announce an upcoming feature for My Calendy: AI-powered marketing campaign creation. We're building a tool that will:
- Create platform-specific campaigns from your uploaded content
- Schedule posts during optimal engagement windows
- Dynamically adjust future content based on post performance
- Build a narrative across multiple posts that tells your story effectively

The best part? This marketing feature will deliver the output of an entire marketing department at a fraction of the cost. What will make it truly powerful will be the adaptive learning. The system track will real engagement metrics from each post, then refine future content strategy based on what's actually working - continuously improving your results without requiring constant supervision.

In the meantime, check out My Calendy and see how matching your tasks to your cognitive peaks can transform your productivity: https://MyCalendy.fun

Who else struggles with creating social media content when you should be focusing on other priorities?
#WorkSmarter #ScheduleSmarter #ProductivityHack #CognitiveScience`,
    },
    {
      id: 4,
      title: "Launch of My Calendy",
      date: "January 2025",
      preview:
        "We're excited to announce the launch of My Calendy – a productivity tool that combines cognitive science with advanced project management.",
      content: `We're excited to announce the launch of My Calendy – a productivity tool that combines cognitive science with advanced project management. Most scheduling tools only tell you WHEN to work. My Calendy tells you WHAT to work on WHEN, based on your brain's natural cognitive patterns.

For example, did you know most people have peak analytical ability in the morning, while creative work often flows better in the afternoon? My Calendy analyzes your unique cognitive timeline, current schedule, and project requirements to create the perfect task alignment, helping you:
• Reduce decision fatigue
• Match tasks to your cognitive strengths
• Maximize productivity during peak hours
• Create a more balanced workflow

We've just launched our 7-day free trial at https://MyCalendy.fun

We'd love to hear your thoughts on how cognitive science can improve your productivity!
#ScheduleSmarter #ProductivityHack #WorkSmarter #CognitiveProductivity`,
    },
    {
      id: 5,
      title: "Cognitive Science and Productivity",
      date: "December 2024",
      preview:
        "Did you know that performing tasks at the wrong time of day can reduce your performance by up to 26%?",
      content: `Did you know that performing tasks at the wrong time of day can reduce your performance by up to 26%? Research shows that when tasks are not aligned with your chronotype (whether you're a morning lark or night owl), your basic cognitive abilities - from working memory to analytical processing - suffer significantly.

No matter how hard I worked in a day or how much I got done, I often felt like I could have accomplished more. Some days, despite making what seemed like progress, I barely felt like I'd taken a step forward. This frustration led me down a path of researching scheduling methods and productivity optimization.

What I discovered was fascinating: our cognitive abilities fluctuate dramatically throughout the day, and these patterns are largely predictable based on our chronotype. Morning people excel at analytical tasks early in the day, while night owls might perform complex creative work better in the evening.

The science was compelling, but more importantly, it was actionable. So, I started building https://MyCalendy.fun as a personal side project. What began as a tool to help me take back control of my schedule has grown into something I'm excited to share with you.

I realized I wasn't capturing my full mental potential by simply scheduling tasks in the next available slot, when it felt convenient, or when others chose my appointments for me. My Calendy works with you to understand your cognitive fluctuations and your schedule, then aligns your tasks accordingly.

Need analytical thinking? My Calendy schedules that for when your brain is sharpest. Creative writing? It plans that for when your imagination peaks. It's like having a personal productivity coach guiding you toward optimal performance hour by hour.

The results can be transformative. By matching your cognitive strengths to appropriate tasks throughout the day, you can reclaim hours of productive time each week. Whether you're a morning lark or a night owl, My Calendy ensures you're working at your cognitive best.

I built this tool because I wanted to work smarter, not harder. Now I'm inviting you to experience the difference that cognitive-based scheduling can make in your productivity and wellbeing.
#Productivity #CognitiveScience #TimeManagement #WorkSmarter #ProjectManagement`,
    },
    {
      id: 6,
      title: "Crypto Wallet Regulation",
      date: "November 2024",
      preview:
        "There is no bank in crypto, so its great to read regulators are starting to understand the importance...",
      content: `There is no bank in crypto, so its great to read regulators are starting to understand the importance and implication of establishing regulation for #crypto wallets, but regulation should start with the construction of the wallet and not just the end result.

You can read how the Crypto Policy Center approaches wallet regulation in the article below, though more research and concepts will be continually added.

From cryptography standards, to customer service, to insurance - all aspects of creating, owning, accessing, and securing a crypto wallet need to be considered. The goal of crypto wallet regulation should be to protect us consumers, identify and penalize the bad actors, all while supporting and encouraging #blockchain innovation.

https://cryptopolicy.center/wallet-regulation`,
    },
    {
      id: 7,
      title: "Principle-based Web3 Regulation",
      date: "October 2024",
      preview:
        "Here is an article discussing how the CryptoPolicy.center approaches principle-based web3-friendly regulation...",
      content: `Here is an article discussing how the CryptoPolicy.center approaches principle-based web3-friendly regulation, though more will be added to it as we continue to research - https://cryptopolicy.center/principled-approach`,
    },
    {
      id: 8,
      title: "Auditor Liability in Crypto",
      date: "September 2024",
      preview:
        "Here is a short article from CryptoPolicy.center on defining and establishing Auditor Liability within #crypto...",
      content: `Here is a short article from CryptoPolicy.center on defining and establishing Auditor Liability within #crypto, which is something that is greatly needed in #Web3, and especially for Web3 to grow and reach its full potential. More info and data will be added soon, but the article can be read at https://cryptopolicy.center/auditor-liability`,
    },
    {
      id: 9,
      title: "Web3-Friendly Wallet Regulation",
      date: "August 2024",
      preview:
        "Here is an intro blog from CryptoPolicy.Center on an approach to establishing web3-friendly regulation for crypto wallets...",
      content: `Here is an intro blog from CryptoPolicy.Center on an approach to establishing web3-friendly regulation for crypto wallets. There will be more research going into the different approaches needed for hot and cold wallets though, so more to come. https://cryptopolicy.center/wallet-regulation`,
    },
    {
      id: 10,
      title: "Principled Approach to Crypto Regulation",
      date: "July 2024",
      preview:
        "Crypto regulation needs a principled-based approach to ensure that bad actors are held reliable...",
      content: `Crypto regulation needs a principled-based approach to ensure that bad actors are held reliable while protecting consumers and supporting builders. A clear and concise foundation has been started and can be reviewed at CryptoPolicy.Center.`,
    },
    {
      id: 11,
      title: "State of Cryptocurrency Underwriting",
      date: "June 2024",
      preview:
        "Just posted the State of Cryptocurrency Underwriting to inDemniFi.me if you want to check out what's risky in crypto...",
      content: `Just posted the State of Cryptocurrency Underwriting to https://inDemniFi.me if you want to check out what's risky in crypto. I've got a lot of data to add to it, but it's quite the start so far. I used Microsoft Power BI for the data visualization and will be adding to it regularly.`,
    },
    {
      id: 12,
      title: "Wallet Risk Security Tool",
      date: "May 2024",
      preview:
        "If you're into crypto, then I created a wallet risk security tool for you to view your wallets risk...",
      content: `If you're into crypto, then I created a wallet risk security tool for you to view your wallets risk and to revoke any suspicious open approvals you may have. You can check it out at inDemniFi.me. The website really is inDemniFi.Crypto and since the website is a decentralized one, you can visit it on a Brave browser or you can download the IPFS Companion for google chrome.`,
    },
  ];

  const toggleArticle = (id) => {
    if (expandedArticle === id) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(id);
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: "var(--header-color)" }}
      >
        Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              borderLeft: "3px solid var(--effect-1)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--description-color)" }}
                >
                  {article.date}
                </span>
              </div>

              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--header-color)" }}
              >
                {article.title}
              </h2>

              <p className="mb-4" style={{ color: "var(--content-color)" }}>
                {expandedArticle === article.id
                  ? article.content.split("\n\n").map((paragraph, i) => (
                      <span key={i} className="block mb-4">
                        {paragraph}
                      </span>
                    ))
                  : article.preview}
              </p>

              <button
                onClick={() => toggleArticle(article.id)}
                className="font-medium transition-colors duration-300"
                style={{
                  color: "var(--effect-1)",
                  textDecoration: "underline",
                }}
              >
                {expandedArticle === article.id ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
