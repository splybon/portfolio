---
title: Expensive Infrastucture
date: 03-15-2021
image: kubernetes.png
path: blog/expensive-infrastructure
tag: Coffee Thoughts
---

Coffee Thoughts are a series of slack posts used to generate discussion at my place of work. Thanks [Eric Allen](https://github.com/ericrallen) for starting the iniative.

### Hope you’re enjoying some monday coffee, here are some thoughts to go along with it.

I came across [this](https://blog.usejournal.com/you-dont-need-all-that-complex-expensive-distracting-infrastructure-a70dbe0dbccb) article last week about unnecessary infrastructure and it resonated with me a bit, so I thought I would share. The author claims that for many projects you don’t need kubernetes, autoscaling, or containerization to run. Clearly at some point some deployment orchestration is needed, but I also think people reach for these frameworks without realizing the overhead necessary to run them.

In a previous life, the small software team I was on maintained a small suite of applications all on AWS Elastic Beanstalk. We made the decision to move everything to Kubernetes which took many months to complete. By the end we had the power and flexibility of Kubernetes, but now maintaining that infrastructure became someone’s full time job. With the maintenance and the initial push to set everything up, we lost a lot of time that could have been spent on new features. I’m honestly not sure if it was the right move; maybe it was, maybe it wasn’t.
