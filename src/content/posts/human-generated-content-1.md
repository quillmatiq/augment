---
title: Human-Generated Content 1
pubDate: 2024-05-23T16:43:24.000Z
tags: human generated content, activitypub, fediverse, social media, llm, google gemini, google i/o, youtube
description: This issue, Nilay Patel talks to Google's Sundar Pichai on AI, chriswaves and Mike Masnick each explore the managed decline of the web, and Molly White and Mike McCue chat about building a new web inspired by the old one.
---

Hello! Welcome to the first issue of Human-Generated Content!

Up until now, augment has just been one-off opinions on gadgets and the social web, but I always wanted it to have an outlet where I could cover other people's work on a regular basis. More specifically, I wanted a space to elevate tech-related conversations happening between humans across the internet.

I'm going to start this as a bi-weekly newsletter but I may change that if I find there's too much or not enough content for that cadence. We're just gonna roll with what works until we figure it out. Cool? Cool. 

Anyway. I consume a lot of content. Like, an embarrassing amount. Here’s just some of what I found interesting this week.

### Google I/Zero

Let’s start with a post-[Google I/O](https://io.google/2024/) all gas, no brakes conversation between Google and Alphabet CEO Sundar Pichai and The Verge’s Editor-in-Chief Nilay Patel. The interview starts with “do you think language is the same as intelligence,” and it’s an underhand pitch compared to what comes after.

Before you jump in, I wanted to give some background to some of the topics they cover so you know what's going on.

They spend some time discussing [Google Zero](https://www.threads.net/@reckless1280/post/C69ymgIPBC3): the idea that Google answering your questions instead of linking you to one will drive website distribution to zero. The Verge also recently [ran an experiment](https://www.theverge.com/2024/4/2/24117976/best-printer-2024-home-use-office-use-labels-school-homework) where they got a Google Gemini-generated article about printers to the top of Google’s search results. This not only speaks volumes about the impact the AI boom is bound to have for publishers, but it's important to remember that LLMs [degrade](https://arxiv.org/abs/2305.17493) when they scrape AI-generated content as if it were human-made. Google has a stake in solving their search algorithms to catch this content and it looks like they’re already thinking about it.

Additionally, In a [recent interview with Joanna Stern](https://www.youtube.com/watch?v=mAUpxN-EIgU), OpenAI CTO Mira Murati was asked if the non-profit used YouTube data to train their Sora video-generation models; Mira said she was [unsure](https://knowyourmeme.com/news/openai-refuses-to-elaborate-on-sources-of-sora-video-data-claims-it-is-publicly-available). YouTube’s CEO Neal Mohan later said that if the pre-launch AI-generated video model was being trained on their videos without Google’s consent, it would [be a violation of their Terms of Service](https://www.bloomberg.com/news/articles/2024-04-04/youtube-says-openai-training-sora-with-its-videos-would-break-the-rules). Nilay uses this to poke Sundar about how Google is also scraping other people’s data the same way for their models.

Alright, with that - you should be more or less caught up enough to watch the interview:

Nilay Patel discusses AI with Sundar Pichai

### Is the Internet Dying?

This conversation has been coming up more often and with proliferation of AI-generated content on the internet, I don’t think it’ll be the last time I’ll be talking about it. 

YouTuber [chriswaves](https://www.patreon.com/chriswaves) made a don’t-call-it-a-video-essay on the topic where he gets philosophical about what human representation means on the internet, how platform algorithms twist that representation, and what the introduction of AI-generated content means for all of it:

"The Internet is Dying and That's a Good Thing" - chriswaves, YouTube

Watched it? I'll give you a moment to come down from your existential crisis.

The video leaves us with a pretty crucial question: what do we do when humans are competing with content-generating algorithms to win over content-recommending algorithms? If human representation is already skewed by the needs of algorithms, how do we compete with machines that understand the skews significantly faster than us *and *generate that content quicker for cheaper? 

Chris doesn't provide an answer since he's still seeking one himself, but I find it important to pull one important thread out of this: if human representation is skewed by algorithms, then why do we depend on so few of them? YouTube is a great website, but it wins not *just *because of the algorithm but because of the content it has locked in on the platform. I can't watch a YouTube video on Vimeo or vice versa and therefore, both Chris and I are beholden to the one algorithm that helped me find his video.

But what if Chris could use one platform for distribution and I could use a separate platform with a different algorithm that I prefer? And when that algorithm stops serving me the content I'm looking for, what if I could go to yet another platform with a different algorithm - or no algorithm at all - and continue following Chris' videos?

This is what decentralized protocols like ActivityPub (Mastodon, Threads, Ghost, Flipboard, PixelFed, PeerTube etc.) and AT (Bluesky) are trying to accomplish. If you want a deeper dive into how that cross-platform interaction looks like, [I talk all about it here](https://augment.ink/threads-on-mastodon/).

This brings me to Mike Masnick, who [wrote an important piece](https://www.techdirt.com/2024/05/21/decentralized-systems-will-be-necessary-to-stop-google-from-putting-the-web-into-managed-decline/) about how decentralized social platforms can be an antidote to the AI-generated decline of the internet:

> "decentralized social media could offer an alternative to the world in which all the information we consume is intermediated by a single centralized player, whether it’s a search engine like Google, or a social media service like Meta [...] one in which you get to build the experience you want, rather than the one a giant company wants."

In a social web where you can build a follow graph across platforms, you are only skewed by the humans consuming it. Maybe you skew a bit to double-down on an algorithm where your audience currently is, but to grow you'd eventually need to start catering across algorithms. In other words, you're not beholden to a single platform's needs. To cover a web of platforms, you need to focus on the humans on the other side of each one and you can decide where to put your efforts.

As newsrooms panic over Google Zero, it's clear that they’ll need to turn to other distribution channels. Apple News+ is one that [seems to be working](https://www.semafor.com/article/05/19/2024/as-clicks-dry-up-for-news-sites-could-apples-news-app-be-a-lifeline), but as Josh Billinson of Semafor points out - [it’s yet another distribution channel](https://www.threads.net/@jbillinson/post/C7MtFGXL1ze/?xmt=AQGzRbhjs32hRIaqWgrtvTp5EZKYGE2fBLT0jy-lN47kxg) where publishers have no direct relationship with their readership. Semafor, like The Verge, [brought their content to the Fediverse via Flipboard](https://techcrunch.com/2023/12/18/flipboard-becomes-a-federated-app-with-support-for-activitypub/) which *does* give them a direct relationship with their audience since they can potentially leave Flipboard for another Fediverse platform (even a self-hosted one!) without losing the audience they gained with the partnership. It looks like [The Verge plans on taking it even further than that](https://www.theverge.com/24087834/hank-green-decoder-podcast-google-youtube-web-media-platforms-distribution-future):

> "We got to invent some stuff. I have a very enlightened CEO, Jim Bankoff, and he’s allowing me to poke at some ideas about those things. Like what does new distribution look like in the fediverse? And then our company has a giant sports property, and you know what hasn’t left yet? It’s sports Twitter. So I’m going to poke at it with *The Verge, *and we’re lightly exploring it, but I think there is opportunity there to build new kinds of media products that is really exciting."

Exciting, indeed.

### A New Web like the Old Web

And this brings us to our final discussion of the week: where do we even start building this new human-centric web? A couple weeks ago, Molly White (of [Wikipedia](https://www.mollywhite.net/wikipedia-work) and [Web3IsGoingJustGreat](https://www.web3isgoinggreat.com/) fame) [wrote a piece](https://www.citationneeded.news/we-can-have-a-different-web/) about how we can build it using inspiration from the internet of the past:

> Nothing about the web has changed that prevents us from going back. If anything, it's become a lot easier. *We can return. *Better, yet: we can restore the things we loved about the old web while incorporating the wonderful things that have emerged since, developing even better things as we go forward, and leaving behind some things from the early web days we all too often forget when we put on our rose-colored glasses.

This sentiment really stuck with me, so I was excited to see when she followed up her post with a conversation with Flipboard CEO Mike McCue, who has been re-writing his own company's future, driven by open protocols like ActivityPub.

Here's their conversation:

Molly White and Mike McCue chat about a new web on the Dot Social podcast

First off, I want to call out that this video is posted on Flipboard's own ActivityPub-supporting server using open source YouTube competitor [PeerTube](https://joinpeertube.org/). This means that I can subscribe to Dot Social on Mastodon, soon on [Threads](https://engineering.fb.com/2024/03/21/networking-traffic/threads-has-entered-the-fediverse/), and eventually on [Ghost](https://activitypub.ghost.org/) - the platform augment is hosted on - if I don't want to have a PeerTube account. I can Like, Comment, And Subscribe (TM) from where I decide to consume my social media and Flipboard owns their channel where they want to host their videos. And we can both move to alternatives without losing our follow graph.

That right there is the core of the "old web" Molly and Mike are talking about. The walled gardens of the recent internet were once the only accessible way for people and organizations to connect to their networks. Now, we've got the opportunity to knock those walls down again and connect to each other directly as humans rather than profiles we create for a small group of algorithms.

Molly also brings up one of my own frustrations with ActivityPub - integrating it takes a lot of work. There's a lot of starter-kits out there for devs to build their own products (I'm loving [Fedify](https://fedify.dev/) myself), but working backwards from an existing platform is really difficult. This transition will take time and a lot of effort, but hopefully more tools and guidance will arrive on how to transition in the near future.

I don't know if the Fediverse is going to take off, even if I'm being optimistic and all signs are pointing toward that being true. What I do know is that a protocol-based solution is likely the right one if we want the next generation of social web products to be owned by us, the humans. 

To me - that's worth rooting for.

### Until Next Time

Lots of AI and Fediverse stuff, and I think this will likely remain the theme over the next few issues. WWDC is [right around the corner](https://www.apple.com/newsroom/2024/03/apples-worldwide-developers-conference-returns-june-10-2024/) and we're bound to hear Apple [talk our ears off about AI](https://www.bloomberg.com/news/newsletters/2024-05-19/what-is-apple-doing-in-ai-summaries-cloud-and-on-device-llms-openai-deal-lwdj5pkz), there's a lot of updates rolling out in ActivityPub-based networks and Bluesky (they [just launched DMs](https://bsky.social/about/blog/05-22-2024-direct-messages) while I was writing this!), and there's likely a whole lot more conversations around Google's [major changes to their search experience](https://www.theverge.com/2024/5/14/24155321/google-search-ai-results-page-gemini-overview) in the coming weeks as well.

So, yeah - a lot more of this, coming soon. Until then ✌🏼

*I hope you enjoyed the first issue of Human-Generated Content! If you want to be notified of future issues and other posts on augment, you can *[*follow on RSS*](https://augment.ink/rss/)* or *[*subscribe here for free*](https://augment.ink/#/portal/)*. You can also follow me directly on *[*Threads*](https://www.threads.net/quillmatiq?ref=augment.ink)* and *[*Mastodon*](https://mastodon.social/@quillmatiq?ref=augment.ink)*.*
