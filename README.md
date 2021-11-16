# M2i Angular

## BONNE PRATIQUE

- Modules à la racine: Premier niveau de granularité
- Séparer les routes par modules
- Components à l'intérieur des dossiers modules: Second niveau de granularité

## ANGULAR

### **Module**

- Un module qui exporte un autre module rend disponible les imports de celui-ci

### NG-CONTENT

- Principe de transclusion simple

```html
<ng-content></ng-content>
```

- Principe de transclusion multiple

```html
<ng-content select="css selector"></ng-content>
```

- Les méthodes bindées sur les `ng-content` ne sont pas rendues dans le DOM

```html
<ng-content (click)="toggle()"></ng-content>

// Ne fonctionnera pas
```

### ROUTER

- Basic routes
- Lazy loading
- Preloading strategy

### NOTES

- Le module icons permet de centraliser toutes les icones au même endroit et limiter les imports
