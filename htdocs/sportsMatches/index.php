<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . './vendor/autoload.php';

$app = AppFactory::create();

function getDB(){
    $dbhost = "localhost";
    $dbname = "sportsMatches";
    $dbuser = "kaeru";
    $dbpass = "12345";
    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname";
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});

$app->get('/consultaDatos', function ($request, $response, $args) {  //Defino los servicios
	try{
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("SELECT datId, datNombre, datApellido, datEdad, datDeporte, datImagen FROM datos");//Consulta
		$sth->execute(); //Ejecutamos la consulta
		$test = $sth->fetchAll(PDO::FETCH_ASSOC);//Guardar los resultados de la consulta
		//Verificar si se ha cargado algo  

        if($test){
			$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
			$db = null;//Cerrar la conexion con la base de datos
		}
		else{
			$response->getBody()->write('{"error":"error"}');
		}
    }catch(PDOException $e){
			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
		}
    return $response
    ->withHeader('Content-Type', 'application/json');
});


$app->post('/removeDatos', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("DELETE FROM datos
							 WHERE datId = ?");//Insertamos información
        $sth->execute(array($data['datId'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
		}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->post('/insertDatos', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("INSERT INTO datos
							 (datNombre, datApellido, datEdad, datDeporte, datImagen)
							 VALUES (?, ? ,? ,?, ?)");//Insertamos información
        $sth->execute(array($data['datNombre'], $data['datApellido'], $data['datEdad'], $data['datDeporte'], $data['datImagen'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
		$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
	}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->post('/updateDatos', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("UPDATE datos
							 SET datNombre = ?, datApellido = ?, datEdad = ?, datDeporte = ?, datImagen = ?
							 WHERE datId = ?");//Insertamos información
        $sth->execute(array($data['datNombre'], $data['datApellido'], $data['datEdad'], $data['datDeporte'], $data['datImagen'], $data['datId'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
		$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
	}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->get('/consultaParques', function ($request, $response, $args) {  //Defino los servicios
	try{
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("SELECT id_parque, nombre_parque, direccion_parque, barrio_parque, deportes_parque, foto_parque FROM parques");//Consulta
		$sth->execute(); //Ejecutamos la consulta
		$test = $sth->fetchAll(PDO::FETCH_ASSOC);//Guardar los resultados de la consulta
		//Verificar si se ha cargado algo  

		if($test){
			$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
			$db = null;//Cerrar la conexion con la base de datos
		}
		else{
			$response->getBody()->write('{"error":"error"}');
		}
	}catch(PDOException $e){
			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
		}
	return $response
	->withHeader('Content-Type', 'application/json');
});

$app->post('/removeParques', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("DELETE FROM parques
							 WHERE id_parque = ?");//Insertamos información
        $sth->execute(array($data['id_parque'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
		$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
	}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->post('/insertParques', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("INSERT INTO parques
							 (nombre_parque, direccion_parque, barrio_parque, deportes_parque, foto_parque)
							 VALUES (?, ? ,? ,?, ?)");//Insertamos información
        $sth->execute(array($data['nombre_parque'], $data['direccion_parque'], $data['barrio_parque'], $data['deportes_parque'], $data['foto_parque'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
		$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
	}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->post('/updateParques', function ($request, $response, $args) {  //Defino los servicios  $app->post('/updateVeces', function ($request, $response)
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("UPDATE parques
							 SET nombre_parque = ?, direccion_parque = ?, barrio_parque = ?, deportes_parque = ?, foto_parque = ?
							 WHERE id_parque = ?");//Insertamos información
        $sth->execute(array($data['nombre_parque'], $data['direccion_parque'], $data['barrio_parque'], $data['deportes_parque'], $data['foto_parque'], $data['id_parque'])); //Sustituimos y ejecutamos la consulta
		$response->getBody()->write('{"error":"ok"}'); //Cuando la conexión halla terminado
		
	}catch(PDOException $e){
		
		$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
	}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->run();