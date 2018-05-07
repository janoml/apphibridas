var Calculadora = {
	visor: document.getElementById("display"),
	valorVisor: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false,

	init: (function(){
    var self= this
    var cero= document.getElementById('0')
    var uno= document.getElementById('1')
    var dos= document.getElementById('2')
    var tres= document.getElementById('3')
    var cuatro= document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis= document.getElementById('6')
    var siete= document.getElementById('7')
    var ocho= document.getElementById('8')
    var nueve= document.getElementById('9')
    var on= document.getElementById('on')
    var sing= document.getElementById('sign')
    var raiz= document.getElementById('raiz')
    var dividido = document.getElementById('dividido')
    var por = document.getElementById('por')
    var suma = document.getElementById('suma')
    var resta = document.getElementById("resta")
    var punto = document.getElementById("punto")
    var  igual = document.getElementById("igual");

    cero.addEventListener("click", function(){
      self.inNumero("0")
    })
    cero.addEventListener("mousedown", function(){
      cero.setAttribute("style","transform:scale(0.88,0.88)")
    })
    cero.addEventListener("mouseout", function(){
      cero.setAttribute("style","transform:scale(1,1)")
    })
    uno.addEventListener("click", function(){
      self.inNumero("1")
    })
    uno.addEventListener("mousedown", function(){
      uno.setAttribute("style","transform:scale(0.88,0.88)")
    })
    uno.addEventListener("mouseout", function(){
      uno.setAttribute("style","transform:scale(1,1)")
    })
    dos.addEventListener("click", function(){
      self.inNumero("2")
    })
    dos.addEventListener("mousedown", function(){
      dos.setAttribute("style","transform:scale(0.88,0.88)")
    })
    dos.addEventListener("mouseout", function(){
      dos.setAttribute("style","transform:scale(1,1)")
    })

    tres.addEventListener("click", function(){
      self.inNumero("3")
    })
    tres.addEventListener("mousedown", function(){
      tres.setAttribute("style","transform:scale(0.88,0.88)")
    })
    tres.addEventListener("mouseout", function(){
      tres.setAttribute("style","transform:scale(1,1)")
    })

    cuatro.addEventListener("click", function(){
      self.inNumero("4")
    })
    cuatro.addEventListener("mousedown", function(){
      cuatro.setAttribute("style","transform:scale(0.88,0.88)")
    })
    cuatro.addEventListener("mouseout", function(){
      cuatro.setAttribute("style","transform:scale(1,1)")
    })


    cinco.addEventListener("click", function(){
      self.inNumero("5")
    })
    cinco.addEventListener("mousedown", function(){
      cinco.setAttribute("style","transform:scale(0.88,0.88)")
    })
    cinco.addEventListener("mouseout", function(){
      cinco.setAttribute("style","transform:scale(1,1)")
    })

    seis.addEventListener("click", function(){
      self.inNumero("6")
    })
    seis.addEventListener("mousedown", function(){
    seis.setAttribute("style","transform:scale(0.88,0.88)")
})
    seis.addEventListener("mouseout", function(){
      seis.setAttribute("style","transform:scale(1,1)")
    })

    siete.addEventListener("click", function(){
      self.inNumero("7")
    })
    siete.addEventListener("mousedown", function(){
      siete.setAttribute("style","transform:scale(0.88,0.88)")
    })
    siete.addEventListener("mouseout", function(){
      siete.setAttribute("style","transform:scale(1,1)")
    })

    ocho.addEventListener("click", function(){
      self.inNumero("8")
    })
    ocho.addEventListener("mousedown", function(){
      ocho.setAttribute("style","transform:scale(0.88,0.88)")
    })
    ocho.addEventListener("mouseout", function(){
      ocho.setAttribute("style","transform:scale(1,1)")
    })

    nueve.addEventListener("click", function(){
      self.inNumero("9")
    })
    nueve.addEventListener("mousedown", function(){
      nueve.setAttribute("style","transform:scale(0.88,0.88)")
    })
    nueve.addEventListener("mouseout", function(){
      nueve.setAttribute("style","transform:scale(1,1)")
    })
    on.addEventListener("click", function() {
      self.borrarVisor()
    })
    on.addEventListener("mousedown", function(){
      on.setAttribute("style","transform:scale(0.88,0.88)")
    })
    on.addEventListener("mouseout", function(){
      on.setAttribute("style","transform:scale(1,1)")
    })


    sign.addEventListener("click", function() {
      self.cambiarSigno()
    });
    sign.addEventListener("mousedown", function(){
      sign.setAttribute("style","transform:scale(0.88,0.88)")
    })
    sign.addEventListener("mouseout", function(){
      sign.setAttribute("style","transform:scale(1,1)")
    })
   punto.addEventListener("click", function(){
      self.ingresoDecimal()
    });
   punto.addEventListener("mousedown", function(){
      punto.setAttribute("style","transform:scale(0.88,0.88)")
    })
   punto.addEventListener("mouseout", function(){
      punto.setAttribute("style","transform:scale(1,1)")
    })
    igual.addEventListener("click", function() {
      self.verResultado()
    });
    igual.addEventListener("mousedown", function(){
      igual.setAttribute("style","transform:scale(0.88,0.88)")
    })
    igual.addEventListener("mouseout", function(){
      igual.setAttribute("style","transform:scale(1,1)")
    })
    raiz.addEventListener("click", function(){
      self.ingresoOperacion("raiz")
    });
    raiz.addEventListener("mousedown", function(){
      raiz.setAttribute("style","transform:scale(0.88,0.88)")
    })
    raiz.addEventListener("mouseout", function(){
      raiz.setAttribute("style","transform:scale(1,1)")
    })
    dividido.addEventListener("click", function() {
      self.ingresoOperacion("/")
    });
    dividido.addEventListener("mousedown", function(){
      dividido.setAttribute("style","transform:scale(0.88,0.88)")
    })
    dividido.addEventListener("mouseout", function(){
      dividido.setAttribute("style","transform:scale(1,1)")
    })
	  por.addEventListener("click", function() {
      self.ingresoOperacion("*")
    });
    por.addEventListener("mousedown", function(){
      por.setAttribute("style","transform:scale(0.88,0.88)")
    })
    por.addEventListener("mouseout", function(){
      por.setAttribute("style","transform:scale(1,1)")
    })
    menos.addEventListener("click", function() {
      self.ingresoOperacion("-");
    });
    menos.addEventListener("mousedown", function(){
      menos.setAttribute("style","transform:scale(0.88,0.88)")
    })
    menos.addEventListener("mouseout", function(){
      menos.setAttribute("style","transform:scale(1,1)")
    })
	mas.addEventListener("click", function() {
    self.ingresoOperacion("+");
  });
  mas.addEventListener("mousedown", function(){
    mas.setAttribute("style","transform:scale(0.88,0.88)")
  })
  mas.addEventListener("mouseout", function(){
    mas.setAttribute("style","transform:scale(1,1)")
  })

	}),

 	borrarVisor: function(){
    this.valorVisor = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		this.ultimoValor = 0;
		this.updateVisor();
	},

	cambiarSigno: function(){
		if (this.valorVisor !="0") {
			var aux;
			if (this.valorVisor.charAt(0)=="-") {
				aux = this.valorVisor.slice(1);
			}	else {
				aux = "-" + this.valorVisor;
			}
		this.valorVisor = "";
		this.valorVisor = aux;
		this.updateVisor();
		}
	},

	ingresoDecimal: function(){
		if (this.valorVisor.indexOf(".")== -1) {
			if (this.valorVisor == ""){
				this.valorVisor = this.valorVisor + "0.";
			} else {
				this.valorVisor = this.valorVisor + ".";
			}
			this.updateVisor();
		}
	},

	inNumero: function(valor){
		if (this.valorVisor.length < 8) {

			if (this.valorVisor=="0") {
				this.valorVisor = "";
				this.valorVisor = this.valorVisor + valor;
			} else {
				this.valorVisor = this.valorVisor + valor;
			}
		this.updateVisor();
		}
	},

	ingresoOperacion: function(oper){
		this.primerValor = parseFloat(this.valorVisor);
		this.valorVisor = "";
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updateVisor();
	},

	verResultado: function(){

		if(!this.auxTeclaIgual){
			this.segundoValor = parseFloat(this.valorVisor);
			this.ultimoValor = this.segundoValor;

			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);

		} else {
		this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}


		this.primerValor = this.resultado;


		this.valorVisor = "";

		if (this.resultado.toString().length < 9){
			this.valorVisor = this.resultado.toString();
		} else {
			this.valorVisor = this.resultado.toString().slice(0,8) + "...";
		}
		this.auxTeclaIgual = true;
		this.updateVisor();

	},

	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-":
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*":
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/":
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},

	updateVisor: function(){
		this.visor.innerHTML = this.valorVisor;
	}

};

Calculadora.init();
