---
title: Rest vs GraphQL vs gRPC
date: 03-22-2021
image: network.jpg
path: blog/rest-graphql-grpc
tag: Coffee Thoughts
---

Coffee Thoughts are a series of slack posts used to generate discussion at my place of work.

Hey there, happy monday. Hope you are enjoying your. Sorry, this ended up being way too long. Ran across [this article](https://www.danhacks.com/software/grpc-rest-graphql.html) which gave a nice summary of the pros/cons of Rest vs GraphQL vs gRPC.  If you haven't used any of the 3 it's a nice quick intro into them.  Having some experience with all of them, it made me want to reflect on my likes/dislikes on each of them so here is my personal pros/cons list.

**REST**: Classic; most people know it

Pros:

- Easy to use in the browser because between the HTTP verb, the request body, and the path, you can pretty easily tell what a request is doing.
- Caching is easy if your data scheme supports it

Cons:

- Overfetching has never been a problem for me, but I can see where it could be in certain circumstances.
- Main issue I've run into is lack of documentation around apis.
- How do you know an endpoint is there if you can't see it?
- How do you know what you can query with if it's not written down somewhere?

**GraphQL:** graphQl? GraphqL? GraphIql? GraphiQL? graphql? I can never keep it straight

Pros:

- Self documenting
- Types
- Great libraries in the ecosystem that are well documented
- GraphiQL
- Only get the data you need

Cons:

- If you say anything bad about it, the GraphQLites will probably kill you
- Doing this without a library seems difficult
- Hard to inspect in the browser
- I'm sure there are ways, but caching on the server was hard for me b/c people can just query whatever they want and nest their queries
- If you don't know what you're doing, this has a pretty big downside. I came off a project where regardless of what you queried, the GraphQL server would hit every service that was in the graph. It was very slow

**gRPC:** server side communication of the future? My experience here is pretty limited

Pros:

- Types
- Hella fast
- Most languages support it
- Retry failures

Cons:

- Generated protobufs were hard to manage between different repos. Would love to hear how people deal with this
- I know you can do frontend to server, but debugging that in the browser seems very difficult

I'm sure there are those more experienced than myself in each of these communication types, and I'd love to hear your experiences with them.  Also it wasn't listed in the article, but all of these are way better than SOAP so be thankful we live in a time where it's not as popular.
