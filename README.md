# TadPool
## Inspiration
Small businesses are essential to everyday life, and we wanted to help overcome a very common challenge: reaching the public eye. The name TadPool came from small businesses being the "tadpoles" of the economy (not sharks yet!) and their ability to pool together resources with other businesses.
## What it does
With the idea of "power in numbers," we allow small businesses to work together to organize large events to attract more people and get more exposure. Businesses can pool money together to be able to afford a venue location for multiple businesses to group together to sell their products or join events hosted by Organizers. Organizers can host events and invite small businesses to participate in them. Customers can check upcoming events, find their favorite small businesses, and donate to help them. The website gives more incentive for customers to explore new local small businesses and can also increase awareness of online small businesses by increasing their SEO.
## How we built it
The frontend was implemented with React and CSS. We also used a library called FontAwesome from fontawesome.com for free icons to make our website more stylish. We used JavaScript's built-in fetch method to make API calls back to the database to fetch the organization, event, and customer data for the website.  
We implemented the backend using Node.js and JavaScript. The project includes DAO (Data Access Object) files that contain methods for querying the database. Additionally, there is an index.js file that utilizes the methods from these imported files to retrieve the necessary information.
## Challenges we ran into
Merging was the biggest problem, as when we tried to push our personal code to the main branch, we struggled to find the proper commands to merge and ensure we were not overwriting each other's code.
## Accomplishments that we're proud of
One of our significant accomplishments is that we have a good team dynamic for this project. All four people in this team were split evenly, with two handling the logistics and two coding the project. Overall, it is balanced and super communicative.
## How to run it
### Run the Frontend
- In the terminal, cd into client directory
  ```cd client```
- run ```npm install``` to download all the necessary packages contained in package.json
- run ```npm run dev``` to start the frontend server (localhost on port 5173)
### Run the Backend
- In another terminal, cd into server directory
  ```cd server```
- run ```npm install``` to download all the necessary packages contained in package.json
- run ```node index.js``` to start the backend server (localhost on port 3000)
### Open the site
- In your browser, go to ```http://localhost:5173/```
