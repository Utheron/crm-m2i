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

### OBSERVABLE, SUBJECT, BEHAVIORSUBJECT

- Un `Observable` peut être de deux types: froid/unicast ou chaud/multicast
- **Observable Froid** : observable qui lorsqu’on y souscrit, nous retourne un flux de données. Si il y a une modification du flux de données on devra unsubscribe() puis subscribe() à nouveau pour récupérer le flux modifié

```js
export class AppComponent {
  private obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });

  constructor() {
    this.obs.subscribe((data) => console.log(data));
    this.obs.subscribe((data) => console.log(data));
  }
}
```

- **Observable Chaud** : Initialisation ou pas d’un flux de données et possibilité avec la méthode next de modifier le flux encore et encore tout en pouvant récupérer le flux modifié dans le subscribe()

```js
export class AppComponent {
  private subject = new Subject();

  constructor() {
    this.subject.subscribe((data) => {
      console.log(data);
    });

    this.subject.next(Math.random());

    this.subject.subscribe((data) => {
      console.log(data);
    });

    this.subject.next(Math.random());
  }
}
```

```js
export class AppComponent {
  private behavior = new BehaviorSubject(0);

  constructor() {
    this.behavior.subscribe((data) => console.log(data));
    this.behavior.next(1);
    this.behavior.subscribe((data) => console.log(data));
    this.behavior.next(2);
    this.behavior.next(Math.random());
    this.behavior.subscribe((data) => console.log(data));
    this.behavior.subscribe((data) => console.log(data));
  }
}
```

### LIFECYCLE

- `ngDoCheck()` passe par tous les lifecycles
- `ngOnChanges()` ne détecte pas les changements de propriétés mais les changements d'objets

### TEMPLATES

- `@Input()` pour transmettre des données
- `@Input()` ne sont détectés qu'à partir de `ngOnChanges()`

### NOTES

- Le module icons permet de centraliser toutes les icones au même endroit et limiter les imports

### APPROFONDIR

- Enums (enum)
- Interfaces (interface)
- Models (class)
