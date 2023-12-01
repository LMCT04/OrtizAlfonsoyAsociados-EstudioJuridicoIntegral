# Ortiz Alfonso & Asociados - Estudio Jurídico Integral

Landing page de un estudio jurídico con formularios, con el fin de dar a conocer el servicio y facilitar el contacto entre el servicio y el cliente, proporcionando información según cada caso. El proyecto de página web incluye:

- Responsive web para celulares y PC de escritorio
- Formulario que envía la información directo al correo electrónico del estudio jurídico

Este proyecto fue creado en base a:

- React.js
- CSS6
- JavaScript
- Node.js
- Mui Components (librería de estilos)
- Formspree (manejo de formularios)

Los formularios son controlados, con la obligatoriedad de completar los campos pedidos y, según el caso, el tipo de dato que se pide.

## Modos de uso

### Visualización de prueba

La versión para visualizar la página es el siguiente [Link](https://ortiz-alfonso-and-asociados.onrender.com).

*IMPORTANTE* No completar los formularios.

### Modo de Prueba

Deberá descargar el proyecto de la rama "CodeSecurity". Al hacerlo, deberá seguir los siguientes pasos:

1. Deberá crear una cuenta en la página oficial de Formspree [https://formspree.io/](https://formspree.io/) y elegir un plan (el plan FREE de 50 consultas por mes).

2. Luego, cree un proyecto y en la pestaña de 'Integration' le proporcionarán una clave para insertar en el código. Se usará el correo con el cual se registró o el que usted prefiera. Esto lo podrá ver en la pestaña de 'Settings' en el apartado 'Target Email'.

3. Cree un archivo en la dirección './client' y llámelo 'config.js'. Allí, escribirá el siguiente código y reemplazará el `CLAVE_AQUI` por la clave que le proporcionó Formspree:

    ```javascript
    const config = {
        FormsApiKey: "CLAVE_AQUI",
    };
    ```

4. Luego, podrá iniciar el proyecto con un 'npm start' desde './client'. Ahora podrá probar los formularios y le llegarán a su email que haya designado anteriormente.





