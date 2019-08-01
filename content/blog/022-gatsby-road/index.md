---
title: Working with Gatsby and GraphQL
date: '2019-07-21T22:42:03.284Z'
---

![GatsbyJS](gatsby.png)

It has been about a week and I have been utilizing Gatsby with GraphQL and have got a simple website that is pulling data from a PostgreSQL Heroku database. Using React really made the experience a lot more fluid and comfortable and am really loving the ecosystem. I knew the first thing I needed to do is figure out how to get Gatsby to talk to my database and then use GraphQL queries to fetch the information. Google, a developers best friend had the answers and they lead right back to a Gatsby plugin called [gatsby-source-pg](https://www.gatsbyjs.org/packages/gatsby-source-pg/) which worked perfectly after a lot of trying to figure out how exactly to implement it. 

There were a lot of moving pieces like understanding to put the connection settings in the gatsby-config.js file, creating the query in gatsby-node.js where the createPage information has to directly match that of the item templates page query that was created. That took a couple of hours to figure out but when it worked, dynamic pages were finally possibly by just adding the name of a part in the url after the /item/****. It queuries the database, fills in the information to the template, and displays any of 4 parts I am using as mock data. SUCCESS!!!

So wait, does that mean I don't need an NodeJS server with express? Looks like when I need to insert data, there is no escaping a dedicated server and so PostgreSQL will live on. All in all though, Gatsby is an amazing technology and can't wait to really dive deeper but for now, building the mechanics of the website to make sure I can produce an MVP. Still wonder how I am going to produce nested categories so I can have a breadcrumb on the header. Before that though, have to figure out how to insert information to the database with GraphQL.

