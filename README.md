# Create Micro App

The create-micro-app (CMA) is a CLI program to generate feature apps, microservices and test automation framework.

Usage:

```ts
import { generateProject, GeneratorInput } from '@mtnkente/create-micro-app';

function createProject(generatorInput: GeneratorInput) {
  return generateProject(generatorInput)
    .pipe(
      catchError((val) => {
        console.error(val);
        return of(`From catchError ${JSON.stringify(val)}`);
      })
    )
    .subscribe({
      next: (msg) => console.log(`${msg}\n`),
      error: () => console.log(`Error creating project :(`),
      complete: () => console.log(`Successfully generated your project!`),
    });
}
```

The CMA also allows a user to interact with the program via termina

## Usage for Feature Apps:

```shell
npx @mtnkente/create-micro-app create-microfrontend --mawi \
 --name test-app --version 0.0.1 --description "This is my test app" \
 --author Kente --title "This is my app"
```

For interactive options, use:

```shell
npx @mtnkente/create-micro-app create-microfrontend
```

## Usage for Microservices:

```shell
npx @mtnkente/create-micro-app create-microservices --mawi \
 --name test-app --version 0.0.1 --description "This is my test app" \
 --author Kente
```

For interactive options, use:

```shell
npx @mtnkente/create-micro-app create-microservices
```

## Usage for Test Automation:

```shell
npx @mtnkente/create-micro-app test-automation --mawi \
 --name test-app --version 0.0.1 --description "This is my test app" \
 --author Kente
```

For interactive options, use:

```shell
npx @mtnkente/create-micro-app test-automation
```
