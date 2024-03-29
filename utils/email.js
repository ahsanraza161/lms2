const email = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Approved</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            text-align: center;
        }

        p {
            color: #666;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .btn {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
        }
        a.btn{
            color:#fff;
        }

        .btn:hover {
            background-color: #0056b3;
            color:#fff;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Your Request Has Been Approved</h1>
        <p>Hello [User],</p>
        <p>We are pleased to inform you that your request has been approved. You can now Login to your dashboard.</p>
        <p>If you have any questions or need further assistance, feel free to contact us.</p>
        <p>Thank you!</p>
        <p><strong>From KIT</strong></p>
        <p style="text-align: center;"><a href="#" class="btn">Visit our website</a></p>
    </div>
</body>

</html>
`;

module.exports = email;
