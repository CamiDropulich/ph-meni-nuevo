<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    $destinatario = "99santi@live.com.ar";
    $asunto = "Enviado desde sitio web";

    $mensaje = "Enviado por: " . $nombre . "\r\n";
    $mensaje .= "E-mail: " . $email . "\r\n\n";
    $mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    mail($destinatario, $asunto, $mensaje);
    header("Location: ../mensaje-enviado.html");
?>