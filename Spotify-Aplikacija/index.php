
<?php
// Sukuriame duomenų bazę ir prisijungiame prie jos
$db_servername = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "spotify";

$conn = mysqli_connect($db_servername, $db_username, $db_password, $db_name);

if (!$conn) {
    die("Prisijungimo klaida: " . mysqli_connect_error());
}

// Prisijungimo funkcionalumas
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        // Vartotojas prisijungęs sėkmingai
        session_start();
        $_SESSION["username"] = $username;
        header("Location: index.php");
        exit();
    } else {
        // Klaidos pranešimas
        $login_error = "Neteisingi prisijungimo duomenys";
    }
}

// Atsijungimo funkcionalumas
if (isset($_GET["logout"])) {
    session_start();
    session_destroy();
    header("Location: login.php");
    exit();
}

// Grojaraščių funkcionalumas
if (isset($_SESSION["username"])) {
    $username = $_SESSION["username"];
    $sql = "SELECT * FROM playlists WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
} else {
    // Vartotojas neprisijungęs
    header("Location: login.php");
    exit();
}

?>

<!-- Prisijungimo forma -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="username">Vartotojo vardas:</label>
    <input type="text" name="username"><br>
    <label for="password">Slaptažodis:</label>
    <input type="password" name="password"><br>
    <input type="submit" value="Prisijungti">
</form>

<?php
// Jei yra klaidos pranešimas, jį rodyti
if (isset($login_error)) {
    echo $login_error;
}

// Grojarasčių rodymas
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "Pavadinimas: " . $row["title"] . " - Aprašymas: " . $row["description"] . "<br>";
    }
} else {
    echo "Grojarasčių nėra";
}

// Atsijungimo nuoroda
echo "<br><a href='index.php?logout=true'>Atsijungti</a>";
?>
