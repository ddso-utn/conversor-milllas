# ¿Qué es un componente de react?

## ¿Qué hace?

1. escuchar y reaccionar a eventos (javascript) => .js
2. ejecutar lógica de dominio (javascript)  => .js
3. generar un nuevo fragmento (porción, "cachito") de vista (html & css) .... =>
    .jsx:
      - es una combinación de javascript y HTML
      - si bien podemos poner cualquier código HTML y JS, ...
      - ...típicamente vamos a usarlos para definir componentes de react


## ¿Cómo se compone?


- Se define a partir de una función, pero no es cualquier función
- Sus nombres empiezan con mayúsculas
- Retorna HTML que representa al "nuevo" fragmento
- El HTML puede incluir a otros componentes
- O bien no toma parámetros o bien toma uno sólo, de tipo diccionario y llamado `props` (a ver más adelante)


## ¿Qué nos aporta?

- Permite anidamiento y reutilización