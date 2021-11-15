# M2i Angular

## BONNE PRATIQUE
- Modules à la racine: Premier niveau de granularité
- Séparer les routes par modules
- Components à l'intérieur des dossiers modules: Second niveau de granularité

## ANGULAR
  ### **Module**
  - Un module qui exporte un autre module rend siponible les imports de celui-ci

  ### NG-CONTENT
  - Principe de transclusion simple
  ```html
    <ng-content></ng-content>
  ```
  - Principe de transclusion multiple
  ```html
    <ng-content select="css selector"></ng-content>
  ```
