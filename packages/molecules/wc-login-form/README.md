# \<wc-rrhh-timesheet>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @rrhh/wc-rrhh-timesheet
```

## Usage

Import the component.

```javascript
import '@rrhh/wc-rrhh-timesheet.js';
```

Use the component.

```html
<wc-rrhh-timesheet .professionals="${profesionales}">
</wc-rrhh-timesheet>
```

## Properties

- **professionals**: Professional[] property. Defines a set of professionals.

## Methods

The component also provides a set of useful methods to controls the component state programmatically.

- **_getHeaderDate**: Get the date for the header of the timesheet.

## Events

- **show-professional-detail-event**: Dispatched when you click on a professional's detail drop-down icon.

## Domain

Professional         | Type
------------         | ----
  **idProfesional**  | number
  **nif**            | string
  **nombreCompleto** | string
  **horarios**       | ScheduleImpl[]

| Schedule                | Type  
| --------                | ----  
| **idHorario**           | number
| **fecha**               | Date  
| **horario**             | string
| **descripcion**         | string
| **tipo**                | string

| Incidence                | Type  
| --------                 | ----  
| **incidenceId**          | number
| **professionalId**       | number  
| **incidenceCatalogCode** | string
| **incidenceCatalogDes**  | string
| **startDate**            | Date
| **endDate**              | Date

| Turn                  | Type  
| --------              | ----  
| **turnCatalogName**   | string
| **startDate**         | Date  
| **endDate**           | Date

| Contract              | Type  
| --------              | ----  
| **domainId**          | number
| **startDate**         | Date  
| **endDate**           | Date

| ProfessionalDetail    | Type  
| --------              | ----  
| **incidences**        | Incidence[]
| **turns**             | Turn[]

## Customization

You can customize the form using this CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--wc-timesheet-text-color | Colour for the initial letter | #000

## Demoing with Storybook

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```

## Local Demo with `web-dev-server`

```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
