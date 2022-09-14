# Newsletter-Signup
[What the project does](#project-description)
[Technology Involved](#technology-involved)
[Usage](#usage)
[Lesson Learned](#lesson-learned)
[Preview](#preview)

# Project Description
- A simple express web server that allow people to subsribe a email newsletter
- The newsletter service is powered by MailChimp
- It has terminated the free mailing service
- There will be no newsletter to send since this is a practical project

# Technologies Involved
- Express: ^4.18.1
- dotenv: ^16.0.2
- Node: ^14.17.6
- mailchimp_marketing: ^3.0.78

# Usage
1. Install dependencies: 
```
    npm install
    npm install @mailchimp/mailchimp_marketing
    npm install dotenv --save
```
2. Create an free account on Mailchimp
3. Add an .env file in the root directory with the following variables:
    - MY_API_TOKEN=YOUR-API-TOKEN-FROM-MAILCHIMP
    - SERVER=THE-SERVER-PREFIX-OF-YOUR-ACCOUNT(exmaple: "us1X")
4. Run server: note app.js
- NOTE: An alternative way to test the web app via [Heroku](https://polar-spire-64020.herokuapp.com/)

# Lesson Learned
- Understanding the outdated API documentation
- And trying to implement the knowledge to the latest version API
- Trial and error to send the request correctly and specifically
- Experience in newsletter emailing service
- Push local repository to heorku hosting
- Experience in hosting website
- Implementing dotenv package to hide sensitive information

# Preview
- Webpage

![newsLetterSignupPage](newsLetterSignupPage.png)

- Success subscribe

![mailChimpDone](mailChimpDone.png)

- Record made

![mailChimpRecord](mailChimpRecord.png)
