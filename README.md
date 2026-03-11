# GenerateEmailAi

Project Overview

This project is a CRM-style email generation platform that allows users to manage clients and generate personalized emails using AI. The application enables users to store client information and quickly create professional emails tailored to each client using an AI model.

The platform is composed of a React frontend, a Node.js + Express backend, and a MongoDB database. The backend communicates with the AI model through the OpenRouter API to generate email drafts based on a user-provided description and tone.

What I Built

I built a small CRM application with the following features:

User authentication API

Client management system

Create new clients

Display a list of clients

AI Email Generator

Select a client

Provide a description of the email

Choose the email tone (e.g., Professional, Friendly, Formal)

Generate a complete email draft using AI

Copy email functionality

Users can copy the generated email directly from the interface

The system connects the frontend and backend through REST APIs, and client data is stored in MongoDB.

Key Technical Decisions

Several decisions were made to keep the project simple, scalable, and easy to maintain:

1. MERN-style architecture
The project uses a common web architecture:

React for the frontend interface

Express.js for the backend API

MongoDB for storing users and clients

2. REST API structure
The backend is organized with controllers, routes, and models to keep the code modular and maintainable.

3. AI Integration
Instead of building an AI model from scratch, the system uses OpenRouter, which allows easy access to modern language models to generate email content.

4. Navigation State for Client Data
When clicking “Generate AI” from the client list, the selected client is passed to the AI generation page using React Router navigation state.

How I Used AI

AI is used to automatically generate professional email drafts based on:

Client information (name, company)

A user-written description of the email goal

The selected email tone

The backend constructs a structured prompt and sends it to the OpenRouter API. The response from the AI model is then returned to the frontend and displayed in the interface, where users can copy the generated email.

This approach allows users to quickly create personalized emails without writing them manually.

Improvements With More Time

If I had more time, I would improve the project in several areas:

1. Email Sending Integration
Add integration with email services (such as SMTP or Gmail API) so users can send emails directly from the platform instead of copying them.

2. Better AI Prompting
Improve the AI prompts and return structured responses such as:

Subject

Email body

Suggested follow-up

3. Client History
Store previously generated emails for each client to maintain communication history.

4. Authentication & Security
Add stronger authentication features such as password hashing, token refresh, and role-based access.

5. UI Improvements
Enhance the interface with better loading states, AI generation indicators, and improved client management tools.