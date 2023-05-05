                                            RUTAS

	BulkDB

Alojar todos los vidojuegos a la BD Postgres
GET --> https://deploy-backend-pf.onrender.com/games/createBulkDB


	GAMES
Extrae todos los video juegos de la BD postgres
GET -->  https://deploy-backend-pf.onrender.com/games	


Extrae el video juego por nombre de la BD postgres
GET --> https://deploy-backend-pf.onrender.com/games?name=Tomb Raider (2013)


Extrae el video juego por ID de la BD postgres
GET --> https://deploy-backend-pf.onrender.com/games/19710

Elimina un video juego pasandole el ID
DELETE --> https://deploy-backend-pf.onrender.com/games/19710


Actualiza un video juego
PUT --> https://deploy-backend-pf.onrender.com/games/update/19710
Se le deve pasar por body la siguiente estructura
{
        "id": "19710",
        "name": " ensayo put",
        "released": "2013-09-17",
        "rating": 4,
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ],
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "genre": [
            "Action",
            "Adventure"
        ]
    }


Agregar un nuevo video juego
POST --> https://deploy-backend-pf.onrender.com/games
Se le deve pasar por body la siguiente estructura

{
	"id": 19710,
        "name": " Prueba post",
        "released": "2013-09-17",
        "rating": 4,
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ],
        //"image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "genre": [
            "Action",
            "Adventure"
        ]
    }




	GENEROS


Obtener Generos

GET --> https://deploy-backend-pf.onrender.com/genres


