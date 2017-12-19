describe('Suite Demo', function(){

  it('Caso 1');
  it('Caso 2', function(){
    // Caso 2
  });
  it.skip('Caso 3', function(){
    // Caso 3
  });
  it.skip('Caso 4', function(){
    // Caso 4
    throw new Error('Demo');
  });
  it('Caso 5', function(){
    // Caso 5
    setTimeout(function(){
      throw new Error('Demo 5');
    }, 1000*90)
  });
  it.skip('Caso 6', function(done){
    // Caso 6
    setTimeout(function(){
      throw new Error('Demo 6');
      done();
    }, 1000*30)
  });

});
