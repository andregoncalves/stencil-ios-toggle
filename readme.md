![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# st-ios-toggle

st-ios-toggle is a web component built with [Stencil](https://stenciljs.com/) to display iOS style toggle checkbox.

## Demo

## Getting Started

To try this component:

```bash
git clone git@github.com:andregoncalves/stencil-ios-toggle.git
cd stencil-ios-toggle
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Using this component

### Script tag


- Put `<script src='https://unpkg.com/stencil-ios-toggle@latest/dist/ios_toggle.js'></script>` in the head of your index.html
- Then you can use the component

### Node Modules
- Run `npm install stencil-ios-toggle --save`
- Put a script tag similar to this `<script src='node_modules/stencil-ios-toggle/dist/ios_toggle.js></script>` in the head of your index.html
- Then you can use the element `<st-ios-toggle>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-ios-toggle --save`
- Add this import to your root component or root module: `import 'stencil-ios-toggle'`;
- Then you can use the element `<st-ios-toggle>` anywhere in your template, JSX, html etc

## Parameters

Attribute | Default | Description
------------ | ------------- | -------------
theme | 'ios' | Available themes are 'light', 'ios' and 'flat'
checked | false | If attribute exists checkbox will be checked
name | 'st-ios-toggle' | Form name attribute
value | '' | Form value attribute

## Events

You can listen to the normal input value `change` event that will bubble up.
```js
element = document.querySelector('st-ios-toggle');
element.addEventListener('change', (e) => {
  // e.target points to the input element
  console.log(e.target.checked);
})
```

## Example usage

```html
<st-ios-toggle name="toggle_1" class="my-class"></st-ios-toggle>
<st-ios-toggle name="toggle_2" class="my-class" theme="light" value="on"></st-ios-toggle>
<st-ios-toggle name="toggle_3" class="my-class" theme="ios" checked></st-ios-toggle>
<st-ios-toggle name="toggle_4" theme="flat"></st-ios-toggle>
```

