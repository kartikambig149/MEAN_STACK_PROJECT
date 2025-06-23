import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { CartViewComponent } from './features/cart/cart-view/cart-view.component';
import { authGuard } from './core/auth.guard'; // Import your auth guard

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartViewComponent, canActivate: [authGuard] }, // Protected route
    // Add admin routes, profile routes, etc.
    { path: '**', redirectTo: '/products' } // Wildcard route for a 404-like experience
];