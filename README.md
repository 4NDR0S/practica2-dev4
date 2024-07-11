PARA LOGEAR Y RECIBIR UN TOKEN: 

metodo: POST
URL: http://localhost:3000/login

body: 
    {
    "username": "user1",
    "password": "pass1"
    }

»»» con esto reciviremos un token como respuesta :

    ejemplo:
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTcyMDY1NTg2OSwiZXhwIjoxNzIwNjU3NjY5fQ.86VeshwGGjn3vCdefipmtp61iMch16hgrzBQOw5KRIo"
    }



-------------------------------------------------
-------------------------------------------------


PARA VERIFICAR EL TOKEN:

metodo: GET
URL: http://localhost:3000/verify

header:

    autorizacion: [TOKEN]

    ejemplo:

    autorizacion: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTcyMDY1NTg2OSwiZXhwIjoxNzIwNjU3NjY5fQ.86VeshwGGjn3vCdefipmtp61iMch16hgrzBQOw5KRIo



NOTA: Los tokens expiran despues de 30 minutos (cambiar configuracion en el archivo '.env')
