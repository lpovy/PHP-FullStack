<?php
    function calculateVAT($amount, $vatRate) {
        $vatAmount = $amount * ($vatRate / 100);
        $totalAmount = $amount + $vatAmount;
        return array(
            'vatAmount' => $vatAmount,
            'totalAmount' => $totalAmount
        );
    }

    $amount = $_POST['amount'];
    $vatRate = $_POST['vatRate'];

    $result = calculateVAT($amount, $vatRate);
    echo json_encode($result);
?>