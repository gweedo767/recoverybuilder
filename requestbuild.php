<?php

//yeah, this needs to go away...

$device = $_GET["device"];
$email = $_GET["email"];
$recoverytype = $_GET["recoverytype"];
$bootimage = $_GET["bootimage"];
$koushtouch = $_GET["koushtouch"];

if(recoverytype == "") $recoverytype = "cwmr";

if($recoverytype == "cwmr") {
	$output = file_get_contents("http://209.114.126.242:8080/job/ClockworkMod%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=$device&EMAIL=$email&BOOTIMAGE=$bootimage&KOUSHTOUCH=$koushtouch");
} elseif($recoverytype == "cm") {
	$output = file_get_contents("http://209.114.126.242:8080/job/Cyanogen%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=$device&EMAIL=$email");
} elseif($recoverytype == "twrp") {
	$output = file_get_contents("http://209.114.126.242:8080/job/TWRP%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=$device&EMAIL=$email");
}
echo "Request sent<br />\n";
echo "Building for " . $device . "<br />\n";
echo "Results will go to " . $email . "<br />\n";

echo $output;

?>
