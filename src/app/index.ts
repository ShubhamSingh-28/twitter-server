import express from "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from "body-parser";


export async function initserver() {
    const app = express()
    app.use(bodyParser.json())
    const graphqlSever = new ApolloServer<any>({
        typeDefs:`
        type Query {
           hello: String!
        }
        `,
        resolvers:{
            Query :{
                hello:()=>`hello`
            },
            
        }
    })

    await graphqlSever.start();

    app.use("/graphql", expressMiddleware(graphqlSever));
    return app ;
}

 