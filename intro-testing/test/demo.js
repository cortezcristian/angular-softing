// a.js
var alCuadrado = function(n) {
  if (typeof n !== 'number') {
    throw new Error('Se esperaba un numerico');
  }
  return n*n;
};

var assert = require('assert');

describe('Formulas', function(){
  it('should return 9 when alCuadrado(3)', function() {
    /*
    if (alCuadrado(3) === 9) {
    } else {
      throw new Error('Se esperaba 9');
    }
    */
    assert.equal(alCuadrado(3), 9, 'Se esperaba 9');
    assert.ok((alCuadrado(3) === 9), 'Se esperaba 9');
  });

  it.skip('should not return 5 when alCuadrado(3)', function() {
    assert.ok((alCuadrado(3) !== 5), 'Se esperaba 9');
  });

  it('should trigger exception alCuadrado("hola")', function() {
    assert.throws(function() {
      alCuadrado('hola');
    }, /Se esperaba un numerico/)
  });


});

describe('Proveedor', function(){

  it('Caso 1');
  it('Caso 2', function() {
  });
  it('Caso 3', function() {
    throw new Error('Unexpected error!');
  });
  it('Caso 4', function(done) {
    //
    setTimeout(function(){
      console.log('Caso 4')
      done();
    }, 1000 * 3);
  });
  it('Caso 5', function(done) {
    //
    setTimeout(function(){
      console.log('Hola Caso 5')
      done();
      // done(new Error());
    }, 10 * 6);
  });

})
