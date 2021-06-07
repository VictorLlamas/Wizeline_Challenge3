# Wizeline_Challenge3
Wizeline Academy - Challenge 3: Performance Test automation using Artillery.io

**Required Libraries**

Dependencies:
  - artillery
  - artillery-plugin-faker
  - faker

To install all the dev dependencies open a terminal in the project folder and run:
  
    npm install --only=dev
    
 
**Run Project**

A single YML file was defined to fulfill the following requests
  - Create a new task
  - Get an active task
  - Update a task
  - Change a task status to ‘complete’
  - Reopen a task
  - Delete a task
  
The flow const of 3 phases:
  - Warm up
    - durartion: 3 seconds
    - arrival rate: 1 user
  - Ramp up load
    - duration: 5 seconds
    - arrival rate: 1 user
    - ramp to: 3 users
  - Sustained load
    - duration: 15 seconds
    - arrival rate: 3 users
    
Note: with this configuration, the API is able to complete more than 95% of the calls successfully.

To execute the complete project use the npm run command:

    npm run test-complete-task-flow
    

    
