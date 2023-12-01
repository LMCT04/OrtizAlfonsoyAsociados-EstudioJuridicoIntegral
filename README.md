# Ortiz Alfonso & Asociados - Estudio Juridico Integral

Landing page de un estudio juridico con formularios, con el fin de dar a conocer el servicio y facilitar el contacto entre el servicio y el cliente, facilitando informacion segun cada caso.
El proyecto de pagina web incluye:
  -responsive web para celulares y PC de escritorio
  -formulario que envia la informacion directo al correo electronico del estudio juridico
  
Este proyecto fue creado en base a:
  React.js
  CSS6
  JavaScript
  Node.js
  Mui Components (libreria de estilos)
  Formspree (maneja de formularios)

Los formularios son controlados, la obligatoriedad de commpletar los campos pedidos y, segun el caso, el tipo de dato q se pide.


<p2> Modos de uso </p2>
<p3> Visualizacion de prueba </p3>

La version para visualizar la pagina es el siguiente Link: 

https://ortiz-alfonso-and-asociados.onrender.com

*IMPORTANTE* no completar los formularios

<p3> Modo de Prueba </p3>

Debera usted descargar el proyecto de la rama "CodeSecurity". Al hacerlo debera seguir los siguientes pasos

1-  Debera crear una cuenta en la pagina oficial de formspree  'https://formspree.io/' y elegir un plan. (el plan FREE de 50 consultas por mes)

2-  Luego cree un proyecto y en la pestaña de 'integration' le proporcionaran una clave para insertar en el codigo. Se usara el correo con el cual se registro o el que usted quiera, esto lo podra ver en la pestaña de 'Settings' en el apartado 'Target Email'

3-  Crear un archivo en la direaccion './client', y lo llamara 'config.js'. Alli usted escribira el sigueinte codigo y reemplazara el CLAVE_AQUI por la clave que le proporciono Formspree :
      const config = {
          FormsApiKey: "CLAVE_AQUI",
      };

4-  Luego podra inciar el proyecto con un 'npm start' desde './client'. Ahora podra probar los formularios y le llegaran a su Email que haya designado anteriormente




