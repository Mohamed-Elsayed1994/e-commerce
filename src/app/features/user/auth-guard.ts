import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { take, map } from "rxjs";
import { UserService } from "./services/user.service";


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService);
  const router = inject(Router);

  return authService.user.pipe(
    take(1),
    map(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
