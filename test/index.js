var random_fact= require('random_facts');


(async () => {
    try {
      const fact = await random_fact();
      console.log(fact);
    } catch (error) {
      console.error(error);
    }
  })();
  
