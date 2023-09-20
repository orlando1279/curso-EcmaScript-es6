function newUser(name,age,country) {
    var name = name || 'Orlando';
    var age = age || 43;
    var country = country || 'CO';
    console.log(name,age,country);
  }
  newUser();
  newUser(David,15,'CO');
  
  function newAdmin(name = 'Orlando',age = 43, country = 'CO') {
      console.log(name,age,country);
  }
  newAdmin();
  newAdmin('Ana',28,'PE');
