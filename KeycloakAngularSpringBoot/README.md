THis is a demestration of springboot, keycloak and angular

################ Development ###############################
1. install keycloak:
- download from: https://www.keycloak.org/downloads
- start keycloak: http://localhost:8080/
- go to "Administration Console" and add a realm
- create a new client 'angular-demo' - take a look at picture: keycloak-client.png
![img not found](./Keycloak-Client.png)

2. Integrate Keycloak with angular
- create a new angular project
    ng new keycloak-frontend
- go to working directory 'cd keycloak-frontend' and then let's install dependencies:
   npm install keycloak-angular 
   npm install keycloak-js

   for more information please visit https://www.npmjs.com/package/keycloak-angular
   it it leads to conflict of dependencie, please install a dedicated version for angular 13 as:
   npm install keycloak-angular@10 keycloak-js@18

- To fix the CORS issue add a proxy.config.json file on the top level:
   {
      "/api": {
    "target": "http://localhost:8888/",
    "secure": false
      }
   }

- update package.json and change the start command to :
   "start": "ng serve --proxy-config proxy.conf.json",

- Next update the environment.ts file :
form Angular 15.1: no environments folde is create, but you can add it with: 
   ng g environments

export const environment = {
  production: false,
  serverUrl: '/api',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/',
    // Realm
    realm: 'demo-realm',
    clientId: 'demo-angular',
  },
};

3. setup
 - create utils inside the src folder and create app-init.ts
 - update app.module.ts

 4. create auth guard and service
 - create new folder app/auth
 - go to app/auth: create auth guard: ng generate g auth and add content
 - create authe service: ng generate s auth
 

 5. Create some components
   ng g c access-denied 
   ng g c admin 
   ng g c manager


6. add path to app-roungting.module

