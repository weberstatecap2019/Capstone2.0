import { router as indexController } from '../app/controllers/index.controller'
import { router as usersController } from '../app/controllers/users.controller'
import { router as forumsController } from '../app/controllers/post-forum.controller'
import { router as jobsController } from '../app/controllers/jobs.controller'
import { isLoggedIn } from "../app/helpers/require_login"
export function configuretRoutes(app){
  app.all("*", function(req, res, next){
    app.locals.loggedIn = isLoggedIn(req)
    next();
  });

  app.use('/', indexController);
  app.use('/', usersController);
  app.use('/', forumsController);
  app.use('/', jobsController);
}