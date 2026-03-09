---
title: But First, Interoperability
pubDate: 2025-06-13T19:08:01.000Z
tags: activitypub, at protocol, bluesky, fediverse, flipboard, ghost, mastodon, open social web, social web, threads
atUri: "at://did:plc:xgvzy7ni6ig6ievcbls5jaxe/site.standard.document/3mgnqrct2b22m"
---

![](./_assets/20th_Avenue_NE_Bridge-_Seattle-_1914.jpg)20th Avenue NE Bridge (Ravenna Park Bridge), Seattle, WA, U.S., 1914, © [Seattle Municipal Archives](https://www.flickr.com/people/24256351@N04)
Back in November, [I wrote an essay](https://augment.ink/bridges-the-last-network-effect/) that explored the significance of services like [Bridgy Fed](https://fed.brid.gy), a protocol-level bridge that connects open social platforms. Since then, [Ryan Barrett](https://snarfed.org/), the builder behind Bridgy Fed, and I have started [A New Social](https://anew.social): a nonprofit focused on building more cross-protocol tools like the bridge.

Recently, we announced our first in-house project: [Bounce](https://blog.anew.social/bounce-a-cross-protocol-migration-tool/). It allows you to move between platforms that run on ActivityPub, such as Mastodon and Threads, and  AT Protocol, such as Bluesky, while maintaining as much of your social graph as possible using Bridgy Fed.

While we believe this is a significant development for the open social web, there's a deeper reason why we wanted to introduce this to the ecosystem in the way we did. Today, I want to discuss the foundations that Bridgy Fed and Bounce are laying for our mission, and what we hope will help others build similarly.

### Fragmented

The social web is fragmented.

There's the [silos](https://augment.ink/social-siloes-post/), the platforms that choose to remain in a closed network, often to create an internal network effect that keeps users within their ecosystem. They don't interoperate with other platforms and typically don't allow developers to build on top. These, unfortunately, are the strategies employed by most of the popular platforms we interact with today, including Instagram, Twitter, Facebook, and LinkedIn. Some of these started with some level of openness or promises of interoperability, but no longer do so. These remain *purposefully* fragmented from one another and the broader social web.

Some platforms live on the open social web. They enable interoperability through protocols and often also allow developers to build upon them. This can include third-party clients, tools that tap into the platform's underlying network and firehose, and sometimes even allowing you to host the platform on your own rather than relying on the builders' infrastructure. Some examples of this are Mastodon, Bluesky, Pixelfed, and, to some extent, Threads if you want to stretch the definition. Even among these open social platforms, however, there is fragmentation. Some use ActivityPub, some use ATProto, and others use protocols like Nostr or Farcaster.

The major difference between this fragmentation and the one silos have built is that you can break through and connect them at the protocol level like Bridgy Fed and Bounce have. Some platforms have even taken it upon themselves to use multiple protocols, like [Wafrn](https://app.wafrn.net/), a Tumblr-like service that connects to both ActivityPub and ATProto networks.

In other words, the fragmentation of the open social web is a solvable problem, and its solutions can extend beyond our current landscape.

### Democratize the Open Social Web

It's clear that, while the open social web is fragmented from a standards perspective, this doesn't have to be the case when it comes to how users *experience* these networks. The openness they provide can be leveraged to make differences virtually invisible and keep the lofty promises we make to users: you can follow *anyone* from *anywhere* and leave for another platform at *any time*.

And by making these differences invisible, we unlock something greater. I think [Laurens Hof](https://laurenshof.online/) put it best in [his piece about Bounce](https://fediversereport.com/bounce-and-how-the-open-social-web-is-continually-changing/):

> Tools like Bounce suggest the direction of the Open Social Web is less about specific protocols, and more about expanding user agency.

Expanding user agency. 

Not protocol dominance. Not decentralization based on specific technologies. Not a standards team deciding what the users need. But, instead, a path toward an open social web that lets users choose the features of platforms they care about without ever having to peek beneath the services they use.

*That* is the people-first open social web we promise users every day.

Users shouldn't be locked in because they happened to choose a protocol by accident, simply because a platform met their needs at that moment. We didn't build Bounce because we expect users to migrate every week; we built it because something like it *can* and *needs* to exist.

### Adversarial Interoperability

What we need to do right now is to lean into the openness that all these standards provide. Yes, we need a plethora of interconnected Twitters, and Tumblrs, and TikToks, and Instagrams. But we also need things that live *in between* them, solving the gaps that ultimately reduce user choice. 

This isn't some brand-new idea. This concept of "adversarial interoperability" has been around for a long time. To quote [Cory Doctorow's piece on it](https://www.eff.org/deeplinks/2019/10/adversarial-interoperability):

> you need *adversarial* interoperability: that’s when you create a new product or service that plugs into the existing ones *without the permission* of the companies that make them. Think of third-party printer ink, alternative app stores, or independent repair shops that use compatible parts from rival manufacturers to fix your car or your phone or your tractor.

This is the kind of building we need to do *around* protocols, so we provide users with more choice. Build third-party migration tools, alternative profile search engines that connect across networks, or use compatible parts from rival protocols to bridge them together. In fact, do that *inside* your platforms.

If we want users to find their spaces on the open social web, we cannot make it more complicated than simply letting them sign up while providing interoperability and an exit plan. No talk of decentralization, no conceptual idea of what an interconnected web of platforms could look like in a decade, and certainly no loud arguments about why your platform is better because it supports the forgotten FLiPFLoP standard of the 90s (No, this is not real. Yes, this is how you sound to average users.).

You want more people to use your platform or protocol? Build tools like Bounce that ensure they have a way to transition to <insert-your-favorite-protocol> without losing their communities when the time is right.

The moment a user asks, "Wait, why can't I go *there*? You said these were *open*," we've failed on our promises. That's where we are right now. We need to solve that problem first, because if we don't, we risk users losing their communities when the inevitable next platform exodus happens. But this time, it's after we've told them they never have to worry about it ever again. If we lose that trust, I fear that we'll, rightfully, never earn it again.

### How We Should Build

Make multi-protocol feel native to your platform by building it internally, like Wafrn, or using a third-party solution, such as Bridgy Fed, [like Ghost has](https://bsky.app/profile/quillmatiq.com/post/3lnv5gs5v5s2y). Add migration as a core part of your onboarding and offboarding experience, making services like Bounce and [ATAirport](https://atpairport.com/) a backup option. Make it easy to build custom feeds *across* protocols like [Channels.org](https://home.channel.org/channels) and [Surf](https://techcrunch.com/2025/05/22/open-social-web-browser-surf-makes-it-easier-for-anyone-to-build-custom-feeds/). Don't just build on top of protocols; utilize those protocols to their fullest extent, demonstrating the power of the open social web in a way that silos cannot. 

Bridgy Fed and Bounce are *awesome*, but the best case is an ecosystem where they serve as backup options for services that have yet to build those features natively. We want to be able to Bounce a user from Mastodon and Bluesky into a platform that supports both protocols, dropping the need for Bridgy Fed altogether and making all of this invisible to the user. That, right there, is the dream we're chasing.

Or, as David Pierce said about Bounce on [The Vergecast](https://youtu.be/kY4kLDpmkhQ):

> The idea that I can just pick up my stuff on a social network, and put it down on another social network? Like, that's it, baby. That's the stuff.

That's the stuff. That's what the open social web is for.

There will come a day when we can debate which protocol is the greatest of them all, what the definition of decentralization is, and which company, organization, or developer did it best. We *should* have that conversation when the open social web is what users have chosen as a default option.

But first, interoperability. 

---

*Thank you for reading!*

*[A New Social](https://anew.social/) is a self- and community-funded nonprofit. If you're excited about the work we're doing, we'd really appreciate it if you joined our [Patreon](https://www.patreon.com/anewsocial) and/or bought some ["People, Not Platforms" merch](http://store.anew.social/). Thank you for all your support!*

*You can follow me on the social web on [Bluesky](https://bsky.app/profile/quillmatiq.com?ref=augment.ink), [Mastodon](https://mastodon.social/@quillmatiq?ref=augment.ink), and [Threads](https://www.threads.net/quillmatiq?ref=augment.ink). And if you want to be notified of future issues of augment and my newsletter "Human-Generated Content," you can [follow on RSS](https://augment.ink/rss/) or [subscribe here for free](https://buttondown.com/augment)!*
