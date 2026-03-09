---
title: If You Can't Beat'em - Human-Generated Content #5
pubDate: 2024-07-18T18:47:48.000Z
tags: human generated content, generative-ai, chatgpt, llm, newsletter, openai, fediverse
description: Human Generated Content, Issue 5
---

Hello, again!

Over the last few issues, I've been focused on telling stories about how human content is slowly [being erased or added to datasets](https://augment.ink/human-generated-content-4/) to be replaced by AI-generated content. 

Today, I want to expand on a topic I discussed in [issue #2](https://augment.ink/human-generated-content-2/): publishers striking deals with AI companies and what that means for their futures and the publisher landscape as a whole.

Before we jump in: last week, I published a post on the thankless work of the Threads community builder, and it somehow caught fire enough [to land on Techmeme](https://www.techmeme.com/240713/p11#a240713p11). The conversations that came out of the post, stemming from the wide spectrum of responses and experiences had by readers, were incredibly rewarding: some who agreed, some who had constructive criticism, and even some Meta employees who followed up. I'm so thankful to everyone who reads my work and engages with it this way, and I hope I can spark more discussion in the near future. Thank you, thank you, thank you.

With that said, let's get into this week's issue of Human Generated Content.

---
![](./_assets/issue-five.png)
---

### A Seat at the AI Table

On a [recent episode of *The Verge*'s "Decoder" podcast](https://www.theverge.com/2024/7/11/24196396/the-atlantic-openai-licensing-deal-ai-news-journalism-web-future-decoder-podcasts), host Nilay Patel sat down with *The Atlantic*'s CEO Nicholas Thompson to discuss their data-sharing deal with OpenAI. *The Verge*'s parent company, *Vox Media*, made a similar deal, although the full details of both are unclear.

We've [previously discussed](https://augment.ink/human-generated-content-2/) these data-sharing deals, but hearing from a decision maker why they opted to move in this direction was enlightening. Thompson makes the case for being a part of the conversation around how publisher content is used in the age of generative AI:

> ...if there had been a way early in Facebook to shift the way that newsfeed worked so that established brands weren't given the same weight as non-established brands [...] But one of the tweaks would've been, can you sort of change the weight and the way they design and the way the fonts work or whatever so that somebody in Macedonia can't start a publication called The Verge with another Z at the end that looks just like you and has the exact same weight.

> I think that one of the lessons is to pay a lot of attention, right? So, the AI search products have not been built and have not been launched as they're built, and as they're launched, what are the values we want embedded in them? Like how much text do we want them to show? How do we want the external Links to work? How do we want the level of summarization? Those are really crucial questions to get right at the beginning. And I think we are more likely to get them right as they do these kind of deals.

His goal is to get a seat at the table early and influence decisions, ensuring *The Atlantic*'s brand remains intact as ChatGPT summarizes its content. 

I understand the logic here, but I have two problems with this take:

1. Influence is not enough: OpenAI will ultimately make decisions that enrich them over anything *The Atlantic* or their peers want them to do. Having a seat at the table does not mean they are decision-makers.
2. Consolidation is accelerated: Having only "established" brands at the table means that smaller media organizations without bargaining power remain outside the conversation. I've spoken about [the inevitable consolidation of the media under AI summarization](https://augment.ink/human-generated-content-2/), and deals like this only exacerbate those issues. 

It also looks like *The Atlantic* plans to integrate OpenAI's technology directly into its website using credits they received as a part of the deal. Getting credits is a good way to test the generative AI waters, but there's a part of this conversation that stands out:

> They give us credits. So we are building tools on the business side with the engineering team that are using OpenAI, so we don't have to rely on Llama [...] we are just using OpenAI Credits, we are working with them. At some point there may be engineering support, there may not be engineering support. 

This is concerning. *The Atlantic* is aware that there are open source models that would enable them to own their product–from publishing content to generative AI search of that content–and they consider that more of a reliance than partnering with a black box. 

What they are actually doing is turning down the opportunity to own their technology stack and become an end-to-end product for their subscribers. 

Using open-source technology is the opposite of reliance. The deal they just signed up for creates more dependencies, reduces the potential for internal innovation, and makes tech companies a stand-in for an internal product and engineering team.

*The Atlantic* needs to become OpenAI before OpenAI becomes *The Atlantic,* and not working on internal solutions is setting them back much further than I think they realize.

It's not to say that they shouldn't make deals with AI companies at all – growing a team and culture to build this internally will take time and effort that they may not have today. However, writing off an option that enables independence feels like a bad bet to make in the long term. The best time to plan for the future was yesterday, and the next best time is now.

We'll have to see how this plays out as this deal solidifies and yields products across the ecosystem. I just wish publishers realized that they're making only slight improvements to their interactions with tech companies rather than actually working to change their culture to build better inside.

### Scrape and Imitate 

Speaking of AI companies turning into publishers, this week, we saw one of the most egregious examples when a now-defunct fan-favorite Apple news site, TUAW (The Unofficial Apple Weblog), was invaded by AI slop farm *Web Orange Limited*.

[Jason Koebler of 404 Media reports](https://www.404media.co/a-beloved-tech-blog-tuaw-is-now-publishing-ai-articles-under-the-names-of-its-old-human-staff/):

> This month, “Christina Warren” started blogging again for The Unofficial Apple Weblog (TUAW), a legendary and long-dead Apple-centric tech news blog that she worked at more than a decade ago. Warren was for years a well-known and very good tech journalist, before she went on to work for Microsoft and GitHub. The real Christina Warren hasn’t been writing these new posts on the zombie TUAW, however. The site’s new owners have stolen her identity, replaced her photo with an AI-generated one, and have been publishing what appear to be AI-generated articles under her byline. 

So, not only did the website get taken over and filled with AI-generated content, but the original reporters' names were used with AI-generated images that looked nothing like them. They also republished articles from their archives and *rewrote them* using AI. 

Sheesh.

After being exposed, *Web Orange Limited* changed the authors' names but continues to publish stories daily, all in the same AI-generated format. 

To the unknowing eye, TUAW still looks like a legitimate website with real authors. But, as [The Dead Internet Theory](https://en.wikipedia.org/wiki/Dead_Internet_theory) predicted, this is only a microcosm of the proliferation of AI-based content online. What do publishers do when top search engine results and answers from chatbots are not sourced by human-owned websites and are instead LLM-based content farms written and rewritten always to get top billing? 

If *The Atlantic* is making deals with OpenAI to attract subscribers, what happens when it's cheaper for OpenAI not to give them the real estate they expected because they can just invent AI journalists to write AI-generated stories that bubble up to ChatGPT responses? 

And it looks like they don't even need to make deals with *The Atlantic* to make this happen. In an investigation by Proof News, it was found that YouTube data is [used by Apple, Nvidia, and Anthropic](https://www.proofnews.org/apple-nvidia-anthropic-used-thousands-of-swiped-youtube-videos-to-train-ai/) to train their LLM models. OpenAI has [also been caught](https://www.theverge.com/2024/4/6/24122915/openai-youtube-transcripts-gpt-4-training-data-google) using YouTube data for their latest GPT models. And, of course, Google–who owns YouTube–is obviously [using their treasure trove](https://www.nytimes.com/2024/04/06/technology/tech-giants-harvest-data-artificial-intelligence.html).

> The dataset, called YouTube Subtitles, contains video transcripts from educational and online learning channels like Khan Academy, MIT, and Harvard. The Wall Street Journal, NPR, and the BBC also had their videos used to train AI, as did “The Late Show With Stephen Colbert,” “Last Week Tonight With John Oliver,” and “Jimmy Kimmel Live.”

Deals with AI companies may be a good stop-gap for publishers to catch up. But if they take too long, every AI company will likely have a half-decent replacement for them over the next decade. It may be sloppy, but it'll be cheaper, and most readers likely won't be able to tell the difference anyway–especially if the training set already includes them, their competitors, and so much more. 

If publishers want to be serious in this next generation of media distribution, they need to start thinking about detaching from external dependencies rather than betting on letting tech giants build the future for them and, eventually, without them.

### Own Your Stack

I spent a lot of time in this issue discussing how publishers need to own their AI stack, but that's just one example of a larger cultural shift we need to see in the media industry. These AI deals are a symptom of a deeper issue with the way publishers look at the technology that distributes their content. 

Publishers need to start considering their websites as end-to-end products, more than just linked posts on social media apps or blurbs in AI chatbots. *The Verge* has done a phenomenal job of that with its Story Stream, which makes its homepage more like a social media feed than a news site. Their focus is now on [loyal readers](https://www.adweek.com/media/the-verge-redesign-loyalty-readership-dwindles/) rather than ones who happen to click on a story and forget that the site exists. They've shifted from click-throughs to an actual user base. And there's even more of that coming as they invest in making their product [into a Fediverse platform](https://digiday.com/media/why-publishers-are-preparing-to-federate-their-sites/?ref=augment.ink).

They've also launched two paid newsletters ([Command Line](https://www.theverge.com/command-line-newsletter), [Notepad](https://www.theverge.com/notepad-microsoft-newsletter)). Eventually, these newsletters can be distributed via ActivityPub, similar to [what Ghost is doing with its newsletter platform](https://activitypub.ghost.org/). If that's the case, a "Follow" on a Fediverse platform like Mastodon, Flipboard, Threads, or Ghost could prompt the user to pay to subscribe and get the newsletter directly in their social feeds instead of cluttering their inbox.

With that interaction model, *The Verge* will own its newsletter stack, social profiles, and audience all at once. The website-to-product transition has started, and while its parent company may be making deals with AI companies, *The Verge* is on a quest to become a technology company in its own right.

Perhaps more publishers need to do the same.

---

*I hope you enjoyed this issue of Human-Generated Content! If you want to be notified of future issues and other posts on augment, you can *[*follow on RSS*](https://augment.ink/rss/)* or *[*subscribe here for free*](https://buttondown.com/augment)*. You can also follow me directly on *[*Threads*](https://www.threads.net/quillmatiq?ref=augment.ink)* and *[*Mastodon*](https://mastodon.social/@quillmatiq?ref=augment.ink)*.*
