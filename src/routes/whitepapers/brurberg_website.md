---
title: Brurbergs website mk1
date: "2023-03-06"
description: The decisions and why Brurberg.[no/jp] looks the way it does. Inspirations and plans.
---

## Introduction

This whitepaper describes the decisions and reasons behind the development of Brurberg.[no/jp] website. It covers the inspirations, plans, and the technologies used to create the website.

## Why build a website for Brurberg?

As a software developer, it may seem like a cop-out to use pre-built solutions for creating a website. There are many reasons not to build a website manually, such as the amount of work, technical knowledge required, and time spent finding and creating assets and functions. However, building a website from scratch has its benefits, such as:

* Flexibility: There are more things you can do if you build a website yourself.
* Performance: Purpose-built websites generally have more performance than pre-built solutions.
* Ownership: If prices or functions change, you can move or change things whenever you want.

In addition, building a website from scratch provides more control over security. If you actively maintain your website and keep everything up-to-date, it's likely safer in your own hands compared to using a full-service solution where you rely on the provider.

Lastly I have yet to explay why I feel like I need a website for Brurberg. The reasons are a few. SNS works well for sharing info and finding people. However I prefer having a "single point of truth" where I can deside what happens to it. So I will be posting my whitepapers and other information here rather than directly to SNS.

## What inspiered the technology used to build this website.

I have liked working with [Svelte](https://svelte.dev/) for a time now and really wanted to get to use [SvelteKit](https://svelte.dev/). I also took some time to look at what was the "current" standard or alternativs for creating frontends. One source I used was [Fireship](https://www.youtube.com/@fireship) and felt safety in knowing he also plan to use [SvelteKit](https://svelte.dev/) in his new website, along with knowing that [Svelte](https://svelte.dev/) was the most liked frontend language at stackoverflow in 2022. However, I do not plan to use any backend as a service. So I will neither use the FKIT stack nor the SuKit stack.

The last major part was how I wanted to host the frontend. The bakend will be hosted at AWS if or when I need it. However for now I did not want to pay for a server at AWS just to host a frontend. So I looked at many different solutions, but most of them either seemed verry propriatary or potentially expensive. I would probably have prefered to go for AWS Amplify. But when [Cloudflare](https://pages.cloudflare.com/) has there Pages and native support for [SvelteKit](https://svelte.dev/), it kind of wasn't a question any more. Especially since I allready use [Cloudflare](https://www.cloudflare.com/) for DNS.

There are some potential downsides with [Cloudflare Pages](https://pages.cloudflare.com/). Running functions or other backend services from withing the SSR server time frame can create long load times if you use a sentralized backend. This is because of RTT from the Edge where the frontend is hosted. Thus it can be quite negative or confusing if you are not aware. This will not be an issue for this website as I will either populate data from the client or during the build time of the website. So there should never be any api calls from the server when serving a frontend.

This website also contains whitepapers written in Markdown. To handle building and loading Markdown dynamically I followed [Let's learn SvelteKit by building a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) by Josh Collinsworth. The guide seems like a good starting point for a lot of people, however it does not contain anything about TypeScript. I have no prior experience reading Collinsworth's posts, however I can say that this one is both well written and very informative. It was layed out in a way where I was able to skipp though it quickly and also have enough information so that a beginner would be able to understand most of it. Thumbs up. Good job Collinsworth.

## Why does the frontend look like it does.

I'll just start by saying that I am no frontend developer and also no graphical designer. So when the [SvelteKit](https://svelte.dev/) demo app looks as good as it does I decided to base the first version heavily on that. It made the whole process of creating the website very easy and quick. 

If i were to estimate the time from I created the git project until everything I wanted was working and looked somewhat like I wanted. Total time worked would be about 1,5 hours. That is with researching how to do markdown and getting it working without any api endpoints. And one mistake on my part where I forgot to fully read Collinsworth's guide.

Inn short, if you want a simple project to learn how to create a website and does not care too much about design. Starting with the [SvelteKit](https://svelte.dev/) demo app and adding some extra features should be a really good start.

I have also added TailwindCSS and are using it in some areas. The experience using TailwindCSS as a non frontend developer has been a blast. Way simpler than manually doing everything. It also seems to help with making everything look uniform across different browsers. All inn all it seems like a good product. Things has definetly gotten better since I last looked at creating a frontend.

## What is next?

The next steps for this website is to add some more features related to where I am and work now. It will also be used to showcase some of my hobbies, one of which is photography. 

This project will also be used as a base for some of the other projects I have to do for work. For instance I am working on a new version of Nerthus now and with that I will have to create a new frontend.

So the feature of this website will be education and learning for Yuna Brurberg and also as a base and inspiration for work I do that needs a frontend.