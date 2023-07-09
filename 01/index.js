'use strict';

const Paragraph = () => {
  return React.createElement(
    'p',
    {
      id: 'first-paragraph',
      className: 'paragraph',
      style: {
        backgroundColor: 'blue',
        fontWeight: 'bold',
      }
    },
    'Lorem ipsum dolor sit amet'
  );
};

const appContainer = document.querySelector('#app');

ReactDOM.render(React.createElement(Paragraph), appContainer);