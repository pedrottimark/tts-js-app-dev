import React from 'react';

const option = (name, value, checked, onChange) => (
  <label key={value}>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={(event) => onChange(event.target.value)}
    />
    {value}
  </label>
);

const name = 'filter';
const values = ['all', 'uncompleted', 'completed'];

const Filter = ({filter, onChange}) => (
  <form name={name}>
    <fieldset>
      {
        values.map(value => option(name, value, value === filter, onChange))
      }
    </fieldset>
  </form>
);

export default Filter;
