<?php
    require './inc/db.inc';
    $db_conn = mysql_connect($db_server, $db_id, $db_pw, $db_db);
    mysqli_select_db($db_conn, $db_db);
?>