'use strict';

const data = [
  {
    name: "Adam",
    age: 28,
    group: "Sem I / Group B"
  },
  {
    name: "Roman",
    age: 30,
    group: "Sem III / Group C"
  },
  {
    name: "Ania",
    age: 27,
    group: "Sem I / Group A"
  },
  {
    name: "Karol",
    age: 31,
    group: "Sem IV / Group A"
  },
];

const Users = () => {
  return (
    <div>
      <h1>Map users from data array</h1>
      {
        data.map(obj => (
          <div key={obj.name}>
            <div>
              <b>Name: </b><span>{ obj.name }</span>
            </div>
            <div>
              <b>Age: </b><span>{ obj.age }</span>
            </div>
            <div>
              <b>Group: </b><span>{ obj.group }</span>
            </div>
            <br />
          </div>
        ))
      }
    </div>
  );
};

const appContainer = document.querySelector('#app');

ReactDOM.render(<Users />, appContainer);
