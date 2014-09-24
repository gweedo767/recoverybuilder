<?php

// this needs to go away too

$devicesRAW = file_get_contents("https://raw.githubusercontent.com/CyanogenMod/hudson/master/cm-build-targets");

$devicesRAW = explode("\n", $devicesRAW);

$devices = array();
foreach($devicesRAW as $d) {
  if($d[0] != "" && $d[1] != "" && $d[0] != "#") {
    $d = preg_replace("/cm\_/", "", $d);
    $d = preg_replace("/\-userdebug/", "", $d);
    array_push($devices, explode(" ", $d));
  }
}

echo json_encode($devices);

?>