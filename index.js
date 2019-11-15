import autocomplete from 'autocomplete.js';
import usStates from './us-states';
import './main.css';

const onReady = () => {
  const data = usStates.map(state => ({
    name: state.name,
    id: state.abbreviation
  }));

  const $input = document.querySelector('.state-search');
  const dataset = {
      // TODO: filter results
      source: (q, callback) => callback(data),
      templates: { suggestion: (suggestion) => `<div>${suggestion.name} (${suggestion.id})</div>` },
  };
  const ac = autocomplete($input, { hint: false }, [dataset]);
  ac.on('autocomplete:selected', function (event, suggestion, dataset, context) {
    console.log(suggestion);
  });
}

document.addEventListener('DOMContentLoaded', onReady, false);
