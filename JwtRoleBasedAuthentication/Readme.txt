###########################################
Please start backend at
Springboot/SpringJwtSecurity

or run /server/Server.bat file

######################## Steps ##############################
1. ng new JwtRoleBasedAuthentication

2. generate component and services
ng g s _services/auth
ng g s _services/token-storage
ng g s _services/user
ng g c login
ng g c register
ng g c home
ng g c profile
ng g c board-admin
ng g c board-moderator
ng g c board-user

3. create  folder _helpers and class auth.interceptor.ts

4. setup module
Open app.module.ts, then import FormsModule & HttpClientModule.
We also need to add authInterceptorProviders in providers.

5. implement services 
Authentication servcice
Token Storage Service
User service

6. implement authInterceptorProviders
and add provides in app.module.ts:
providers: [authInterceptorProviders]

7. Add Bootstrap to Angular project
Open index.html and import Bootstrap inside <head /> tag.
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>

8. implement componenets
 - register component
 - login component

9. Create Role-based Components
  9.1. home/home.component.ts
  9.2. Protected Components
  These Components are role-based. But authorization will be processed by back-end.
  We only need to call UserService methods:

    getUserBoard()
    getModeratorBoard()
    getAdminBoard()

10. open point: since the authorization is processed by back-end. 
the guard can also be implemeneted to prected the ui again.

########################################################
Credits
https://www.bezkoder.com/angular-13-jwt-auth/

