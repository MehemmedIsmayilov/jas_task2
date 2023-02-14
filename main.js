const persons = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
      
    },
    
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ]
  
  
  function mapTask(i) {
    persons.map((i) => {
      console.log("Hi my name is - " + i.name);
    });
  }
  function mapTask(i) {
    persons.map((i) => {
      console.log(i.height);
    });
  }
  function mapTask() {
    let sum=0;
    
    persons.map((i) => {
      console.log(i.name + " vs " + parseInt(i.height));
      sum++;
    });
  
  }
  mapTask(persons);