// Programming quick sheet (javascript)

// Tipos de valores
	1 // Integer / Number
	2.3 // Decimal / Number
	"A" // String
	true // Boolean
	false // Boolean
	[1, "A", [1,2], {a: 1, b: "b"}] // Array
	{a: 1, b: "b", c: [1,2], d: {a: 1, b:"b"}} // Object/Hash/Dictionary
	// String
		.slice(beginIndex); // retorna uma nova string a começar do beginIndex até ao fim da string original
		.slice(beginIndex, endIndex); // retorna uma nova string que começa do beginIndex e acaba no endIndex
		.split(param1); // retorna um array em que cada elemento é uma subtring da string original. O param1 serve de separador par aa divisão em substrings
	// Array functions
		.length // propriedade que retorna o tamanho do array
		.push(param1) // adiciona o param1 ao fim da lista e retorna o novo length do array
		.pop() // remove o ultimo elemento da lista e retorna o elemento removido
		.unshift(param1) // adiciona o param1 ao inicio da lista e retorna o novo tamanho do array
		.shift() // remove o primeiro elemento da lista e retorna o novo length do array
		.indexOf(param1) // procura se o elemento existe no array, se sim retorna a posição do array, senaõ retorna -1
		.splice(startIndex, totalMembers) // modifica o array original, começando no startIndex remove totalMembers e retorna um novo array com os elementos removidos 
		.splice(startIndex, totalMembers, param1, param2,...) // same as above, mas ainda coloca o param1, param2,... dentro do array original a começar no startIndex
		.slice(beginIndex); // retorna um novo array a começar do beginIndex até ao fim da string original
		.slice(beginIndex, endIndex); // retorna um novo array que começa do beginIndex e acaba no endIndex
	// Object/Hash/Dictionary functions
		.hasOwnProperty(param1) // retorna true / false consoante o param1 existe / não existe como propriedade
		delete {a: 1, b: "b"}[param1] // delete NÃO É uma function!! remove o par propriedade: valor 

// Criar/Declarar variaveis

	var a;
	let b;
	const c;
	d = 1; // ISTO NUNCA SE FAZ! Se não se usar o var/let/const, estamos a criar uma variavel Global

// Atribuir valor a variavis

	a = 1;
	a = "A"
	a = true
	a = [1,2,3,"A","B", [1,2], {a: 1, b: "b"}]
	a = {
		a: 1,
		b: "b",
		c: [1,2,3]
	}
	a = someFunction() // a fica igual ao retorno da someFunction

// Aceder a valores de variaveis
	//Aceder a valores de Arrays
		a = [1,2,3,4] // Tendo este array
		a[1] // Dá o valor 2
		a[3] // Dá o valor 4
	//Aceder a valores de Objectos/Hash/Dictionary
		a = {
			a: 1, // a["a"] - dá o valor 1
			b: "b", // a["b"] - dá o valor "b"
			c: [ //a ["c"] - dá o Array todo
				{ // a["c"][0] - dá o Object/Hash/Dictionary da posição 0 do array
					a: 1, // a["c"][0]["a"] - dá 1
					b: "b" // a["c"][0]["b"] - dá "b"
				},
				{	// a["c"][1] - dá o Object/Hash/Dictionary da posição 1 do array
					a: 1, // a["c"][1]["a"] - dá 1
					b: "b" // a["c"][1]["b"] - dá "b"
				}
			],
			d: { // a["d"] - dá o Object/Hash/Dictionary 
				a: 1, // a["d"]["a"] - dá 1
				b: "b" // a["d"]["b"] - dá "b"
			}
		}
// Operadores
    // = += -=
        a = 1 // atribui o valor 1 à variavel <a>
        a[0] = 1 // atribui o valor 1 à posição 0 do array( [0] ) ou à propriedade 0 do Objectos/Hash/Dictionary( {0: 1} )
        a["propriedade"] = 1  // atribui o valor 1  à propriedade "propriedade" do Objectos/Hash/Dictionary( {"propriedade": 1} )
        a = b // variavel <a> fica igual ao valor da variavel <b>
        
        a += 1 // Soma 1 ao valor da variavel <a> e guarda o resultado na variavel <a>
        a[0] += 1 // Soma 1 ao valor na posição 0 do array ou à propriedade 0 do Objectos/Hash/Dictionary e guarda o resultado nesse mesmo sitio
        
        a["propriedade"] -= 1  // Subtrai 1 ao valor na propriedade "propriedade" do Objectos/Hash/Dictionary e guarda o resultado no nesse mesmo sitio
        a -= b // Subrai o valor da variavel <b> ao valor da variavel <a> e guarda o resultado na variavel <a>
        //Nota extra
            a = "xpto" // string
            a += 1 // a varaivel <a> fica com a string "xpto1" Isto funciona porque o operador + tanto pode ser usado para somar Numbers como para juntar Strings
            a -= 1 // Dá erro porque não dá para subtrair 1 a uma String
    // == != && || ! < > <= >=
        //Este operadores lógicos retornam sempre um valor boolean
            a == 1 // Se o valor da variavel <a> for igual a 1, retorna true, senão retorna false
            a != 1 // Se o valor da variavel <a> for diferente de 1, retorna true, senão retorna false
            a && b // se o <a> for true e <b> for true, returna true, senão retorna false. Têm de ser os 2 true
            a || b // se o <a> for true ou <b> for true, returna true, senão retorna false. Basta 1 ser true
            !(1 == 1) // 1 é igual a 1, logo retorna true, depois negamos com !, passa a retorna false
            a < b // Se <a> for menor que <b>, retorna true, senão retorna false
            a > b // Se <a> for maior que <b>, retorna true, senão retorna false
            a <= b  // Se <a> for menor ou igual que <b>, retorna true, senão retorna false
            a >= 2  // Se <a> for maior ou igual a 2, retorna true, senão retorna false
        // Nota
            // Podem juntar varios operadores logicos ex:
            var i = 1
            var j = 2
            var str = "a"
            var array = [1,2,"a"]
            if( i != j || array[i] == j && array.length > 3) // Isto lê se true || (true && false), que retorna true mas 
            if( (i != j || array[i] == array[j])  && array.length > 3) // Isto lê se (true || false) && false, que retorna false
        
// Condições
	if( a == b && a <= 1 || b != c ) {

	} else if(a != b || a > 1 && !(b == c) ){

	} else {
		
	}

// Criar functions
	function doSomething(param1, param2){
		let someVar
		// Esta function recebe 2 parametros, logo tem de raíz duas variaveis
		return someVar // Sem o return a function devolve undefined, o que está certo, nem todas as functions precisam de devolver coisas
	}
    // return usage
        return 1
        return "a"
        return someVar
        return someFunction(someVar)
        return a == b
        return a == b ? 1 : "some String"
        return // podem fazer return sem nada
// Ciclos
    for(let i = 0; i < someVar; i++){
        
    }
    for(let i = someVar; i >= 0; i--){
        
    }
    while(someVar != someOtherVar){
        
        someVar = someOtherVar;
    }
    // Statments
        continue; // Passa para a proxima iteração sem excutar as linhas abaixo
        break; // Termina abruptamente o ciclo sem excutar mais nada desse ciclo
