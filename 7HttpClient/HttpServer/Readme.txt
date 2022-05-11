1,
cd /go/to/workspace 
mkdir server 
cd server

2. init new node js application
npm init

3. nstall express, sqlite and cors modules using below command −
npm install express sqlite3 cors

4. start
npm run start

Open a browser, enter http://localhost:8000/ and press enter. You will see below response −

{ 
   "message": "Ok" 
}

to get all expense: http://localhost:8000/api/expense


