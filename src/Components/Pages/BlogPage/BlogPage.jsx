import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const BlogPage = () => {
    useTitle('Car Toy Store/Blog')
    return (
        <div>
            <h1 className="text-4xl font-bold text-success mt-6 text-center">Blog</h1>
            <h1 className='mt-5 text-xl'><b>Ques:</b> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p><b>Ans:</b> Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. <br /> <br />  Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. </p>
            <h1 className='mt-5 text-xl'><b>Ques:</b>Compare SQL and NoSQL databases?</h1>
            <p><b>Ans:</b> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h1 className='mt-5 text-xl'><b>Ques:</b>What is express js? What is Nest JS ?</h1>
            <p><b>Ans:</b> NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project. <br /><br />
            Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.</p>
            <h1 className='mt-5 text-xl'><b>Ques:</b>what is MongoDB aggregate and how does it work?</h1>
            <p><b>Ans: </b>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br /> <br />
            One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. 
            </p>
        </div>
    );
};

export default BlogPage;