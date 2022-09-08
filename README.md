# Problem Statement
To address the problem of school bus routing by scheduling an efficient fleet of school buses for rural school networks in which students are picked from should be their specific bus stops and are dropped at school within the constraints of
1. The Bus maximum capacity
2. The maximum riding time allowed per student
3. Least possible fuel expense
4. Minimum ammount of CO2 emissions by the vehicles

# Introduction
A typical school bus routing problem involves planning a schedule for a limited number of school buses that pick-up students from various bus stops and deliver them to their respective schools while satisfying certain constraints (capacity of bus, minimum time student spends in bus, time window to arrive at school, CO2 emissions of each bus and other factors).


# Objective
1. To select routes that are safe and avoid traffic
2. To take the size of buses into account while choosing routes
3. To calculate the CO2 emissions and mileage for each bus
4. To show routes for all the buses alloted to take students from the bus stops to schools.

# Methodology
1. The design of web app enables admin to upload a .csv file or can upload  the co-orinates of a location and assign the name to that particular location manually.
2. The admin can choose the number of routes that are requires and set which location should be covered via which routes by using the VROOM, ORS, ORSM library with the connectivity of docker and for making the api we have used Flask.
3. The admin can also view optimised routes plotted on the graph and instead of this he can check it's own parameters for creating it's routes.
4. On other hand student can view the routes of each bus instead of student, parents, driver, and teacher can also view the routes of each bus. So currently we are working on the admin part right now.

## Commands
so before downloading this project please ensure that you already have downloaded this dependencies and libraries:
1. NodeJS
2. npm modules (it will automatically generate when you write the command npx create-react-app app_name)


# 1. npm start
So please go the /src folder and after that you have to write the command in your terminal "npm start". So after that it will take time up to 2-3 min for starting the web application at your localhost:3000

To view it in your browser please write this link after running this command:[http://localhost:3000](http://localhost:3000) 

So this page will automatically reload when you make any changes and also see the errors in the console also.

# `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Prototype 
The prototype of this web application is also available on the figma. (URL attached below).
https://www.figma.com/file/tkhKn8w50kuj2FojeCYnLq/Route-Optimization-for-Bus-Fleet?node-id=0%3A3
