<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <!-- link to the CSS file -->
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
    <div class="wrapper">
        <header>Login Form</header>
        <form>
            <div class="field email">
                <div class="input-area">
                    <input type="email" placeholder="Email">
                    <i class="icon fas fa-envelope"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email is not valid</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password" placeholder="Password">
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="submit-btn">
                <button type="submit"><h3>Login</h3></button>
            </div>
            <div class="have-account" style="padding-top: 10px;">
                <a href="#">Don't have an account? Register</a>
            </div>
        </form>
    </div>

    <!-- Correct link to the JS file -->
    <script src="{{ asset('js/login.js') }}"></script>
</body>
</html>
