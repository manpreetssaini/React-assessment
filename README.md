# Assessment Two: Pokedex with React

In this assessment you will work ***individually*** in order to finish a partially implemented website. The **only** files you will need to work with are:

- [`src/App.js`](https://gitlab.com/york-u-fs1010/assessment-two/blob/master/src/App.js)
- [`src/components/Pokemon.js`](https://gitlab.com/york-u-fs1010/assessment-two/blob/master/src/components/Pokemon.js)
- [`src/components/MainHeader.js`](https://gitlab.com/york-u-fs1010/assessment-two/blob/setup/src/components/MainHeader.js)

In this repository you are provided with a partially complete implementation of teh Pokédex homework assignment that uses React. The goal of this assessment is to complete the items listed in the rubric. A grade of 100% should result in a webpage identical to the one we've seen through the homework assignment.




## In the project directory, you can run:

**`npm start`:** Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

**`npm test`:** Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. Just like the last assessment, we can check our work using this command instead. Results will be shown in the command line.

***If a test is passing double check that your page is working in the web browser. The tests are meant as an aide, not as a method of marking.***




## Rubric

1. **`src/App.js`:** ***(Total: 10 marks)***
	1. The component renders without error ***(1 mark)***
	1. **`search()`**
		1. Calls `fetch()` ***(1 mark)***
		1. Uses the appropriate URL for requesting information about a specific pokemon ***(1 mark)***
		1. Parses the JSON in the response ***(1 mark)***
		1. Changes `this.state.pokemon` to become the resolved promise value ***(2 marks)***
	1. **`render()`**
		1. Renders the existing `<Pokemon>` with hard-coded props when `this.state.pokemon` is `null` ***(1 marks)***
		1. When we've stored a pokemon in state, render a different `<Pokemon>` ***(1 mark)***
		1. When we've stored a pokemon in state, the `name` prop of `<Pokemon>` is `this.state.pokemon.name` ***(1 mark)***
		1. When we've stored a pokemon in state, the `imgSrc` prop of `<Pokemon>` is `this.state.pokemon.sprites.front_default` ***(1 mark)***
1. **`src/components/MainHeader.js`** ***(Total: 10 marks)***
	1. The component renders without error ***(1 mark)***
	1. `handleSubmit()` calls `this.props.onSubmit` passing into it the pokemon's name ***(1 mark)***
	1. `handlePokemonNameChange()` sets `this.state.pokemonName` to `event.target.value` (remember to use [`this.setState()`](https://reactjs.org/docs/react-component.html#setstate)) ***(2 marks)***
	1. **`render()`**
		1. `<h1>` contains the `this.props.heading` as its children ***(1 mark)***
		1. `<Form>` has `this.handleSubmit` as its `onSubmit` prop ***(1 mark)***
		1. **`<Input>`**
			1. Renders an `<Input>` from reactstrap element for the user to type the pokemon's name they're searching for into ***(1 mark)***
			1. Assigns "Search by name..." as its `placeholder` prop ***(1 mark)***
			1. Assigns `this.state.pokemonName` to `value` prop ***(1 mark)***
			1. assigns `this.handlePokemonNameChange` to `onChange` prop ***(1 mark)***
1. **`src/components/Pokemon.js`** ***(Total: 6 marks)***
	1. The component renders without error ***(1 mark)***
	1. **_One_ `<img>` element exists** ***(1 mark)***
		1. Has a working `src` prop ***(1 mark)***
		1. The value of its `alt` prop is the pokemon's name ***(1 mark)***
	1. **_One_ `<h1>` element exists** ***(1 mark)***
		1. Contains the pokemon name as its children ***(1 mark)***

**Total:** 26 marks
