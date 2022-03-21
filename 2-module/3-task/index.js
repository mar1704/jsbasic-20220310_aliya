let calculator = {
  a: 0,
  b: 0,
  read( a,b ) {
    this.a = a;
    this.b = b;
  } ,
  sum() {
    if( typeof( (this.a) ) == 'number' && isNaN ( this.a ) == false && typeof( (this.b) ) == 'number' && isNaN ( this.b ) == false ) 
    {
      return (this.a + this.b);
    }
  },
  mul() {
    if( typeof( (this.a) ) == 'number' && isNaN ( this.a ) == false && typeof( (this.b) ) == 'number' && isNaN ( this.b ) == false ) 
    {
      return (this.a * this.b);
    }
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
