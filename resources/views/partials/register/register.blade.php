<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>

    <!-- link to the CSS file -->
    <link rel="stylesheet" href="{{ asset('css/register.css') }}">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

</head>
<body>
    <div class="wrapper">
        <header>Register Form</header>
        <form>
            <div class="field name">
                <div class="input-area">
                    <input type="text" placeholder="Name">
                    <i class="icon fas fa-user"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Name can't be blank</div>
            </div>
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
                    <input type="password" placeholder="Password" id="password">
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">
                    Password must be at least 8 characters long and contain at least one
                    <ul style="padding-left: 30px;">
                        <li>uppercase letter [A - Z]</li>
                        <li>lowercase letter [a - z]</li>
                        <li>number [ 0 - 9 ]</li>
                        <li>special character [!, @, #, $, %, etc. ]</li>
                    </ul>
                </div>
            </div>
            <div class="field confirm-password">
                <div class="input-area">
                    <input type="password" placeholder="Confirm Password" id="confirm-password">
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Passwords do not match</div>
            </div>

            <div class="remember-me">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember Me</label>
            </div>
            <div class="submit-btn">
                <button type="submit"><h3>Register</h3></button>
            </div>
            <div class="have-account" style="padding-top: 10px;">
                <a href="#">Already have an account? Login</a>
            </div>
        </form>
    </div>

    <!-- Correct link to the JS file -->
    <script src="{{ asset('js/register.js') }}"></script>
</body>
</html>
