# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


<<<<<<< HEAD
# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


=======
>>>>>>> ef1b70474509ded7ba5f2824845a0568a73d42f7
## Branchs y Commits

**1. Regular Branches**

 - Development : Dedicado al uso para desarrollo donde van a converger los diferentes features mediante *Pull Requests*.
 - Main

**2.  Temporary Branches**

- Feature Branches : Utilizado para un branch relacionado a una tarea la cual requiere agregar un feature a nuestra aplicación
- WIP Branches	: (Work In Progress) Se utiliza para casos particulares en los que se tenga que subir algun feature que aun se encuentra en progreso.
- Bug Fix : Utilizado para correccón de errores.

**3.  Naming Convention (Branches)**

La convención de nombre de los branches a utilizar es la siguiente:

    feature-OT143-33-Formulario-Creacion-Usuario

1. Definicion de requerimiento (feature/bugfix/WIP), fijarse si la tarea a tomar corresponde a una nueva funcionalidad o agregado a la aplicacion o si es para arreglar algun error, etc.
2. Nombre de proyecto (OT143)
3. Numero de tarea/ticket/peticion de *Jira*.
4. Nombre de tarea/ticket/peticion de *Jira*..

Ejemplo: 

Ticket de Jira --> https://alkemy-labs.atlassian.net/browse/OT143-35
Nombre del branch a crear --> `feature-OT143-33-Formulario-Edicion-Creacion-Usuarios`

**4.  Naming Convention (Commits)**

La convención de nombre de los commits a utilizar es la siguiente:

    feat: Creacion componente formulario

1. Definicion del requerimiento (feat/bugfix/hotfix/etc).
2. Breve de lo que se realizo

**5. Pull Request**

Al finalizar una tarea se debe realizar un Pull Request (PR) para poder mergear el branch donde se trabajo a development (Ambiente de desarrollo).

1. Dentro del repositorio en la pestalla de "Pull Request" hacer click en "Crear pull request".
2. Seleccionar en "source branch" el branch donde se realizo la tarea y en "target branch" seleccionar "development".
3. Agregar en el titulo del PR el titulo de la tarea de Jira.
4. En el campo descripción agregar el link a la tarea en Jira junto con una descripción de lo que se hizo y una evidencia (Puede ser una imagen o un gif mostrando la nueva funcionalidad)

	*Ejemplo Markdown de campo descripción: *

| **Jira** | 
| :-----------: | 
| [35 - Formulario Edición / Creación de Miembros](https://alkemy-labs.atlassian.net/browse/OT143-35)      | 

| Descripcion     | 
| :-----------: | 
| * Creacion de formulario reutilizable para editar o crear miembros   | 

| **Desarrollo** | 
| :-----------: | 
| ![image](/uploads/e6a46eff01e09be564e98f553388c856/image.png) |
| ![image](/uploads/594368214ff44e7f6605ec2799ee9d7d/image.png) |
	
5. Una vez que el PR fue creado se debe cambiar el estado de la tarea a la columna de "Code Review" y adjuntar en un comentario de la tarea el link hacia el PR para que se valide que el codigo este correcto y que se cumpla el resultado esperado de la tarea, para luego aprobar el PR y actualizar development.
6. En caso de que el PR tenga cosas para corregir se agregara un comentario en el mismo indicando las falencias.

**Links Utilies**

1. Diseño:
	- [Figma Caso ONG](https://www.figma.com/file/sjpq9FnkPbPNO3cnqkiXGM/Caso-ONG-Alkemy?node-id=0%3A1) 
2. Repositorios:
	- [OT143 ONG](https://github.com/alkemyTech/OT143-CLIENT)
3. Tickets:
<<<<<<< HEAD
	- [Jira](http://redmine.yvera.gob.ar/)
=======
	- [Jira](https://alkemy-labs.atlassian.net/jira/software/c/projects/OT143/boards/216/)
>>>>>>> ef1b70474509ded7ba5f2824845a0568a73d42f7
4. Otros:
	- [Material UI Doc](https://mui.com/)
	- [PropTypes Doc](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

<<<<<<< HEAD

=======
>>>>>>> ef1b70474509ded7ba5f2824845a0568a73d42f7
