# Newsletter-Signup
[What the project does](#project-description)
[Technology Involved](#technology-involved)
[Usage](#usage)
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

# Preview
- Webpage

![newsLetterSignupPage](newsLetterSignupPage.png)

- Success subscribe

![mailChimpDone](mailChimpDone.png)

- Record made

![mailChimpRecord](mailChimpRecord.png)
