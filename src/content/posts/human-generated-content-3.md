---
title: Human-Generated Content 3
pubDate: 2024-06-20T18:39:10.000Z
tags:
  - human generated content
  - activitypub
  - apple
  - fediverse
  - generative-ai
  - social media
  - elonmusk
---

> "My goal for the next issue is to not talk about the Fediverse."

That was me in [the last issue of Human-Generated Content](https://augment.ink/human-generated-content-2/) and I would like to start by apologizing for this very predictable lie.

---

Hello, again!

Last time, we talked about the diverging strategies between publishers choosing AI or the social web - let's continue that thread today. If you didn't notice, there were a *lot* of AI stories over the last two weeks. And by AI I mean "Apple Intelligence", which I will never say unironically ever again.

Today we'll chat about A[rtificial]I, how the media should cover topics like Elon Musk's latest tantrum, and we'll end on an optimistic note about media's place in the future of the open web.

## Yeah, Fine. Let's Talk About AI

That's probably what Tim Cook said when Apple was planning the WWDC24 keynote. If I'm being honest - by the end of the recorded presentation, Tim seemed exhausted by all the hype and looked like he was ready to say "are you happy now?"

I'm not going to delve too much into Apple's foray into LLM-based AI because, quite frankly, we have no idea if it's going to live up to the promises they're making. The concepts seem really smart but we've been fooled before. One of the many consumer-facing problems with non-deterministic technologies like LLMs is that we find it funny when it says something stupid, but if it doesn't handle something as time-sensitive as a phone action properly - we likely won't try it again. I'll hold off until it's given a fair shot in the wild.

What I do want to talk about briefly, however, is Perplexity.

Sarah Emerson and Rashi Shrivastava of Forbes [report](https://www.forbes.com/sites/sarahemerson/2024/06/07/buzzy-ai-search-engine-perplexity-is-directly-ripping-off-content-from-news-outlets/):

> Perplexity appears to be plagiarizing journalists’ work through its newly launched feature, Perplexity Pages, which lets people curate content on a particular topic. Multiple posts that have been “curated” by the Perplexity team on its platform are strikingly similar to original stories from multiple publications

Sarah and Rashi then go over numerous examples where Perplexity copies articles word-for-word and creates searchable "Pages", essentially replacing the original creation with a copy. 

Plagiarism as a Service, if you will.

Perplexity ended up responding saying they know things are rough around the edges but they're working on it. They also went ahead and said that they're [totally working with media companies](https://www.semafor.com/article/06/12/2024/perplexity-was-planning-revenue-sharing-deals-with-publishers) to license their content. Cool, but the cart goes *behind* the horse.

But wait, there's more! As it turns out, Perplexity is actively ignoring a web-wide handshake that tells bots to not scrape content from a page. Robb Knight, dev at Radweb and MacStories, discovered that Perplexity [just straight up ignores](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent) the fact that they've been added to the robots.txt file:

> they're using headless browsers to scrape content, ignoring robots.txt, *and* not sending their user agent string

I believe the technical term for such behavior is "shady af". 

In a vacuum, we can look at these as slip-ups. What we see here instead is a pattern of behavior that puts anything that doesn't benefit Perplexity on the backburner, leaving behind an intense focus on delivering *something* that differentiates them from every other AI product in this inflating bubble. And we all know there's a lot more AI products than there should be.

Speaking of a lot more than there should be - let's talk about Elon Musk.

## We Need To (Not) Talk About Elon

This week, Apple not only announced their own AI features, they also showed off an integration with ChatGPT where Apple hands off requests it can't handle to another chatbot. Their grand plan is to enable many third-parties to integrate. 

This seemed to really tick off Elon Musk, who used to be the biggest donor of OpenAI until they didn't let him be CEO. He threw a tantrum and took his money with him. Elon also started a competing AI company called xAI that's focused on being "funny" and "not woke", whatever all that means.

Long story short: he got big mad that Apple chose OpenAI and a bunch of journalists decided that it's worth reporting on.

Elon says a lot of things every day - many of which are (*gasp*) lies - and angry rants every week - many of which are layered in contradictions. We don't need Elon to be a part of every news cycle, even if he tries his best to be.

Karl Bode of TechDirt [outlines the abusive relationship](https://www.techdirt.com/2024/06/11/hey-journalists-not-every-elon-musk-brain-fart-warrants-an-entire-news-cycle/) newsrooms have with Elon:

> First it spent fifteen years hyping up Musk’s super-genius engineering mythology, despite mounting evidence that Musk was more of a clever credit-absconding opportunist than any sort of revolutionary thinker. After **20 years** of this, the press still treats every belch the man has as worthy of the deepest analysis under the pretense they’re engaging in some sort of heady public service.

Musk is one of the richest humans ever and literally has [the power to control wars](https://en.wikipedia.org/wiki/Starlink_in_the_Russo-Ukrainian_War). He's used that money and power to purchase one of the most influential social media platforms, then [changed its algorithm](https://www.theverge.com/2023/2/14/23600358/elon-musk-tweets-algorithm-changes-twitter) to focus more on him even if you signal that you don't want it to. 

Elon doesn't need more amplification than he's already given himself and yet...here we are.

Of course, the reasoning isn't because it actually needs to be reported on, it's because they know that "Elon Musk said..." is great for clicks. There's likely someone looking at the metrics in these newsrooms chomping at the bit for another Elon tweetstorm so they can watch the numbers go up again.

Jason Koebler of 404 Media also dove into those financial incentives, but has important insight into [why this is unhealthy](https://www.404media.co/elon-musk-tweeted-a-thing/) in the long-run for the media business:

> Elon Musk tweets a thing is the type of easily replicable blog post that Google, Perplexity, and OpenAI are actively automating through their AI summary tools and the deals that publishers are increasingly signing with AI companies to specifically allow them to replicate such types of content more easily. It is the type of blog post that X itself is already summarizing and generating for users with the deeply unreliable yet soon-to-be-deeply integrated Grok AI.

He goes on to talk about how to use social media content in a more productive way:

> they are fundamentally taking something that is easily found on social media, embedding it, and calling it a blog post. There is and can be utility explaining a social media phenomenon or weaving together a narrative based on a series of social media posts.

Jason isn't just talking about Elon here, he's talking about how media businesses can survive this awkward phase of the human internet. 

He isn't just talking the talk either - 404 Media publishes on a platform that gives them direct contact with their audience (and is soon [extending to the Fediverse](https://activitypub.ghost.org/)). They focus on original stories that other newsrooms aren't covering, which then enables their audience to share those stories to their part of the web. Instead of depending solely on winning an SEO lottery or a social media algorithm, they're providing value to their readers and being amplified for it. And [they're profitable](https://www.niemanlab.org/2024/02/six-months-in-journalist-owned-tech-publication-404-media-is-profitable/) all while doing it.

So stop with the Elon slop, we can let AI handle that. You should focus on building *your* web.

## A Web of Webs

In a follow-up to Molly White's "[We Can Have A Different Web](https://www.citationneeded.news/we-can-have-a-different-web/)", Aram Zucker-Scharff (Engineering Lead at The Washington Post) outlines how we can build a more humane web by leaning on its fundamentals:

> The internet then is the series of connections between people, at a huge scale. Not everyone is connected to everyone, but if you're on the internet, you're connecting to *someone*. So it isn't so much a world wide web as it is world wide **webs**. [...] The thing about webs is they are failure resistent (sp), one strand falling won't take the whole thing down. You can punch a hole through them, but webs are also rebuilt regularly, they can fail and come back quickly.

Aram outlines various ways you and I can help build a resilient and redundant human web of information that builds upon each other, rather than one dependent on a few black-box platforms. It's worth reading through this one and taking up at least some of these practices. I would start by building your own home(s) on the internet that you own, but there's a lot more we can all do.

What I love about this moment is that we're seeing more and more creator-turned-owner stories popping up as we see the managed decline of the platform-owned web. Anil Dash (VP at Fastly, Prince Superfan) wrote a piece that puts into focus [the New Alt Media](https://anildash-blog.glitch.me/2024/06/14/the-new-alt-media/) - a group of relatively newly-minted newsrooms that act more like co-ops than they do traditional media institutions:

> There’s Flaming Hydra. 404 Media. Defector. Aftermath. Racket. Hell Gate. And so many more. This isn’t a *new* phenomenon — several of the publications in this broad category have been around for years. But we’ve reached a tipping point, for a number of reasons. [...] And all of that is without even mentioning the important part: these new platforms are telling the stories nobody else is.

That right there is how creators, curators, and consumers are building their web of webs - original stories shared through platforms, amplified using humans that share with other humans. It's how I find articles every week for this newsletter as I build my web next to all of yours. Look, Ma - I'm doing the thing!

I pointed out how we should start looking at these media companies in the [last issue of this newsletter](https://augment.ink/human-generated-content-2/) as well:

> At this point, if you're not looking at these publishers as social web platforms that are hosting hand-picked bloggers, podcasters, and content creators with a publisher's infrastructure, you're not paying attention.

But with Anil's post, I think it's worth calling out that most of these New Alt Media companies are doing something important: paid tiers. They may not paywall all their content, but they have options to pay to remove ads, get extra content, and/or gain direct access to the creators among other perks. And this is a good thing - good work deserves good pay. 

Tony Stubblebine, CEO of Medium, wrote about [the importance of the paywall](https://blog.medium.com/be-part-of-a-better-internet-5c4aa58ec826) for the future of human-made content:

> Now we have decades of proof that attention-grabbing isn’t the same as good. Instead of the information superhighway that we were promised, ads gave us an internet where almost all incentives are to create cheap, high-volume, low-quality content designed to get as many eyeballs as possible.

By changing the incentives from ads to subscriptions, the creators in this environment are forced to focus on bringing relevant, timely, and original information to their consumers. 

The new web economy is handmade, original, and delivered by humans. That's quite delightful if you ask me.

*Side note: Fastly, where Anil is VP, launched *[*a new UX on Glitch*](https://thenewstack.io/developers-can-now-discover-and-curate-open-web-apps-on-glitch/)* that enables users to curate the open web. It's giving me StumbleUpon vibes and I mean that in the best way possible. More on that in a future post - don't forget to subscribe!*

## Until Next Time

Okay, so I talked about the Fediverse again. It definitely feels like if I want to talk about human-made content, the social web is entirely the center of it so it's nearly impossible to not mention it in some shape or form. So no promises for the next issue. I'm just going to roll with the punches. 

I also realized that I'm doing a terrible job of highlighting the linked content in this newsletter, so from now on I'm going to add a list of the main links in the issue at the end. I really urge you to read them since I only highlight specific parts - there's a lot more depth in these pieces and you'll thank yourself for taking the time to read through them.

So, until then - hope you have a great couple weeks ✌🏼

*I hope you enjoyed this issue of Human-Generated Content! If you want to be notified of future issues and other posts on augment, you can *[*follow on RSS*](https://augment.ink/rss/)* or *[*subscribe here for free*](https://buttondown.com/augment)*. You can also follow me directly on *[*Threads*](https://www.threads.net/quillmatiq?ref=augment.ink)* and *[*Mastodon*](https://mastodon.social/@quillmatiq?ref=augment.ink)*.*