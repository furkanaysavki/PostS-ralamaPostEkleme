const cars = [
    { Brand: "Volkswagen", Model: "Polo" },
    { Brand: "Audi", Model: "A3" },
    { Brand: "BMW", Model: "3 serisi" },
  ];
  
  const listcars = () => {
    cars.map((car) => {
      console.log(car.Brand);
    });
  };
  
  const addcar = (newcar) => {
    const promise1 = new Promise((resolve, reject) => {
        cars.push(newcar);
      resolve(cars);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showcars() {
    try {
      await addcar({ Brand: "Mercedes", Model: "E serisi" });
      listcars();
    } catch (error) {
      console.log(error);
    }
  }
  
  showcars();