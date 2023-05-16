let carrito = []
let nombre = (prompt ('Ingrese su nombre'));
function cuentasCarrito(numero){
return numero = (numero*0.21 + numero).toFixed(2)
}
alert (`${nombre} bienvenido a nuestra pagina web`);
class Producto{
    constructor (nombre, caracteristicas,precio){
        
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
}
let celulares = []
let notebooks=[];
let tablets =[];
notebooks.push(new Producto ('LENOVO V15','PENTIUM N5030 4GB 1TB 15.6','218289'));
notebooks.push(new Producto ('HP 245 G8', 'AMD ATHLON 3020E 1TB 4GB 14','218499'));
notebooks.push(new Producto ('ASUS X515EA', 'I3 115G4 4GB SSD 256GB 15.6 W11','249990'));
tablets.push(new Producto ('PC BOX','4GB RAM 32GB','40009'));
tablets.push(new Producto ('AMAZON FIRE','8RAM 32GB','60619'));
tablets.push(new Producto ('LENOVO TB-X5','16GB 32GB','90619'));
celulares.push(new Producto ('SAMSUNG GALAXY A04','128 GB 4GB RAM','69999'));
celulares.push(new Producto ('SAMSUNG GALAXY A13','128GB 4GB RAM','89999'));
celulares.push(new Producto ('XIAOMI REDMI NOTE 11','128GB 4GB RAM','100999'));
let usuario = (prompt ('Desea: Comprar o Vender productos').toLocaleLowerCase())
if(usuario === 'comprar'){
let seleccion = prompt((`¿Qué producto desea comprar?
Notebooks
Tablets
Celulares`).toLocaleLowerCase())
comprador(seleccion)
}else if(usuario === 'vender'){
vendedor()
}


function comprador(seleccion){
    switch(seleccion){
        case 'notebooks':
            let todasLasNotebooks = notebooks.map((producto)=>
                `
                 --NOMBRE: ${producto.nombre} CARACTERISTICAS: ${producto.caracteristicas} PRECIO: ${producto.precio}--`
            );
          let seleccionNotebook = prompt((`Seleccione el producto escribiendo el nombre ${todasLasNotebooks}`)).toLocaleUpperCase()
          const NotebookEncontrada = notebooks.find(i=>{
              return i.nombre === seleccionNotebook; 
            });
           let productoSeleccionado= prompt((`El producto seleccionado es: ${NotebookEncontrada.nombre}-- Precio: ${NotebookEncontrada.precio}.
            Desea agregarlo al carrito? SI/NO`)).toLocaleLowerCase();
          if(productoSeleccionado === 'si'){
            carrito.push(NotebookEncontrada);
            comprar();
          }
          else if(productoSeleccionado === 'no'){
            alert('Gracias por visitar nuestra página, vuelva pronto!')
          }
            break;
            case 'tablets':
                let todasLasTablets = tablets.map((producto)=>
                `
                 --NOMBRE: ${producto.nombre} CARACTERISTICAS: ${producto.caracteristicas} PRECIO: ${producto.precio}--`
            );
          let seleccionTablet = prompt((`Seleccione el producto escribiendo el nombre ${todasLasTablets}`)).toLocaleUpperCase()
          const tabletEncontrada = tablets.find(i=>{
              return i.nombre === seleccionTablet; 
            });
           let tabletSeleccionada = prompt((`El producto seleccionado es: ${tabletEncontrada.nombre}-- Precio: ${tabletEncontrada.precio}.
            Desea agregarlo al carrito? SI/NO`)).toLocaleLowerCase();
          if(tabletSeleccionada === 'si'){
            carrito.push(tabletEncontrada);
            comprar();
          } 
          else if(productoSeleccionado === 'no'){
            alert('Gracias por visitar nuestra página, vuelva pronto!')
          }
             break;
                case 'celulares':
                    let todosLosCelulares = celulares.map((producto)=>
                    `
                     --NOMBRE: ${producto.nombre} CARACTERISTICAS: ${producto.caracteristicas} PRECIO: ${producto.precio}--`
                );
              let seleccionDeCelular = prompt((`Seleccione el producto escribiendo el nombre ${todosLosCelulares}`)).toLocaleUpperCase()
              const celularEncontrado = celulares.find(i=>{
                  return i.nombre === seleccionDeCelular; 
                });
               let celularSeleccionado = prompt((`El producto seleccionado es: ${celularEncontrado.nombre}-- Precio: ${celularEncontrado.precio}.
                Desea agregarlo al carrito? SI/NO`)).toLocaleLowerCase();
              if(celularSeleccionado === 'si'){
                carrito.push(celularEncontrado);
                comprar();
              }    
              else if(productoSeleccionado === 'no'){
                alert('Gracias por visitar nuestra página, vuelva pronto!')
              }
                break;  
}
function comprar(){
    let menu = prompt(('Desea comprar su carrito? SI/NO')).toLocaleLowerCase()
    if (menu === 'no'){
        alert((`${nombre} vuelva pronto!!`))
}
else if (menu === 'si'){
    for(const item of carrito){
        alert( `
       ${nombre} SU CARRITO ES:
       Nombre: ${item.nombre}
       PRECIO: ${item.precio}
       IVA: ${(Math.round(item.precio)* 0.21).toFixed(2)}
       TOTAL: ${(Math.round(item.precio) + ((item.precio)* 0.21))}
       `)
       }
}
}
}
function vendedor(){
    let tipoProducto = (prompt ('Escriba el tipo de producto: TABLETS, NOTEBOOKS O CELULARES:').toLocaleLowerCase());
    let name = prompt((`ingrese aquí el nombre del producto:`));
    let caracteristic = prompt((`ingrese aquí las caracteristicas del producto:`))
    let price = prompt((`ingrese aquí el precio del producto:`))
    switch (tipoProducto){
        case 'tablets':
            tablets.push(new Producto (name, caracteristic, price));
            const tabletEncontrada = tablets.find(i=>{
                return i.nombre === name; 
              });
            alert((`Felicitaciones!! tu producto esta a la venta.
            Este es el nuevo producto agregado:
             Nombre: ${tabletEncontrada.nombre} 
             Características: ${tabletEncontrada.caracteristicas}
             Precio:${tabletEncontrada.precio}`))
            break;
            case 'celulares':
                celulares.push(new Producto (name, caracteristic, price));
            const celularEncontrado = celulares.find(i=>{
                return i.nombre === name; 
              });
            alert((`Felicitaciones!! tu producto esta a la venta.
            Este es el nuevo producto agregado:
             Nombre: ${celularEncontrado.nombre} 
             Características: ${celularEncontrado.caracteristicas}
             Precio:${celularEncontrado.precio}`))
            break;
            case 'notebooks':
                tablets.push(new Producto (name, caracteristic, price));
                const notebookEncontrada = notebooks.find(i=>{
                    return i.nombre === name; 
                  });
                alert((`Felicitaciones!! tu producto esta a la venta.
                Este es el nuevo producto agregado:
                 Nombre: ${notebookEncontrada.nombre} 
                 Características: ${notebookEncontrada.caracteristicas}
                 Precio:${notebookEncontrada.precio}`))
            break;
            default:
                alert('Producto no encontrado')
            break;
    }
 }
function main(){
    comprador()
}
